# Graph Report - claw3d  (2026-10-25)

## Corpus Check
- 608 files · ~453,611 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 37 file(s) not represented in the graph (top: .glb 25, (none) 6, .service 2)

## Summary
- 5282 nodes · 12373 edges · 196 communities (185 shown, 11 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 201 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `7d269d62`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- useTaskBoardController.ts
- AgentsPageScreen.tsx
- useAgentSettingsMutationController.ts
- toWorld
- OfficeScreen.tsx
- navigation.ts
- GatewayClient.ts
- hermes-gateway-adapter.js
- RetroOffice3D.tsx
- message-extract.ts
- next
- useUsageAnalytics.ts
- presentation.ts
- agentConfig.ts
- AgentAvatarGlbModel
- gatewayRuntimeEventHandler.ts
- runtime/types.ts
- chatSendOperation.ts
- Permissions, Sandboxing, and Workspaces (Studio -> Gateway -> PI)
- furnitureDefaults.ts
- agents.tsx
- settings.ts
- claw3doctor.mjs
- agentPermissionsOperation.ts
- AgentState
- GithubImmersiveScreen.tsx
- remove-gateway.ts
- standup/store.ts
- github.ts
- geometry.ts
- QA Department Spec
- QA Department Spec
- mutationLifecycleWorkflow.ts
- eventTriggers.ts
- floors.ts
- coordinator.ts
- Agent State Model Spec
- devDependencies
- Desk Progression Spec
- Desk Progression Spec
- execApprovalResolveOperation.ts
- deskDirectives.ts
- Office Systems Roadmap
- Multi-Floor Runtime Architecture
- Bulletin Board Spec
- Bulletin Board Spec
- Whiteboard Spec
- Whiteboard Spec
- settings-store.ts
- AgentChatPanel.tsx
- planning.ts
- spotify-jukebox/store.ts
- Meeting Room Workflow Spec
- Meeting Room Workflow Spec
- three
- shared-store.ts
- profile.ts
- cleanup-ux-artifacts.mjs
- constants.ts
- triggers.ts
- Hierarchy And Teams Spec
- Hierarchy And Teams Spec
- colorSemantics.ts
- runtimeChatEventWorkflow.ts
- transcript.ts
- with
- browser-preview/route.ts
- GatewayResponseError
- schema.ts
- normalizeCommandText
- execApprovalRunControlOperation.ts
- StudioSettingsCoordinator
- models.ts
- Claw3Doctor Spec
- Multi-Agent Beta
- voiceTranscription.ts
- office/store.ts
- createPayloadBuilder.ts
- personalityBuilder.ts
- resolveStateDir
- Runtime Profile Architecture
- dependencies
- GatewayBrowserClient.ts
- Office Systems Roadmap
- OfficePhaserCanvas.tsx
- Katalog Referensi Warna Avatar 3D GLB
- AgentState
- settingsRouteWorkflow.ts
- CustomRuntimeProvider
- Step-by-step tasks
- Claw3D + OpenClaw + Tailscale Setup Tutorial
- [0.1.4] - 2026-04-23
- Claw3D — A 3D Workspace for AI Agents
- SmsBoothImmersiveScreen.tsx
- execApprovalControlLoopWorkflow.ts
- agentFleetHydrationDerivation.ts
- SystemSkillsPanel.tsx
- tasks/types.ts
- PI + Chat Streaming (Studio Side)
- custom/provider.ts
- chatSendOperation.ts
- Step-by-step tasks
- agentSettingsMutationWorkflow.ts
- Custom Runtime Provider Spec
- AgentSettingsPanel.tsx
- service.ts
- README.md
- useRunLog.ts
- Universal Backend Plan
- GatewayBrowserClient
- pathfinding.ts
- Architecture
- Custom Provider Reference
- lucide-react
- useOfficeBuilderStore.ts
- companyBuilderGateway.ts
- Code Documentation
- components.json
- .sendConnect
- Skills in OpenClaw + Claw3D
- createAgentBootstrapOperation.ts
- gateway.ts
- Plan: Fix 3D Anime Character Size in Claw3D Retro Office
- compilerOptions
- layout/route.ts
- specialLatestUpdateOperation.ts
- AgentCreateWizardModal.tsx
- presence.ts
- profilePortrait.ts
- gateway-proxy.js
- studioRoute.ts
- ref_node_path
- SkillsMarketplacePanel.tsx
- vitest
- Hermes Gateway Adapter
- Agent Bus Integration
- scripts
- PR89.md
- call/mock.ts
- voiceReply/provider.ts
- chatItems.ts
- useConfigMutationQueue.ts
- AgentEditorModal.tsx
- animePresets.ts
- Creating Skills
- Runtime Profiles
- useOfficeStandupController.ts
- skills/types.ts
- gatewayEventIngressWorkflow.ts
- RunningAvatarLoader
- Code Of Conduct
- Critical Fixes
- execApprovalPausePolicy.ts
- AmbienceSystem.ts
- Claw3D Vision
- Task Manager
- TODO Board
- studioBootstrapOperation.ts
- access-gate.js
- clawd3d-start.sh
- loadStudioSettings
- useStudioOfficePreference.ts
- ws
- 9) Troubleshooting
- gatewayClient.reconnect-recovery.test.ts
- Cursor Cloud specific instructions
- OpenClaw Gateway Skill Contract
- Roadmap
- gatewayBrowserClient.test.ts
- pathfinding.ts
- contact_links
- shared-store-client.ts
- Contributing
- Step-by-step tasks
- dom/index.ts
- GatewayStatus
- multiavatar.ts
- layout.tsx
- custom/route.ts
- multiavatar
- .github/SECURITY.md
- postcss.config.mjs
- useOnboardingState.ts
- useVoiceRecorder.ts
- index.js
- deploy-local.sh
- verify-claw3d.sh
- Top-Level Code Map
- StudioGatewayAdapterType
- glbPaletteTexture.ts
- CompanyBuilderModal.tsx
- settings.ts
- ref_node_https

## God Nodes (most connected - your core abstractions)
1. `vitest` - 189 edges
2. `OfficeScreen()` - 117 edges
3. `react` - 116 edges
4. `AgentState` - 98 edges
5. `GatewayClient` - 82 edges
6. `AgentsPageScreen()` - 68 edges
7. `toWorld()` - 62 edges
8. `RetroOffice3D()` - 50 edges
9. `next` - 39 edges
10. `getItemRotationRadians()` - 37 edges

## Surprising Connections (you probably didn't know these)
- `Task 5 — Update Renderer 3D GLB dengan Palette Tinting & Tone Mapping` --references--> `AgentAvatarGlbModel()`  [INFERRED]
  .hermes/plans/2026-10-25_100000-claw3d-3d-avatar-glb-color-references.md → src/features/agents/components/AgentAvatarGlbModel.tsx
- `Architecture / Proposed Approach` --references--> `AgentAvatarGlbModel()`  [INFERRED]
  .hermes/plans/2026-10-25_110500-claw3d-3d-avatar-custom-color.md → src/features/agents/components/AgentAvatarGlbModel.tsx
- `Current Context / Assumptions` --references--> `AgentAvatarGlbModel()`  [INFERRED]
  .hermes/plans/2026-10-25_110500-claw3d-3d-avatar-custom-color.md → src/features/agents/components/AgentAvatarGlbModel.tsx
- `Task 4 — Teruskan Warna di `AgentAvatarPreview3D.tsx` (targetHeight Tetap)` --references--> `AgentAvatarGlbModel()`  [INFERRED]
  .hermes/plans/2026-10-25_110500-claw3d-3d-avatar-custom-color.md → src/features/agents/components/AgentAvatarGlbModel.tsx
- `Architecture / Proposed Approach` --references--> `AgentAvatarGlbModel()`  [INFERRED]
  .hermes/plans/2026-10-25_120000-fix-claw3d-anime-character-size.md → src/features/agents/components/AgentAvatarGlbModel.tsx

## Import Cycles
- None detected.

## Communities (196 total, 11 thin omitted)

### Community 0 - "useTaskBoardController.ts"
Cohesion: 0.16
Nodes (30): RunRecord, buildActiveRunOptions(), buildCardFromExplicitEvent(), buildCardFromGatewayTask(), buildCardFromSharedTaskRecord(), buildPlaybookCards(), buildStandupSeedCards(), cardTextKey() (+22 more)

### Community 1 - "AgentsPageScreen.tsx"
Cohesion: 0.13
Nodes (27): planAwaitingUserInputPatches(), planPendingPruneDelay(), planPrunedPendingState(), runPauseRunForExecApprovalOperation(), runResolveExecApprovalOperation(), applyCreateAgentBootstrapPermissions(), executeCreateAgentBootstrapCommands(), buildQueuedMutationBlock() (+19 more)

### Community 2 - "useAgentSettingsMutationController.ts"
Cohesion: 0.06
Nodes (63): CRON_ACTION_BUSY_MESSAGE, CronBusyState, CronCreateDeps, isCronActionBusy(), performCronCreateFlow(), resolveCreateAgentId(), resolveCreateErrorMessage(), deleteAgentRecordViaStudio() (+55 more)

