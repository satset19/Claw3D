# Graph Report - claw3d  (2026-10-26)

## Corpus Check
- 615 files · ~465,018 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 37 file(s) not represented in the graph (top: .glb 25, (none) 6, .service 2)

## Summary
- 5355 nodes · 12550 edges · 201 communities (192 shown, 9 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 217 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `61eac1bb`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- TaskBoardView.tsx
- createAgentBootstrapOperation.ts
- runtimeEventBridge.ts
- toWorld
- OfficeScreen.tsx
- navigation.ts
- GatewayClient.ts
- hermes-gateway-adapter.js
- RetroOffice3D.tsx
- presentation.ts
- furniture.tsx
- useUsageAnalytics.ts
- resolveStateDir
- agentConfig.ts
- Step-by-Step Tasks
- gatewayRuntimeEventHandler.ts
- gatewayClient.reconnect-recovery.test.ts
- gatewayRestartPolicy.ts
- Permissions, Sandboxing, and Workspaces (Studio -> Gateway -> PI)
- furnitureDefaults.ts
- useStudioOfficePreference.ts
- handleMethod
- claw3doctor.mjs
- agentPermissionsOperation.ts
- AgentSkillsPanel.tsx
- GatewayClient
- remove-gateway.ts
- settings.ts
- github.ts
- district.ts
- QA Department Spec
- QA Department Spec
- mutationLifecycleWorkflow.ts
- eventTriggers.ts
- floors.ts
- coordinator.ts
- Agent State Model Spec
- package.json
- Desk Progression Spec
- Desk Progression Spec
- execApprovalRunControlOperation.ts
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
- standup/store.ts
- shared-store.ts
- profile.ts
- Implementation Plan: Claw3D Chat Bubbles, 3D Speech Popup, Multi-Session Management, and Dismissal
- constants.ts
- triggers.ts
- Hierarchy And Teams Spec
- Hierarchy And Teams Spec
- colorSemantics.ts
- historySyncOperation.ts
- useAgentSettingsMutationController.ts
- with
- browser-preview/route.ts
- execApprovalRuntimeCoordinator.ts
- schema.ts
- normalizeCommandText
- demo-gateway-adapter.js
- multiavatar.ts
- models.ts
- Claw3Doctor Spec
- Multi-Agent Beta
- voiceTranscription.ts
- office/store.ts
- createPayloadBuilder.ts
- personalityBuilder.ts
- ref_node_path
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
- useTaskBoardController.ts
- agentFleetHydrationDerivation.ts
- runtimeEventBridge.ts
- StudioSettingsCoordinator
- PI + Chat Streaming (Studio Side)
- agents/agentFiles.ts
- agentMessaging.ts
- Step-by-step tasks
- buildAgentMainSessionKey
- Custom Runtime Provider Spec
- AgentSettingsPanel.tsx
- service.ts
- README.md
- transcript.ts
- Universal Backend Plan
- GatewayResponseError
- useAgentSettingsMutationController.ts
- Architecture
- Custom Provider Reference
- lucide-react
- useOfficeBuilderStore.ts
- Code Of Conduct
- Code Documentation
- components.json
- cleanup-ux-artifacts.mjs
- Skills in OpenClaw + Claw3D
- execApprovalLifecycleWorkflow.ts
- specialLatestUpdateOperation.ts
- three
- compilerOptions
- layout/route.ts
- 9) Troubleshooting
- vitest
- GithubImmersiveScreen.tsx
- profilePortrait.ts
- createDefaultAgentAvatarProfile
- studioRoute.ts
- Step-by-step tasks
- SkillsMarketplacePanel.tsx
- agentFleetHydration.ts
- Hermes Gateway Adapter
- Agent Bus Integration
- scripts
- PR89.md
- call/mock.ts
- voiceReply/provider.ts
- chatItems.ts
- useRunLog.ts
- tasks/types.ts
- animePresets.ts
- Creating Skills
- Runtime Profiles
- useOfficeStandupController.ts
- RunningAvatarLoader
- studio-settings.js
- next
- useChatInteractionController.test.ts
- Critical Fixes
- nodeGatewayClient.ts
- AmbienceSystem.ts
- Claw3D Vision
- Task Manager
- TODO Board
- gateway-proxy.js
- gateway.ts
- clawd3d-start.sh
- loadStudioSettings
- presence.ts
- install-gateway.ts
- skills/types.ts
- deleteAgentOperation.ts
- Cursor Cloud specific instructions
- OpenClaw Gateway Skill Contract
- Roadmap
- layout.tsx
- pathfinding.ts
- contact_links
- loadPullRequestDetail
- handleMethod
- Contributing
- AgentAvatarPreview3D.tsx
- useChatInteractionController.ts
- marketplace.ts
- ws
- nodeGatewayClient.ts
- shared-store-client.ts
- multiavatar
- .github/SECURITY.md
- postcss.config.mjs
- agentFleetHydration.ts
- AgentCreateModal.tsx
- janitorReset.ts
- access-gate.js
- Implementation Plan: Claw3D Chat Bubbles, 3D Speech Popup, Multi-Session Management, and Dismissal
- completeOneTurn
- index.js
- deploy-local.sh
- verify-claw3d.sh
- Top-Level Code Map
- GatewayBrowserClient
- ref_node_https
- randomUUID
- sanitizeErrorMessage
- useStudioVoiceRepliesPreference.ts

## God Nodes (most connected - your core abstractions)
1. `vitest` - 194 edges
2. `react` - 118 edges
3. `OfficeScreen()` - 118 edges
4. `AgentState` - 98 edges
5. `GatewayClient` - 82 edges
6. `AgentsPageScreen()` - 68 edges
7. `toWorld()` - 66 edges
8. `RetroOffice3D()` - 52 edges
9. `next` - 39 edges
10. `getItemBaseSize()` - 38 edges

## Surprising Connections (you probably didn't know these)
- `Task 5 — Update Renderer 3D GLB dengan Palette Tinting & Tone Mapping` --references--> `AgentAvatarGlbModel()`  [INFERRED]
  .hermes/plans/2026-10-25_100000-claw3d-3d-avatar-glb-color-references.md → src/features/agents/components/AgentAvatarGlbModel.tsx
- `Task 6 — Hapus Reset `imageUrl: null` pada Kontrol Warna di `AgentAvatarEditorPanel.tsx`` --references--> `AnimePresetPicker()`  [INFERRED]
  .hermes/plans/2026-10-25_110500-claw3d-3d-avatar-custom-color.md → src/features/agents/components/AnimePresetPicker.tsx
- `Capabilities Permissions Updates` --references--> `updateAgentPermissionsViaStudio()`  [INFERRED]
  docs/permissions-sandboxing.md → src/features/agents/operations/agentPermissionsOperation.ts
- `Sending Messages (Browser -> PI via Gateway)` --references--> `sendChatMessageViaStudio()`  [INFERRED]
  docs/pi-chat-streaming.md → src/features/agents/operations/chatSendOperation.ts
- `Action details:` --references--> `runHistorySyncOperation()`  [INFERRED]
  .hermes/plans/2026-10-26_005436-claw3d-chat-bubbles-sessions-history.md → src/features/agents/operations/historySyncOperation.ts

## Import Cycles
- None detected.

## Communities (201 total, 9 thin omitted)

### Community 0 - "TaskBoardView.tsx"
Cohesion: 0.23
Nodes (9): TaskBoardPanel(), KanbanImmersiveScreen(), formatRelativeTime(), STATUS_LABELS, STATUS_ORDER, stopAndGetCardId(), TaskBoardView(), TaskBoardCard (+1 more)

