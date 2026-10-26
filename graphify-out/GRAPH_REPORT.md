# Graph Report - claw3d  (2026-10-26)

## Corpus Check
- 611 files · ~455,034 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 37 file(s) not represented in the graph (top: .glb 25, (none) 6, .service 2)

## Summary
- 5294 nodes · 12405 edges · 195 communities (184 shown, 11 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 203 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `3da337ae`
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
- presentation.ts
- useOfficeSkillsMarketplace.ts
- useUsageAnalytics.ts
- presentation.ts
- agentConfig.ts
- Step-by-Step Tasks
- gatewayRuntimeEventHandler.ts
- .connect
- gatewayRestartPolicy.ts
- Permissions, Sandboxing, and Workspaces (Studio -> Gateway -> PI)
- furnitureDefaults.ts
- isRecord
- historySyncOperation.ts
- claw3doctor.mjs
- agentPermissionsOperation.ts
- execApprovalLifecycleWorkflow.ts
- GithubImmersiveScreen.tsx
- remove-gateway.ts
- CompanyBuilderModal.tsx
- github.ts
- district.ts
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
- AgentState
- shared-store.ts
- profile.ts
- runtimeEventBridge.ts
- constants.ts
- triggers.ts
- Hierarchy And Teams Spec
- Hierarchy And Teams Spec
- colorSemantics.ts
- runtimeChatEventWorkflow.ts
- cron/types.ts
- with
- browser-preview/route.ts
- GatewayResponseError
- schema.ts
- normalizeCommandText
- GatewayConnectScreen.tsx
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
- message-extract.ts
- tasks/types.ts
- PI + Chat Streaming (Studio Side)
- agents/agentFiles.ts
- runtime/types.ts
- Step-by-step tasks
- presence.ts
- Custom Runtime Provider Spec
- AgentSettingsPanel.tsx
- service.ts
- README.md
- store.tsx
- Universal Backend Plan
- GatewayClient
- pathfinding.ts
- Architecture
- Custom Provider Reference
- lucide-react
- useOfficeBuilderStore.ts
- specialLatestUpdateOperation.ts
- Code Documentation
- components.json
- cleanup-ux-artifacts.mjs
- Skills in OpenClaw + Claw3D
- deskMonitor.ts
- execApprovals.ts
- coerceString
- compilerOptions
- layout/route.ts
- AgentCreateModal.tsx
- createDefaultAgentAvatarProfile
- useStudioOfficePreference.ts
- profilePortrait.ts
- gateway-proxy.js
- studioRoute.ts
- ref_node_path
- SkillsMarketplacePanel.tsx
- agentSettingsMutationWorkflow.ts
- Hermes Gateway Adapter
- Agent Bus Integration
- scripts
- PR89.md
- call/mock.ts
- voiceReply/provider.ts
- chatItems.ts
- useRunLog.ts
- GatewayStatus
- animePresets.ts
- Creating Skills
- Runtime Profiles
- useOfficeStandupController.ts
- install-gateway.ts
- RunningAvatarLoader
- HeaderBar.tsx
- Critical Fixes
- gateway.ts
- AmbienceSystem.ts
- Claw3D Vision
- Task Manager
- TODO Board
- studioBootstrapOperation.ts
- access-gate.js
- clawd3d-start.sh
- loadStudioSettings
- ws
- reconcileOfficeAnimationTriggerState
- gatewayClient.reconnect-recovery.test.ts
- Cursor Cloud specific instructions
- OpenClaw Gateway Skill Contract
- Roadmap
- layout.tsx
- pathfinding.ts
- contact_links
- shared-store-client.ts
- chatSendOperation.ts
- Contributing
- agents.tsx
- useChatInteractionController.ts
- @testing-library/jest-dom
- multiavatar.ts
- next
- multiavatar
- .github/SECURITY.md
- postcss.config.mjs
- useStudioVoiceRepliesPreference.ts
- useVoiceRecorder.ts
- glbPaletteTexture.ts
- Code Of Conduct
- index.js
- deploy-local.sh
- verify-claw3d.sh
- Top-Level Code Map
- 9) Troubleshooting
- useFinalizedAssistantReplyListener.ts
- settings.ts
- ref_node_https

## God Nodes (most connected - your core abstractions)
1. `vitest` - 192 edges
2. `OfficeScreen()` - 118 edges
3. `react` - 117 edges
4. `AgentState` - 98 edges
5. `GatewayClient` - 82 edges
6. `AgentsPageScreen()` - 68 edges
7. `toWorld()` - 62 edges
8. `RetroOffice3D()` - 51 edges
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
- `Task 6 — Hapus Reset `imageUrl: null` pada Kontrol Warna di `AgentAvatarEditorPanel.tsx`` --references--> `AnimePresetPicker()`  [INFERRED]
  .hermes/plans/2026-10-25_110500-claw3d-3d-avatar-custom-color.md → src/features/agents/components/AnimePresetPicker.tsx

## Import Cycles
- None detected.

## Communities (195 total, 11 thin omitted)

### Community 0 - "useTaskBoardController.ts"
Cohesion: 0.13
Nodes (38): RunRecord, compareCards(), sortTaskBoardCards(), TaskBoardAction, taskBoardReducer(), upsertTaskBoardCard(), defaultTaskBoardPreference(), TaskBoardPreference (+30 more)

### Community 1 - "AgentsPageScreen.tsx"
Cohesion: 0.10
Nodes (31): executeExecApprovalIngressCommands(), runGatewayEventIngressOperation(), runResolveExecApprovalOperation(), applyCreateAgentBootstrapPermissions(), CREATE_AGENT_DEFAULT_PERMISSIONS, CreateCompletion, CreatedAgent, executeCreateAgentBootstrapCommands() (+23 more)

### Community 2 - "useAgentSettingsMutationController.ts"
Cohesion: 0.09
Nodes (39): AgentPermissionsDraft, CRON_ACTION_BUSY_MESSAGE, CronBusyState, CronCreateDeps, isCronActionBusy(), performCronCreateFlow(), resolveCreateAgentId(), resolveCreateErrorMessage() (+31 more)

### Community 3 - "toWorld"
Cohesion: 0.06
Nodes (78): DOOR_LENGTH, DOOR_THICKNESS, MIN_WALL_LENGTH, SCALE, WALL_THICKNESS, FURNITURE_ROTATION, getItemBaseSize(), getItemRotationRadians() (+70 more)

### Community 4 - "OfficeScreen.tsx"
Cohesion: 0.04
Nodes (67): buildGenerateCompanyPlanPrompt(), buildImproveCompanyBriefPrompt(), HQSidebar(), HQSidebarProps, HQSidebarTab, PRIMARY_TABS, TAB_LABELS, formatRelativeTime() (+59 more)

### Community 5 - "navigation.ts"
Cohesion: 0.05
Nodes (48): getItemBounds(), ITEM_FOOTPRINT, ITEM_METADATA, buildJanitorActorsForCue(), hashString(), JANITOR_SWEEP_DURATION_MS, JANITOR_TOOLS, pruneExpiredJanitorActors() (+40 more)

