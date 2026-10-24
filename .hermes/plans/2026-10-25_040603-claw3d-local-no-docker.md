# Plan: Run Claw3D natively on the host (drop Docker), keep kerja.besoksenin.web.id

## Goal

Run the Claw3D UI and the Hermes gateway adapter as systemd user services on the host with Node 20 instead of Docker containers. Keep `https://kerja.besoksenin.web.id` working exactly as it does now: same cookie login, same WebSocket gateway, same data.

## Current context / assumptions

Checked on the host before writing this plan:

- Repo: `/home/harnet/claw3d` (origin `satset19/Claw3D`, upstream `iamlukethedev/Claw3D`). The working tree is clean apart from graphify cache and an untracked older plan.
- Docker today (`docker-compose.yml`, both services use `network_mode: host`):
  - `claw3d`, image `claw3d:local` built from `Dockerfile.source`. Runs `node server/index.js` with `env_file: .env` plus `PORT=8113`. It listens on `127.0.0.1:8113` and `[::1]:8113`. Mounts: `./server/access-gate.js` (read-only) and `./data/openclaw` → `/root/.openclaw`.
  - `claw3d-hermes-adapter`, running an old image ID `6ae77652f207`. Runs `node server/hermes-gateway-adapter.js` with `env_file: .env.hermes` and listens on `127.0.0.1:18789`. Mounts `./data` → `/root/.hermes`.
  - Leftover image `claw3d:prev-prebuilt`.