### Community 3 - "toWorld"
Cohesion: 0.07
Nodes (69): @react-three/drei, DOOR_LENGTH, DOOR_THICKNESS, SCALE, FURNITURE_ROTATION, getItemBaseSize(), getItemRotationRadians(), resolveItemTypeKey() (+61 more)

### Community 4 - "OfficeScreen.tsx"
Cohesion: 0.04
Nodes (72): trashAgentStateViaStudio(), buildGenerateCompanyPlanPrompt(), buildImproveCompanyBriefPrompt(), HQSidebar(), HQSidebarProps, HQSidebarTab, PRIMARY_TABS, TAB_LABELS (+64 more)

### Community 5 - "navigation.ts"
Cohesion: 0.05
Nodes (48): QA_LAB_END_X, getItemBounds(), buildJanitorActorsForCue(), hashString(), JANITOR_SWEEP_DURATION_MS, JANITOR_TOOLS, pruneExpiredJanitorActors(), astar() (+40 more)

### Community 6 - "GatewayClient.ts"
Cohesion: 0.05
Nodes (49): Reconnects And Retries, Studio Settings (Where Gateway URL/Token Come From), GatewayErrorPayload, GatewayResponseError, EventHandler, formatGatewayError(), GapHandler, GatewayClient (+41 more)

### Community 7 - "hermes-gateway-adapter.js"
Cohesion: 0.06
Nodes (60): activeRuns, activeSendEventFns, ADAPTER_PORT, agentListPayload(), agents, broadcastEvent(), buildDemoReply(), clearHistory() (+52 more)

### Community 8 - "RetroOffice3D.tsx"
Cohesion: 0.05
Nodes (59): SettingsPanel(), Bubble(), PhoneBoothImmersiveScreen(), PhoneCallStep, sourceTone(), StandupImmersiveScreen(), AGENT_RADIUS, ATM_MIGRATION_KEY (+51 more)

### Community 9 - "message-extract.ts"
Cohesion: 0.05
Nodes (84): buildAgentChatItems(), buildFinalAgentChatItems(), normalizeUserDisplayText(), resolveLatestTranscriptTimestampMs(), findLatestHeartbeatResponse(), extractReasoningBody(), hasReasoningSignal(), hasUnclosedThinkingTag() (+76 more)

### Community 10 - "next"
Cohesion: 0.09
Nodes (13): nextConfig, securityHeaders, next, runtime, GET(), isWithinHome(), listPathAutocompleteEntries(), normalizeQuery() (+5 more)

### Community 11 - "useUsageAnalytics.ts"
Cohesion: 0.07
Nodes (61): AnalyticsPanel(), DatePickerField(), formatBudgetInput(), formatDuration(), formatPercent(), openNativeDatePicker(), parseBudgetInput(), StatCard() (+53 more)

### Community 12 - "presentation.ts"
Cohesion: 0.11
Nodes (35): AgentSkillsPanel(), AgentSkillsPanelProps, DISPLAY_CLASSES, DISPLAY_LABELS, FILTERS, resolveHint(), SkillRowFilter, isSkillEnabledForAgent() (+27 more)

### Community 13 - "agentConfig.ts"
Cohesion: 0.08
Nodes (48): How Studio Chooses the Default Workspace Path, Studio -> Gateway: “Create Agent” End-to-End, AgentHeartbeat, AgentHeartbeatActiveHours, AgentHeartbeatResult, AgentHeartbeatSummary, AgentHeartbeatUpdatePayload, AgentSkillsAccessMode (+40 more)

### Community 14 - "AgentAvatarGlbModel"
Cohesion: 0.13
Nodes (14): Architecture / Proposed Approach, Current Context / Assumptions, Goal, Plan: Custom Color Support untuk Avatar 3D di Claw3D, Risks, Tradeoffs, and Open Questions, Step-by-Step Tasks, Task 1 — TDD: Unit Test untuk Glb Palette Texture Generator, Task 2 — Implementasi Modul `glbPaletteTexture.ts` (+6 more)

### Community 15 - "gatewayRuntimeEventHandler.ts"
Cohesion: 0.09
Nodes (47): createGatewayRuntimeEventHandler(), findAgentByRunId(), GatewayRuntimeEventHandler, GatewayRuntimeEventHandlerDeps, resolveRole(), AgentEventPayload, ChatEventPayload, dedupeRunLines() (+39 more)

### Community 16 - "runtime/types.ts"
Cohesion: 0.07
Nodes (27): GatewayConnectionState, GatewayConnectOptions, GatewayGapInfo, createRuntimeProvider(), DEMO_RUNTIME_CAPABILITIES, DemoRuntimeProvider, HERMES_RUNTIME_CAPABILITIES, HermesRuntimeProvider (+19 more)

### Community 17 - "chatSendOperation.ts"
Cohesion: 0.07
Nodes (38): Sending Messages (Browser -> PI via Gateway), DraftFlushIntent, DraftTimerIntent, NewSessionIntent, planDraftFlushIntent(), planDraftTimerIntent(), planNewSessionIntent(), planStopRunIntent() (+30 more)

### Community 18 - "Permissions, Sandboxing, and Workspaces (Studio -> Gateway -> PI)"
Cohesion: 0.12
Nodes (15): Debug Checklist (When Something Feels “Wrong”), Glossary, Hard Enforcement: Filesystem Tool Root Guard, Mental Model (First Principles), OpenClaw (Upstream): Sandbox Semantics, OpenClaw (Upstream): Tool Availability and `workspaceAccess=ro`, OpenClaw (Upstream): What `agents.create` Actually Does, Permissions, Sandboxing, and Workspaces (Studio -> Gateway -> PI) (+7 more)

### Community 19 - "furnitureDefaults.ts"
Cohesion: 0.07
Nodes (51): createFurnitureSignature(), DEFAULT_ART_ROOM_ITEMS, DEFAULT_ATM_MACHINE, DEFAULT_DINING_ITEMS, DEFAULT_FURNITURE, DEFAULT_GYM_ITEMS, DEFAULT_JUKEBOX, DEFAULT_KANBAN_BOARD (+43 more)

### Community 20 - "agents.tsx"
Cohesion: 0.15
Nodes (24): Task 0 — Graphify preflight (read-only), Task 8 — Hook ke `AgentAvatarPreview3D` (editor preview), Task 9 — Hook ke `AgentModel` di scene (`agents.tsx`), AgentAvatarGlbModel(), PreviewFigure(), AvatarFeminineHair(), AvatarLashes(), AvatarLegClothing() (+16 more)

### Community 21 - "settings.ts"
Cohesion: 0.11
Nodes (49): coerceString(), defaultFocusedPreference(), defaultStudioStandupManualEntry(), isRecord(), mergeGatewayConnectionState(), mergeGatewayProfiles(), mergeGatewaySettings(), mergeStudioSettings() (+41 more)

### Community 22 - "claw3doctor.mjs"
Cohesion: 0.12
Nodes (44): checkFail(), checkPass(), checkWarn(), detectHermesModelHealth(), detectOpenClawVersion(), detectWorkspaceState(), formatErrorMessage(), loadDotenvFile() (+36 more)

### Community 23 - "agentPermissionsOperation.ts"
Cohesion: 0.09
Nodes (43): Capabilities Permissions Updates, One-Shot Sandbox Tool Policy Repair, OpenClaw (Upstream): Exec Approvals (Policy + Events), Runtime Tool Groups Used By Capability Updates, Studio Note: Authority Is No Longer Compiled During Create, Studio Post-Create “Permissions” Flows (Not Just Creation), Studio: Where “Permissions” Are Chosen, AgentRuntimeConfigContext (+35 more)

### Community 24 - "AgentState"
Cohesion: 0.16
Nodes (18): asNonEmptyString(), asOptionalString(), asPositiveTimestamp(), asRecord(), parseExecApprovalRequested(), parseExecApprovalResolved(), RequestedPayload, ResolvedPayload (+10 more)

### Community 25 - "GithubImmersiveScreen.tsx"
Cohesion: 0.16
Nodes (19): getDiffLineTone(), GitHubDiffFile, ParsedDiffLine, parseDiffPatch(), FileDiffModal(), FileDiffModalProps, BrowserPreviewState, useBrowserPreview() (+11 more)

### Community 26 - "remove-gateway.ts"
Cohesion: 0.26
Nodes (12): buildSkillRemovalMessage(), escapeForJsonString(), normalizeRequired(), removeSkillViaGatewayAgent(), resolveAllowedRoot(), resolveMainKey(), resolveRemovalWorkspace(), resolveRunId() (+4 more)

### Community 27 - "standup/store.ts"
Cohesion: 0.17
Nodes (19): GET(), PUT(), runtime, advanceStandupMeeting(), startStandupSpeaker(), updateStandupArrivals(), defaultStore(), ensureDirectory() (+11 more)