### Community 6 - "GatewayClient.ts"
Cohesion: 0.07
Nodes (38): Reconnects And Retries, Studio Settings (Where Gateway URL/Token Come From), GatewayErrorPayload, EventHandler, formatGatewayError(), GapHandler, gatewayDebugLog(), GatewayFrame (+30 more)

### Community 7 - "hermes-gateway-adapter.js"
Cohesion: 0.05
Nodes (66): activeRuns, activeSendEventFns, ADAPTER_PORT, agentListPayload(), agents, broadcastEvent(), buildDemoReply(), clearHistory() (+58 more)

### Community 8 - "RetroOffice3D.tsx"
Cohesion: 0.05
Nodes (61): SettingsPanel(), Bubble(), PhoneBoothImmersiveScreen(), PhoneCallStep, ATM_MIGRATION_KEY, GYM_ROOM_MIGRATION_KEY, PHONE_BOOTH_MIGRATION_KEY, PING_PONG_BALL_RADIUS (+53 more)

### Community 9 - "presentation.ts"
Cohesion: 0.12
Nodes (30): getPackagedSkillBySkillKey(), buildFallbackCapabilities(), buildFallbackMetadata(), buildSkillMarketplaceCollections(), buildSkillMarketplaceEntry(), hashString(), resolveSkillMarketplaceMetadata(), SKILL_MARKETPLACE_OVERRIDES (+22 more)

### Community 10 - "useOfficeSkillsMarketplace.ts"
Cohesion: 0.15
Nodes (17): MarketplaceMessage, useOfficeSkillsMarketplace(), readGatewayAgentSkillsAllowlist(), normalizeSkillName(), resolveVisibleAgentSkillNames(), setAgentSkillEnabled(), appendPackagedSkillsToMarketplace(), buildPackagedSkillStatusEntry() (+9 more)

### Community 11 - "useUsageAnalytics.ts"
Cohesion: 0.07
Nodes (61): AnalyticsPanel(), DatePickerField(), formatBudgetInput(), formatDuration(), formatPercent(), openNativeDatePicker(), parseBudgetInput(), StatCard() (+53 more)

### Community 12 - "presentation.ts"
Cohesion: 0.10
Nodes (27): AgentSkillsPanel(), AgentSkillsPanelProps, DISPLAY_CLASSES, DISPLAY_LABELS, FILTERS, resolveHint(), SkillRowFilter, AgentSkillsSetupModal() (+19 more)

### Community 13 - "agentConfig.ts"
Cohesion: 0.09
Nodes (44): AgentHeartbeat, AgentHeartbeatActiveHours, AgentHeartbeatResult, AgentHeartbeatSummary, AgentHeartbeatUpdatePayload, AgentSkillsAccessMode, applyGatewayConfigPatch(), areStringArraysEqual() (+36 more)

### Community 14 - "Step-by-Step Tasks"
Cohesion: 0.13
Nodes (14): Architecture / Proposed Approach, Current Context / Assumptions, Goal, Plan: Custom Color Support untuk Avatar 3D di Claw3D, Risks, Tradeoffs, and Open Questions, Step-by-Step Tasks, Task 1 — TDD: Unit Test untuk Glb Palette Texture Generator, Task 2 — Implementasi Modul `glbPaletteTexture.ts` (+6 more)

### Community 15 - "gatewayRuntimeEventHandler.ts"
Cohesion: 0.10
Nodes (48): createGatewayRuntimeEventHandler(), findAgentByRunId(), findAgentBySessionKey(), GatewayRuntimeEventHandler, GatewayRuntimeEventHandlerDeps, resolveRole(), AgentEventPayload, dedupeRunLines() (+40 more)

### Community 17 - "gatewayRestartPolicy.ts"
Cohesion: 0.19
Nodes (11): ConfigMutationGateInput, shouldStartNextConfigMutation(), GatewayStatus, observeGatewayRestart(), RestartObservation, ActiveConfigMutation, ConfigMutationKind, mutationRequiresIdleAgents() (+3 more)

### Community 18 - "Permissions, Sandboxing, and Workspaces (Studio -> Gateway -> PI)"
Cohesion: 0.08
Nodes (27): Capabilities Permissions Updates, Debug Checklist (When Something Feels “Wrong”), Glossary, Hard Enforcement: Filesystem Tool Root Guard, How Studio Chooses the Default Workspace Path, Mental Model (First Principles), One-Shot Sandbox Tool Policy Repair, OpenClaw (Upstream): Exec Approvals (Policy + Events) (+19 more)

### Community 19 - "furnitureDefaults.ts"
Cohesion: 0.07
Nodes (51): createFurnitureSignature(), DEFAULT_ART_ROOM_ITEMS, DEFAULT_ATM_MACHINE, DEFAULT_DINING_ITEMS, DEFAULT_FURNITURE, DEFAULT_GYM_ITEMS, DEFAULT_JUKEBOX, DEFAULT_KANBAN_BOARD (+43 more)

### Community 20 - "isRecord"
Cohesion: 0.15
Nodes (30): defaultFocusedPreference(), defaultStudioOfficePreference(), defaultStudioStandupManualEntry(), isRecord(), mergeStudioSettings(), normalizeAnalytics(), normalizeAnalyticsPreference(), normalizeAvatars() (+22 more)

### Community 21 - "historySyncOperation.ts"
Cohesion: 0.13
Nodes (20): buildHistoryMetadataPatch(), HistoryRequestIntent, HistoryResponseDisposition, resolveHistoryFetchLimit(), resolveHistoryRequestIntent(), resolveHistoryResponseDisposition(), areStringArraysEqual(), ChatHistoryMessage (+12 more)

### Community 22 - "claw3doctor.mjs"
Cohesion: 0.12
Nodes (44): checkFail(), checkPass(), checkWarn(), detectHermesModelHealth(), detectOpenClawVersion(), detectWorkspaceState(), formatErrorMessage(), loadDotenvFile() (+36 more)

### Community 23 - "agentPermissionsOperation.ts"
Cohesion: 0.18
Nodes (23): AgentRuntimeConfigContext, coerceStringArray(), ExecutionRoleId, isPermissionsCustom(), isRecord(), resolveAgentPermissionsDraft(), resolveAgentRuntimeConfigContext(), resolveCommandModeFromRole() (+15 more)

### Community 24 - "execApprovalLifecycleWorkflow.ts"
Cohesion: 0.11
Nodes (25): asNonEmptyString(), asOptionalString(), asPositiveTimestamp(), asRecord(), parseExecApprovalRequested(), parseExecApprovalResolved(), RequestedPayload, ResolvedPayload (+17 more)

### Community 25 - "GithubImmersiveScreen.tsx"
Cohesion: 0.16
Nodes (19): getDiffLineTone(), GitHubDiffFile, ParsedDiffLine, parseDiffPatch(), FileDiffModal(), FileDiffModalProps, BrowserPreviewState, useBrowserPreview() (+11 more)

### Community 26 - "remove-gateway.ts"
Cohesion: 0.24
Nodes (13): removeGatewayAgentFromConfigOnly(), buildSkillRemovalMessage(), escapeForJsonString(), normalizeRequired(), removeSkillViaGatewayAgent(), resolveAllowedRoot(), resolveMainKey(), resolveRemovalWorkspace() (+5 more)