- Domain routing: the `cloudflared-tunnel` container (host network, managed outside this repo in `~/cloudflared`) maps `kerja.besoksenin.web.id` → `http://localhost:8113`. **Nothing in Cloudflare has to change** as long as the native UI listens on 127.0.0.1:8113.
- Hermes API_SERVER runs on `127.0.0.1:8642` (systemd user unit `hermes-gateway.service`). `.env.hermes` points to it.
- `.env` keys: `PORT=8113`, `NODE_ENV=production`, `NEXT_TELEMETRY_DISABLED`, `NEXT_PUBLIC_GATEWAY_URL` (wss://kerja…/api/gateway/ws), `STUDIO_ACCESS_TOKEN`, `TRUSTED_PROXY=1`, `UPSTREAM_ALLOWLIST=localhost,127.0.0.1`. No quotes, so systemd `EnvironmentFile=` parses it as-is.
- Node versions:
  - `/usr/bin/node` is **v20.20.2**, the same as the container's `node:20-slim`, with `/usr/bin/npm` 10.8.2. Use these.
  - `node` on PATH (`~/.local/bin/node`) is v26 and belongs to Hermes. **Do not use it** for Claw3D.
- Paths the code resolves from HOME:
  - The UI (`server/studio-settings.js`) reads its state dir from `OPENCLAW_STATE_DIR`, falling back to `~/.openclaw`. On the host we set `OPENCLAW_STATE_DIR=/home/harnet/claw3d/data/openclaw`, so the existing `settings.json` (upstream `ws://localhost:18789`) and task-manager data are reused in place.
  - The adapter writes history to `$HOME/.hermes/clawd3d-history.json`. On the host that is `/home/harnet/.hermes/clawd3d-history.json`, which does not exist yet. The current file `data/clawd3d-history.json` gets copied there. That matches upstream's native design.
- `data/clawd3d-history.json` and `data/openclaw/claw3d/task-manager/tasks.json` are **owned by root** because the containers wrote them. They must be chowned to `harnet` (uid 1000) while Docker is still available. The user has no passwordless sudo, so the chown runs through a throwaway container.
- systemd user lingering is enabled (`Linger=yes`), so user services start at boot without a login.
- Scope of "delete docker": only the Claw3D containers, images and the repo files we added (`docker-compose.yml`, `Dockerfile.source`, `Dockerfile.prod`). The upstream-owned `Dockerfile` and `.dockerignore` stay so upstream merges remain clean. Other containers (cloudflared, nginx-proxy, mongodb, cli-proxy-api, money-habbit-server, dozzle) are **not touched**.
- Repo rule (`AGENTS.md`): run `graphify query` before exploring and `graphify update .` after changes.

## Architecture / proposed approach

Build the Next.js app once on the host with `/usr/bin/node` v20 (`npm ci --ignore-scripts` + `npm run build`, with `NEXT_PUBLIC_GATEWAY_URL` baked to the public wss URL). Then run two systemd **user** units that execute the same commands the containers ran: `claw3d.service` (UI on 127.0.0.1:8113) and `claw3d-hermes-adapter.service` (WS on 127.0.0.1:18789). Cloudflared already forwards the domain to `localhost:8113`, so the domain keeps working without any tunnel change.

A smoke-check script is written first and must pass against the Docker setup (the baseline). It must then pass again against the native setup.

## Files touched

| Action | Path |
|---|---|
| create | `scripts/ws-probe.js` |
| create | `scripts/verify-claw3d.sh` |
| create | `deploy/systemd/claw3d.service` |
| create | `deploy/systemd/claw3d-hermes-adapter.service` |
| create | `scripts/deploy-local.sh` |
| delete | `docker-compose.yml`, `Dockerfile.source`, `Dockerfile.prod` |
| keep | `Dockerfile`, `.dockerignore` (upstream), `next.config.mjs` (Next loads `.mjs` before `.ts`, so behaviour is unchanged) |
| host-only (not in git) | `~/.config/systemd/user/claw3d*.service`, `~/.hermes/clawd3d-history.json`, `~/claw3d/.next/` (already gitignored) |

---

## Step-by-step tasks

All commands run from `/home/harnet/claw3d` unless stated otherwise. **Never echo `STUDIO_ACCESS_TOKEN` or `HERMES_API_KEY`.**

### Task 0: Graphify read and baseline snapshot (2 min)

```bash
cd ~/claw3d
graphify query "server/index.js startup env STUDIO_ACCESS_TOKEN gateway proxy hermes adapter" --budget 1500
git status --short
git rev-parse HEAD > /tmp/claw3d-pre-native-head.txt
cp -a data "$HOME/claw3d-data-backup-$(date +%Y%m%d%H%M)"
ls -d ~/claw3d-data-backup-*
```

Expected result: a backup directory is listed. Write down the commit hash; it is the rollback point.

### Task 1: Write the WebSocket probe (3 min)

Create `scripts/ws-probe.js`:

```js
// Usage: T=<studio token> D=<domain> node scripts/ws-probe.js <ws-url>
// Opens the gateway WebSocket, sends a `connect` request, prints OK when a
// successful `res` frame for that request comes back.
const WebSocket = require("ws");

const url = process.argv[2];
if (!url) {
  console.log("usage: node scripts/ws-probe.js <ws-url>");
  process.exit(2);
}

const ws = new WebSocket(url, {
  headers: {
    Cookie: `studio_access=${process.env.T || ""}`,
    Origin: `https://${process.env.D || "localhost"}`,
  },
});

const done = (msg, code) => {
  console.log(msg);
  process.exit(code);
};

setTimeout(() => done("TIMEOUT", 1), 10_000);

ws.on("open", () => {
  ws.send(JSON.stringify({ type: "req", id: "1", method: "connect", params: {} }));
});

ws.on("message", (raw) => {
  let frame;
  try {
    frame = JSON.parse(raw.toString());
  } catch {
    return;
  }
  if (frame.type !== "res" || frame.id !== "1") return;
  if (frame.ok) done("OK", 0);
  done(`NOTOK ${JSON.stringify(frame.error ?? frame).slice(0, 200)}`, 1);
});

ws.on("error", (err) => done(`ERR ${err.message}`, 1));
ws.on("close", (code) => done(`CLOSED ${code}`, 1));
```

### Task 2: Write the smoke-check script (3 min)

Create `scripts/verify-claw3d.sh`:

```bash
#!/usr/bin/env bash
# Smoke checks for Claw3D: UI :8113, adapter :18789, public domain, gateway WS.
# Prints one PASS/FAIL line per check; exit code 1 if any check fails.
set -uo pipefail
cd "$(dirname "$0")/.."