### Community 28 - "github.ts"
Cohesion: 0.13
Nodes (41): GET(), parsePullRequestNumber(), POST(), ReviewRequestBody, runtime, extractCommandMessage(), getGitHubAuthState(), GitHubAuthState (+33 more)

### Community 29 - "geometry.ts"
Cohesion: 0.11
Nodes (22): CANVAS_H, CANVAS_W, MIN_WALL_LENGTH, SNAP_GRID, WALL_THICKNESS, createWallItem(), ITEM_FOOTPRINT, ITEM_METADATA (+14 more)

### Community 30 - "QA Department Spec"
Cohesion: 0.05
Nodes (40): Agent Interaction Model, Approval-Aware Review, Approvals, Approved, Blocked, Bug Triage, Bulletin Board, Changes Requested (+32 more)

### Community 31 - "QA Department Spec"
Cohesion: 0.05
Nodes (40): Agent Interaction Model, Approval-Aware Review, Approvals, Approved, Blocked, Bug Triage, Bulletin Board, Changes Requested (+32 more)

### Community 32 - "mutationLifecycleWorkflow.ts"
Cohesion: 0.08
Nodes (28): AgentCreateModalSubmitPayload, AgentConfigMutationLifecycleDeps, AgentConfigMutationLifecycleKind, assertMutationKind(), AwaitingRestartPatch, buildConfigMutationFailureMessage(), buildMutatingMutationBlock(), buildMutationSideEffectCommands() (+20 more)

### Community 33 - "eventTriggers.ts"
Cohesion: 0.09
Nodes (34): How Office Motion Works, applyHoldDirective(), BooleanByAgentId, createOfficeAnimationTriggerState(), emptyObject(), isUserLikeChatRole(), LatestDirective, NumberByAgentId (+26 more)

### Community 34 - "floors.ts"
Cohesion: 0.09
Nodes (40): Floor Registry Slice, Immediate Implementation Checklist, Per-Floor Runtime State Slice, Phase 1: Floor Registry, Roster Slice, UI Shell Slice, OfficeFloorNav(), OfficeFloorNavProps (+32 more)

### Community 35 - "coordinator.ts"
Cohesion: 0.07
Nodes (36): fetchJson(), AnalyticsPatch, AvatarsPatch, createStudioSettingsCoordinator(), DeskAssignmentsPatch, fetchStudioSettings(), FocusedPatch, mergeAnalyticsPatch() (+28 more)

### Community 36 - "Agent State Model Spec"
Cohesion: 0.05
Nodes (38): Agent State Model Spec, Blocked, Bulletin Board, Core Principle, Degraded, Desk Progression / Hierarchy, Error, Existing Code Seams (+30 more)

### Community 37 - "devDependencies"
Cohesion: 0.07
Nodes (39): eslintConfig, devDependencies, eslint@^9, eslint-config-next@16.1.6, eslint-config-prettier@^10.1.8, jsdom@^27.4.0, @playwright/test@^1.58.0, tailwindcss@^4 (+31 more)

### Community 38 - "Desk Progression Spec"
Cohesion: 0.05
Nodes (37): Agent Interaction Model, Bulletin Board / Whiteboard, Contractor, Contractor Desk, Core Principle, Desk Progression Spec, Employee, Employee Desk (+29 more)

### Community 39 - "Desk Progression Spec"
Cohesion: 0.05
Nodes (37): Agent Interaction Model, Bulletin Board / Whiteboard, Contractor, Contractor Desk, Core Principle, Desk Progression Spec, Employee, Employee Desk (+29 more)

### Community 40 - "execApprovalResolveOperation.ts"
Cohesion: 0.19
Nodes (20): GatewayClientLike, resolveExecApprovalViaStudio(), SetState, applyApprovalIngressEffects(), ApprovalIngressResult, ApprovalPauseRequest, AutoResumeDispatchIntent, AutoResumePreflightIntent (+12 more)

### Community 41 - "deskDirectives.ts"
Cohesion: 0.09
Nodes (36): cacheIntentSnapshot(), getCachedIntentSnapshot(), intentSnapshotCache, normalizeDirectiveText(), normalizeOfficeCallCallee(), normalizeOfficeTextRecipient(), OfficeCallDirective, OfficeCallPhase (+28 more)

### Community 42 - "Office Systems Roadmap"
Cohesion: 0.05
Nodes (36): Agent State Model, Auth And Enterprise Adoption, Bulletin Board, Candidate Feature Order, `claw3doctor` v1, `claw3doctor` v2, Core Direction, Current Post-Merge Sequence (+28 more)

### Community 43 - "Multi-Floor Runtime Architecture"
Cohesion: 0.06
Nodes (35): 1. Building Shell, 2. Floor Runtime Surface, 3. Shared Building Systems, 4. Cross-Floor Coordination, Building Layers, Building shell, Building Shell vs Floor Scene, Concrete Delivery Plan (+27 more)

### Community 44 - "Bulletin Board Spec"
Cohesion: 0.06
Nodes (34): Agent Interaction, Agent Sessions, Announcements, Authoring Rules, Basic Interactions, Blockers, Bulletin Board Spec, Card Fields (+26 more)

### Community 45 - "Bulletin Board Spec"
Cohesion: 0.06
Nodes (34): Agent Interaction, Agent Sessions, Announcements, Authoring Rules, Basic Interactions, Blockers, Bulletin Board Spec, Card Fields (+26 more)

### Community 46 - "Whiteboard Spec"
Cohesion: 0.06
Nodes (34): Architecture Planning, Authoring Rules, Brainstorming, Bulletin Board, Company Builder / Org Planning, Example: Meeting Notes Template, Example: Planning Session Template, Existing Code Seams (+26 more)

### Community 47 - "Whiteboard Spec"
Cohesion: 0.06
Nodes (34): Architecture Planning, Authoring Rules, Brainstorming, Bulletin Board, Company Builder / Org Planning, Example: Meeting Notes Template, Example: Planning Session Template, Existing Code Seams (+26 more)

### Community 48 - "settings-store.ts"
Cohesion: 0.17
Nodes (20): GET(), isPatch(), PUT(), runtime, sanitizeStudioGatewaySettings(), sanitizeStudioOfficePreference(), sanitizeStudioSettings(), sanitizeTaskBoardPreference() (+12 more)

### Community 49 - "AgentChatPanel.tsx"
Cohesion: 0.08
Nodes (29): AgentChatComposer, AgentChatFinalItems, AgentChatPanel(), AgentChatPanelProps, AgentChatTranscript, AssistantIntroCard, AssistantMessageCard, CHAT_SELECT_STYLE (+21 more)

### Community 50 - "planning.ts"
Cohesion: 0.15
Nodes (24): runCompanyBootstrapOperation(), buildCompanyAgentBlueprints(), buildRoleAgentsMarkdown(), buildRoleHeartbeatMarkdown(), buildRoleIdentity(), buildRoleMemoryMarkdown(), buildRoleSoulDraft(), buildRoleToolsMarkdown() (+16 more)

### Community 51 - "spotify-jukebox/store.ts"
Cohesion: 0.09
Nodes (47): BrowserJukeboxCommand, BrowserJukeboxExecutionResult, executeBrowserJukeboxCommand(), normalize(), parseBrowserJukeboxCommand(), stripPlayPrefix(), base64urlEncode(), buildRedirectUri() (+39 more)

### Community 52 - "Meeting Room Workflow Spec"
Cohesion: 0.06
Nodes (33): Agent Interaction Model, Archived, Bulletin Board Integration, Complete, Core Principle, Decision, Existing Code Seams, Existing Foundation (+25 more)

### Community 53 - "Meeting Room Workflow Spec"
Cohesion: 0.06
Nodes (33): Agent Interaction Model, Archived, Bulletin Board Integration, Complete, Core Principle, Decision, Existing Code Seams, Existing Foundation (+25 more)

### Community 54 - "three"
Cohesion: 0.14
Nodes (7): main(), main(), main(), three, main(), main(), main()

### Community 55 - "shared-store.ts"
Cohesion: 0.15
Nodes (27): DELETE(), errorJson(), GET(), isRecord(), json(), PUT(), isTaskBoardSource(), isTaskBoardStatus() (+19 more)

### Community 56 - "profile.ts"
Cohesion: 0.09
Nodes (36): AgentAvatarCreatorModal(), AgentAvatarCreatorModalProps, AgentAvatarEditorPanel, AgentAvatarEditorPanelHandle, AgentAvatarEditorPanelProps, AgentAvatarPreview3D(), AGENT_AVATAR_BOTTOM_STYLE_OPTIONS, AGENT_AVATAR_CLOTHING_COLOR_OPTIONS (+28 more)

### Community 57 - "cleanup-ux-artifacts.mjs"
Cohesion: 0.12
Nodes (18): __dirname, nextConfig, securityHeaders, cleanupPlaywrightProcesses(), clearDirContents(), ensureDir(), killPattern(), main() (+10 more)