### Community 27 - "CompanyBuilderModal.tsx"
Cohesion: 0.13
Nodes (21): CommandModeId, ChatHistoryMessage, buildRoleAvatarProfile(), CompanyBuilderModal(), CompanyBuilderModalProps, createEmptyRole(), joinCommaList(), parseCommaList() (+13 more)

### Community 28 - "github.ts"
Cohesion: 0.13
Nodes (41): GET(), parsePullRequestNumber(), POST(), ReviewRequestBody, runtime, extractCommandMessage(), getGitHubAuthState(), GitHubAuthState (+33 more)

### Community 29 - "district.ts"
Cohesion: 0.07
Nodes (33): AGENT_RADIUS, BUMP_FREEZE_MS, SEPARATION_STRENGTH, WORLD_H, WORLD_W, CITY_PATH_ZONE, clampPointToZone(), clampZoneValue() (+25 more)

### Community 30 - "QA Department Spec"
Cohesion: 0.05
Nodes (40): Agent Interaction Model, Approval-Aware Review, Approvals, Approved, Blocked, Bug Triage, Bulletin Board, Changes Requested (+32 more)

### Community 31 - "QA Department Spec"
Cohesion: 0.05
Nodes (40): Agent Interaction Model, Approval-Aware Review, Approvals, Approved, Blocked, Bug Triage, Bulletin Board, Changes Requested (+32 more)

### Community 32 - "mutationLifecycleWorkflow.ts"
Cohesion: 0.08
Nodes (33): AgentCreateModalSubmitPayload, AgentConfigMutationLifecycleDeps, AgentConfigMutationLifecycleKind, assertMutationKind(), AwaitingRestartPatch, buildConfigMutationFailureMessage(), buildMutatingMutationBlock(), buildMutationSideEffectCommands() (+25 more)

### Community 33 - "eventTriggers.ts"
Cohesion: 0.10
Nodes (28): BooleanByAgentId, clearOfficeAnimationTriggerHold(), createOfficeAnimationTriggerState(), emptyObject(), isUserLikeChatRole(), LatestDirective, NumberByAgentId, OfficeAnimationState (+20 more)

### Community 34 - "floors.ts"
Cohesion: 0.09
Nodes (39): Floor Registry Slice, Immediate Implementation Checklist, Per-Floor Runtime State Slice, Phase 1: Floor Registry, Roster Slice, UI Shell Slice, OfficeFloorNav(), OfficeFloorNavProps (+31 more)

### Community 35 - "coordinator.ts"
Cohesion: 0.07
Nodes (36): fetchJson(), AnalyticsPatch, AvatarsPatch, createStudioSettingsCoordinator(), DeskAssignmentsPatch, fetchStudioSettings(), FocusedPatch, mergeAnalyticsPatch() (+28 more)

### Community 36 - "Agent State Model Spec"
Cohesion: 0.05
Nodes (38): Agent State Model Spec, Blocked, Bulletin Board, Core Principle, Degraded, Desk Progression / Hierarchy, Error, Existing Code Seams (+30 more)

### Community 37 - "devDependencies"
Cohesion: 0.07
Nodes (37): eslintConfig, devDependencies, eslint@^9, eslint-config-next@16.1.6, eslint-config-prettier@^10.1.8, jsdom@^27.4.0, @playwright/test@^1.58.0, tailwindcss@^4 (+29 more)

### Community 38 - "Desk Progression Spec"
Cohesion: 0.05
Nodes (37): Agent Interaction Model, Bulletin Board / Whiteboard, Contractor, Contractor Desk, Core Principle, Desk Progression Spec, Employee, Employee Desk (+29 more)

### Community 39 - "Desk Progression Spec"
Cohesion: 0.05
Nodes (37): Agent Interaction Model, Bulletin Board / Whiteboard, Contractor, Contractor Desk, Core Principle, Desk Progression Spec, Employee, Employee Desk (+29 more)

### Community 40 - "execApprovalResolveOperation.ts"
Cohesion: 0.08
Nodes (38): AutoResumeIntent, PauseRunIntent, planAutoResumeIntent(), planAwaitingUserInputPatches(), planPauseRunIntent(), planPendingPruneDelay(), planPrunedPendingState(), resolvePauseTargetAgent() (+30 more)

### Community 41 - "deskDirectives.ts"
Cohesion: 0.10
Nodes (35): cacheIntentSnapshot(), getCachedIntentSnapshot(), intentSnapshotCache, normalizeDirectiveText(), normalizeOfficeCallCallee(), normalizeOfficeTextRecipient(), OfficeCallDirective, OfficeCallPhase (+27 more)

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
Cohesion: 0.13
Nodes (28): GET(), PUT(), readGatewayUrl(), runtime, POST(), GET(), isPatch(), PUT() (+20 more)

### Community 49 - "AgentChatPanel.tsx"
Cohesion: 0.08
Nodes (32): @testing-library/react, AgentChatComposer, AgentChatFinalItems, AgentChatPanel(), AgentChatPanelProps, AgentChatTranscript, AssistantIntroCard, AssistantMessageCard (+24 more)

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

### Community 54 - "AgentState"
Cohesion: 0.23
Nodes (13): GatewayClientLike, ReconcileCommand, ReconcileDispatchAction, runAgentReconcileOperation(), buildReconcileTerminalPatch(), ReconcileEligibility, resolveReconcileEligibility(), resolveReconcileWaitOutcome() (+5 more)

### Community 55 - "shared-store.ts"
Cohesion: 0.14
Nodes (29): DELETE(), errorJson(), GET(), isRecord(), json(), PUT(), isTaskBoardSource(), isTaskBoardStatus() (+21 more)

### Community 56 - "profile.ts"
Cohesion: 0.09
Nodes (32): AgentAvatarEditorPanelHandle, AgentAvatarEditorPanelProps, AGENT_AVATAR_BOTTOM_STYLE_OPTIONS, AGENT_AVATAR_CLOTHING_COLOR_OPTIONS, AGENT_AVATAR_GENDER_OPTIONS, AGENT_AVATAR_HAIR_COLOR_OPTIONS, AGENT_AVATAR_HAIR_STYLE_OPTIONS, AGENT_AVATAR_HAT_STYLE_OPTIONS (+24 more)

### Community 57 - "runtimeEventBridge.ts"
Cohesion: 0.10
Nodes (34): extractReasoningBody(), hasReasoningSignal(), hasUnclosedThinkingTag(), isReasoningOnlyAssistantChunk(), normalizeReasoningComparable(), planRuntimeAgentEvent(), resolveThinkingFromAgentStream(), RuntimeAgentWorkflowResult (+26 more)

### Community 58 - "constants.ts"
Cohesion: 0.07
Nodes (42): AGENT_SCALE, BUMP_RECOVERY_MS, CANVAS_H, CANVAS_W, DESK_STICKY_MS, EAST_HALL_WIDTH, EAST_WING_DOOR_Y, EAST_WING_ROOM_HEIGHT (+34 more)