### Community 1 - "createAgentBootstrapOperation.ts"
Cohesion: 0.22
Nodes (11): CREATE_AGENT_DEFAULT_PERMISSIONS, CreateCompletion, CreatedAgent, resolveBootstrapErrorMessage(), runCreateAgentBootstrapOperation(), buildBootstrapGlobalErrorMessage(), buildBootstrapModalErrorMessage(), buildMissingCreatedAgentMessage() (+3 more)

### Community 2 - "runtimeEventBridge.ts"
Cohesion: 0.06
Nodes (67): extractReasoningBody(), hasReasoningSignal(), hasUnclosedThinkingTag(), isReasoningOnlyAssistantChunk(), normalizeReasoningComparable(), planRuntimeAgentEvent(), resolveThinkingFromAgentStream(), RuntimeAgentWorkflowResult (+59 more)

### Community 3 - "toWorld"
Cohesion: 0.10
Nodes (50): DOOR_LENGTH, DOOR_THICKNESS, SCALE, WALL_THICKNESS, getItemBaseSize(), getItemRotationRadians(), toWorld(), buildFurnitureItemMatrix() (+42 more)

### Community 4 - "OfficeScreen.tsx"
Cohesion: 0.04
Nodes (68): buildGenerateCompanyPlanPrompt(), buildImproveCompanyBriefPrompt(), HQSidebar(), HQSidebarProps, HQSidebarTab, PRIMARY_TABS, TAB_LABELS, formatRelativeTime() (+60 more)

### Community 5 - "navigation.ts"
Cohesion: 0.06
Nodes (48): CANVAS_H, CANVAS_W, MIN_WALL_LENGTH, SNAP_GRID, DEFAULT_BEDROOM_ITEMS, materializeDefaults(), getItemBounds(), ITEM_FOOTPRINT (+40 more)

### Community 6 - "GatewayClient.ts"
Cohesion: 0.08
Nodes (36): Reconnects And Retries, Studio Settings (Where Gateway URL/Token Come From), EventHandler, formatGatewayError(), GapHandler, gatewayDebugLog(), GatewayFrame, GatewayStateVersion (+28 more)

### Community 7 - "hermes-gateway-adapter.js"
Cohesion: 0.10
Nodes (17): activeRuns, activeSendEventFns, ADAPTER_PORT, AGENT_FILES_STORE, agentFiles, agentRegistry, AGENTS_REGISTRY_FILE, conversationHistory (+9 more)

### Community 8 - "RetroOffice3D.tsx"
Cohesion: 0.05
Nodes (64): SettingsPanel(), SettingsPanelProps, Bubble(), PhoneBoothImmersiveScreen(), PhoneCallStep, sourceTone(), StandupImmersiveScreen(), AGENT_RADIUS (+56 more)

### Community 9 - "presentation.ts"
Cohesion: 0.13
Nodes (25): AgentSkillsSetupModalProps, READINESS_CLASSES, READINESS_LABELS, SkillSetupMessage, AgentSkillsAccessMode, buildSkillReasons(), canRemoveSkill(), canRemoveSkillSource() (+17 more)

### Community 10 - "furniture.tsx"
Cohesion: 0.07
Nodes (33): @react-three/drei, @react-three/fiber, PING_PONG_BALL_RADIUS, PING_PONG_TABLE_SURFACE_Y, FURNITURE_ROTATION, OfficeAgent, RenderAgent, FURNITURE_GLB (+25 more)

### Community 11 - "useUsageAnalytics.ts"
Cohesion: 0.07
Nodes (61): AnalyticsPanel(), DatePickerField(), formatBudgetInput(), formatDuration(), formatPercent(), openNativeDatePicker(), parseBudgetInput(), StatCard() (+53 more)

### Community 12 - "resolveStateDir"
Cohesion: 0.08
Nodes (38): contentTypeFromName(), GET(), runtime, uploadsDir(), ALLOWED_CONTENT_TYPES, ALLOWED_EXTENSIONS, CONTENT_TYPE_BY_EXT, isTextContentType() (+30 more)

### Community 13 - "agentConfig.ts"
Cohesion: 0.07
Nodes (52): How Studio Chooses the Default Workspace Path, Runtime Tool Groups Used By Capability Updates, Studio -> Gateway: “Create Agent” End-to-End, Studio: Where “Permissions” Are Chosen, AgentHeartbeat, AgentHeartbeatActiveHours, AgentHeartbeatResult, AgentHeartbeatSummary (+44 more)

### Community 14 - "Step-by-Step Tasks"
Cohesion: 0.07
Nodes (32): Architecture / Proposed Approach, Current Context / Assumptions, Goal, Plan: Custom Color Support untuk Avatar 3D di Claw3D, Risks, Tradeoffs, and Open Questions, Step-by-Step Tasks, Task 1 — TDD: Unit Test untuk Glb Palette Texture Generator, Task 2 — Implementasi Modul `glbPaletteTexture.ts` (+24 more)

### Community 15 - "gatewayRuntimeEventHandler.ts"
Cohesion: 0.08
Nodes (48): createGatewayRuntimeEventHandler(), findAgentByRunId(), GatewayRuntimeEventHandler, GatewayRuntimeEventHandlerDeps, resolveRole(), AgentEventPayload, dedupeRunLines(), resolveAssistantCompletionTimestamp() (+40 more)

### Community 16 - "gatewayClient.reconnect-recovery.test.ts"
Cohesion: 0.22
Nodes (4): GatewayBrowserClient, instances, MockClientOptions, MockInstance

### Community 17 - "gatewayRestartPolicy.ts"
Cohesion: 0.14
Nodes (16): ConfigMutationGateInput, shouldStartNextConfigMutation(), GatewayStatus, observeGatewayRestart(), RestartObservation, ActiveConfigMutation, ConfigMutationKind, mutationRequiresIdleAgents() (+8 more)

### Community 18 - "Permissions, Sandboxing, and Workspaces (Studio -> Gateway -> PI)"
Cohesion: 0.10
Nodes (19): Capabilities Permissions Updates, Debug Checklist (When Something Feels “Wrong”), Glossary, Hard Enforcement: Filesystem Tool Root Guard, Mental Model (First Principles), One-Shot Sandbox Tool Policy Repair, OpenClaw (Upstream): Sandbox Semantics, OpenClaw (Upstream): Tool Availability and `workspaceAccess=ro` (+11 more)

### Community 19 - "furnitureDefaults.ts"
Cohesion: 0.06
Nodes (62): createFurnitureSignature(), DEFAULT_ART_ROOM_ITEMS, DEFAULT_ATM_MACHINE, DEFAULT_DINING_ITEMS, DEFAULT_FURNITURE, DEFAULT_GYM_ITEMS, DEFAULT_JUKEBOX, DEFAULT_KANBAN_BOARD (+54 more)

### Community 20 - "useStudioOfficePreference.ts"
Cohesion: 0.53
Nodes (5): useStudioOfficePreference(), UseStudioOfficePreferenceParams, defaultStudioOfficePreferencePublic(), resolveOfficePreferencePublic(), StudioOfficePreferencePublic

### Community 21 - "handleMethod"
Cohesion: 0.31
Nodes (10): buildAgentSystemMessages(), clearHistory(), execDelegateTask(), execDismissAgent(), execListTeam(), execReadAgentContext(), executeToolCall(), getHistory() (+2 more)

### Community 22 - "claw3doctor.mjs"
Cohesion: 0.12
Nodes (44): checkFail(), checkPass(), checkWarn(), detectHermesModelHealth(), detectOpenClawVersion(), detectWorkspaceState(), formatErrorMessage(), loadDotenvFile() (+36 more)