### Community 58 - "constants.ts"
Cohesion: 0.04
Nodes (64): @react-three/fiber, AGENT_SCALE, BUMP_RECOVERY_MS, DESK_STICKY_MS, EAST_HALL_WIDTH, EAST_WING_DOOR_Y, EAST_WING_ROOM_HEIGHT, EAST_WING_ROOM_TOP_Y (+56 more)

### Community 59 - "triggers.ts"
Cohesion: 0.12
Nodes (21): DEFAULT_SKILL_TRIGGER_FALLBACKS_BY_SKILL_KEY, DefaultSkillTriggerFallback, isOfficeSkillTriggerMovementTarget(), OFFICE_INTERACTION_TARGETS, OFFICE_SKILL_TRIGGER_MOVEMENT_TARGETS, OFFICE_SKILL_TRIGGER_PLACE_REGISTRY, OfficeInteractionTargetId, OfficeSkillTriggerAnimationHoldKey (+13 more)

### Community 60 - "Hierarchy And Teams Spec"
Cohesion: 0.06
Nodes (32): Agent Interaction Model, Contractor, Core Principle, Delegation Model, Executive, Existing Code Seams, Future Extensions, Goal (+24 more)

### Community 61 - "Hierarchy And Teams Spec"
Cohesion: 0.06
Nodes (32): Agent Interaction Model, Contractor, Core Principle, Delegation Model, Executive, Existing Code Seams, Future Extensions, Goal (+24 more)

### Community 62 - "colorSemantics.ts"
Cohesion: 0.12
Nodes (24): applyTheme(), getPreferredTheme(), ThemeMode, ThemeToggle(), AGENT_STATUS_BADGE_CLASS, AGENT_STATUS_LABEL, GATEWAY_STATUS_BADGE_CLASS, GATEWAY_STATUS_LABEL (+16 more)

### Community 63 - "runtimeChatEventWorkflow.ts"
Cohesion: 0.08
Nodes (33): RuntimeAgentWorkflowCommand, RuntimeAgentWorkflowInput, planRuntimeChatEvent(), resolveTerminalSeq(), RuntimeChatWorkflowCommand, RuntimeChatWorkflowInput, RuntimeChatWorkflowResult, summarizeThinkingMessage() (+25 more)

### Community 64 - "transcript.ts"
Cohesion: 0.06
Nodes (55): areStringArraysEqual(), ChatHistoryMessage, ChatHistoryResult, collapseNonActiveRunAssistantDuplicates(), GatewayClientLike, HistorySyncCommand, HistorySyncDispatchAction, runHistorySyncOperation() (+47 more)

### Community 65 - "with"
Cohesion: 0.06
Nodes (31): env, IMAGE_BASENAME, REGISTRY, jobs, publish, name, contents, packages (+23 more)

### Community 66 - "browser-preview/route.ts"
Cohesion: 0.09
Nodes (30): getFreePort(), main(), sleep(), BrowserOpenResponse, browserRequest(), BrowserScreenshotResponse, BrowserTab, BrowserTabsResponse (+22 more)

### Community 67 - "GatewayResponseError"
Cohesion: 0.23
Nodes (11): AgentSessionState, applySessionSettingMutation(), ApplySessionSettingMutationParams, buildErrorPrefix(), buildFallbackError(), buildWebchatBlockedMessage(), resolveModelFromPatchResult(), SessionSettingField (+3 more)

### Community 68 - "schema.ts"
Cohesion: 0.11
Nodes (31): asBoolean(), asNumber(), asString(), defaultLayers(), isRecord(), normalizeAmbiencePreset(), normalizeDeskAssignments(), normalizeInteractionKind() (+23 more)

### Community 69 - "normalizeCommandText"
Cohesion: 0.24
Nodes (16): resolveOfficeCallDirective(), applyUserMessageTriggers(), buildPhoneCallDirectiveKey(), buildStableLatestRequestSeed(), buildTextMessageDirectiveKey(), createPhoneCallRequest(), createTextMessageRequest(), hasOtherOfficeDirective() (+8 more)

### Community 70 - "execApprovalRunControlOperation.ts"
Cohesion: 0.10
Nodes (20): ExecApprovalIngressCommand, ExecApprovalPendingSnapshot, planIngressCommands(), planPausedRunMapCleanup(), EXEC_APPROVAL_AUTO_RESUME_WAIT_TIMEOUT_MS, executeExecApprovalIngressCommands(), GatewayClientLike, RunControlDispatch (+12 more)

### Community 71 - "StudioSettingsCoordinator"
Cohesion: 0.19
Nodes (5): StudioSettingsCoordinator, defaultStudioSettings(), resolveDeskAssignments(), StudioSettingsPatch, makeCoordinator()

### Community 72 - "models.ts"
Cohesion: 0.14
Nodes (23): asRecord(), GatewayConnectionStatus, GatewayModelsSyncIntent, RecordLike, resolveGatewayConfigRecord(), resolveGatewayModelsSyncIntent(), resolveSandboxRepairAgentIds(), resolveSandboxRepairIntent() (+15 more)

### Community 73 - "Claw3Doctor Spec"
Cohesion: 0.07
Nodes (29): Auth / Token Checks, Claw3D Settings / Environment, Claw3Doctor Spec, Custom Runtime, First-Pass Scope, Follow-Up Docs, Gateway Reachability, Goal (+21 more)

### Community 74 - "Multi-Agent Beta"
Cohesion: 0.07
Nodes (27): 1. Remote Claw3D Presence Endpoint, 2. Remote OpenClaw Gateway, Connection Modes, Current Beta Limitations, Disable Behavior, Gateway mode connects but messaging fails, How To Connect, Mental Model (+19 more)

### Community 75 - "voiceTranscription.ts"
Cohesion: 0.11
Nodes (23): MAX_VOICE_UPLOAD_BYTES, POST(), runtime, buildVoiceTranscriptionErrorMessage(), inferVoiceFileExtension(), loadOpenClawSdk(), MediaUnderstandingDecision, MediaUnderstandingOutput (+15 more)

### Community 76 - "office/store.ts"
Cohesion: 0.17
Nodes (25): asString(), PUT(), runtime, asString(), GET(), PUT(), runtime, createEmptyOfficeMap() (+17 more)

### Community 77 - "createPayloadBuilder.ts"
Cohesion: 0.13
Nodes (24): addDays(), buildCronJobCreateInput(), CronCreateDraft, formatterCache, getFormatter(), resolveAgentId(), resolveAtSchedule(), resolveEverySchedule() (+16 more)

### Community 78 - "personalityBuilder.ts"
Cohesion: 0.16
Nodes (22): buildIdentityFileDraft(), AgentFilesInput, cleanLabel(), cleanValue(), IDENTITY_PLACEHOLDER_VALUES, isIdentityPlaceholder(), isSectionHeading(), isUserContextPlaceholder() (+14 more)

### Community 79 - "resolveStateDir"
Cohesion: 0.09
Nodes (34): contentTypeFromName(), GET(), runtime, uploadsDir(), ALLOWED_CONTENT_TYPES, ALLOWED_EXTENSIONS, CONTENT_TYPE_BY_EXT, isTextContentType() (+26 more)

### Community 80 - "Runtime Profile Architecture"
Cohesion: 0.08
Nodes (25): 1. `docs: runtime profile architecture`, 2. `feat: claw3doctor`, 3. `refactor: office shell modularization`, 4. `docs: floor schema and builder plan`, 5. `feat: admin floor builder`, Branch Sequence, Core Terms, Custom Runtime Position (+17 more)

### Community 81 - "dependencies"
Cohesion: 0.08
Nodes (24): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, lucide-react@^0.563.0, next@16.1.7, @noble/ed25519@^3.0.0, phaser@^3.90.0, react@19.2.3 (+16 more)

### Community 82 - "GatewayBrowserClient.ts"
Cohesion: 0.11
Nodes (24): base64UrlDecode(), base64UrlEncode(), bytesToHex(), CryptoLike, DeviceAuthEntry, DeviceAuthPayloadParams, DeviceAuthStore, DeviceIdentity (+16 more)

### Community 83 - "Office Systems Roadmap"
Cohesion: 0.08
Nodes (24): Agent State Model, Bulletin Board, Candidate Feature Order, Core Direction, Departments, Design Principles, Desk / CPU Progression, Hierarchy (+16 more)

### Community 84 - "OfficePhaserCanvas.tsx"
Cohesion: 0.15
Nodes (14): phaser, OfficePhaserCanvas(), OfficePhaserCanvasProps, createOfficeBuilderScene(), OfficeBuilderRenderable, createOfficeSceneBridge(), OfficeDebugSettings, OfficeRuntimeSettings (+6 more)