### Community 59 - "triggers.ts"
Cohesion: 0.15
Nodes (23): isSkillEnabledForAgent(), useOfficeSkillTriggers(), buildOfficeSkillTriggerHoldMaps(), DEFAULT_SKILL_TRIGGER_FALLBACKS_BY_SKILL_KEY, DefaultSkillTriggerFallback, isOfficeSkillTriggerMovementTarget(), OFFICE_INTERACTION_TARGETS, OFFICE_SKILL_TRIGGER_MOVEMENT_TARGETS (+15 more)

### Community 60 - "Hierarchy And Teams Spec"
Cohesion: 0.06
Nodes (32): Agent Interaction Model, Contractor, Core Principle, Delegation Model, Executive, Existing Code Seams, Future Extensions, Goal (+24 more)

### Community 61 - "Hierarchy And Teams Spec"
Cohesion: 0.06
Nodes (32): Agent Interaction Model, Contractor, Core Principle, Delegation Model, Executive, Existing Code Seams, Future Extensions, Goal (+24 more)

### Community 62 - "colorSemantics.ts"
Cohesion: 0.13
Nodes (20): AGENT_STATUS_BADGE_CLASS, AGENT_STATUS_LABEL, GATEWAY_STATUS_BADGE_CLASS, GATEWAY_STATUS_LABEL, NEEDS_APPROVAL_BADGE_CLASS, resolveAgentStatusBadgeClass(), resolveAgentStatusLabel(), resolveGatewayStatusBadgeClass() (+12 more)

### Community 63 - "runtimeChatEventWorkflow.ts"
Cohesion: 0.08
Nodes (33): RuntimeAgentWorkflowCommand, RuntimeAgentWorkflowInput, planRuntimeChatEvent(), resolveTerminalSeq(), RuntimeChatWorkflowCommand, RuntimeChatWorkflowInput, RuntimeChatWorkflowResult, summarizeThinkingMessage() (+25 more)

### Community 64 - "cron/types.ts"
Cohesion: 0.09
Nodes (32): DeleteAgentTransactionDeps, DeleteAgentTransactionResult, deleteAgentViaStudio(), EMPTY_TRASH_RESULT, FetchJson, GatewayAgentStateMove, RestoreAgentStateResult, runDeleteFlow() (+24 more)

### Community 65 - "with"
Cohesion: 0.06
Nodes (31): env, IMAGE_BASENAME, REGISTRY, jobs, publish, name, contents, packages (+23 more)

### Community 66 - "browser-preview/route.ts"
Cohesion: 0.09
Nodes (30): getFreePort(), main(), sleep(), BrowserOpenResponse, browserRequest(), BrowserScreenshotResponse, BrowserTab, BrowserTabsResponse (+22 more)

### Community 67 - "GatewayResponseError"
Cohesion: 0.22
Nodes (12): AgentSessionState, applySessionSettingMutation(), ApplySessionSettingMutationParams, buildErrorPrefix(), buildFallbackError(), buildWebchatBlockedMessage(), resolveModelFromPatchResult(), SessionSettingField (+4 more)

### Community 68 - "schema.ts"
Cohesion: 0.11
Nodes (31): asBoolean(), asNumber(), asString(), defaultLayers(), isRecord(), normalizeAmbiencePreset(), normalizeDeskAssignments(), normalizeInteractionKind() (+23 more)

### Community 69 - "normalizeCommandText"
Cohesion: 0.20
Nodes (18): resolveOfficeCallDirective(), resolveOfficeTextDirective(), applyUserMessageTriggers(), buildPhoneCallDirectiveKey(), buildStableLatestRequestSeed(), buildTextMessageDirectiveKey(), createPhoneCallRequest(), createTextMessageRequest() (+10 more)

### Community 70 - "GatewayConnectScreen.tsx"
Cohesion: 0.22
Nodes (8): GatewayConnectScreen(), GatewayConnectScreenProps, resolveLocalGatewayPort(), SettingsPanelProps, StudioGatewayAdapterType, StudioGatewaySettings, CURATED_ELEVENLABS_VOICES, CuratedVoiceOption

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
Nodes (24): addDays(), buildCronJobCreateInput(), CronCreateTemplateId, formatterCache, getFormatter(), resolveAgentId(), resolveAtSchedule(), resolveEverySchedule() (+16 more)

### Community 78 - "personalityBuilder.ts"
Cohesion: 0.14
Nodes (25): buildIdentityFileDraft(), createAgentFilesState(), AgentFilesInput, cleanLabel(), cleanValue(), IDENTITY_PLACEHOLDER_VALUES, isIdentityPlaceholder(), isSectionHeading() (+17 more)

### Community 79 - "resolveStateDir"
Cohesion: 0.07
Nodes (38): contentTypeFromName(), GET(), runtime, uploadsDir(), ALLOWED_CONTENT_TYPES, ALLOWED_EXTENSIONS, CONTENT_TYPE_BY_EXT, isTextContentType() (+30 more)

### Community 80 - "Runtime Profile Architecture"
Cohesion: 0.08
Nodes (25): 1. `docs: runtime profile architecture`, 2. `feat: claw3doctor`, 3. `refactor: office shell modularization`, 4. `docs: floor schema and builder plan`, 5. `feat: admin floor builder`, Branch Sequence, Core Terms, Custom Runtime Position (+17 more)

### Community 81 - "dependencies"
Cohesion: 0.08
Nodes (26): dependencies, canvas-confetti@^1.9.4, class-variance-authority@^0.7.1, clsx@^2.1.1, lucide-react@^0.563.0, next@16.1.7, @noble/ed25519@^3.0.0, phaser@^3.90.0 (+18 more)

### Community 82 - "GatewayBrowserClient.ts"
Cohesion: 0.07
Nodes (38): base64UrlDecode(), base64UrlEncode(), buildDeviceAuthPayload(), buildScopedTokenKey(), bytesToHex(), clearDeviceAuthToken(), CryptoLike, DeviceAuthEntry (+30 more)

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
Cohesion: 0.12
Nodes (28): executeAgentReconcileCommands(), executeHistorySyncCommands(), resolveRuntimeSyncBootstrapHistoryAgentIds(), resolveRuntimeSyncFocusedHistoryPollingIntent(), resolveRuntimeSyncGapRecoveryIntent(), resolveRuntimeSyncLoadMoreHistoryLimit(), resolveRuntimeSyncReconcilePollingIntent(), RUNTIME_SYNC_DEFAULT_HISTORY_LIMIT (+20 more)

### Community 87 - "settingsRouteWorkflow.ts"
Cohesion: 0.21
Nodes (21): buildSettingsRouteHref(), InspectSidebarState, parseSettingsRouteAgentIdFromPathname(), parseSettingsRouteAgentIdFromQueryParam(), planBackToChatCommands(), planFleetSelectCommands(), planNonRouteSelectionSyncCommands(), planOpenSettingsRouteCommands() (+13 more)