DOMAIN="${CLAW3D_DOMAIN:-kerja.besoksenin.web.id}"
TOKEN="$(grep -E '^STUDIO_ACCESS_TOKEN=' .env | cut -d= -f2-)"
NODE=/usr/bin/node
fail=0

check() {
  local name=$1 expect=$2 got=$3
  if [ "$got" = "$expect" ]; then
    echo "PASS $name ($got)"
  else
    echo "FAIL $name (expected $expect, got $got)"
    fail=1
  fi
}

code() { curl -s -o /dev/null -m 15 -w '%{http_code}' "$@"; }
probe() { T="$TOKEN" D="$DOMAIN" "$NODE" scripts/ws-probe.js "$1" | tail -1; }

check "ui local, no cookie"  401 "$(code http://127.0.0.1:8113/)"
check "ui local, cookie"     200 "$(code -H "Cookie: studio_access=$TOKEN" http://127.0.0.1:8113/)"
check "adapter http"         200 "$(code http://127.0.0.1:18789/)"
check "adapter ws direct"    OK  "$(probe ws://127.0.0.1:18789)"
check "ws via local proxy"   OK  "$(probe ws://127.0.0.1:8113/api/gateway/ws)"
check "domain, no cookie"    401 "$(code "https://$DOMAIN/")"
check "domain, cookie"       200 "$(code -H "Cookie: studio_access=$TOKEN" "https://$DOMAIN/")"
check "ws via domain"        OK  "$(probe "wss://$DOMAIN/api/gateway/ws")"

exit $fail
```

```bash
chmod +x scripts/verify-claw3d.sh
```

### Task 3: Run the smoke check against Docker (baseline) (2 min)

```bash
./scripts/verify-claw3d.sh; echo "exit=$?"
```

Expected result: 8 `PASS` lines and `exit=0`.

If a WS check prints `NOTOK …` while the Docker stack is healthy in the browser, the **probe** is wrong, not the deploy. Adjust the `expect` value for that check to the exact string the baseline returns (for example the whole `NOTOK {...}` text if the proxy answers `connect` itself) and re-run until the baseline is fully green. **Do not continue until the baseline is green.** It is the test the native setup must match.

Commit:

```bash
git add scripts/ws-probe.js scripts/verify-claw3d.sh
git commit -m "chore(scripts): add Claw3D smoke check (UI, adapter, domain, gateway WS)"
```

### Task 4: Fix ownership of data written by root in the containers (2 min)

Docker is still needed for this step, so do it now.

```bash
sg docker -c "docker run --rm -v $HOME/claw3d/data:/d claw3d:local chown -R 1000:1000 /d"
find ~/claw3d/data ! -user harnet
```

Expected result: the `find` prints nothing.

### Task 5: Install dependencies with Node 20 (3-5 min)

The existing `node_modules` was installed with host Node 26. Reinstall it with the runtime that will actually run the app. This is the same flag set as the Docker builder stage.

```bash
cd ~/claw3d
PATH=/usr/bin:/bin /usr/bin/npm ci --ignore-scripts --no-audit --no-fund
/usr/bin/node -e 'console.log(require("next/package.json").version)'
```

Expected result: `npm ci` ends with `added N packages`, and the second command prints `16.1.7`.

The running containers do not use the host `node_modules`, so this has no effect on the live service.

### Task 6: Build Next.js on the host (3-5 min)

```bash
cd ~/claw3d
PATH=/usr/bin:/bin \
NEXT_TELEMETRY_DISABLED=1 \
NEXT_PUBLIC_GATEWAY_URL=wss://kerja.besoksenin.web.id/api/gateway/ws \
/usr/bin/npm run build
cat .next/BUILD_ID; echo
grep -rl 'wss://kerja.besoksenin.web.id/api/gateway/ws' .next/static/chunks | head -1
grep -rlE '127\.0\.0\.1:18789|localhost:18789' .next/static/chunks | head -3
sg docker -c "docker exec claw3d sh -c \"grep -rlE '127\.0\.0\.1:18789|localhost:18789' /app/.next/static/chunks | wc -l\""
```

Expected result:

- The build ends with the route table and no `Error`.
- `BUILD_ID` prints a value.
- The first grep prints one chunk path, which proves the public wss URL is baked in.
- The second grep's file **count** equals the number from the container in the last command. It should normally be `0`. If it is higher than the container's count, stop: a loopback URL was baked in. Check that `.env` still has the wss `NEXT_PUBLIC_GATEWAY_URL` and rebuild.

A warning about both `next.config.mjs` and `next.config.ts` existing is acceptable. `.mjs` wins (Next's `CONFIG_FILES` order is `.js`, `.mjs`, `.ts`), which is the same config the container used.

### Task 7: Write the systemd user units (3 min)

Create `deploy/systemd/claw3d-hermes-adapter.service`:

```ini
[Unit]
Description=Claw3D Hermes gateway adapter (ws 127.0.0.1:18789 -> Hermes API :8642)
After=network-online.target hermes-gateway.service
Wants=network-online.target