### Community 85 - "Katalog Referensi Warna Avatar 3D GLB"
Cohesion: 0.08
Nodes (23): 1. Aiko — Office Lady / Corporate Lead, 2. Haruto — Store Manager / Smart Casual, 3. Yumi — Schoolkid / Energetic Student, 4. Kenji — Stock Clerk / Tech Specialist, 5. Sakura — Grandma Shopper / Senior Advisor, 6. Ren — Food Courier / Urban Streetwear, 7. Mina — Cashier / Creative Retailer, 8. Takeshi — Shoplifter / Sneaky Rogue (+15 more)

### Community 86 - "AgentState"
Cohesion: 0.09
Nodes (40): executeAgentReconcileCommands(), GatewayClientLike, ReconcileCommand, ReconcileDispatchAction, runAgentReconcileOperation(), buildReconcileTerminalPatch(), ReconcileEligibility, resolveReconcileEligibility() (+32 more)

### Community 87 - "settingsRouteWorkflow.ts"
Cohesion: 0.16
Nodes (24): buildSettingsRouteHref(), InspectSidebarState, parseSettingsRouteAgentIdFromPathname(), parseSettingsRouteAgentIdFromQueryParam(), planBackToChatCommands(), planFleetSelectCommands(), planNonRouteSelectionSyncCommands(), planOpenSettingsRouteCommands() (+16 more)

### Community 88 - "CustomRuntimeProvider"
Cohesion: 0.20
Nodes (8): buildChatFailureMessage(), CustomRuntimeProvider, extractContentText(), isRecord(), normalizeModelChoices(), resolveAssistantTextFromResponse(), resolveDefaultModelId(), resolveOptionalString()

### Community 89 - "Step-by-step tasks"
Cohesion: 0.12
Nodes (15): 1. Pre-flight: confirm graphify + current state (read-only), 2. Write failing unit test, 3. Implement auto-hide state in `OfficeFloorNav.tsx`, 4. Re-run the test, 5. Full test suite — confirm no regressions, 6. Typecheck + lint, 7. Manual sanity (dev server), 8. Update graphify + commit (+7 more)

### Community 90 - "Claw3D + OpenClaw + Tailscale Setup Tutorial"
Cohesion: 0.08
Nodes (25): 0) Architecture and Responsibilities, 10) Security Notes, 1) Prerequisites, 2.1 Install OpenClaw, 2.2 Run onboarding and install daemon, 2.3 Verify Gateway health, 2.4 Get your Gateway token, 2) Install and Start OpenClaw on Machine A (+17 more)

### Community 91 - "[0.1.4] - 2026-04-23"
Cohesion: 0.08
Nodes (23): [0.1.0] - 2026-03-16, [0.1.1] - 2026-03-19, [0.1.2] - 2026-03-20, [0.1.3] - 2026-03-28, [0.1.4] - 2026-04-23, Added, Added, Added (+15 more)

### Community 92 - "Claw3D — A 3D Workspace for AI Agents"
Cohesion: 0.08
Nodes (24): AI Editing Guardrails, Claw3D — A 3D Workspace for AI Agents, Common Setups, Configuration, Contributing, Current Limitations, Demo mode, Documentation (+16 more)

### Community 93 - "SmsBoothImmersiveScreen.tsx"
Cohesion: 0.14
Nodes (19): normalizeText(), POST(), runtime, TextMessageRequestBody, Bubble(), ContactList(), KEYBOARD_ROWS, KeyboardKey() (+11 more)

### Community 94 - "execApprovalControlLoopWorkflow.ts"
Cohesion: 0.15
Nodes (11): AutoResumeIntent, PauseRunIntent, planAutoResumeIntent(), planPauseRunIntent(), resolvePauseTargetAgent(), ApprovalPendingState, AwaitingUserInputPatch, deriveAwaitingUserInputPatches() (+3 more)

### Community 95 - "agentFleetHydrationDerivation.ts"
Cohesion: 0.08
Nodes (39): AgentsListResult, ExecApprovalsSnapshot, GatewayClientLike, hydrateAgentFleetFromGateway(), HydrateAgentFleetResult, isRecord(), parseIdentityNameFromContent(), resolveAgentsListFromHelloSnapshot() (+31 more)

### Community 96 - "SystemSkillsPanel.tsx"
Cohesion: 0.16
Nodes (15): AgentSkillsSetupModal(), AgentSkillsSetupModalProps, READINESS_CLASSES, READINESS_LABELS, SkillSetupMessage, READINESS_CLASSES, READINESS_FILTERS, READINESS_LABELS (+7 more)

### Community 97 - "tasks/types.ts"
Cohesion: 0.11
Nodes (23): TaskBoardPanel(), KanbanImmersiveScreen(), compareCards(), sortTaskBoardCards(), TaskBoardAction, taskBoardReducer(), upsertTaskBoardCard(), formatRelativeTime() (+15 more)

### Community 98 - "PI + Chat Streaming (Studio Side)"
Cohesion: 0.09
Nodes (23): Connect failures, Connect handshake, Debugging Checklist (When Chat “Feels Buggy”), End-To-End Flow (PI Run -> UI), `event: "agent"` payload, `event: "chat"` payload, Exec Approvals In Chat (Related To “PI Runs”), High-Level Network Path (+15 more)

### Community 99 - "custom/provider.ts"
Cohesion: 0.13
Nodes (19): CustomRuntimeProxyInput, fetchCustomRuntimeJson(), normalizeCustomBaseUrl(), probeCustomRuntime(), requestCustomRuntime(), ActiveRunRecord, buildIdentityAgent(), buildSyntheticAgents() (+11 more)

### Community 100 - "chatSendOperation.ts"
Cohesion: 0.18
Nodes (13): buildAgentHandoffInstruction(), GatewayAgentsListResult, GatewayCallLike, resolveLabel(), resolveSessionKeyFromAgentList(), RuntimeAgentHandoffPayload, RuntimeAgentMessagePayload, sendAgentHandoffViaRuntime() (+5 more)

### Community 101 - "Step-by-step tasks"
Cohesion: 0.08
Nodes (24): Architecture / proposed approach, Current context / assumptions, Files touched, Goal, Plan: Run Claw3D natively on the host (drop Docker), keep kerja.besoksenin.web.id, Risks, tradeoffs, open questions, Step-by-step tasks, Task 0: Graphify read and baseline snapshot (2 min) (+16 more)

### Community 102 - "agentSettingsMutationWorkflow.ts"
Cohesion: 0.17
Nodes (13): AgentSettingsMutationContext, AgentSettingsMutationDecision, AgentSettingsMutationDenyReason, AgentSettingsMutationRequest, CronActionKind, GuardedActionKind, isCronActionBusy(), isGuardedAction() (+5 more)

### Community 103 - "Custom Runtime Provider Spec"
Cohesion: 0.09
Nodes (21): Capability Philosophy, Core Principle, Current Branch Status, Custom Metadata Surface, Custom Runtime Provider Spec, Event Model, Goal, Implementation Strategy (+13 more)

### Community 104 - "AgentSettingsPanel.tsx"
Cohesion: 0.18
Nodes (16): AgentInspectHeader(), AgentInspectHeaderProps, AgentSettingsPanel(), AgentSettingsPanelProps, applyTemplateDefaults(), arePermissionsDraftEqual(), createInitialCronDraft(), CRON_TEMPLATE_OPTIONS (+8 more)

### Community 105 - "service.ts"
Cohesion: 0.08
Nodes (43): GET(), PUT(), readGatewayUrl(), runtime, POST(), runtime, buildJiraSearchUrl(), buildSourceState() (+35 more)

### Community 106 - "README.md"
Cohesion: 0.10
Nodes (10): Roadmap, Current Security Limitations, Deployment Notes, Reporting A Vulnerability, Scope, Security Policy, Maintainer Contact Notes, Public Help (+2 more)

### Community 107 - "useRunLog.ts"
Cohesion: 0.24
Nodes (11): findAgentBySessionKey(), findAgentForRunEvent(), resolveLifecyclePhase(), resolveRunTrigger(), RunOutcomeKind, useRunLog(), shouldSuppressPhoneBoothAssistantReply(), isSameSessionKey() (+3 more)

### Community 108 - "Universal Backend Plan"
Cohesion: 0.10
Nodes (20): Capability Matrix, Core Adapter Contract, Event Model, Hermes Provider, High-Value PR Split, Near-Term Guidance For Luke, OpenClaw Provider, PR 1: Runtime Abstraction (+12 more)

### Community 109 - "GatewayBrowserClient"
Cohesion: 0.21
Nodes (3): parseConnectFailedCloseReason(), GatewayBrowserClient, gatewayBrowserDebugLog()

### Community 110 - "pathfinding.ts"
Cohesion: 0.19
Nodes (10): AgentEffectsSystem, AgentEffectsSystemParams, AvatarState, stateColor(), thoughtFromSeed(), THOUGHTS, NavGrid2D, Waypoint (+2 more)

### Community 111 - "Architecture"
Cohesion: 0.10
Nodes (20): 1. Gateway-owned state, 2. Studio-owned local state, 3. Client-server boundary, 4. Browser-gateway boundary, Agent runtime flow, Architecture, Connection flow, Constraints (+12 more)