### Community 23 - "agentPermissionsOperation.ts"
Cohesion: 0.11
Nodes (33): OpenClaw (Upstream): Exec Approvals (Policy + Events), AgentRuntimeConfigContext, coerceStringArray(), ExecutionRoleId, isPermissionsCustom(), isRecord(), resolveAgentPermissionsDraft(), resolveAgentRuntimeConfigContext() (+25 more)

### Community 24 - "AgentSkillsPanel.tsx"
Cohesion: 0.12
Nodes (21): 9) Gateway API surface for skills, AgentSkillsPanel(), AgentSkillsPanelProps, DISPLAY_CLASSES, DISPLAY_LABELS, FILTERS, resolveHint(), SkillRowFilter (+13 more)

### Community 25 - "GatewayClient"
Cohesion: 0.06
Nodes (31): GatewayClient, GatewayConnectionState, GatewayConnectOptions, GatewayGapInfo, GatewayStatus, parseConnectFailedCloseReason(), createRuntimeProvider(), DEMO_RUNTIME_CAPABILITIES (+23 more)

### Community 26 - "remove-gateway.ts"
Cohesion: 0.30
Nodes (10): buildSkillRemovalMessage(), escapeForJsonString(), normalizeRequired(), removeSkillViaGatewayAgent(), resolveAllowedRoot(), resolveMainKey(), resolveRemovalWorkspace(), resolveRunId() (+2 more)

### Community 27 - "settings.ts"
Cohesion: 0.07
Nodes (82): coerceString(), DEFAULT_REMOTE_OFFICE_SOURCE_KIND, defaultFocusedPreference(), defaultStudioStandupJiraConfig(), defaultStudioStandupManualEntry(), defaultStudioStandupPreference(), defaultStudioStandupScheduleConfig(), FloorRuntimeConnectionStatus (+74 more)

### Community 28 - "github.ts"
Cohesion: 0.16
Nodes (27): GET(), parsePullRequestNumber(), POST(), ReviewRequestBody, runtime, extractCommandMessage(), getGitHubAuthState(), GitHubAuthState (+19 more)

### Community 29 - "district.ts"
Cohesion: 0.08
Nodes (34): GYM_ROOM_WIDTH, WORLD_H, WORLD_W, CITY_PATH_ZONE, clampPointToZone(), clampZoneValue(), DISTRICT_CAMERA_POSITION, DISTRICT_CAMERA_TARGET (+26 more)

### Community 30 - "QA Department Spec"
Cohesion: 0.05
Nodes (40): Agent Interaction Model, Approval-Aware Review, Approvals, Approved, Blocked, Bug Triage, Bulletin Board, Changes Requested (+32 more)

### Community 31 - "QA Department Spec"
Cohesion: 0.05
Nodes (40): Agent Interaction Model, Approval-Aware Review, Approvals, Approved, Blocked, Bug Triage, Bulletin Board, Changes Requested (+32 more)

### Community 32 - "mutationLifecycleWorkflow.ts"
Cohesion: 0.09
Nodes (29): AgentCreateModalSubmitPayload, AgentConfigMutationLifecycleDeps, AgentConfigMutationLifecycleKind, assertMutationKind(), AwaitingRestartPatch, buildConfigMutationFailureMessage(), buildMutatingMutationBlock(), buildMutationSideEffectCommands() (+21 more)

### Community 33 - "eventTriggers.ts"
Cohesion: 0.10
Nodes (32): How Office Motion Works, applyHoldDirective(), BooleanByAgentId, buildOfficeAnimationState(), clearOfficeAnimationTriggerHold(), createOfficeAnimationTriggerState(), emptyObject(), isUserLikeChatRole() (+24 more)

### Community 34 - "floors.ts"
Cohesion: 0.09
Nodes (39): Floor Registry Slice, Immediate Implementation Checklist, Per-Floor Runtime State Slice, Phase 1: Floor Registry, Roster Slice, UI Shell Slice, OfficeFloorNav(), OfficeFloorNavProps (+31 more)

### Community 35 - "coordinator.ts"
Cohesion: 0.07
Nodes (36): fetchJson(), AnalyticsPatch, AvatarsPatch, createStudioSettingsCoordinator(), DeskAssignmentsPatch, fetchStudioSettings(), FocusedPatch, mergeAnalyticsPatch() (+28 more)

### Community 36 - "Agent State Model Spec"
Cohesion: 0.05
Nodes (38): Agent State Model Spec, Blocked, Bulletin Board, Core Principle, Degraded, Desk Progression / Hierarchy, Error, Existing Code Seams (+30 more)

### Community 37 - "package.json"
Cohesion: 0.06
Nodes (41): eslintConfig, devDependencies, eslint@^9, eslint-config-next@16.1.6, eslint-config-prettier@^10.1.8, jsdom@^27.4.0, @playwright/test@^1.58.0, selfsigned@^5.5.0 (+33 more)

### Community 38 - "Desk Progression Spec"
Cohesion: 0.05
Nodes (37): Agent Interaction Model, Bulletin Board / Whiteboard, Contractor, Contractor Desk, Core Principle, Desk Progression Spec, Employee, Employee Desk (+29 more)

### Community 39 - "Desk Progression Spec"
Cohesion: 0.05
Nodes (37): Agent Interaction Model, Bulletin Board / Whiteboard, Contractor, Contractor Desk, Core Principle, Desk Progression Spec, Employee, Employee Desk (+29 more)

### Community 40 - "execApprovalRunControlOperation.ts"
Cohesion: 0.08
Nodes (30): AutoResumeIntent, ExecApprovalIngressCommand, ExecApprovalPendingSnapshot, PauseRunIntent, planAutoResumeIntent(), planIngressCommands(), planPausedRunMapCleanup(), planPauseRunIntent() (+22 more)

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
Cohesion: 0.11
Nodes (31): GET(), PUT(), readGatewayUrl(), runtime, POST(), runtime, GET(), isPatch() (+23 more)

### Community 49 - "AgentChatPanel.tsx"
Cohesion: 0.07
Nodes (41): Action details:, Task 5: Session List UI, Session Switcher, and Delete Session Button, Verification command:, AgentAvatar(), AgentChatComposer, AgentChatFinalItems, AgentChatPanel(), AgentChatPanelProps (+33 more)

### Community 50 - "planning.ts"
Cohesion: 0.11
Nodes (32): CommandModeId, CreatedAgentRecord, runCompanyBootstrapOperation(), buildCompanyRolePermissionsDraft(), buildCompanyAgentBlueprints(), buildRoleAgentsMarkdown(), buildRoleHeartbeatMarkdown(), buildRoleIdentity() (+24 more)

### Community 51 - "spotify-jukebox/store.ts"
Cohesion: 0.09
Nodes (47): BrowserJukeboxCommand, BrowserJukeboxExecutionResult, executeBrowserJukeboxCommand(), normalize(), parseBrowserJukeboxCommand(), stripPlayPrefix(), base64urlEncode(), buildRedirectUri() (+39 more)

### Community 52 - "Meeting Room Workflow Spec"
Cohesion: 0.06
Nodes (33): Agent Interaction Model, Archived, Bulletin Board Integration, Complete, Core Principle, Decision, Existing Code Seams, Existing Foundation (+25 more)

### Community 53 - "Meeting Room Workflow Spec"
Cohesion: 0.06
Nodes (33): Agent Interaction Model, Archived, Bulletin Board Integration, Complete, Core Principle, Decision, Existing Code Seams, Existing Foundation (+25 more)

### Community 54 - "standup/store.ts"
Cohesion: 0.17
Nodes (18): GET(), PUT(), runtime, advanceStandupMeeting(), startStandupSpeaker(), updateStandupArrivals(), defaultStore(), ensureDirectory() (+10 more)