[Service]
Type=simple
WorkingDirectory=%h/claw3d
EnvironmentFile=%h/claw3d/.env.hermes
Environment=PATH=/usr/bin:/bin
Environment=NODE_ENV=production
ExecStart=/usr/bin/node server/hermes-gateway-adapter.js
Restart=always
RestartSec=5

[Install]
WantedBy=default.target
```

Create `deploy/systemd/claw3d.service`:

```ini
[Unit]
Description=Claw3D Studio UI (Next.js) on 127.0.0.1:8113 for kerja.besoksenin.web.id
After=network-online.target claw3d-hermes-adapter.service
Wants=network-online.target claw3d-hermes-adapter.service

[Service]
Type=simple
WorkingDirectory=%h/claw3d
EnvironmentFile=%h/claw3d/.env
Environment=PATH=/usr/bin:/bin
Environment=OPENCLAW_STATE_DIR=%h/claw3d/data/openclaw
ExecStart=/usr/bin/node server/index.js
Restart=always
RestartSec=5

[Install]
WantedBy=default.target
```

Notes:

- `HOST` is intentionally **not** set. `server/network-policy.js` then binds `127.0.0.1` and `::1`, matching the current container and passing the loopback check.
- `PORT`, `NODE_ENV`, `TRUSTED_PROXY` and `UPSTREAM_ALLOWLIST` come from `.env`.

Validate the syntax:

```bash
systemd-analyze --user verify deploy/systemd/claw3d.service deploy/systemd/claw3d-hermes-adapter.service; echo "exit=$?"
```

Expected result: `exit=0`. Warnings about the `%h` path not being installed yet are fine. There must be no `Unknown key` or `Invalid` lines.

Commit:

```bash
git add deploy/systemd/
git commit -m "deploy: systemd user units for native Claw3D UI and Hermes adapter"
```

### Task 8: Write the redeploy script (3 min)

This replaces `docker compose build && up -d` for future code changes.

Create `scripts/deploy-local.sh`:

```bash
#!/usr/bin/env bash
# Rebuild and restart native Claw3D (systemd user units).
#   ./scripts/deploy-local.sh                # npm ci + build + restart
#   SKIP_INSTALL=1 ./scripts/deploy-local.sh # build + restart only
set -euo pipefail
cd "$(dirname "$0")/.."

export PATH=/usr/bin:/bin
export NEXT_TELEMETRY_DISABLED=1
export NEXT_PUBLIC_GATEWAY_URL="${NEXT_PUBLIC_GATEWAY_URL:-wss://kerja.besoksenin.web.id/api/gateway/ws}"

/usr/bin/node -v | grep -q '^v20\.' || { echo "need /usr/bin/node v20"; exit 1; }

if [ "${SKIP_INSTALL:-0}" != "1" ]; then
  /usr/bin/npm ci --ignore-scripts --no-audit --no-fund
fi
/usr/bin/npm run build

install -m 644 deploy/systemd/claw3d.service deploy/systemd/claw3d-hermes-adapter.service \
  "$HOME/.config/systemd/user/"