### Community 112 - "Custom Provider Reference"
Cohesion: 0.10
Nodes (19): Agent Mapping, Capability Profile, Current Implementation Notes, Custom Provider Reference, Event Mapping, Explicit Non-Goals, Goal, Position (+11 more)

### Community 113 - "lucide-react"
Cohesion: 0.15
Nodes (21): canvas-confetti@^1.9.4, canvas-confetti, lucide-react, AgentsStep(), AgentsStepProps, CompanyStep(), CompanyStepProps, CompleteStep() (+13 more)

### Community 114 - "useOfficeBuilderStore.ts"
Cohesion: 0.16
Nodes (17): OfficeBuilderPage(), nextId(), OfficeBuilderPanel(), OfficeBuilderPanelProps, BuilderAction, BuilderHistory, BuilderSelection, BuilderState (+9 more)

### Community 115 - "companyBuilderGateway.ts"
Cohesion: 0.28
Nodes (8): buildHistoryMetadataPatch(), HistoryRequestIntent, HistoryResponseDisposition, resolveHistoryFetchLimit(), resolveHistoryRequestIntent(), resolveHistoryResponseDisposition(), ChatHistoryMessage, runPageHistoryAdapter()

### Community 116 - "Code Documentation"
Cohesion: 0.11
Nodes (19): API Route Inventory, Builder Stack, Code Documentation, Contributor Footguns, Documentation Philosophy, Folder Structure Conventions, How Desk Assignment Works, How To Add A New 3D Object (+11 more)

### Community 117 - "components.json"
Cohesion: 0.11
Nodes (18): aliases, components, hooks, lib, ui, utils, iconLibrary, registries (+10 more)

### Community 118 - ".sendConnect"
Cohesion: 0.32
Nodes (11): buildDeviceAuthPayload(), buildScopedTokenKey(), clearDeviceAuthToken(), loadDeviceAuthToken(), normalizeAuthScope(), normalizeRole(), normalizeScopes(), readDeviceAuthStore() (+3 more)

### Community 119 - "Skills in OpenClaw + Claw3D"
Cohesion: 0.11
Nodes (18): 10.1 Route and navigation model, 10.2 Skills tab data and interactions, 10.3 Mutation wiring from Studio, 10.4 Scope warning shown in Studio, 10) Claw3D UX (current behavior), 11) What recent `.agent/done` plans show, 12) UX redesign constraints that are not optional, 13) Practical mental model for reviewing a Skills screenshot (+10 more)

### Community 120 - "createAgentBootstrapOperation.ts"
Cohesion: 0.22
Nodes (11): CREATE_AGENT_DEFAULT_PERMISSIONS, CreateCompletion, CreatedAgent, resolveBootstrapErrorMessage(), runCreateAgentBootstrapOperation(), buildBootstrapGlobalErrorMessage(), buildBootstrapModalErrorMessage(), buildMissingCreatedAgentMessage() (+3 more)

### Community 121 - "gateway.ts"
Cohesion: 0.29
Nodes (10): createGatewayTask(), deleteGatewayTask(), GatewayTaskCreateInput, GatewayTaskRecord, GatewayTasksListResult, GatewayTaskUpdateInput, isUnsupportedTaskGatewayError(), listGatewayTasks() (+2 more)

### Community 122 - "Plan: Fix 3D Anime Character Size in Claw3D Retro Office"
Cohesion: 0.20
Nodes (9): Architecture / Proposed Approach, Current Context / Assumptions, Plan: Fix 3D Anime Character Size in Claw3D Retro Office, Risks, Tradeoffs, and Open Questions, Step-by-Step Tasks, Task 1: Add Unit Test for Avatar Sizing / Scaling Constants, Task 2: Update Office GLB Avatar Target Height, Task 3: Run Full Test Suite & Validation (+1 more)

### Community 123 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 124 - "layout/route.ts"
Cohesion: 0.18
Nodes (19): fetchRemoteOfficeLayoutSnapshot(), GET(), PUT(), runtime, UseRemoteOfficeLayoutParams, UseRemoteOfficeLayoutResult, deriveRemoteLayoutUrlFromPresenceUrl(), isRecord() (+11 more)

### Community 125 - "specialLatestUpdateOperation.ts"
Cohesion: 0.20
Nodes (12): buildLatestUpdatePatch(), LatestUpdateIntent, LatestUpdateKind, resolveLatestUpdateIntent(), resolveLatestUpdateKind(), ChatHistoryMessage, ChatHistoryResult, createSpecialLatestUpdateOperation() (+4 more)

### Community 126 - "AgentCreateWizardModal.tsx"
Cohesion: 0.12
Nodes (23): AgentCreateWizardModal(), AgentCreateWizardModalProps, buildInitialDraft(), WizardField(), WizardStepId, wizardSteps, WizardTextAreaField(), AgentEditorModal() (+15 more)

### Community 127 - "presence.ts"
Cohesion: 0.06
Nodes (52): GET(), runtime, POST(), runtime, stripRemoteAgentPrefix(), AgentsListResult, POST(), resolveLatestAssistantHistoryText() (+44 more)

### Community 128 - "profilePortrait.ts"
Cohesion: 0.42
Nodes (9): blendHex(), buildAgentAvatarPortraitDataUrl(), buildAgentAvatarPortraitSvg(), buildGlassesSvg(), buildHairSvg(), buildHatSvg(), buildHeadsetSvg(), escapeXml() (+1 more)

### Community 129 - "gateway-proxy.js"
Cohesion: 0.30
Nodes (13): buildErrorResponse(), createFrameRateLimiter(), createGatewayProxy(), hasCompleteDeviceAuth(), hasNonEmptyDeviceToken(), hasNonEmptyPassword(), hasNonEmptyToken(), injectAuthToken() (+5 more)

### Community 130 - "studioRoute.ts"
Cohesion: 0.31
Nodes (5): @playwright/test, createStudioRoute(), DEFAULT_SETTINGS, stubStudioRoute(), StudioSettingsFixture

### Community 131 - "ref_node_path"
Cohesion: 0.07
Nodes (23): main(), parseArgs(), tryReadGatewayTokenFromOpenclawCli(), contents, destPath, repoRoot, isRecord(), LEGACY_STATE_DIRNAMES (+15 more)

### Community 132 - "SkillsMarketplacePanel.tsx"
Cohesion: 0.13
Nodes (25): SkillsMarketplaceModalProps, buildSearchBlob(), FILTER_LABELS, formatInstalls(), formatRating(), getAgentSkillEnabled(), MarketplaceFilter, READINESS_CLASSES (+17 more)

### Community 133 - "vitest"
Cohesion: 0.12
Nodes (6): react, @testing-library/react, vitest, createSkillsReport(), createSkillsReportWithOsIncompatibleBrowser(), ORIGINAL_ENV

### Community 134 - "Hermes Gateway Adapter"
Cohesion: 0.12
Nodes (15): 1. Start Hermes, 2. Configure environment, 3. Start Claw3D and the adapter, 4. Optional all-in-one local startup, ACP status, Architecture, Current limitations, Hermes Gateway Adapter (+7 more)

### Community 135 - "Agent Bus Integration"
Cohesion: 0.12
Nodes (15): Agent Bus Integration, Architecture, Connect Claude Code Hooks, Connect Claw3D, Event Schema, Events Emitted, Gateway Protocol Compatibility, How It Works (+7 more)

### Community 136 - "scripts"
Cohesion: 0.12
Nodes (16): scripts, build, cleanup:ux-artifacts, demo-gateway, dev, dev:https, doctor, e2e (+8 more)

### Community 137 - "PR89.md"
Cohesion: 0.12
Nodes (15): 1. Hermes/runtime stability and reconnect behavior, 2. Truthful backend selection, 3. Runtime seam expansion, 4. Office/runtime alignment, 5. Luke’s findings addressed, Current Operator Status, Included In This PR, Office Systems Note (+7 more)

### Community 138 - "call/mock.ts"
Cohesion: 0.23
Nodes (13): normalizeText(), PhoneCallRequestBody, POST(), runtime, buildMockPhoneCallScenario(), buildPromptText(), buildRecipientReply(), buildSpokenText() (+5 more)

### Community 139 - "voiceReply/provider.ts"
Cohesion: 0.19
Nodes (12): POST(), runtime, VoiceReplyRequestBody, normalizeVoiceReplyText(), useVoiceReplyPlayback(), VoiceReplyPlaybackRequest, normalizeVoiceId(), normalizeVoiceSpeed() (+4 more)

### Community 140 - "chatItems.ts"
Cohesion: 0.10
Nodes (32): AgentChatItem, AgentChatRenderBlock, appendThinkingTraceEvent(), AssistantTraceEvent, BuildAgentChatItemsInput, buildAgentChatRenderBlocks(), extractFirstCodeBlockLine(), extractToolArgSummary() (+24 more)