### Community 88 - "CustomRuntimeProvider"
Cohesion: 0.10
Nodes (27): CustomRuntimeProxyInput, fetchCustomRuntimeJson(), normalizeCustomBaseUrl(), probeCustomRuntime(), requestCustomRuntime(), ActiveRunRecord, buildChatFailureMessage(), buildIdentityAgent() (+19 more)

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
Cohesion: 0.12
Nodes (17): ExecApprovalIngressCommand, ExecApprovalPendingSnapshot, planIngressCommands(), planPausedRunMapCleanup(), EXEC_APPROVAL_AUTO_RESUME_WAIT_TIMEOUT_MS, GatewayClientLike, RunControlDispatch, RunControlDispatchAction (+9 more)

### Community 95 - "agentFleetHydrationDerivation.ts"
Cohesion: 0.11
Nodes (25): AgentsListResult, DerivedHydrateAgentFleetResult, DeriveFleetHydrationInput, deriveHydrateAgentFleetResult(), ExecApprovalsSnapshot, ExecAsk, ExecHost, ExecPolicyEntry (+17 more)

### Community 96 - "message-extract.ts"
Cohesion: 0.10
Nodes (35): findLatestHeartbeatResponse(), buildHistoryLines(), classifyGatewayEventKind(), getChatSummaryPatch(), formatOpenClawEventLogEntry(), shouldSuppressPhoneBoothAssistantReply(), AgentInstructionParams, ENVELOPE_CHANNELS (+27 more)

### Community 97 - "tasks/types.ts"
Cohesion: 0.11
Nodes (20): lucide-react, react, TaskBoardPanel(), KanbanImmersiveScreen(), formatRelativeTime(), STATUS_LABELS, STATUS_ORDER, stopAndGetCardId() (+12 more)

### Community 98 - "PI + Chat Streaming (Studio Side)"
Cohesion: 0.09
Nodes (23): Connect failures, Connect handshake, Debugging Checklist (When Chat “Feels Buggy”), End-To-End Flow (PI Run -> UI), `event: "agent"` payload, `event: "chat"` payload, Exec Approvals In Chat (Related To “PI Runs”), High-Level Network Path (+15 more)

### Community 99 - "agents/agentFiles.ts"
Cohesion: 0.10
Nodes (30): AgentCreateWizardModal(), AgentCreateWizardModalProps, buildInitialDraft(), WizardField(), WizardStepId, wizardSteps, WizardTextAreaField(), AgentIdentityFields() (+22 more)

### Community 100 - "runtime/types.ts"
Cohesion: 0.07
Nodes (25): GatewayConnectionState, GatewayGapInfo, createRuntimeProvider(), DEMO_RUNTIME_CAPABILITIES, DemoRuntimeProvider, HERMES_RUNTIME_CAPABILITIES, HermesRuntimeProvider, coerceTimestamp() (+17 more)

### Community 101 - "Step-by-step tasks"
Cohesion: 0.08
Nodes (24): Architecture / proposed approach, Current context / assumptions, Files touched, Goal, Plan: Run Claw3D natively on the host (drop Docker), keep kerja.besoksenin.web.id, Risks, tradeoffs, open questions, Step-by-step tasks, Task 0: Graphify read and baseline snapshot (2 min) (+16 more)

### Community 102 - "presence.ts"
Cohesion: 0.07
Nodes (50): GET(), runtime, POST(), runtime, stripRemoteAgentPrefix(), AgentsListResult, POST(), resolveLatestAssistantHistoryText() (+42 more)

### Community 103 - "Custom Runtime Provider Spec"
Cohesion: 0.09
Nodes (21): Capability Philosophy, Core Principle, Current Branch Status, Custom Metadata Surface, Custom Runtime Provider Spec, Event Model, Goal, Implementation Strategy (+13 more)

### Community 104 - "AgentSettingsPanel.tsx"
Cohesion: 0.20
Nodes (15): AgentBrainPanelProps, AgentInspectHeader(), AgentInspectHeaderProps, AgentSettingsPanel(), AgentSettingsPanelProps, applyTemplateDefaults(), arePermissionsDraftEqual(), createInitialCronDraft() (+7 more)

### Community 105 - "service.ts"
Cohesion: 0.06
Nodes (55): GET(), PUT(), runtime, runtime, sourceTone(), StandupImmersiveScreen(), advanceStandupMeeting(), buildJiraSearchUrl() (+47 more)

### Community 106 - "README.md"
Cohesion: 0.10
Nodes (10): Roadmap, Current Security Limitations, Deployment Notes, Reporting A Vulnerability, Scope, Security Policy, Maintainer Contact Notes, Public Help (+2 more)

### Community 107 - "store.tsx"
Cohesion: 0.06
Nodes (43): vitest, Action, AgentStoreContext, AgentStoreContextValue, agentStoreReducer, AgentStoreSeed, AgentStoreState, areStringArraysEqual() (+35 more)

### Community 108 - "Universal Backend Plan"
Cohesion: 0.10
Nodes (20): Capability Matrix, Core Adapter Contract, Event Model, Hermes Provider, High-Value PR Split, Near-Term Guidance For Luke, OpenClaw Provider, PR 1: Runtime Abstraction (+12 more)

### Community 109 - "GatewayClient"
Cohesion: 0.09
Nodes (14): GatewayResponseError, GatewayClient, ensureGatewayReloadModeHotForLocalStudio(), GatewayConfigSnapshot, isRecord(), resolveReloadModeFromConfig(), shouldAwaitDisconnectRestartForReloadMode(), shouldAwaitDisconnectRestartForRemoteMutation() (+6 more)

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
Cohesion: 0.13
Nodes (22): AgentsStep(), AgentsStepProps, CompanyStep(), CompanyStepProps, CompleteStep(), OnboardingWizard(), OnboardingWizardProps, prerequisites (+14 more)

### Community 114 - "useOfficeBuilderStore.ts"
Cohesion: 0.16
Nodes (17): OfficeBuilderPage(), nextId(), OfficeBuilderPanel(), OfficeBuilderPanelProps, BuilderAction, BuilderHistory, BuilderSelection, BuilderState (+9 more)

### Community 115 - "specialLatestUpdateOperation.ts"
Cohesion: 0.20
Nodes (12): buildLatestUpdatePatch(), LatestUpdateIntent, LatestUpdateKind, resolveLatestUpdateIntent(), resolveLatestUpdateKind(), ChatHistoryMessage, ChatHistoryResult, createSpecialLatestUpdateOperation() (+4 more)

### Community 116 - "Code Documentation"
Cohesion: 0.11
Nodes (19): API Route Inventory, Builder Stack, Code Documentation, Contributor Footguns, Documentation Philosophy, Folder Structure Conventions, How Desk Assignment Works, How To Add A New 3D Object (+11 more)

### Community 117 - "components.json"
Cohesion: 0.11
Nodes (18): aliases, components, hooks, lib, ui, utils, iconLibrary, registries (+10 more)

### Community 118 - "cleanup-ux-artifacts.mjs"
Cohesion: 0.15
Nodes (15): __dirname, nextConfig, securityHeaders, cleanupPlaywrightProcesses(), clearDirContents(), ensureDir(), killPattern(), main() (+7 more)