systemctl --user daemon-reload
systemctl --user restart claw3d-hermes-adapter.service claw3d.service
sleep 8
./scripts/verify-claw3d.sh
```

```bash
chmod +x scripts/deploy-local.sh
bash -n scripts/deploy-local.sh && echo SYNTAX_OK
```

Expected result: `SYNTAX_OK`.

Commit:

```bash
git add scripts/deploy-local.sh
git commit -m "chore(scripts): deploy-local.sh to rebuild and restart native Claw3D"
```

### Task 9: Move the adapter history to the host location (1 min)

```bash
mkdir -p ~/.hermes
test -e ~/.hermes/clawd3d-history.json && echo "EXISTS - stop and compare" || cp -p ~/claw3d/data/clawd3d-history.json ~/.hermes/clawd3d-history.json
/usr/bin/node -e 'JSON.parse(require("fs").readFileSync(process.env.HOME+"/.hermes/clawd3d-history.json","utf8")); console.log("JSON_OK")'
```

Expected result: `JSON_OK`.

Do this copy immediately before the cutover (Task 10) so no history written in between is lost.

### Task 10: Cutover: stop the containers and start the units (2 min, about 10 s of downtime)

```bash
cd ~/claw3d
sg docker -c "docker compose -f $HOME/claw3d/docker-compose.yml down"
ss -ltn | grep -E ':(8113|18789)\b' || echo PORTS_FREE

mkdir -p ~/.config/systemd/user
install -m 644 deploy/systemd/claw3d.service deploy/systemd/claw3d-hermes-adapter.service ~/.config/systemd/user/
systemctl --user daemon-reload
systemctl --user enable --now claw3d-hermes-adapter.service claw3d.service
sleep 8
systemctl --user is-active claw3d-hermes-adapter.service claw3d.service
ss -ltnp | grep -E ':(8113|18789)\b'
```

Expected result:

- `PORTS_FREE` is printed.
- `is-active` prints `active` twice.
- `ss` shows `127.0.0.1:8113`, `[::1]:8113` and `127.0.0.1:18789` owned by `node`.

If either unit is not active:

```bash
journalctl --user -u claw3d.service -u claw3d-hermes-adapter.service -n 80 --no-pager
```

Common causes:

- `EADDRINUSE`: a container is still running. Check `docker ps`.
- `EACCES` on `data/...`: Task 4 was skipped.
- Refusal to bind a public host: `HOST` was set somewhere.

### Task 11: Re-run the smoke check against the native setup (1 min)

```bash
./scripts/verify-claw3d.sh; echo "exit=$?"
```

Expected result: the same 8 `PASS` lines as the baseline in Task 3, and `exit=0`.

Then do a manual browser check. Open `https://kerja.besoksenin.web.id`. The existing `studio_access` cookie is still valid because the token is unchanged. The 3D office should load, the agent should appear, and a test chat message should get a Hermes reply. Afterwards, check that the history file is being written:

```bash
stat -c '%y' ~/.hermes/clawd3d-history.json
```

The timestamp should update after the chat.

**Rollback** (only while the Docker images still exist, i.e. before Task 12):

```bash
systemctl --user disable --now claw3d.service claw3d-hermes-adapter.service
sg docker -c "docker compose -f $HOME/claw3d/docker-compose.yml up -d"
```

### Task 12: Delete the Claw3D Docker artifacts (2 min)

Only do this after Task 11 is fully green.

```bash
sg docker -c "docker ps -a --format '{{.Names}}' | grep -E '^claw3d' || echo NO_CLAW3D_CONTAINERS"
sg docker -c "docker image rm claw3d:local claw3d:prev-prebuilt 6ae77652f207"
sg docker -c "docker images --format '{{.Repository}}:{{.Tag}} {{.ID}}' | grep -E 'claw3d|6ae77652' || echo NO_CLAW3D_IMAGES"
```

Expected result: `NO_CLAW3D_CONTAINERS` and `NO_CLAW3D_IMAGES`.

If `6ae77652f207` reports "No such image" because it was already untagged and pruned, that is fine. Do **not** run a global `docker system prune`, because other stacks (cloudflared, nginx, mongodb, …) live on this Docker daemon.

Remove the repo-owned Docker files:

```bash
git rm docker-compose.yml Dockerfile.source Dockerfile.prod
git commit -m "build: drop Docker deploy for Claw3D, run natively via systemd user units"
```