### Community 141 - "useConfigMutationQueue.ts"
Cohesion: 0.18
Nodes (12): ConfigMutationGateInput, shouldStartNextConfigMutation(), GatewayStatus, observeGatewayRestart(), RestartObservation, ActiveConfigMutation, ConfigMutationKind, mutationRequiresIdleAgents() (+4 more)

### Community 142 - "AgentEditorModal.tsx"
Cohesion: 0.17
Nodes (16): AgentFilesState, useAgentFilesEditor(), UseAgentFilesEditorResult, AGENT_FILE_NAMES, AgentFileName, createAgentFilesState(), isAgentFileName(), PERSONALITY_FILE_LABELS (+8 more)

### Community 143 - "animePresets.ts"
Cohesion: 0.16
Nodes (14): Task 6 — Hapus Reset `imageUrl: null` pada Kontrol Warna di `AgentAvatarEditorPanel.tsx`, AgentAvatarGlbAnimation, CANDIDATES, Props, AnimePresetPicker(), Props, ALLOWED_AVATAR_URL_PREFIXES, ANIME_AVATAR_PRESETS (+6 more)

### Community 144 - "Creating Skills"
Cohesion: 0.14
Nodes (13): 1. Create the skill files, 2. Mirror the files into `src/lib/skills/packaged.ts`, 3. Register the skill in `src/lib/skills/catalog.ts`, 4. Add marketplace presentation metadata, 5. Understand where the files get installed, 6. Keep the example production-ready, 7. Verify your changes, Creating Skills (+5 more)

### Community 145 - "Runtime Profiles"
Cohesion: 0.14
Nodes (13): `claw3d`, Current Profiles, Current Runtime Contract, `custom`, `demo`, `hermes`, `local`, Multi-Agent Message Contract (+5 more)

### Community 146 - "useOfficeStandupController.ts"
Cohesion: 0.22
Nodes (14): everyoneArrived(), expandRange(), getZonedParts(), isMeetingActive(), matchesCronPart(), OfficeStandupController, sameScheduledMinute(), shouldRunNow() (+6 more)

### Community 147 - "skills/types.ts"
Cohesion: 0.09
Nodes (41): MarketplaceMessage, useOfficeSkillsMarketplace(), readGatewayAgentSkillsAllowlist(), resolveRequiredAgentId(), updateGatewayAgentSkillsAllowlist(), normalizeSkillName(), resolveVisibleAgentSkillNames(), setAgentSkillEnabled() (+33 more)

### Community 148 - "gatewayEventIngressWorkflow.ts"
Cohesion: 0.33
Nodes (6): ExecApprovalEventEffects, CronTranscriptIntent, GatewayEventIngressDecision, NO_CRON_DECISION, resolveCronDecision(), resolveGatewayEventIngressDecision()

### Community 149 - "RunningAvatarLoader"
Cohesion: 0.20
Nodes (13): OfficeLoadingFallback(), OfficePage(), readDebugFlag(), GatewayConnectScreen(), GatewayConnectScreenProps, resolveLocalGatewayPort(), box(), RunningAvatarLoader() (+5 more)

### Community 150 - "Code Of Conduct"
Cohesion: 0.33
Nodes (5): Code Of Conduct, Enforcement, Expected Behavior, Our Pledge, Unacceptable Behavior

### Community 151 - "Critical Fixes"
Cohesion: 0.17
Nodes (11): 1. Telemetry Removed, 2. Constant-Time Token Comparison, 3. Auth Rate Limiting, 4. WebSocket Frame Validation, 5. Upstream URL Allowlist, 6. Custom Runtime Proxy Allowlist, 7. Security Headers, 8. Media Route Symlink Rejection (+3 more)

### Community 153 - "AmbienceSystem.ts"
Cohesion: 0.27
Nodes (6): AmbienceSystem, AmbienceSystemParams, resolveZoneBounds(), ZoneBounds, OfficeAmbienceEmitter, OfficeZone

### Community 154 - "Claw3D Vision"
Cohesion: 0.17
Nodes (12): Architecture Direction, Claw3D Vision, Contribution Rules, Core Architecture, Current Priorities, Developer Ergonomics, Long-Term Direction, Relationship to OpenClaw (+4 more)

### Community 155 - "Task Manager"
Cohesion: 0.17
Nodes (11): File format, Matching rules, Required workflow, Response rules, Status rules, Storage location, Task fields, Task Manager (+3 more)

### Community 156 - "TODO Board"
Cohesion: 0.20
Nodes (9): Field rules, File format, Mutation rules, Required workflow, Response style, Storage location, Supported actions, TODO Board (+1 more)

### Community 157 - "studioBootstrapOperation.ts"
Cohesion: 0.14
Nodes (23): executeStudioBootstrapLoadCommands(), executeStudioFocusedPatchCommands(), executeStudioFocusedPreferenceLoadCommands(), GatewayClientLike, runStudioBootstrapLoadOperation(), runStudioFocusedPreferenceLoadOperation(), runStudioFocusedSelectionPersistenceOperation(), runStudioFocusFilterPersistenceOperation() (+15 more)

### Community 158 - "access-gate.js"
Cohesion: 0.36
Nodes (5): createAccessGate(), createRateLimiter(), parseCookies(), resolveClientIp(), safeCompare()

### Community 159 - "clawd3d-start.sh"
Cohesion: 0.44
Nodes (8): find_free_port(), info(), log(), pids_on_port(), port_free(), port_owned_by(), clawd3d-start.sh script, warn()

### Community 160 - "loadStudioSettings"
Cohesion: 0.09
Nodes (42): isSafeAgentId(), POST(), PUT(), resolveAgentStateSshTarget(), RestoreAgentStateRequest, runtime, TrashAgentStateRequest, expandTildeLocal() (+34 more)

### Community 161 - "useStudioOfficePreference.ts"
Cohesion: 0.53
Nodes (5): useStudioOfficePreference(), UseStudioOfficePreferenceParams, defaultStudioOfficePreferencePublic(), resolveOfficePreferencePublic(), StudioOfficePreferencePublic

### Community 162 - "ws"
Cohesion: 0.17
Nodes (4): ws@^8.18.3, ws, ws, ws

### Community 163 - "9) Troubleshooting"
Cohesion: 0.33
Nodes (6): `401` or auth errors from Claw3D, 9) Troubleshooting, Claw3D still cannot connect after token is correct, `EPROTO` or `wrong version number`, Gateway itself is unhealthy, Tailscale URL works nowhere

### Community 164 - "gatewayClient.reconnect-recovery.test.ts"
Cohesion: 0.22
Nodes (4): GatewayBrowserClient, instances, MockClientOptions, MockInstance

### Community 165 - "Cursor Cloud specific instructions"
Cohesion: 0.25
Nodes (7): Agent Instructions, Build, Cursor Cloud specific instructions, Gotchas, Lint, typecheck, and tests, Running the app, Service overview

### Community 166 - "OpenClaw Gateway Skill Contract"
Cohesion: 0.25
Nodes (7): Agent workflow, Authentication model, Channel behavior, OpenClaw Gateway Skill Contract, RPC methods the gateway skill should expose, SOUNDCLAW, Trigger

### Community 167 - "Roadmap"
Cohesion: 0.25
Nodes (8): Already In Progress Or Partially Covered, Before Starting Bigger Work, Good First Contribution Areas, Later, Next, Now, Product Ideas To Reduce OpenClaw Dependency, Roadmap

### Community 169 - "pathfinding.ts"
Cohesion: 0.16
Nodes (19): ASSET_SIZE, astar2D(), BLOCKING_ASSET_IDS, BLOCKING_LAYERS, BLOCKING_TAGS, buildNavGrid2D(), clamp(), findFreeCell() (+11 more)

### Community 170 - "contact_links"
Cohesion: 0.33
Nodes (5): blank_issues_enabled, contact_links, about, name, url

### Community 171 - "shared-store-client.ts"
Cohesion: 0.30
Nodes (10): archiveSharedTaskRecord(), fetchWithTimeout(), isRetryable(), listSharedTaskRecords(), parseResponse(), sleep(), TaskStoreRequestError, upsertSharedTaskRecord() (+2 more)

### Community 173 - "Contributing"
Cohesion: 0.22
Nodes (9): Before you start, Contributing, Local setup, Minimal issue template, Minimal PR template, Pull requests, Reporting issues, Support And Routing (+1 more)

### Community 174 - "Step-by-step tasks"
Cohesion: 0.11
Nodes (18): Architecture / proposed approach, Claw3D — Ganti geometri male procedural dengan model GLB dari Drive, Current context / assumptions, Goal, Risks, tradeoffs, open questions, Step-by-step tasks, Task 10 — Visual calibration (manual, 1 iterasi), Task 11 — Regression: existing unit tests (+10 more)

### Community 175 - "dom/index.ts"
Cohesion: 0.38
Nodes (4): createRafBatcher(), isNearBottom(), RafBatcher, ScrollMetrics