### Community 55 - "shared-store.ts"
Cohesion: 0.15
Nodes (27): DELETE(), errorJson(), GET(), isRecord(), json(), PUT(), isTaskBoardSource(), isTaskBoardStatus() (+19 more)

### Community 56 - "profile.ts"
Cohesion: 0.10
Nodes (30): AgentAvatarEditorPanelHandle, AgentAvatarEditorPanelProps, AGENT_AVATAR_BOTTOM_STYLE_OPTIONS, AGENT_AVATAR_CLOTHING_COLOR_OPTIONS, AGENT_AVATAR_GENDER_OPTIONS, AGENT_AVATAR_HAIR_COLOR_OPTIONS, AGENT_AVATAR_HAIR_STYLE_OPTIONS, AGENT_AVATAR_HAT_STYLE_OPTIONS (+22 more)

### Community 57 - "Implementation Plan: Claw3D Chat Bubbles, 3D Speech Popup, Multi-Session Management, and Dismissal"
Cohesion: 0.13
Nodes (15): Action details:, Action details:, Action details:, Action details:, Action details:, Step-by-Step Tasks, Task 1: Compact Chat Bubble Styling in CSS and AgentChatPanel, Task 2: Compact Font Size and Popup Speech Bubble Over 3D Avatar (+7 more)

### Community 58 - "constants.ts"
Cohesion: 0.07
Nodes (36): AGENT_SCALE, ATM_MIGRATION_KEY, BUMP_RECOVERY_MS, DESK_STICKY_MS, EAST_HALL_WIDTH, EAST_WING_DOOR_Y, EAST_WING_ROOM_HEIGHT, EAST_WING_ROOM_TOP_Y (+28 more)

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
Cohesion: 0.10
Nodes (29): applyThemePreset(), getPreferredThemePreset(), THEME_OPTIONS, THEME_PRESET_STORAGE_KEY, THEME_STORAGE_KEY, ThemeMode, ThemeOption, ThemePreset (+21 more)

### Community 63 - "historySyncOperation.ts"
Cohesion: 0.13
Nodes (21): buildHistoryMetadataPatch(), HistoryRequestIntent, HistoryResponseDisposition, resolveHistoryFetchLimit(), resolveHistoryRequestIntent(), resolveHistoryResponseDisposition(), areStringArraysEqual(), ChatHistoryMessage (+13 more)

### Community 64 - "useAgentSettingsMutationController.ts"
Cohesion: 0.08
Nodes (43): CRON_ACTION_BUSY_MESSAGE, CronBusyState, CronCreateDeps, isCronActionBusy(), performCronCreateFlow(), resolveCreateAgentId(), resolveCreateErrorMessage(), useAgentSettingsMutationController() (+35 more)

### Community 65 - "with"
Cohesion: 0.06
Nodes (31): env, IMAGE_BASENAME, REGISTRY, jobs, publish, name, contents, packages (+23 more)

### Community 66 - "browser-preview/route.ts"
Cohesion: 0.09
Nodes (30): getFreePort(), main(), sleep(), BrowserOpenResponse, browserRequest(), BrowserScreenshotResponse, BrowserTab, BrowserTabsResponse (+22 more)

### Community 67 - "execApprovalRuntimeCoordinator.ts"
Cohesion: 0.12
Nodes (24): GatewayClientLike, resolveExecApprovalViaStudio(), SetState, applyApprovalIngressEffects(), ApprovalIngressResult, ApprovalPauseRequest, ApprovalPendingState, AutoResumeDispatchIntent (+16 more)

### Community 68 - "schema.ts"
Cohesion: 0.11
Nodes (31): asBoolean(), asNumber(), asString(), defaultLayers(), isRecord(), normalizeAmbiencePreset(), normalizeDeskAssignments(), normalizeInteractionKind() (+23 more)

### Community 69 - "normalizeCommandText"
Cohesion: 0.22
Nodes (17): resolveOfficeCallDirective(), resolveOfficeTextDirective(), applyUserMessageTriggers(), buildPhoneCallDirectiveKey(), buildStableLatestRequestSeed(), buildTextMessageDirectiveKey(), createPhoneCallRequest(), createTextMessageRequest() (+9 more)

### Community 70 - "demo-gateway-adapter.js"
Cohesion: 0.13
Nodes (19): activeRuns, activeSendEventFns, ADAPTER_PORT, agentListPayload(), agents, broadcastEvent(), buildDemoReply(), clearHistory() (+11 more)

### Community 71 - "multiavatar.ts"
Cohesion: 0.33
Nodes (8): AVATAR_ACCENTS, AVATAR_FOREGROUNDS, AVATAR_PALETTE, buildAvatarDataUrl(), buildAvatarLabel(), buildAvatarSvg(), hashSeed(), pick()

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
Cohesion: 0.14
Nodes (23): addDays(), buildCronJobCreateInput(), formatterCache, getFormatter(), resolveAgentId(), resolveAtSchedule(), resolveEverySchedule(), resolveName() (+15 more)

### Community 78 - "personalityBuilder.ts"
Cohesion: 0.17
Nodes (21): AgentFilesInput, cleanLabel(), cleanValue(), IDENTITY_PLACEHOLDER_VALUES, isIdentityPlaceholder(), isSectionHeading(), isUserContextPlaceholder(), isUserPlaceholder() (+13 more)

### Community 79 - "ref_node_path"
Cohesion: 0.08
Nodes (16): contents, destPath, repoRoot, isPathInside(), normalizeRequiredPath(), removeSkillLocally(), resolveAllowedRoot(), resolveComparablePath() (+8 more)

### Community 80 - "Runtime Profile Architecture"
Cohesion: 0.08
Nodes (25): 1. `docs: runtime profile architecture`, 2. `feat: claw3doctor`, 3. `refactor: office shell modularization`, 4. `docs: floor schema and builder plan`, 5. `feat: admin floor builder`, Branch Sequence, Core Terms, Custom Runtime Position (+17 more)

### Community 81 - "dependencies"
Cohesion: 0.08
Nodes (25): dependencies, canvas-confetti@^1.9.4, class-variance-authority@^0.7.1, clsx@^2.1.1, lucide-react@^0.563.0, next@16.1.7, @noble/ed25519@^3.0.0, react@19.2.3 (+17 more)

### Community 82 - "GatewayBrowserClient.ts"
Cohesion: 0.07
Nodes (38): base64UrlDecode(), base64UrlEncode(), buildDeviceAuthPayload(), buildScopedTokenKey(), bytesToHex(), clearDeviceAuthToken(), CryptoLike, DeviceAuthEntry (+30 more)

### Community 83 - "Office Systems Roadmap"
Cohesion: 0.08
Nodes (24): Agent State Model, Bulletin Board, Candidate Feature Order, Core Direction, Departments, Design Principles, Desk / CPU Progression, Hierarchy (+16 more)

### Community 84 - "OfficePhaserCanvas.tsx"
Cohesion: 0.14
Nodes (15): phaser@^3.90.0, phaser, OfficePhaserCanvas(), OfficePhaserCanvasProps, createOfficeBuilderScene(), OfficeBuilderRenderable, createOfficeSceneBridge(), OfficeDebugSettings (+7 more)

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

### Community 94 - "useTaskBoardController.ts"
Cohesion: 0.17
Nodes (29): RunRecord, buildActiveRunOptions(), buildCardFromExplicitEvent(), buildCardFromGatewayTask(), buildCardFromSharedTaskRecord(), buildPlaybookCards(), buildStandupSeedCards(), cardTextKey() (+21 more)

