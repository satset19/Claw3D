# Implementation Plan: Claw3D Chat Bubbles, 3D Speech Popup, Multi-Session Management, and Dismissal

## Goal
Enhance Claw3D chat usability by compacting chat bubble and 3D avatar speech sizes, persisting multi-session history with creation and deletion controls per agent, auto-loading chat history on agent switch, and dismissing the chat modal on click-outside.

## Current Context / Assumptions
- Claw3D runs natively on Linux (`/home/harnet/claw3d`), interfacing with Hermes Agent through `claw3d-hermes-adapter` (`server/hermes-gateway-adapter.js`) on port 18789.
- Current chat bubbles in `AgentChatPanel.tsx` and `globals.css` use large padding (up to 1.2rem), expansive line margins (1.35rem in markdown), and wide widths (`max-w-[70ch]`).
- 3D avatar speech popups in `src/features/retro-office/objects/agents.tsx` scale up to 4.6 width, 0.216 font size, and 0.72-1.5 height, dominating character models that are only 0.5-0.9 units tall.
- Chat history exists on disk in `~/.hermes/clawd3d-history.json`, but `OfficeScreen.tsx` fails to trigger `runHistorySyncOperation` upon agent focus, leaving chat transcripts empty until new events arrive.
- The adapter only maps one hardcoded `Main` session per agent; "New session" resets existing history instead of isolating independent session threads, and lacks session deletion and switching.
- Clicking outside the floating chat container in `OfficeScreen.tsx` does nothing because no pointer-down dismiss handler or backdrop listener is registered.

## Architecture / Proposed Approach
1. Visual compaction: Tightly scale down chat bubble CSS padding and markdown margins in `globals.css` and `markdown.css`, while reducing 3D speech bubble geometry, font size, and billboard elevation in `agents.tsx`.
2. Session and History Lifecycle: Extend `server/hermes-gateway-adapter.js` with multi-session tracking per agent, supporting `sessions.list` returning all agent sessions, `sessions.create` for branching new sessions, and `sessions.delete` for safe removal and cleanup.
3. Chat UI and Interaction: Add session selector and session delete buttons to `AgentChatPanel.tsx`, wire automatic history hydration on agent focus in `OfficeScreen.tsx`, and attach a window pointer-down listener on the chat container to dismiss on click-outside.

## Subagent Orchestration Workstream (Max 6 Subagents)
- Subagent 1: Visual Compaction for Chat Panels (`src/app/globals.css`, `src/app/styles/markdown.css`, `src/features/agents/components/AgentChatPanel.tsx`, `src/features/office/components/RemoteAgentChatPanel.tsx`).
- Subagent 2: 3D Avatar Speech Bubble Compaction (`src/features/retro-office/objects/agents.tsx`).
- Subagent 3: Adapter Multi-Session Management (`server/hermes-gateway-adapter.js`).
- Subagent 4: Chat History Auto-Hydration (`src/features/office/screens/OfficeScreen.tsx`).
- Subagent 5: Session UI Controls: Selector & Delete (`src/features/agents/components/AgentChatPanel.tsx`, `src/features/office/screens/OfficeScreen.tsx`).
- Subagent 6: Click-Outside Modal Dismissal & Keyboard Navigation (`src/features/office/screens/OfficeScreen.tsx`).

---

## Step-by-Step Tasks

### Task 1: Compact Chat Bubble Styling in CSS and AgentChatPanel
- Subagent: Subagent 1
- Target files:
  - `/home/harnet/claw3d/src/app/globals.css`
  - `/home/harnet/claw3d/src/app/styles/markdown.css`
  - `/home/harnet/claw3d/src/features/agents/components/AgentChatPanel.tsx`
  - `/home/harnet/claw3d/src/features/office/components/RemoteAgentChatPanel.tsx`

#### Action details:
1. In `src/app/globals.css`, adjust `.ui-chat-assistant-card`:
```css
.ui-chat-assistant-card {
  border: 1px solid var(--chat-assistant-border);
  border-radius: var(--radius-small);
  background: var(--chat-assistant-bg);
  padding: 0.55rem 0.8rem;
  box-shadow: inset 0 1px 0 var(--elev-overlay-1);
}

.dark .ui-chat-assistant-card {
  padding: 0.6rem 0.85rem;
  box-shadow:
    inset 0 1px 0 var(--elev-overlay-2),
    0 1px 2px color-mix(in oklch, var(--foreground) 10%, transparent);
}
```
2. In `src/app/styles/markdown.css`, compact margins between markdown elements inside assistant cards:
```css
.dark .ui-chat-assistant-card .agent-markdown :is(p + p, ul, ol, pre, blockquote, table) {
  margin-top: 0.55rem;
}

.dark .ui-chat-assistant-card .agent-markdown :is(h1, h2, h3, h4, h5, h6) {
  margin: 0.75rem 0 0.35rem 0;
}

.dark .ui-chat-assistant-card .agent-markdown li + li {
  margin-top: 0.2rem;
}
```
3. In `src/features/agents/components/AgentChatPanel.tsx`:
   - Change `ASSISTANT_MAX_WIDTH_DEFAULT_CLASS = "max-w-[62ch]";`
   - In `UserTranscriptCard`, tighten max-width to `max-w-[62ch]`, header padding to `px-2.5 py-1.5`, and text body to `px-3 py-2 text-[12px] leading-normal`.