### Community 177 - "multiavatar.ts"
Cohesion: 0.17
Nodes (15): AgentAvatar(), AgentAvatarProps, AgentCreateModal(), AgentCreateModalContent(), AgentCreateModalProps, resolveInitialName(), AVATAR_ACCENTS, AVATAR_FOREGROUNDS (+7 more)

### Community 178 - "layout.tsx"
Cohesion: 0.28
Nodes (6): display, metadata, mono, RootLayout(), sans, SuspenseStreamGuard()

### Community 179 - "custom/route.ts"
Cohesion: 0.33
Nodes (7): CustomRuntimeRequestBody, isRuntimeUrlAllowed(), normalizeMethod(), normalizePathname(), normalizeRuntimeUrl(), POST(), runtime

### Community 190 - "useOnboardingState.ts"
Cohesion: 0.53
Nodes (4): OnboardingStateReturn, readCompleted(), useOnboardingState(), writeCompleted()

### Community 192 - "useVoiceRecorder.ts"
Cohesion: 0.33
Nodes (8): PREFERRED_VOICE_MIME_TYPES, resolvePreferredVoiceMimeType(), resolveVoiceErrorMessage(), resolveVoiceExtension(), stopVoiceStream(), useVoiceRecorder(), VoiceRecorderState, VoiceSendPayload

### Community 193 - "index.js"
Cohesion: 0.21
Nodes (16): selfsigned@^5.5.0, selfsigned, CERT_DIR, CERT_PATH, generateHttpsCert(), KEY_PATH, main(), resolvePathname() (+8 more)

### Community 194 - "deploy-local.sh"
Cohesion: 0.40
Nodes (4): NEXT_PUBLIC_GATEWAY_URL, NEXT_TELEMETRY_DISABLED, PATH, deploy-local.sh script

### Community 196 - "Top-Level Code Map"
Cohesion: 0.29
Nodes (7): `scripts`, `server`, `src/app`, `src/features`, `src/lib`, `tests`, Top-Level Code Map

### Community 199 - "StudioGatewayAdapterType"
Cohesion: 0.40
Nodes (4): SettingsPanelProps, StudioGatewayAdapterType, CURATED_ELEVENLABS_VOICES, CuratedVoiceOption

### Community 202 - "glbPaletteTexture.ts"
Cohesion: 0.33
Nodes (8): applyColorsToPaletteCanvas(), computeRampShades(), CustomAvatarColors, PALETTE_RAMP_COORDINATES, parseHex(), RampDefinition, SHADE_MULTIPLIERS, shadeHex()

### Community 203 - "CompanyBuilderModal.tsx"
Cohesion: 0.13
Nodes (21): CommandModeId, buildRoleAvatarProfile(), CompanyBuilderModal(), CompanyBuilderModalProps, createEmptyRole(), joinCommaList(), parseCommaList(), renderRoleFacts() (+13 more)

### Community 208 - "settings.ts"
Cohesion: 0.07
Nodes (41): useStudioVoiceRepliesPreference(), UseStudioVoiceRepliesPreferenceParams, DEFAULT_REMOTE_OFFICE_SOURCE_KIND, defaultStudioFloorRuntimeState(), defaultStudioStandupJiraConfig(), defaultStudioStandupPreference(), defaultStudioStandupScheduleConfig(), defaultStudioVoiceRepliesPreference() (+33 more)

## Knowledge Gaps
- **3 isolated node(s):** `PATH`, `NEXT_TELEMETRY_DISABLED`, `NEXT_PUBLIC_GATEWAY_URL`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 2128 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **11 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `vitest` to `useTaskBoardController.ts`, `AgentsPageScreen.tsx`, `useAgentSettingsMutationController.ts`, `toWorld`, `OfficeScreen.tsx`, `SkillsMarketplacePanel.tsx`, `GatewayClient.ts`, `RetroOffice3D.tsx`, `useUsageAnalytics.ts`, `presentation.ts`, `useConfigMutationQueue.ts`, `AgentEditorModal.tsx`, `animePresets.ts`, `voiceReply/provider.ts`, `chatSendOperation.ts`, `useOfficeStandupController.ts`, `skills/types.ts`, `agents.tsx`, `RunningAvatarLoader`, `runtime/types.ts`, `AgentState`, `GithubImmersiveScreen.tsx`, `geometry.ts`, `useStudioOfficePreference.ts`, `floors.ts`, `devDependencies`, `multiavatar.ts`, `layout.tsx`, `AgentChatPanel.tsx`, `spotify-jukebox/store.ts`, `profile.ts`, `constants.ts`, `colorSemantics.ts`, `useOnboardingState.ts`, `transcript.ts`, `useVoiceRecorder.ts`, `browser-preview/route.ts`, `StudioGatewayAdapterType`, `models.ts`, `CompanyBuilderModal.tsx`, `settings.ts`, `dependencies`, `OfficePhaserCanvas.tsx`, `AgentState`, `settingsRouteWorkflow.ts`, `SystemSkillsPanel.tsx`, `tasks/types.ts`, `AgentSettingsPanel.tsx`, `useRunLog.ts`, `lucide-react`, `useOfficeBuilderStore.ts`, `layout/route.ts`, `AgentCreateWizardModal.tsx`, `presence.ts`?**
  _High betweenness centrality (0.089) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `OfficeScreen()` (e.g. with `Current Post-Merge Sequence` and `Immediate Next Deliverables`) actually correct?**
  _`OfficeScreen()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `PATH`, `NEXT_TELEMETRY_DISABLED`, `NEXT_PUBLIC_GATEWAY_URL` to the rest of the system?**
  _3 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `AgentsPageScreen.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.12561576354679804 - nodes in this community are weakly interconnected._
- **Why does `vitest` connect `vitest` to `useTaskBoardController.ts`, `useAgentSettingsMutationController.ts`, `ref_node_path`, `navigation.ts`, `GatewayClient.ts`, `hermes-gateway-adapter.js`, `message-extract.ts`, `chatItems.ts`, `useConfigMutationQueue.ts`, `AgentEditorModal.tsx`, `animePresets.ts`, `agentConfig.ts`, `chatSendOperation.ts`, `gatewayRuntimeEventHandler.ts`, `skills/types.ts`, `agents.tsx`, `presentation.ts`, `claw3doctor.mjs`, `agentPermissionsOperation.ts`, `AgentState`, `execApprovalPausePolicy.ts`, `remove-gateway.ts`, `standup/store.ts`, `geometry.ts`, `access-gate.js`, `studioBootstrapOperation.ts`, `loadStudioSettings`, `eventTriggers.ts`, `floors.ts`, `coordinator.ts`, `gatewayClient.reconnect-recovery.test.ts`, `devDependencies`, `ws`, `mutationLifecycleWorkflow.ts`, `gatewayBrowserClient.test.ts`, `deskDirectives.ts`, `pathfinding.ts`, `execApprovalResolveOperation.ts`, `dom/index.ts`, `settings-store.ts`, `AgentChatPanel.tsx`, `multiavatar.ts`, `planning.ts`, `custom/route.ts`, `shared-store.ts`, `profile.ts`, `cleanup-ux-artifacts.mjs`, `constants.ts`, `triggers.ts`, `colorSemantics.ts`, `useOnboardingState.ts`, `transcript.ts`, `runtimeChatEventWorkflow.ts`, `browser-preview/route.ts`, `index.js`, `execApprovalRunControlOperation.ts`, `StudioSettingsCoordinator`, `models.ts`, `glbPaletteTexture.ts`, `voiceTranscription.ts`, `createPayloadBuilder.ts`, `settings.ts`, `AgentState`, `settingsRouteWorkflow.ts`, `execApprovalControlLoopWorkflow.ts`, `agentFleetHydrationDerivation.ts`, `tasks/types.ts`, `chatSendOperation.ts`, `agentSettingsMutationWorkflow.ts`, `useRunLog.ts`, `lucide-react`, `companyBuilderGateway.ts`, `createAgentBootstrapOperation.ts`, `gateway.ts`, `specialLatestUpdateOperation.ts`, `AgentCreateWizardModal.tsx`?**
  _High betweenness centrality (0.072) - this node is a cross-community bridge._
- **Should `useAgentSettingsMutationController.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.058115025594700394 - nodes in this community are weakly interconnected._
- **Why does `next` connect `next` to `AgentsPageScreen.tsx`, `OfficeScreen.tsx`, `call/mock.ts`, `voiceReply/provider.ts`, `animePresets.ts`, `GithubImmersiveScreen.tsx`, `standup/store.ts`, `github.ts`, `loadStudioSettings`, `devDependencies`, `settings-store.ts`, `multiavatar.ts`, `layout.tsx`, `custom/route.ts`, `index.js`, `browser-preview/route.ts`, `voiceTranscription.ts`, `office/store.ts`, `resolveStateDir`, `dependencies`, `SmsBoothImmersiveScreen.tsx`, `service.ts`, `layout/route.ts`, `presence.ts`?**
  _High betweenness centrality (0.049) - this node is a cross-community bridge._