### Community 95 - "agentFleetHydrationDerivation.ts"
Cohesion: 0.12
Nodes (24): AgentsListResult, DerivedHydrateAgentFleetResult, DeriveFleetHydrationInput, deriveHydrateAgentFleetResult(), ExecApprovalsSnapshot, ExecAsk, ExecHost, ExecPolicyEntry (+16 more)

### Community 96 - "runtimeEventBridge.ts"
Cohesion: 0.08
Nodes (32): RuntimeAgentWorkflowCommand, RuntimeAgentWorkflowInput, planRuntimeChatEvent(), resolveTerminalSeq(), RuntimeChatWorkflowCommand, RuntimeChatWorkflowInput, RuntimeChatWorkflowResult, summarizeThinkingMessage() (+24 more)

### Community 97 - "StudioSettingsCoordinator"
Cohesion: 0.18
Nodes (7): StudioSettingsCoordinator, defaultStudioFloorRuntimeState(), defaultStudioSettings(), resolveStudioActiveFloorId(), resolveStudioFloorRuntimeState(), StudioSettingsPatch, makeCoordinator()

### Community 98 - "PI + Chat Streaming (Studio Side)"
Cohesion: 0.08
Nodes (24): Connect failures, Connect handshake, Debugging Checklist (When Chat “Feels Buggy”), End-To-End Flow (PI Run -> UI), `event: "agent"` payload, `event: "chat"` payload, Exec Approvals In Chat (Related To “PI Runs”), High-Level Network Path (+16 more)

### Community 99 - "agents/agentFiles.ts"
Cohesion: 0.16
Nodes (17): AgentFilesState, useAgentFilesEditor(), UseAgentFilesEditorResult, AGENT_FILE_NAMES, AgentFileName, createAgentFilesState(), isAgentFileName(), PERSONALITY_FILE_LABELS (+9 more)

### Community 100 - "agentMessaging.ts"
Cohesion: 0.24
Nodes (10): buildAgentHandoffInstruction(), buildDirectedAgentMessageInstruction(), GatewayAgentsListResult, GatewayCallLike, resolveLabel(), resolveSessionKeyFromAgentList(), RuntimeAgentHandoffPayload, RuntimeAgentMessagePayload (+2 more)

### Community 101 - "Step-by-step tasks"
Cohesion: 0.08
Nodes (24): Architecture / proposed approach, Current context / assumptions, Files touched, Goal, Plan: Run Claw3D natively on the host (drop Docker), keep kerja.besoksenin.web.id, Risks, tradeoffs, open questions, Step-by-step tasks, Task 0: Graphify read and baseline snapshot (2 min) (+16 more)

### Community 102 - "buildAgentMainSessionKey"
Cohesion: 0.20
Nodes (16): runtime, SummaryPreviewSnapshot, SummaryStatusSnapshot, normalizeRemoteGatewayUrl(), useRemoteOfficePresence(), UseRemoteOfficePresenceParams, UseRemoteOfficePresenceResult, buildAgentMainSessionKey() (+8 more)

### Community 103 - "Custom Runtime Provider Spec"
Cohesion: 0.09
Nodes (21): Capability Philosophy, Core Principle, Current Branch Status, Custom Metadata Surface, Custom Runtime Provider Spec, Event Model, Goal, Implementation Strategy (+13 more)

### Community 104 - "AgentSettingsPanel.tsx"
Cohesion: 0.13
Nodes (19): AgentBrainPanelProps, AgentInspectHeader(), AgentInspectHeaderProps, AgentSettingsPanel(), AgentSettingsPanelProps, applyTemplateDefaults(), arePermissionsDraftEqual(), createInitialCronDraft() (+11 more)

### Community 105 - "service.ts"
Cohesion: 0.10
Nodes (33): buildJiraSearchUrl(), buildSourceState(), buildSpeech(), buildStandupMeeting(), coerceText(), dedupePullRequests(), expandRange(), getZonedDateParts() (+25 more)

### Community 106 - "README.md"
Cohesion: 0.10
Nodes (10): Roadmap, Current Security Limitations, Deployment Notes, Reporting A Vulnerability, Scope, Security Policy, Maintainer Contact Notes, Public Help (+2 more)

### Community 107 - "transcript.ts"
Cohesion: 0.07
Nodes (47): Action, AgentStoreContext, AgentStoreContextValue, agentStoreReducer, AgentStoreSeed, AgentStoreState, areStringArraysEqual(), createRuntimeAgentState() (+39 more)

### Community 108 - "Universal Backend Plan"
Cohesion: 0.10
Nodes (20): Capability Matrix, Core Adapter Contract, Event Model, Hermes Provider, High-Value PR Split, Near-Term Guidance For Luke, OpenClaw Provider, PR 1: Runtime Abstraction (+12 more)

### Community 109 - "GatewayResponseError"
Cohesion: 0.07
Nodes (33): extractImmediateAssistantText(), GatewayClientLike, resolveChatSendCompletionMode(), resolveLatestTranscriptTimestampMs(), sendChatMessageViaStudio(), SendDispatch, SendDispatchAction, AgentSessionState (+25 more)

### Community 110 - "useAgentSettingsMutationController.ts"
Cohesion: 0.12
Nodes (19): AgentSettingsMutationContext, AgentSettingsMutationDecision, AgentSettingsMutationDenyReason, AgentSettingsMutationRequest, CronActionKind, GuardedActionKind, isCronActionBusy(), isGuardedAction() (+11 more)

### Community 111 - "Architecture"
Cohesion: 0.10
Nodes (20): 1. Gateway-owned state, 2. Studio-owned local state, 3. Client-server boundary, 4. Browser-gateway boundary, Agent runtime flow, Architecture, Connection flow, Constraints (+12 more)

### Community 112 - "Custom Provider Reference"
Cohesion: 0.10
Nodes (19): Agent Mapping, Capability Profile, Current Implementation Notes, Custom Provider Reference, Event Mapping, Explicit Non-Goals, Goal, Position (+11 more)

### Community 113 - "lucide-react"
Cohesion: 0.13
Nodes (23): lucide-react, AgentsStep(), AgentsStepProps, CompanyStep(), CompanyStepProps, CompleteStep(), OnboardingWizard(), OnboardingWizardProps (+15 more)

### Community 114 - "useOfficeBuilderStore.ts"
Cohesion: 0.16
Nodes (17): OfficeBuilderPage(), nextId(), OfficeBuilderPanel(), OfficeBuilderPanelProps, BuilderAction, BuilderHistory, BuilderSelection, BuilderState (+9 more)

### Community 115 - "Code Of Conduct"
Cohesion: 0.33
Nodes (5): Code Of Conduct, Enforcement, Expected Behavior, Our Pledge, Unacceptable Behavior

### Community 116 - "Code Documentation"
Cohesion: 0.11
Nodes (19): API Route Inventory, Builder Stack, Code Documentation, Contributor Footguns, Documentation Philosophy, Folder Structure Conventions, How Desk Assignment Works, How To Add A New 3D Object (+11 more)

### Community 117 - "components.json"
Cohesion: 0.11
Nodes (18): aliases, components, hooks, lib, ui, utils, iconLibrary, registries (+10 more)

### Community 118 - "cleanup-ux-artifacts.mjs"
Cohesion: 0.12
Nodes (18): __dirname, nextConfig, securityHeaders, cleanupPlaywrightProcesses(), clearDirContents(), ensureDir(), killPattern(), main() (+10 more)

