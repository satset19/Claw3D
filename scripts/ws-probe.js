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