4. In `src/features/office/components/RemoteAgentChatPanel.tsx`:
   - Tighten message bubble container at line 127 from `max-w-[85%] px-3 py-2` to `max-w-[78%] px-2.5 py-1.5 text-xs`.

#### Verification command:
```bash
cd /home/harnet/claw3d && npx vitest run tests/unit/chatItems.test.ts
```
Expected output:
```text
✓ tests/unit/chatItems.test.ts (16 tests)
```

---

### Task 2: Compact Font Size and Popup Speech Bubble Over 3D Avatar
- Subagent: Subagent 2
- Target file: `/home/harnet/claw3d/src/features/retro-office/objects/agents.tsx`

#### Action details:
1. In `src/features/retro-office/objects/agents.tsx`:
   - Update `speechBubbleWidth` calculation (lines 650-652):
   ```typescript
   const speechBubbleWidth = activeSpeechBubble
     ? Math.min(2.7, Math.max(1.15, 0.95 + speechBubbleTextLength * 0.011))
     : 0.3;
   ```
   - Update padding and max width (lines 653-658):
   ```typescript
   const speechBubblePaddingX = activeSpeechBubble ? 0.18 : 0.05;
   const speechBubblePaddingY = activeSpeechBubble ? 0.14 : 0.05;
   const speechBubbleMaxWidth = Math.max(
     0.2,
     speechBubbleWidth - speechBubblePaddingX,
   );
   const estimatedSpeechCharsPerLine = activeSpeechBubble
     ? Math.max(12, Math.floor(speechBubbleMaxWidth * 9))
     : 8;
   ```
   - Update height calculation (lines 671-673):
   ```typescript
   const speechBubbleHeight = activeSpeechBubble
     ? Math.max(0.38, estimatedSpeechLines * 0.16 + speechBubblePaddingY)
     : 0.18;
   ```
   - Update font size (lines 674-680):
   ```typescript
   const speechBubbleFontSize = activeSpeechBubble
     ? speechBubbleTextLength > 110
       ? 0.112
       : speechBubbleTextLength > 70
         ? 0.122
         : 0.134
     : 0.10;
   ```
   - Adjust speech bubble pointer arrow and elevation (lines 1171-1186):
     - Billboard position from `[0, 1.45, 0]` to `[0, 1.18, 0]`.
     - Pointer geometry `planeGeometry args={[0.13, 0.13]}` instead of `[0.22, 0.22]`.

#### Verification command:
```bash
cd /home/harnet/claw3d && npx tsc --noEmit
```
Expected output: No TypeScript compile errors in `agents.tsx`.

---

### Task 3: Backend Adapter Multi-Session Management (List, Create, Delete, Persist)
- Subagent: Subagent 3
- Target file: `/home/harnet/claw3d/server/hermes-gateway-adapter.js`

#### Action details:
1. Introduce session registry state and persistence in `server/hermes-gateway-adapter.js`:
   - Constant `SESSION_META_FILE = path.join(HOME, ".hermes", "claw3d-sessions.json");`
   - Store session metadata map `sessionMetadataMap = new Map();` with shape:
     `{ key: string, agentId: string, displayName: string, createdAt: number, updatedAt: number }`.
   - On `loadHistoryFromDisk()`, scan keys in `conversationHistory`:
     For any key `agent:${agentId}:${sessionPart}`, if not in `sessionMetadataMap`, populate default entry (`displayName: sessionPart === "main" ? "Main" : sessionPart.replace(/^session_/, "Session ")}`).
   - Implement `saveSessionMetadataToDisk()` saving metadata to `SESSION_META_FILE`.
2. Update `sessions.list` handler:
   ```javascript
   case "sessions.list": {
     const filterAgentId = typeof p.agentId === "string" ? p.agentId.trim() : null;
     const sessions = [];
     for (const agent of agentRegistry.values()) {
       if (filterAgentId && agent.id !== filterAgentId) continue;
       const agentSessionList = getAgentSessions(agent.id);
       for (const sess of agentSessionList) {
         const history = getHistory(sess.key);
         const settings = sessionSettings.get(sess.key) || {};
         sessions.push({
           key: sess.key,
           agentId: agent.id,
           updatedAt: sess.updatedAt || (history.length > 0 ? Date.now() : null),
           displayName: sess.displayName || "Main",
           origin: { label: agent.name, provider: "hermes" },
           model: settings.model || agent.settings?.model || HERMES_MODEL,
           modelProvider: "hermes",
         });
       }
     }
     return resOk(id, { sessions });
   }
   ```