### Community 119 - "Skills in OpenClaw + Claw3D"
Cohesion: 0.11
Nodes (17): 10.1 Route and navigation model, 10.2 Skills tab data and interactions, 10.3 Mutation wiring from Studio, 10.4 Scope warning shown in Studio, 10) Claw3D UX (current behavior), 11) What recent `.agent/done` plans show, 12) UX redesign constraints that are not optional, 13) Practical mental model for reviewing a Skills screenshot (+9 more)

### Community 120 - "execApprovalLifecycleWorkflow.ts"
Cohesion: 0.12
Nodes (25): asNonEmptyString(), asOptionalString(), asPositiveTimestamp(), asRecord(), parseExecApprovalRequested(), parseExecApprovalResolved(), RequestedPayload, ResolvedPayload (+17 more)

### Community 121 - "specialLatestUpdateOperation.ts"
Cohesion: 0.18
Nodes (14): buildLatestUpdatePatch(), LatestUpdateIntent, LatestUpdateKind, resolveLatestUpdateIntent(), resolveLatestUpdateKind(), ChatHistoryMessage, ChatHistoryResult, createSpecialLatestUpdateOperation() (+6 more)

### Community 122 - "three"
Cohesion: 0.10
Nodes (16): main(), main(), main(), three, CoffeeMugProp(), GARDEN_MODELS, GardenPlanterBox(), GardenWorkspace (+8 more)

### Community 123 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 124 - "layout/route.ts"
Cohesion: 0.17
Nodes (20): fetchRemoteOfficeLayoutSnapshot(), GET(), PUT(), runtime, useRemoteOfficeLayout(), UseRemoteOfficeLayoutParams, UseRemoteOfficeLayoutResult, deriveRemoteLayoutUrlFromPresenceUrl() (+12 more)

### Community 125 - "9) Troubleshooting"
Cohesion: 0.33
Nodes (6): `401` or auth errors from Claw3D, 9) Troubleshooting, Claw3D still cannot connect after token is correct, `EPROTO` or `wrong version number`, Gateway itself is unhealthy, Tailscale URL works nowhere

### Community 126 - "vitest"
Cohesion: 0.11
Nodes (4): react, @testing-library/react, vitest, ORIGINAL_ENV

### Community 127 - "GithubImmersiveScreen.tsx"
Cohesion: 0.15
Nodes (22): getDiffLineTone(), GitHubDiffFile, ParsedDiffLine, parseDiffPatch(), FileDiffModal(), FileDiffModalProps, BrowserPreviewState, useBrowserPreview() (+14 more)

### Community 128 - "profilePortrait.ts"
Cohesion: 0.31
Nodes (11): AgentAvatarProps, AgentAvatarProfile, blendHex(), buildAgentAvatarPortraitDataUrl(), buildAgentAvatarPortraitSvg(), buildGlassesSvg(), buildHairSvg(), buildHatSvg() (+3 more)

### Community 129 - "createDefaultAgentAvatarProfile"
Cohesion: 0.20
Nodes (13): AgentAvatarCreatorModal(), AgentAvatarCreatorModalProps, AgentAvatarEditorPanel, buildRoleAvatarProfile(), CompanyBuilderModal(), CompanyBuilderModalProps, createEmptyRole(), joinCommaList() (+5 more)

### Community 130 - "studioRoute.ts"
Cohesion: 0.31
Nodes (5): @playwright/test, createStudioRoute(), DEFAULT_SETTINGS, stubStudioRoute(), StudioSettingsFixture

### Community 131 - "Step-by-step tasks"
Cohesion: 0.11
Nodes (23): Architecture / proposed approach, Claw3D — Ganti geometri male procedural dengan model GLB dari Drive, Current context / assumptions, Goal, Risks, tradeoffs, open questions, Step-by-step tasks, Task 0 — Graphify preflight (read-only), Task 10 — Visual calibration (manual, 1 iterasi) (+15 more)

### Community 132 - "SkillsMarketplacePanel.tsx"
Cohesion: 0.13
Nodes (24): SkillsMarketplaceModal(), SkillsMarketplaceModalProps, buildSearchBlob(), FILTER_LABELS, formatInstalls(), formatRating(), getAgentSkillEnabled(), MarketplaceFilter (+16 more)

### Community 133 - "agentFleetHydration.ts"
Cohesion: 0.18
Nodes (14): AgentsListResult, ExecApprovalsSnapshot, GatewayClientLike, hydrateAgentFleetFromGateway(), HydrateAgentFleetResult, isRecord(), parseIdentityNameFromContent(), resolveAgentsListFromHelloSnapshot() (+6 more)

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
Cohesion: 0.09
Nodes (44): AgentChatItem, AgentChatRenderBlock, appendThinkingTraceEvent(), AssistantTraceEvent, buildAgentChatItems(), BuildAgentChatItemsInput, buildAgentChatRenderBlocks(), buildFinalAgentChatItems() (+36 more)

### Community 141 - "useRunLog.ts"
Cohesion: 0.18
Nodes (14): findAgentBySessionKey(), formatClockTime(), formatDuration(), HistoryPanel(), TRIGGER_LABELS, findAgentForRunEvent(), resolveLifecyclePhase(), resolveRunTrigger() (+6 more)

### Community 142 - "tasks/types.ts"
Cohesion: 0.17
Nodes (15): compareCards(), sortTaskBoardCards(), TaskBoardAction, taskBoardReducer(), upsertTaskBoardCard(), defaultTaskBoardPreference(), TASK_BOARD_SOURCES, TASK_BOARD_STATUSES (+7 more)

### Community 143 - "animePresets.ts"
Cohesion: 0.16
Nodes (14): AgentAvatarGlbAnimation, CANDIDATES, Props, AnimePresetPicker(), Props, ALLOWED_AVATAR_URL_PREFIXES, ANIME_AVATAR_PRESETS, AnimeAvatarPreset (+6 more)

### Community 144 - "Creating Skills"
Cohesion: 0.14
Nodes (13): 1. Create the skill files, 2. Mirror the files into `src/lib/skills/packaged.ts`, 3. Register the skill in `src/lib/skills/catalog.ts`, 4. Add marketplace presentation metadata, 5. Understand where the files get installed, 6. Keep the example production-ready, 7. Verify your changes, Creating Skills (+5 more)

### Community 145 - "Runtime Profiles"
Cohesion: 0.14
Nodes (13): `claw3d`, Current Profiles, Current Runtime Contract, `custom`, `demo`, `hermes`, `local`, Multi-Agent Message Contract (+5 more)

### Community 146 - "useOfficeStandupController.ts"
Cohesion: 0.22
Nodes (14): everyoneArrived(), expandRange(), getZonedParts(), isMeetingActive(), matchesCronPart(), OfficeStandupController, sameScheduledMinute(), shouldRunNow() (+6 more)

### Community 147 - "RunningAvatarLoader"
Cohesion: 0.20
Nodes (13): OfficeLoadingFallback(), OfficePage(), readDebugFlag(), GatewayConnectScreen(), GatewayConnectScreenProps, resolveLocalGatewayPort(), box(), RunningAvatarLoader() (+5 more)

### Community 148 - "studio-settings.js"
Cohesion: 0.23
Nodes (12): main(), parseArgs(), tryReadGatewayTokenFromOpenclawCli(), isRecord(), LEGACY_STATE_DIRNAMES, loadUpstreamGatewaySettings(), readJsonFile(), readOpenclawGatewayDefaults() (+4 more)

### Community 149 - "next"
Cohesion: 0.10
Nodes (11): nextConfig, securityHeaders, next, runtime, CustomRuntimeRequestBody, isRuntimeUrlAllowed(), normalizeMethod(), normalizePathname() (+3 more)

### Community 150 - "useChatInteractionController.test.ts"
Cohesion: 0.15
Nodes (13): AgentIdFn, CallFn, ControllerValue, createAgent(), DispatchFn, ErrorFn, GatewayStatus, HistoryInFlightFn (+5 more)

