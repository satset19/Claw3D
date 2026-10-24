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
check "ui local, cookie"     200 "$(code -H "Cookie: studio_access=$TOKEN" http://127.0.0.1:8113/office)"
check "adapter http"         200 "$(code http://127.0.0.1:18789/)"
check "adapter ws direct"    OK  "$(probe ws://127.0.0.1:18789)"
check "ws via local proxy"   OK  "$(probe ws://127.0.0.1:8113/api/gateway/ws)"
check "domain, no cookie"    401 "$(code "https://$DOMAIN/")"
check "domain, cookie"       200 "$(code -H "Cookie: studio_access=$TOKEN" "https://$DOMAIN/office")"
check "ws via domain"        OK  "$(probe "wss://$DOMAIN/api/gateway/ws")"

exit $fail
