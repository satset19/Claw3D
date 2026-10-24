import WebSocket from 'ws';
const ws = new WebSocket('ws://localhost:18789');
let step = 0;
ws.on('open', () => {
  ws.send(JSON.stringify({ type:'req', id:'1', method:'connect', params:{} }));
});
ws.on('message', (raw) => {
  const f = JSON.parse(raw.toString());
  if (f.type === 'event') return;
  console.log(JSON.stringify(f, null, 2));
  if (f.id === '1') {
    ws.send(JSON.stringify({ type:'req', id:'2', method:'agents.list', params:{} }));
  } else if (f.id === '2') {
    ws.close();
    process.exit(0);
  }
});
ws.on('error', (e) => { console.error('err', e.message); process.exit(1); });