### Community 151 - "Critical Fixes"
Cohesion: 0.17
Nodes (11): 1. Telemetry Removed, 2. Constant-Time Token Comparison, 3. Auth Rate Limiting, 4. WebSocket Frame Validation, 5. Upstream URL Allowlist, 6. Custom Runtime Proxy Allowlist, 7. Security Headers, 8. Media Route Symlink Rejection (+3 more)

### Community 152 - "nodeGatewayClient.ts"
Cohesion: 0.21
Nodes (12): asRecord(), base64UrlEncode(), buildConnectParams(), buildDeviceAuthPayload(), createDeviceIdentity(), DeviceIdentity, fingerprintPublicKey(), GATEWAY_SCOPES (+4 more)

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

### Community 157 - "gateway-proxy.js"
Cohesion: 0.30
Nodes (13): buildErrorResponse(), createFrameRateLimiter(), createGatewayProxy(), hasCompleteDeviceAuth(), hasNonEmptyDeviceToken(), hasNonEmptyPassword(), hasNonEmptyToken(), injectAuthToken() (+5 more)

### Community 158 - "gateway.ts"
Cohesion: 0.29
Nodes (10): createGatewayTask(), deleteGatewayTask(), GatewayTaskCreateInput, GatewayTaskRecord, GatewayTasksListResult, GatewayTaskUpdateInput, isUnsupportedTaskGatewayError(), listGatewayTasks() (+2 more)

### Community 159 - "clawd3d-start.sh"
Cohesion: 0.44
Nodes (8): find_free_port(), info(), log(), pids_on_port(), port_free(), port_owned_by(), clawd3d-start.sh script, warn()

### Community 160 - "loadStudioSettings"
Cohesion: 0.09
Nodes (44): isSafeAgentId(), POST(), PUT(), resolveAgentStateSshTarget(), RestoreAgentStateRequest, runtime, TrashAgentStateRequest, expandTildeLocal() (+36 more)

### Community 161 - "presence.ts"
Cohesion: 0.31
Nodes (9): asRecord(), fetchRemoteOfficePresenceSnapshot(), loadOfficePresenceSnapshot(), normalizeOfficeAgentState(), normalizeOfficePresenceSnapshot(), OfficePresenceSnapshot, resolveStateFromSeed(), stableHash() (+1 more)

### Community 162 - "install-gateway.ts"
Cohesion: 0.13
Nodes (21): appendPackagedSkillsToMarketplace(), buildPackagedSkillStatusEntry(), EMPTY_REQUIREMENTS, getPackagedSkillById(), listPackagedSkills(), PACKAGED_SKILLS, PackagedSkillId, buildInstallerMessage() (+13 more)

### Community 163 - "skills/types.ts"
Cohesion: 0.19
Nodes (14): isLikelyRootWorkspace(), loadAgentSkillStatus(), PackagedSkillInstallRequest, PackagedSkillInstallResult, resolveAgentId(), resolveWorkspaceDirFromPath(), resolveWorkspaceFromAgentFiles(), SkillInstallOption (+6 more)

### Community 164 - "deleteAgentOperation.ts"
Cohesion: 0.16
Nodes (17): deleteAgentRecordViaStudio(), DeleteAgentTransactionDeps, DeleteAgentTransactionResult, deleteAgentViaStudio(), EMPTY_TRASH_RESULT, FetchJson, GatewayAgentStateMove, RestoreAgentStateResult (+9 more)

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
Cohesion: 0.10
Nodes (29): AgentEffectsSystem, AgentEffectsSystemParams, AvatarState, stateColor(), thoughtFromSeed(), THOUGHTS, ASSET_SIZE, astar2D() (+21 more)

### Community 170 - "contact_links"
Cohesion: 0.33
Nodes (5): blank_issues_enabled, contact_links, about, name, url

### Community 171 - "loadPullRequestDetail"
Cohesion: 0.41
Nodes (14): loadPullRequestDetail(), loadPullRequestFiles(), normalizeComments(), normalizeCommits(), normalizeFiles(), normalizeLabels(), normalizeReviews(), normalizeStatusChecks() (+6 more)

### Community 172 - "handleMethod"
Cohesion: 0.26
Nodes (13): broadcastEvent(), execConfigureAgent(), execSpawnAgent(), handleMethod(), loadAgentFilesFromDisk(), randomId(), redactSecrets(), resErr() (+5 more)

### Community 173 - "Contributing"
Cohesion: 0.22
Nodes (9): Before you start, Contributing, Local setup, Minimal issue template, Minimal PR template, Pull requests, Reporting issues, Support And Routing (+1 more)

### Community 174 - "AgentAvatarPreview3D.tsx"
Cohesion: 0.17
Nodes (19): PreviewFigure(), AvatarLashes(), AvatarLegClothing(), AvatarSkirt(), Box(), Vec3, WALK_ANIM_SPEED, AgentModel (+11 more)

### Community 175 - "useChatInteractionController.ts"
Cohesion: 0.12
Nodes (21): DraftFlushIntent, DraftTimerIntent, NewSessionIntent, planDraftFlushIntent(), planDraftTimerIntent(), planNewSessionIntent(), planStopRunIntent(), StopRunIntent (+13 more)

### Community 176 - "marketplace.ts"
Cohesion: 0.31
Nodes (8): buildFallbackCapabilities(), buildFallbackMetadata(), hashString(), SKILL_MARKETPLACE_OVERRIDES, SkillMarketplaceCollectionId, SkillMarketplaceEntry, SkillMarketplaceMetadata, titleCaseWords()

### Community 177 - "ws"
Cohesion: 0.17
Nodes (4): ws@^8.18.3, ws, ws, ws

### Community 178 - "nodeGatewayClient.ts"
Cohesion: 0.18
Nodes (14): GET(), POST(), runtime, stripRemoteAgentPrefix(), AgentsListResult, POST(), resolveLatestAssistantHistoryText(), runtime (+6 more)

### Community 179 - "shared-store-client.ts"
Cohesion: 0.30
Nodes (10): archiveSharedTaskRecord(), fetchWithTimeout(), isRetryable(), listSharedTaskRecords(), parseResponse(), sleep(), TaskStoreRequestError, upsertSharedTaskRecord() (+2 more)

### Community 186 - "agentFleetHydration.ts"
Cohesion: 0.08
Nodes (47): planAwaitingUserInputPatches(), planPendingPruneDelay(), planPrunedPendingState(), runPauseRunForExecApprovalOperation(), runResolveExecApprovalOperation(), applyCreateAgentBootstrapPermissions(), executeCreateAgentBootstrapCommands(), buildQueuedMutationBlock() (+39 more)

### Community 187 - "AgentCreateModal.tsx"
Cohesion: 0.48
Nodes (5): AgentCreateModal(), AgentCreateModalContent(), AgentCreateModalProps, resolveInitialName(), openModal()

### Community 188 - "janitorReset.ts"
Cohesion: 0.47
Nodes (3): buildSessionEpochSnapshot(), resolveResetAgentIds(), SessionEpochSnapshot

### Community 189 - "access-gate.js"
Cohesion: 0.36
Nodes (5): createAccessGate(), createRateLimiter(), parseCookies(), resolveClientIp(), safeCompare()

### Community 191 - "Implementation Plan: Claw3D Chat Bubbles, 3D Speech Popup, Multi-Session Management, and Dismissal"
Cohesion: 0.25
Nodes (7): Architecture / Proposed Approach, Current Context / Assumptions, Goal, Implementation Plan: Claw3D Chat Bubbles, 3D Speech Popup, Multi-Session Management, and Dismissal, Risks, Tradeoffs, and Open Questions, Subagent Orchestration Workstream (Max 6 Subagents), Tests / Validation Plan