### Community 119 - "Skills in OpenClaw + Claw3D"
Cohesion: 0.11
Nodes (18): 10.1 Route and navigation model, 10.2 Skills tab data and interactions, 10.3 Mutation wiring from Studio, 10.4 Scope warning shown in Studio, 10) Claw3D UX (current behavior), 11) What recent `.agent/done` plans show, 12) UX redesign constraints that are not optional, 13) Practical mental model for reviewing a Skills screenshot (+10 more)

### Community 120 - "deskMonitor.ts"
Cohesion: 0.21
Nodes (14): buildOfficeDeskMonitor(), deriveEditorDocument(), derivePseudoEditor(), extractDomains(), extractPath(), extractUrls(), flattenMonitorEntry(), normalizeBrowserUrl() (+6 more)

### Community 121 - "execApprovals.ts"
Cohesion: 0.23
Nodes (10): ExecAllowlistEntry, ExecApprovalsAgent, ExecApprovalsFile, ExecApprovalsSnapshot, GatewayExecApprovalAsk, GatewayExecApprovalSecurity, normalizeAllowlist(), setExecApprovalsWithRetry() (+2 more)

### Community 122 - "coerceString"
Cohesion: 0.24
Nodes (18): coerceString(), mergeGatewayConnectionState(), mergeGatewayProfiles(), mergeGatewaySettings(), normalizeCompanyField(), normalizeCompanyRoleTitles(), normalizeGatewayAdapterType(), normalizeGatewayConnectionState() (+10 more)

### Community 123 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 124 - "layout/route.ts"
Cohesion: 0.22
Nodes (16): fetchRemoteOfficeLayoutSnapshot(), GET(), PUT(), runtime, deriveRemoteLayoutUrlFromPresenceUrl(), isRecord(), normalizeOfficeLayoutSnapshot(), defaultStore() (+8 more)

### Community 125 - "AgentCreateModal.tsx"
Cohesion: 0.43
Nodes (6): AgentAvatar(), AgentCreateModal(), AgentCreateModalContent(), AgentCreateModalProps, resolveInitialName(), openModal()

### Community 126 - "createDefaultAgentAvatarProfile"
Cohesion: 0.21
Nodes (11): AgentAvatarCreatorModal(), AgentAvatarCreatorModalProps, AgentAvatarEditorPanel, AgentEditorModal(), AgentEditorModalProps, AgentEditorSection, editorSections, createDemoMainAgentSeed() (+3 more)

### Community 127 - "useStudioOfficePreference.ts"
Cohesion: 0.53
Nodes (5): useStudioOfficePreference(), UseStudioOfficePreferenceParams, defaultStudioOfficePreferencePublic(), resolveOfficePreferencePublic(), StudioOfficePreferencePublic

### Community 128 - "profilePortrait.ts"
Cohesion: 0.31
Nodes (11): AgentAvatarProps, AgentAvatarProfile, blendHex(), buildAgentAvatarPortraitDataUrl(), buildAgentAvatarPortraitSvg(), buildGlassesSvg(), buildHairSvg(), buildHatSvg() (+3 more)

### Community 129 - "gateway-proxy.js"
Cohesion: 0.30
Nodes (13): buildErrorResponse(), createFrameRateLimiter(), createGatewayProxy(), hasCompleteDeviceAuth(), hasNonEmptyDeviceToken(), hasNonEmptyPassword(), hasNonEmptyToken(), injectAuthToken() (+5 more)

### Community 130 - "studioRoute.ts"
Cohesion: 0.26
Nodes (5): @playwright/test, createStudioRoute(), DEFAULT_SETTINGS, stubStudioRoute(), StudioSettingsFixture

### Community 131 - "ref_node_path"
Cohesion: 0.06
Nodes (31): main(), parseArgs(), tryReadGatewayTokenFromOpenclawCli(), contents, destPath, repoRoot, isRecord(), LEGACY_STATE_DIRNAMES (+23 more)

### Community 132 - "SkillsMarketplacePanel.tsx"
Cohesion: 0.18
Nodes (14): SkillsMarketplaceModal(), SkillsMarketplaceModalProps, buildSearchBlob(), FILTER_LABELS, formatInstalls(), formatRating(), getAgentSkillEnabled(), MarketplaceFilter (+6 more)

### Community 133 - "agentSettingsMutationWorkflow.ts"
Cohesion: 0.18
Nodes (12): AgentSettingsMutationContext, AgentSettingsMutationDecision, AgentSettingsMutationDenyReason, AgentSettingsMutationRequest, CronActionKind, GuardedActionKind, isCronActionBusy(), isGuardedAction() (+4 more)

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
Cohesion: 0.26
Nodes (9): POST(), runtime, VoiceReplyRequestBody, normalizeVoiceId(), normalizeVoiceSpeed(), synthesizeVoiceReply(), synthesizeWithElevenLabs(), VoiceReplyProvider (+1 more)

### Community 140 - "chatItems.ts"
Cohesion: 0.16
Nodes (28): AgentChatRenderBlock, appendThinkingTraceEvent(), buildAgentChatItems(), BuildAgentChatItemsInput, buildAgentChatRenderBlocks(), buildFinalAgentChatItems(), extractFirstCodeBlockLine(), extractToolArgSummary() (+20 more)

### Community 141 - "useRunLog.ts"
Cohesion: 0.22
Nodes (11): formatClockTime(), formatDuration(), HistoryPanel(), TRIGGER_LABELS, findAgentForRunEvent(), resolveLifecyclePhase(), resolveRunTrigger(), RunOutcomeKind (+3 more)

### Community 143 - "animePresets.ts"
Cohesion: 0.18
Nodes (13): AgentAvatarGlbAnimation, CANDIDATES, Props, AnimePresetPicker(), Props, ALLOWED_AVATAR_URL_PREFIXES, ANIME_AVATAR_PRESETS, AnimeAvatarPreset (+5 more)

### Community 144 - "Creating Skills"
Cohesion: 0.14
Nodes (13): 1. Create the skill files, 2. Mirror the files into `src/lib/skills/packaged.ts`, 3. Register the skill in `src/lib/skills/catalog.ts`, 4. Add marketplace presentation metadata, 5. Understand where the files get installed, 6. Keep the example production-ready, 7. Verify your changes, Creating Skills (+5 more)

### Community 145 - "Runtime Profiles"
Cohesion: 0.14
Nodes (13): `claw3d`, Current Profiles, Current Runtime Contract, `custom`, `demo`, `hermes`, `local`, Multi-Agent Message Contract (+5 more)

### Community 146 - "useOfficeStandupController.ts"
Cohesion: 0.22
Nodes (14): everyoneArrived(), expandRange(), getZonedParts(), isMeetingActive(), matchesCronPart(), OfficeStandupController, sameScheduledMinute(), shouldRunNow() (+6 more)

### Community 147 - "install-gateway.ts"
Cohesion: 0.13
Nodes (24): getPackagedSkillById(), buildInstallerMessage(), escapeForJsonString(), getPathLeaf(), installPackagedSkillViaGatewayAgent(), isRootWorkspace(), normalizeOptional(), normalizeRequired() (+16 more)

