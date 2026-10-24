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
