import WebSocket from 'ws';
const content = `# Agent Memory

- Sudah terhubung ke Google Workspace (Gmail, Drive, Calendar, Docs, Sheets) via skill google-workspace. OAuth token lokal di /home/harnet/.hermes/google_token.json. Gunakan gws CLI atau skill untuk operasi Drive/Gmail/Calendar.
`;
const ws = new WebSocket('ws://localhost:18789');
ws.on('open', () => {
  ws.send(JSON.stringify({ type:'req', id:'1', method:'connect', params:{} }));
});
ws.on('message', (raw) => {
  const f = JSON.parse(raw.toString());
  if (f.type === 'event') return;
  if (f.id === '1') {
    ws.send(JSON.stringify({ type:'req', id:'2', method:'agents.files.set',
      params:{ agentId:'hermes', name:'MEMORY.md', content } }));
  } else if (f.id === '2') {
    console.log('set:', JSON.stringify(f));
    ws.send(JSON.stringify({ type:'req', id:'3', method:'agents.files.get',
      params:{ agentId:'hermes', name:'MEMORY.md' } }));
  } else if (f.id === '3') {
    console.log('get:', JSON.stringify(f, null, 2));
    ws.close(); process.exit(0);
  }
});
ws.on('error', (e) => { console.error(e.message); process.exit(1); });