### Task 13: Persistence check (1 min)

```bash
systemctl --user is-enabled claw3d.service claw3d-hermes-adapter.service
loginctl show-user harnet -p Linger
systemctl --user restart claw3d.service && sleep 8 && ./scripts/verify-claw3d.sh | grep -c PASS
```

Expected result: `enabled` twice, `Linger=yes`, and `8`.

### Task 14: Graphify update and final commit (2 min)

```bash
cd ~/claw3d
graphify update .
git add graphify-out
git commit -m "chore(graphify): update graph after native deploy" || echo "nothing to commit"
git log --oneline -6
```

Do **not** `git push` without the user confirming. Pushing goes to the public fork.

### Task 15: Update the Hermes memory note (1 min)

Replace the stale Docker-based Claw3D memory entry with this text:

> Claw3D at ~/claw3d (origin satset19/Claw3D, upstream iamlukethedev). Runs NATIVE via systemd user units (no Docker): claw3d.service UI 127.0.0.1:8113 (kerja.besoksenin.web.id via cloudflared container, STUDIO_ACCESS_TOKEN cookie studio_access, login ?studio_access=), claw3d-hermes-adapter.service ws :18789 -> Hermes :8642 (.env.hermes). Node = /usr/bin/node v20 (not PATH node 26). Redeploy: scripts/deploy-local.sh; smoke: scripts/verify-claw3d.sh. UI state OPENCLAW_STATE_DIR=~/claw3d/data/openclaw; adapter history ~/.hermes/clawd3d-history.json. .env needs UPSTREAM_ALLOWLIST=localhost,127.0.0.1 + TRUSTED_PROXY=1. vitest only *.test.ts; 6 unit tests fail on upstream main.

---

## Tests / validation

This is a deployment change with no app code changes, so "TDD" here means the smoke check is written first:

1. It is written and proven green against Docker (Task 3).
2. It goes red the moment the containers stop (implicitly in Task 10, when the ports are free).
3. It goes green again on the native units (Task 11) and again after a restart (Task 13).

Unit tests are not part of this change. `vitest` behaviour does not depend on how the app is hosted.

## Risks, tradeoffs, open questions

- **Wrong Node binary.** PATH resolves `node` to Hermes's v26. Every command and unit in this plan uses `/usr/bin/node` or `/usr/bin/npm` with `PATH=/usr/bin:/bin`. If NodeSource upgrades `/usr/bin/node` to a different major version, rebuild with `scripts/deploy-local.sh`.
- **No container isolation anymore.** The UI and adapter now run as `harnet` with full access to the home directory, including `~/.hermes`. Spawned-agent workspaces reported by the adapter now point at the real `~/.hermes/workspace-*` paths instead of `/root/.hermes/...` inside the container. The adapter only stores these as strings and does not create the directories, but treat the public domain as sensitive. Keeping `STUDIO_ACCESS_TOKEN` is mandatory; consider adding Cloudflare Access in front of the domain.
- **History location tradeoff.** History moves into Hermes's home directory (`~/.hermes/clawd3d-history.json`), which is upstream's native layout. The alternative is to keep it in the repo by setting `Environment=HOME=%h/claw3d/data/adapter-home` on the adapter unit. That was rejected to avoid a fake HOME.
- **In-place rebuild.** `deploy-local.sh` rebuilds `.next` and `node_modules` while the old process is still serving. Expect a short window of 404s or errors on the page until the restart at the end. That is acceptable for a single-user studio. Zero downtime would need a second build directory, which this plan does not cover.
- **`.next` and `node_modules` on the host.** They take about 1 GB in the repo directory (both are gitignored). The Docker images removed in Task 12 free about 2.8 GB, so disk usage goes down overall. The disk currently has 9.6 GB free.
- **`settings.json` still lists `http://localhost:3000/api/runtime/custom`.** On this host, port 3000 is `money-habbit-server`. That was already the case under Docker host networking, so this plan does not change it. It may be worth checking separately.
- **Open question:** should the local commits be pushed to `origin` (satset19/Claw3D)? This plan only commits locally.