### Community 149 - "RunningAvatarLoader"
Cohesion: 0.29
Nodes (9): OfficeLoadingFallback(), OfficePage(), readDebugFlag(), box(), RunningAvatarLoader(), RunningAvatarLoaderProps, AgentStoreProvider(), ConnectStep() (+1 more)

### Community 150 - "HeaderBar.tsx"
Cohesion: 0.43
Nodes (4): applyTheme(), getPreferredTheme(), ThemeMode, ThemeToggle()

### Community 151 - "Critical Fixes"
Cohesion: 0.17
Nodes (11): 1. Telemetry Removed, 2. Constant-Time Token Comparison, 3. Auth Rate Limiting, 4. WebSocket Frame Validation, 5. Upstream URL Allowlist, 6. Custom Runtime Proxy Allowlist, 7. Security Headers, 8. Media Route Symlink Rejection (+3 more)

### Community 152 - "gateway.ts"
Cohesion: 0.29
Nodes (10): createGatewayTask(), deleteGatewayTask(), GatewayTaskCreateInput, GatewayTaskRecord, GatewayTasksListResult, GatewayTaskUpdateInput, isUnsupportedTaskGatewayError(), listGatewayTasks() (+2 more)

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
Cohesion: 0.09
Nodes (37): AgentsListResult, ExecApprovalsSnapshot, GatewayClientLike, hydrateAgentFleetFromGateway(), HydrateAgentFleetResult, isRecord(), parseIdentityNameFromContent(), resolveAgentsListFromHelloSnapshot() (+29 more)

### Community 158 - "access-gate.js"
Cohesion: 0.36
Nodes (5): createAccessGate(), createRateLimiter(), parseCookies(), resolveClientIp(), safeCompare()

### Community 159 - "clawd3d-start.sh"
Cohesion: 0.44
Nodes (8): find_free_port(), info(), log(), pids_on_port(), port_free(), port_owned_by(), clawd3d-start.sh script, warn()

### Community 160 - "loadStudioSettings"
Cohesion: 0.09
Nodes (42): isSafeAgentId(), POST(), PUT(), resolveAgentStateSshTarget(), RestoreAgentStateRequest, runtime, TrashAgentStateRequest, expandTildeLocal() (+34 more)

### Community 162 - "ws"
Cohesion: 0.17
Nodes (4): ws@^8.18.3, ws, ws, ws

### Community 163 - "reconcileOfficeAnimationTriggerState"
Cohesion: 0.27
Nodes (7): How Office Motion Works, applyHoldDirective(), buildOfficeAnimationState(), reconcileOfficeAnimationTriggerState(), buildSessionEpochSnapshot(), resolveResetAgentIds(), SessionEpochSnapshot

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

### Community 168 - "layout.tsx"
Cohesion: 0.28
Nodes (6): display, metadata, mono, RootLayout(), sans, SuspenseStreamGuard()

### Community 169 - "pathfinding.ts"
Cohesion: 0.16
Nodes (19): ASSET_SIZE, astar2D(), BLOCKING_ASSET_IDS, BLOCKING_LAYERS, BLOCKING_TAGS, buildNavGrid2D(), clamp(), findFreeCell() (+11 more)

### Community 170 - "contact_links"
Cohesion: 0.33
Nodes (5): blank_issues_enabled, contact_links, about, name, url

### Community 171 - "shared-store-client.ts"
Cohesion: 0.30
Nodes (10): archiveSharedTaskRecord(), fetchWithTimeout(), isRetryable(), listSharedTaskRecords(), parseResponse(), sleep(), TaskStoreRequestError, upsertSharedTaskRecord() (+2 more)

### Community 172 - "chatSendOperation.ts"
Cohesion: 0.10
Nodes (25): Sending Messages (Browser -> PI via Gateway), extractImmediateAssistantText(), GatewayClientLike, resolveChatSendCompletionMode(), sendChatMessageViaStudio(), SendDispatch, SendDispatchAction, parseAgentIdFromSessionKey() (+17 more)

### Community 173 - "Contributing"
Cohesion: 0.22
Nodes (9): Before you start, Contributing, Local setup, Minimal issue template, Minimal PR template, Pull requests, Reporting issues, Support And Routing (+1 more)

### Community 174 - "agents.tsx"
Cohesion: 0.04
Nodes (58): main(), main(), Architecture / proposed approach, Claw3D — Ganti geometri male procedural dengan model GLB dari Drive, Current context / assumptions, Goal, Risks, tradeoffs, open questions, Step-by-step tasks (+50 more)

### Community 175 - "useChatInteractionController.ts"
Cohesion: 0.07
Nodes (34): DraftFlushIntent, DraftTimerIntent, NewSessionIntent, planDraftFlushIntent(), planDraftTimerIntent(), planNewSessionIntent(), planStopRunIntent(), StopRunIntent (+26 more)

### Community 177 - "multiavatar.ts"
Cohesion: 0.33
Nodes (8): AVATAR_ACCENTS, AVATAR_FOREGROUNDS, AVATAR_PALETTE, buildAvatarDataUrl(), buildAvatarLabel(), buildAvatarSvg(), hashSeed(), pick()

### Community 179 - "next"
Cohesion: 0.10
Nodes (11): nextConfig, securityHeaders, next, runtime, CustomRuntimeRequestBody, isRuntimeUrlAllowed(), normalizeMethod(), normalizePathname() (+3 more)

### Community 186 - "useStudioVoiceRepliesPreference.ts"
Cohesion: 0.53
Nodes (5): useStudioVoiceRepliesPreference(), UseStudioVoiceRepliesPreferenceParams, defaultStudioVoiceRepliesPreference(), resolveVoiceRepliesPreference(), StudioVoiceRepliesPreference

### Community 187 - "useVoiceRecorder.ts"
Cohesion: 0.33
Nodes (8): PREFERRED_VOICE_MIME_TYPES, resolvePreferredVoiceMimeType(), resolveVoiceErrorMessage(), resolveVoiceExtension(), stopVoiceStream(), useVoiceRecorder(), VoiceRecorderState, VoiceSendPayload

### Community 188 - "glbPaletteTexture.ts"
Cohesion: 0.29
Nodes (9): Task 3 — Update `AgentAvatarGlbModel.tsx` untuk Dynamic Canvas Texture, applyColorsToPaletteCanvas(), computeRampShades(), CustomAvatarColors, PALETTE_RAMP_COORDINATES, parseHex(), RampDefinition, SHADE_MULTIPLIERS (+1 more)

### Community 192 - "Code Of Conduct"
Cohesion: 0.33
Nodes (5): Code Of Conduct, Enforcement, Expected Behavior, Our Pledge, Unacceptable Behavior

### Community 193 - "index.js"
Cohesion: 0.21
Nodes (16): selfsigned@^5.5.0, selfsigned, CERT_DIR, CERT_PATH, generateHttpsCert(), KEY_PATH, main(), resolvePathname() (+8 more)

### Community 194 - "deploy-local.sh"
Cohesion: 0.40
Nodes (4): NEXT_PUBLIC_GATEWAY_URL, NEXT_TELEMETRY_DISABLED, PATH, deploy-local.sh script