3. Add `sessions.create` handler:
   ```javascript
   case "sessions.create": {
     const agentId = typeof p.agentId === "string" ? p.agentId.trim() : AGENT_ID;
     const displayName = typeof p.displayName === "string" ? p.displayName.trim() : "";
     const sessionKey = `agent:${agentId}:session_${Date.now()}`;
     createSession(agentId, sessionKey, displayName);
     return resOk(id, { ok: true, sessionKey });
   }
   ```
4. Add `sessions.delete` handler:
   ```javascript
   case "sessions.delete": {
     const key = typeof p.key === "string" ? p.key.trim() : "";
     if (!key) return resErr(id, "INVALID_PARAMS", "Session key required.");
     deleteSession(key);
     return resOk(id, { ok: true, deletedKey: key });
   }
   ```
   `deleteSession(key)` clears history from memory and `clawd3d-history.json`, removes metadata, and ensures `agent:${agentId}:main` remains if all sessions were deleted.

#### Verification command:
```bash
cd /home/harnet/claw3d && node -e '
const adapter = require("./server/hermes-gateway-adapter.js");
console.log("Adapter syntax and imports valid.");
'
```
Expected output: `Adapter syntax and imports valid.`

---

### Task 4: Auto-Hydrate Chat History on Agent Select in OfficeScreen
- Subagent: Subagent 4
- Target file: `/home/harnet/claw3d/src/features/office/screens/OfficeScreen.tsx`

#### Action details:
1. Update `focusChatTarget` in `OfficeScreen.tsx`:
   - When focusing an agent, trigger history fetch via `runHistorySyncOperation` for that agent.
   ```typescript
   const focusChatTarget = useCallback(
     (agentId: string) => {
       setSelectedChatAgentId(agentId);
       setChatOpen(true);
       if (!isRemoteOfficeAgentId(agentId)) {
         dispatch({ type: "selectAgent", agentId });
         void requestAgentHistoryRefresh({
           agentId,
           reason: "focus-agent",
         });
       }
     },
     [dispatch, requestAgentHistoryRefresh],
   );
   ```
2. Add `useEffect` in `OfficeScreen.tsx` to automatically load history whenever `focusedChatAgent` or its `sessionKey` changes if transcript is empty:
   ```typescript
   useEffect(() => {
     if (!focusedChatAgent || status !== "connected") return;
     if (focusedChatAgent.outputLines.length === 0) {
       void requestAgentHistoryRefresh({
         agentId: focusedChatAgent.agentId,
         reason: "focus-agent-empty",
       });
     }
   }, [focusedChatAgent?.agentId, focusedChatAgent?.sessionKey, status]);
   ```
3. Connect `onLoadMoreHistory` in `OfficeScreen.tsx` (line 5517) to `requestAgentHistoryRefresh` instead of empty `() => {}`:
   ```typescript
   onLoadMoreHistory={() => {
     void requestAgentHistoryRefresh({
       agentId: focusedChatAgent.agentId,
       reason: "load-more",
       limit: (focusedChatAgent.historyFetchLimit ?? 50) + 50,
     });
   }}
   ```

#### Verification command:
```bash
cd /home/harnet/claw3d && npx tsc --noEmit
```
Expected output: Clean compile without errors.

---

### Task 5: Session List UI, Session Switcher, and Delete Session Button
- Subagent: Subagent 5
- Target files:
  - `/home/harnet/claw3d/src/features/agents/components/AgentChatPanel.tsx`
  - `/home/harnet/claw3d/src/features/office/screens/OfficeScreen.tsx`

#### Action details:
1. In `src/features/agents/components/AgentChatPanel.tsx`:
   - Extend `AgentChatPanelProps` with:
     ```typescript
     sessions?: Array<{ key: string; displayName?: string; updatedAt?: number | null }>;
     onSelectSession?: (sessionKey: string) => void;
     onDeleteSession?: (sessionKey: string) => Promise<void> | void;
     ```
   - In the header row next to "New session":
     - Render a compact `<select>` or custom session selector dropdown:
       Options show `session.displayName || session.key` and formatted date.
       `value={agent.sessionKey}`.
       `onChange={(e) => onSelectSession?.(e.target.value)}`.
     - Next to selector, render a "Delete session" button:
       ```tsx
       {onDeleteSession && sessions && sessions.length > 1 ? (
         <button
           type="button"
           className="nodrag inline-flex items-center rounded border border-red-500/30 bg-red-500/10 px-2 py-0.5 font-mono text-[9px] font-medium text-red-300 transition hover:bg-red-500/20 disabled:cursor-not-allowed disabled:opacity-40"
           aria-label="Delete active session"
           title="Delete current session"
           onClick={() => {
             if (window.confirm("Hapus sesi ini beserta riwayatnya?")) {
               void onDeleteSession(agent.sessionKey);
             }
           }}
         >
           Delete
         </button>
       ) : null}
       ```