### Community 192 - "completeOneTurn"
Cohesion: 0.36
Nodes (8): completeOneTurn(), extractOpenAiStyleError(), fetchHermesModels(), hermesGet(), hermesPost(), readJsonBody(), resolveHermesModel(), streamOneTurn()

### Community 193 - "index.js"
Cohesion: 0.25
Nodes (14): CERT_DIR, CERT_PATH, generateHttpsCert(), KEY_PATH, main(), resolvePathname(), resolvePort(), assertPublicHostAllowed() (+6 more)

### Community 194 - "deploy-local.sh"
Cohesion: 0.40
Nodes (4): NEXT_PUBLIC_GATEWAY_URL, NEXT_TELEMETRY_DISABLED, PATH, deploy-local.sh script

### Community 196 - "Top-Level Code Map"
Cohesion: 0.29
Nodes (7): `scripts`, `server`, `src/app`, `src/features`, `src/lib`, `tests`, Top-Level Code Map

### Community 203 - "randomUUID"
Cohesion: 0.13
Nodes (22): AgentCreateWizardModal(), AgentCreateWizardModalProps, buildInitialDraft(), WizardField(), WizardStepId, wizardSteps, WizardTextAreaField(), AgentEditorModal() (+14 more)

### Community 204 - "sanitizeErrorMessage"
Cohesion: 0.31
Nodes (9): Action details:, Task 3: Backend Adapter Multi-Session Management (List, Create, Delete, Persist), Verification command:, ensureAgentHasSession(), formatSessionDisplayName(), loadAgentsFromDisk(), loadHistoryFromDisk(), saveSessionMetadataToDisk() (+1 more)

### Community 208 - "useStudioVoiceRepliesPreference.ts"
Cohesion: 0.53
Nodes (5): useStudioVoiceRepliesPreference(), UseStudioVoiceRepliesPreferenceParams, defaultStudioVoiceRepliesPreference(), resolveVoiceRepliesPreference(), StudioVoiceRepliesPreference

## Knowledge Gaps
- **3 isolated node(s):** `PATH`, `NEXT_TELEMETRY_DISABLED`, `NEXT_PUBLIC_GATEWAY_URL`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 2155 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **9 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `vitest` to `profilePortrait.ts`, `createDefaultAgentAvatarProfile`, `TaskBoardView.tsx`, `toWorld`, `OfficeScreen.tsx`, `SkillsMarketplacePanel.tsx`, `GatewayClient.ts`, `RetroOffice3D.tsx`, `presentation.ts`, `furniture.tsx`, `useUsageAnalytics.ts`, `useRunLog.ts`, `animePresets.ts`, `gatewayRestartPolicy.ts`, `useOfficeStandupController.ts`, `RunningAvatarLoader`, `useStudioOfficePreference.ts`, `useChatInteractionController.test.ts`, `AgentSkillsPanel.tsx`, `GatewayClient`, `district.ts`, `floors.ts`, `package.json`, `layout.tsx`, `AgentAvatarPreview3D.tsx`, `useChatInteractionController.ts`, `AgentChatPanel.tsx`, `spotify-jukebox/store.ts`, `profile.ts`, `agentFleetHydration.ts`, `AgentCreateModal.tsx`, `triggers.ts`, `colorSemantics.ts`, `useAgentSettingsMutationController.ts`, `browser-preview/route.ts`, `models.ts`, `randomUUID`, `useStudioVoiceRepliesPreference.ts`, `dependencies`, `OfficePhaserCanvas.tsx`, `AgentState`, `settingsRouteWorkflow.ts`, `useTaskBoardController.ts`, `agents/agentFiles.ts`, `buildAgentMainSessionKey`, `AgentSettingsPanel.tsx`, `transcript.ts`, `useAgentSettingsMutationController.ts`, `lucide-react`, `useOfficeBuilderStore.ts`, `execApprovalLifecycleWorkflow.ts`, `three`, `layout/route.ts`, `GithubImmersiveScreen.tsx`?**
  _High betweenness centrality (0.082) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `OfficeScreen()` (e.g. with `Current Post-Merge Sequence` and `Immediate Next Deliverables`) actually correct?**
  _`OfficeScreen()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `PATH`, `NEXT_TELEMETRY_DISABLED`, `NEXT_PUBLIC_GATEWAY_URL` to the rest of the system?**
  _3 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `runtimeEventBridge.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.062342342342342344 - nodes in this community are weakly interconnected._
- **Why does `vitest` connect `vitest` to `TaskBoardView.tsx`, `createAgentBootstrapOperation.ts`, `runtimeEventBridge.ts`, `navigation.ts`, `GatewayClient.ts`, `RetroOffice3D.tsx`, `presentation.ts`, `agentConfig.ts`, `Step-by-Step Tasks`, `gatewayRuntimeEventHandler.ts`, `gatewayClient.reconnect-recovery.test.ts`, `gatewayRestartPolicy.ts`, `claw3doctor.mjs`, `agentPermissionsOperation.ts`, `remove-gateway.ts`, `settings.ts`, `mutationLifecycleWorkflow.ts`, `floors.ts`, `coordinator.ts`, `package.json`, `execApprovalRunControlOperation.ts`, `deskDirectives.ts`, `settings-store.ts`, `AgentChatPanel.tsx`, `planning.ts`, `standup/store.ts`, `shared-store.ts`, `profile.ts`, `constants.ts`, `triggers.ts`, `colorSemantics.ts`, `historySyncOperation.ts`, `useAgentSettingsMutationController.ts`, `browser-preview/route.ts`, `execApprovalRuntimeCoordinator.ts`, `demo-gateway-adapter.js`, `multiavatar.ts`, `models.ts`, `voiceTranscription.ts`, `createPayloadBuilder.ts`, `ref_node_path`, `GatewayBrowserClient.ts`, `AgentState`, `settingsRouteWorkflow.ts`, `useTaskBoardController.ts`, `agentFleetHydrationDerivation.ts`, `runtimeEventBridge.ts`, `StudioSettingsCoordinator`, `agents/agentFiles.ts`, `AgentSettingsPanel.tsx`, `transcript.ts`, `GatewayResponseError`, `useAgentSettingsMutationController.ts`, `lucide-react`, `cleanup-ux-artifacts.mjs`, `execApprovalLifecycleWorkflow.ts`, `specialLatestUpdateOperation.ts`, `createDefaultAgentAvatarProfile`, `SkillsMarketplacePanel.tsx`, `agentFleetHydration.ts`, `chatItems.ts`, `useRunLog.ts`, `animePresets.ts`, `studio-settings.js`, `next`, `useChatInteractionController.test.ts`, `gateway.ts`, `loadStudioSettings`, `install-gateway.ts`, `deleteAgentOperation.ts`, `pathfinding.ts`, `AgentAvatarPreview3D.tsx`, `useChatInteractionController.ts`, `ws`, `agentFleetHydration.ts`, `AgentCreateModal.tsx`, `janitorReset.ts`, `access-gate.js`, `index.js`, `GatewayBrowserClient`?**
  _High betweenness centrality (0.082) - this node is a cross-community bridge._
- **Should `toWorld` be split into smaller, more focused modules?**
  _Cohesion score 0.10412299091544375 - nodes in this community are weakly interconnected._
- **Why does `Code Documentation` connect `Code Documentation` to `eventTriggers.ts`, `README.md`, `Top-Level Code Map`?**
  _High betweenness centrality (0.040) - this node is a cross-community bridge._