### Community 196 - "Top-Level Code Map"
Cohesion: 0.29
Nodes (7): `scripts`, `server`, `src/app`, `src/features`, `src/lib`, `tests`, Top-Level Code Map

### Community 198 - "9) Troubleshooting"
Cohesion: 0.33
Nodes (6): `401` or auth errors from Claw3D, 9) Troubleshooting, Claw3D still cannot connect after token is correct, `EPROTO` or `wrong version number`, Gateway itself is unhealthy, Tailscale URL works nowhere

### Community 200 - "useFinalizedAssistantReplyListener.ts"
Cohesion: 0.50
Nodes (4): AgentReplyListenerItem, LastAssistantEntry, resolveLatestAssistantEntry(), useFinalizedAssistantReplyListener()

### Community 208 - "settings.ts"
Cohesion: 0.07
Nodes (36): DEFAULT_REMOTE_OFFICE_SOURCE_KIND, defaultStudioFloorRuntimeState(), defaultStudioStandupJiraConfig(), defaultStudioStandupPreference(), defaultStudioStandupScheduleConfig(), FloorRuntimeConnectionStatus, FocusFilter, LOOPBACK_HOSTNAMES (+28 more)

## Knowledge Gaps
- **3 isolated node(s):** `PATH`, `NEXT_TELEMETRY_DISABLED`, `NEXT_PUBLIC_GATEWAY_URL`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 2133 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **11 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `vitest` connect `store.tsx` to `useTaskBoardController.ts`, `AgentsPageScreen.tsx`, `useAgentSettingsMutationController.ts`, `navigation.ts`, `GatewayClient.ts`, `hermes-gateway-adapter.js`, `presentation.ts`, `useOfficeSkillsMarketplace.ts`, `agentConfig.ts`, `gatewayRuntimeEventHandler.ts`, `gatewayRestartPolicy.ts`, `historySyncOperation.ts`, `claw3doctor.mjs`, `agentPermissionsOperation.ts`, `execApprovalLifecycleWorkflow.ts`, `remove-gateway.ts`, `mutationLifecycleWorkflow.ts`, `floors.ts`, `coordinator.ts`, `devDependencies`, `execApprovalResolveOperation.ts`, `deskDirectives.ts`, `settings-store.ts`, `AgentChatPanel.tsx`, `planning.ts`, `AgentState`, `shared-store.ts`, `profile.ts`, `runtimeEventBridge.ts`, `constants.ts`, `triggers.ts`, `colorSemantics.ts`, `runtimeChatEventWorkflow.ts`, `cron/types.ts`, `browser-preview/route.ts`, `StudioSettingsCoordinator`, `models.ts`, `voiceTranscription.ts`, `createPayloadBuilder.ts`, `personalityBuilder.ts`, `resolveStateDir`, `GatewayBrowserClient.ts`, `AgentState`, `settingsRouteWorkflow.ts`, `execApprovalControlLoopWorkflow.ts`, `agentFleetHydrationDerivation.ts`, `message-extract.ts`, `tasks/types.ts`, `agents/agentFiles.ts`, `runtime/types.ts`, `service.ts`, `GatewayClient`, `lucide-react`, `specialLatestUpdateOperation.ts`, `cleanup-ux-artifacts.mjs`, `deskMonitor.ts`, `execApprovals.ts`, `AgentCreateModal.tsx`, `createDefaultAgentAvatarProfile`, `ref_node_path`, `agentSettingsMutationWorkflow.ts`, `chatItems.ts`, `useRunLog.ts`, `animePresets.ts`, `install-gateway.ts`, `HeaderBar.tsx`, `gateway.ts`, `studioBootstrapOperation.ts`, `access-gate.js`, `loadStudioSettings`, `ws`, `reconcileOfficeAnimationTriggerState`, `gatewayClient.reconnect-recovery.test.ts`, `pathfinding.ts`, `chatSendOperation.ts`, `agents.tsx`, `useChatInteractionController.ts`, `multiavatar.ts`, `next`, `glbPaletteTexture.ts`, `index.js`, `settings.ts`?**
  _High betweenness centrality (0.099) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `OfficeScreen()` (e.g. with `Current Post-Merge Sequence` and `Immediate Next Deliverables`) actually correct?**
  _`OfficeScreen()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `PATH`, `NEXT_TELEMETRY_DISABLED`, `NEXT_PUBLIC_GATEWAY_URL` to the rest of the system?**
  _3 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `useTaskBoardController.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.1254355400696864 - nodes in this community are weakly interconnected._
- **Why does `react` connect `tasks/types.ts` to `profilePortrait.ts`, `AgentsPageScreen.tsx`, `useAgentSettingsMutationController.ts`, `useTaskBoardController.ts`, `OfficeScreen.tsx`, `SkillsMarketplacePanel.tsx`, `toWorld`, `GatewayClient.ts`, `RetroOffice3D.tsx`, `useOfficeSkillsMarketplace.ts`, `useUsageAnalytics.ts`, `presentation.ts`, `useRunLog.ts`, `animePresets.ts`, `gatewayRestartPolicy.ts`, `useOfficeStandupController.ts`, `RunningAvatarLoader`, `HeaderBar.tsx`, `execApprovalLifecycleWorkflow.ts`, `GithubImmersiveScreen.tsx`, `CompanyBuilderModal.tsx`, `district.ts`, `floors.ts`, `devDependencies`, `layout.tsx`, `agents.tsx`, `useChatInteractionController.ts`, `AgentChatPanel.tsx`, `spotify-jukebox/store.ts`, `profile.ts`, `constants.ts`, `triggers.ts`, `useStudioVoiceRepliesPreference.ts`, `useVoiceRecorder.ts`, `colorSemantics.ts`, `browser-preview/route.ts`, `GatewayConnectScreen.tsx`, `models.ts`, `useFinalizedAssistantReplyListener.ts`, `dependencies`, `OfficePhaserCanvas.tsx`, `AgentState`, `settingsRouteWorkflow.ts`, `message-extract.ts`, `agents/agentFiles.ts`, `runtime/types.ts`, `presence.ts`, `AgentSettingsPanel.tsx`, `store.tsx`, `lucide-react`, `useOfficeBuilderStore.ts`, `AgentCreateModal.tsx`, `createDefaultAgentAvatarProfile`, `useStudioOfficePreference.ts`?**
  _High betweenness centrality (0.085) - this node is a cross-community bridge._
- **Should `AgentsPageScreen.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.0953058321479374 - nodes in this community are weakly interconnected._
- **Why does `next` connect `next` to `profilePortrait.ts`, `AgentsPageScreen.tsx`, `OfficeScreen.tsx`, `call/mock.ts`, `voiceReply/provider.ts`, `animePresets.ts`, `GithubImmersiveScreen.tsx`, `github.ts`, `loadStudioSettings`, `devDependencies`, `layout.tsx`, `settings-store.ts`, `index.js`, `browser-preview/route.ts`, `voiceTranscription.ts`, `office/store.ts`, `resolveStateDir`, `dependencies`, `SmsBoothImmersiveScreen.tsx`, `presence.ts`, `service.ts`, `layout/route.ts`?**
  _High betweenness centrality (0.045) - this node is a cross-community bridge._