2. In `src/features/office/screens/OfficeScreen.tsx`:
   - Maintain `sessionsByAgentId: Record<string, SessionsListEntry[]>`.
   - Pass `sessions={sessionsByAgentId[focusedChatAgent.agentId] ?? []}` to `AgentChatPanel`.
   - Implement `handleSelectSession`:
     Update agent's `sessionKey` in store, and invoke `requestAgentHistoryRefresh` to instantly load that session's messages.
   - Implement `handleDeleteSession`:
     Call `client.call("sessions.delete", { key: sessionKey })`, refresh session list, and switch agent to `agent:${agentId}:main`.
   - Implement `handleNewSession`:
     Call `client.call("sessions.create", { agentId })`, update agent to the newly returned `sessionKey`, refresh session list, and clear current transcript view.

#### Verification command:
```bash
cd /home/harnet/claw3d && npx vitest run tests/unit/
```
Expected output: Unit test suites execute and pass.

---

### Task 6: Click-Outside Modal Dismissal & Keyboard Escape
- Subagent: Subagent 6
- Target file: `/home/harnet/claw3d/src/features/office/screens/OfficeScreen.tsx`

#### Action details:
1. In `src/features/office/screens/OfficeScreen.tsx`:
   - Declare `const chatModalContainerRef = useRef<HTMLDivElement>(null);`
   - Attach `ref={chatModalContainerRef}` to the root chat modal container element (line 5402).
   - Add click-outside and Escape key listener hook:
   ```typescript
   useEffect(() => {
     if (!chatOpen) return;
     const handlePointerDown = (event: PointerEvent) => {
       const target = event.target as Node | null;
       if (!target) return;
       // Dismiss if click is outside chat modal and not on the chat toggle button
       if (
         chatModalContainerRef.current &&
         !chatModalContainerRef.current.contains(target) &&
         !chatToggleButtonRef.current?.contains(target)
       ) {
         setChatOpen(false);
       }
     };
     const handleKeyDown = (event: KeyboardEvent) => {
       if (event.key === "Escape") {
         setChatOpen(false);
       }
     };
     window.addEventListener("pointerdown", handlePointerDown, true);
     window.addEventListener("keydown", handleKeyDown);
     return () => {
       window.removeEventListener("pointerdown", handlePointerDown, true);
       window.removeEventListener("keydown", handleKeyDown);
     };
   }, [chatOpen]);
   ```

#### Verification command:
```bash
cd /home/harnet/claw3d && npx tsc --noEmit
```
Expected output: Zero compilation errors.

---

### Task 7: Full System Verification, Service Restart & Graphify Sync
- Subagent: Subagent 6
- Target files: Full repo

#### Action details:
1. Run local verify suite:
   ```bash
   cd /home/harnet/claw3d && ./scripts/verify-claw3d.sh
   ```
   Verify 8/8 tests pass.
2. Run graphify update as required by global coding instructions:
   ```bash
   cd /home/harnet/claw3d && graphify update .
   ```
3. Restart user services to apply changes:
   ```bash
   systemctl --user restart claw3d-hermes-adapter.service claw3d.service
   ```
4. Perform live smoke test against local endpoint:
   ```bash
   curl -s -o /dev/null -w "%{http_code}\n" http://127.0.0.1:8113/
   ```
   Expected output: `307` or `200`.

---

## Tests / Validation Plan
1. `tests/unit/chatItems.test.ts`: Test message parsing and formatting under compacted styling rules.
2. `tests/unit/sessionManagement.test.ts`: Create unit tests validating session list extraction, session creation, and session deletion logic.
3. `tests/unit/historySyncOperation.test.ts`: Verify history sync dispatches correct transcript entries when agent is switched.
4. `scripts/verify-claw3d.sh`: Full smoke verification (8 pass criteria) ensuring HTTP endpoints, WebSockets, and proxy paths remain healthy.

## Risks, Tradeoffs, and Open Questions
- Deleting an active session: If a user deletes the only session, the adapter will immediately recreate an empty `main` session so the agent never remains orphaned.
- 3D canvas event propagation: Three.js canvas consumes mouse clicks; using `window.addEventListener("pointerdown", ..., true)` ensures clicks on canvas register and close the modal.
- Subagent concurrency: Tasks 1-3 can run concurrently; Task 4 and 5 depend on adapter RPC signatures from Task 3; Task 6 and 7 consolidate integration.
