# Graph Report - claw3d  (2026-10-25)

## Corpus Check
- 602 files · ~450,319 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 37 file(s) not represented in the graph (top: .glb 25, (none) 6, .service 2)

## Summary
- 5253 nodes · 12320 edges · 201 communities (190 shown, 11 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 195 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `f32634ae`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- useTaskBoardController.ts
- CompanyBuilderModal.tsx
- useAgentSettingsMutationController.ts
- toWorld
- OfficeScreen.tsx
- navigation.ts
- GatewayClient.ts
- hermes-gateway-adapter.js
- RetroOffice3D.tsx
- media/route.ts
- service.ts
- useUsageAnalytics.ts
- presentation.ts
- agentConfig.ts
- message-extract.ts
- gatewayRuntimeEventHandler.ts
- GatewayClient
- chatSendOperation.ts
- Permissions, Sandboxing, and Workspaces (Studio -> Gateway -> PI)
- furnitureDefaults.ts
- agents.tsx
- settings.ts
- claw3doctor.mjs
- agentPermissionsOperation.ts
- AgentState
- chatItems.ts
- GatewayClient
- skills/types.ts
- github.ts
- constants.ts
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
- cron/types.ts
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
- furniture.tsx
- shared-store.ts
- profile.ts
- runtimeEventBridge.ts
- district.ts
- triggers.ts
- Hierarchy And Teams Spec
- Hierarchy And Teams Spec
- colorSemantics.ts
- runtimeChatEventWorkflow.ts
- store.tsx
- with
- browser-preview/route.ts
- GatewayResponseError
- schema.ts
- normalizeCommandText
- execApprovalControlLoopWorkflow.ts
- standup/store.ts
- models.ts
- Claw3Doctor Spec
- Multi-Agent Beta
- voiceTranscription.ts
- office/store.ts
- createPayloadBuilder.ts
- AgentsPageScreen
- resolveStateDir
- Runtime Profile Architecture
- dependencies
- GatewayBrowserClient.ts
- Office Systems Roadmap
- OfficePhaserCanvas.tsx
- Katalog Referensi Warna Avatar 3D GLB
- useRuntimeSyncController.ts
- settingsRouteWorkflow.ts
- CustomRuntimeProvider
- Step-by-step tasks
- Claw3D + OpenClaw + Tailscale Setup Tutorial
- [0.1.4] - 2026-04-23
- Claw3D — A 3D Workspace for AI Agents
- SmsBoothImmersiveScreen.tsx
- agents/agentFiles.ts
- agentFleetHydrationDerivation.ts
- index.js
- tasks/types.ts
- PI + Chat Streaming (Studio Side)
- demo-gateway-adapter.js
- runtime/types.ts
- Step-by-step tasks
- personalityBuilder.ts
- Custom Runtime Provider Spec
- AgentSettingsPanel.tsx
- standup/types.ts
- README.md
- useRunLog.ts
- Universal Backend Plan
- GatewayBrowserClient
- pathfinding.ts
- Architecture
- Custom Provider Reference
- lucide-react
- useOfficeBuilderStore.ts
- StudioSettingsCoordinator
- Code Documentation
- components.json
- cleanup-ux-artifacts.mjs
- Skills in OpenClaw + Claw3D
- createAgentBootstrapOperation.ts
- gateway.ts
- marketplace.ts
- compilerOptions
- layout/route.ts
- run/route.ts
- handleMethod
- presence.ts
- gatewayReloadMode.ts
- chatSendOperation.ts
- studioRoute.ts
- ref_node_path
- SkillsMarketplacePanel.tsx
- react
- Hermes Gateway Adapter
- Agent Bus Integration
- scripts
- PR89.md
- call/mock.ts
- voiceReply/provider.ts
- deskMonitor.ts
- agentSettingsMutationWorkflow.ts
- useConfigMutationQueue.ts
- animePresets.ts
- Creating Skills
- Runtime Profiles
- useOfficeStandupController.ts
- install-gateway.ts
- mutationLifecycleWorkflow.integration.test.ts
- RunningAvatarLoader
- execApprovals.ts
- Critical Fixes
- MonitorImmersiveContent.tsx
- AmbienceSystem.ts
- Claw3D Vision
- Task Manager
- TODO Board
- studioBootstrapWorkflow.ts
- runtimeAgentEventWorkflow.test.ts
- clawd3d-start.sh
- media/route.ts
- Plan: Fix 3D Anime Character Size in Claw3D Retro Office
- ws
- vitest
- gatewayClient.reconnect-recovery.test.ts
- Cursor Cloud specific instructions
- OpenClaw Gateway Skill Contract
- Roadmap
- upload/route.ts
- pathfinding.ts
- contact_links
- shared-store-client.ts
- meeting/route.ts
- Contributing
- Step-by-step tasks
- GatewayBrowserClient
- useStudioOfficePreference.ts
- multiavatar.ts
- layout.tsx
- custom/route.ts
- multiavatar
- .github/SECURITY.md
- postcss.config.mjs
- navigation.diagonalCorner.test.ts
- profilePortrait.ts
- custom/route.ts
- GatewayStatus
- useVoiceRecorder.ts
- eslint.config.mjs
- deploy-local.sh
- verify-claw3d.sh
- Top-Level Code Map
- janitorReset.ts
- StudioGatewayAdapterType
- smoke-dev-server.mjs
- Support
- studioSettings.test.ts
- @testing-library/jest-dom

## God Nodes (most connected - your core abstractions)
1. `vitest` - 185 edges
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
  .hermes/plans/2026-10-25_120000-fix-claw3d-anime-character-size.md → src/features/agents/components/AgentAvatarGlbModel.tsx
- `Current Context / Assumptions` --references--> `AgentAvatarGlbModel()`  [INFERRED]
  .hermes/plans/2026-10-25_120000-fix-claw3d-anime-character-size.md → src/features/agents/components/AgentAvatarGlbModel.tsx
- `Current context / assumptions` --references--> `AvatarFeminineHair()`  [INFERRED]
  .hermes/plans/2026-10-25_000000-claw3d-male-avatar-glb.md → src/features/agents/components/avatar3d/AvatarGenderParts.tsx
- `Task 9 — Hook ke `AgentModel` di scene (`agents.tsx`)` --references--> `AvatarFeminineHair()`  [INFERRED]
  .hermes/plans/2026-10-25_000000-claw3d-male-avatar-glb.md → src/features/agents/components/avatar3d/AvatarGenderParts.tsx

## Import Cycles
- None detected.

## Communities (201 total, 11 thin omitted)

### Community 0 - "useTaskBoardController.ts"
Cohesion: 0.16
Nodes (30): RunRecord, buildActiveRunOptions(), buildCardFromExplicitEvent(), buildCardFromGatewayTask(), buildCardFromSharedTaskRecord(), buildPlaybookCards(), buildStandupSeedCards(), cardTextKey() (+22 more)

### Community 1 - "CompanyBuilderModal.tsx"
Cohesion: 0.11
Nodes (23): AgentPermissionsDraft, CommandModeId, ChatHistoryMessage, TranscriptAppendMeta, buildRoleAvatarProfile(), CompanyBuilderModal(), CompanyBuilderModalProps, createEmptyRole() (+15 more)

### Community 2 - "useAgentSettingsMutationController.ts"
Cohesion: 0.10
Nodes (31): CRON_ACTION_BUSY_MESSAGE, CronBusyState, CronCreateDeps, isCronActionBusy(), performCronCreateFlow(), resolveCreateAgentId(), resolveCreateErrorMessage(), MutationBlockState (+23 more)

### Community 3 - "toWorld"
Cohesion: 0.10
Nodes (50): DOOR_LENGTH, DOOR_THICKNESS, SCALE, WALL_THICKNESS, getItemBaseSize(), getItemRotationRadians(), resolveItemTypeKey(), toWorld() (+42 more)

### Community 4 - "OfficeScreen.tsx"
Cohesion: 0.04
Nodes (78): AgentEditorSection, findAgentBySessionKey(), buildGenerateCompanyPlanPrompt(), buildImproveCompanyBriefPrompt(), HQSidebar(), HQSidebarProps, HQSidebarTab, PRIMARY_TABS (+70 more)

### Community 5 - "navigation.ts"
Cohesion: 0.08
Nodes (43): CANVAS_H, CANVAS_W, SNAP_GRID, createWallItem(), getItemBounds(), ITEM_FOOTPRINT, ITEM_METADATA, snap() (+35 more)

### Community 6 - "GatewayClient.ts"
Cohesion: 0.08
Nodes (34): Reconnects And Retries, Studio Settings (Where Gateway URL/Token Come From), EventHandler, formatGatewayError(), GapHandler, gatewayDebugLog(), GatewayFrame, GatewayStateVersion (+26 more)

### Community 7 - "hermes-gateway-adapter.js"
Cohesion: 0.12
Nodes (21): activeRuns, activeSendEventFns, ADAPTER_PORT, agentFiles, agentRegistry, completeOneTurn(), conversationHistory, cronJobs (+13 more)

### Community 8 - "RetroOffice3D.tsx"
Cohesion: 0.05
Nodes (56): SettingsPanel(), Bubble(), PhoneBoothImmersiveScreen(), PhoneCallStep, sourceTone(), StandupImmersiveScreen(), AGENT_RADIUS, BUMP_FREEZE_MS (+48 more)

### Community 9 - "media/route.ts"
Cohesion: 0.09
Nodes (34): isSafeAgentId(), POST(), PUT(), resolveAgentStateSshTarget(), RestoreAgentStateRequest, runtime, TrashAgentStateRequest, resolveSshTarget() (+26 more)

### Community 10 - "service.ts"
Cohesion: 0.22
Nodes (18): buildJiraSearchUrl(), buildSourceState(), buildSpeech(), buildStandupMeeting(), coerceText(), dedupePullRequests(), expandRange(), getZonedDateParts() (+10 more)

### Community 11 - "useUsageAnalytics.ts"
Cohesion: 0.07
Nodes (61): AnalyticsPanel(), DatePickerField(), formatBudgetInput(), formatDuration(), formatPercent(), openNativeDatePicker(), parseBudgetInput(), StatCard() (+53 more)

### Community 12 - "presentation.ts"
Cohesion: 0.08
Nodes (44): AgentSkillsPanel(), AgentSkillsPanelProps, DISPLAY_CLASSES, DISPLAY_LABELS, FILTERS, resolveHint(), SkillRowFilter, AgentSkillsSetupModal() (+36 more)

### Community 13 - "agentConfig.ts"
Cohesion: 0.09
Nodes (41): AgentHeartbeat, AgentHeartbeatActiveHours, AgentHeartbeatResult, AgentHeartbeatSummary, AgentHeartbeatUpdatePayload, AgentSkillsAccessMode, applyGatewayConfigPatch(), areStringArraysEqual() (+33 more)

### Community 14 - "message-extract.ts"
Cohesion: 0.12
Nodes (29): findLatestHeartbeatResponse(), AgentInstructionParams, ENVELOPE_CHANNELS, EXEC_APPROVAL_AUTO_RESUME_MARKER, EXEC_APPROVAL_WAIT_POLICY, extractRawText(), extractText(), extractTextCached() (+21 more)

### Community 15 - "gatewayRuntimeEventHandler.ts"
Cohesion: 0.09
Nodes (50): createGatewayRuntimeEventHandler(), findAgentByRunId(), GatewayRuntimeEventHandler, GatewayRuntimeEventHandlerDeps, resolveRole(), AgentEventPayload, classifyGatewayEventKind(), dedupeRunLines() (+42 more)

### Community 16 - "GatewayClient"
Cohesion: 0.07
Nodes (13): GatewayClient, GatewayConnectionState, GatewayGapInfo, GatewayHelloOk, createRuntimeProvider(), DemoRuntimeProvider, HermesRuntimeProvider, OpenClawRuntimeProvider (+5 more)

### Community 17 - "chatSendOperation.ts"
Cohesion: 0.07
Nodes (34): DraftFlushIntent, DraftTimerIntent, NewSessionIntent, planDraftFlushIntent(), planDraftTimerIntent(), planNewSessionIntent(), planStopRunIntent(), StopRunIntent (+26 more)

### Community 18 - "Permissions, Sandboxing, and Workspaces (Studio -> Gateway -> PI)"
Cohesion: 0.08
Nodes (27): Capabilities Permissions Updates, Debug Checklist (When Something Feels “Wrong”), Glossary, Hard Enforcement: Filesystem Tool Root Guard, How Studio Chooses the Default Workspace Path, Mental Model (First Principles), One-Shot Sandbox Tool Policy Repair, OpenClaw (Upstream): Sandbox Semantics (+19 more)

### Community 19 - "furnitureDefaults.ts"
Cohesion: 0.05
Nodes (68): ATM_MIGRATION_KEY, GYM_ROOM_MIGRATION_KEY, PHONE_BOOTH_MIGRATION_KEY, QA_LAB_MIGRATION_KEY, SERVER_ROOM_MIGRATION_KEY, SMS_BOOTH_MIGRATION_KEY, STORAGE_KEY, createFurnitureSignature() (+60 more)

### Community 20 - "agents.tsx"
Cohesion: 0.21
Nodes (19): Task 0 — Graphify preflight (read-only), AgentAvatarGlbModel(), PreviewFigure(), AvatarFeminineHair(), AvatarLashes(), AvatarLegClothing(), AvatarSkirt(), Box() (+11 more)

### Community 21 - "settings.ts"
Cohesion: 0.07
Nodes (82): coerceString(), DEFAULT_REMOTE_OFFICE_SOURCE_KIND, defaultFocusedPreference(), defaultStudioOfficePreference(), defaultStudioStandupManualEntry(), defaultStudioTaskBoardPreference(), FloorRuntimeConnectionStatus, FocusFilter (+74 more)

### Community 22 - "claw3doctor.mjs"
Cohesion: 0.12
Nodes (44): checkFail(), checkPass(), checkWarn(), detectHermesModelHealth(), detectOpenClawVersion(), detectWorkspaceState(), formatErrorMessage(), loadDotenvFile() (+36 more)

### Community 23 - "agentPermissionsOperation.ts"
Cohesion: 0.19
Nodes (22): AgentRuntimeConfigContext, coerceStringArray(), ExecutionRoleId, isPermissionsCustom(), isRecord(), resolveAgentPermissionsDraft(), resolveAgentRuntimeConfigContext(), resolveCommandModeFromRole() (+14 more)

### Community 24 - "AgentState"
Cohesion: 0.11
Nodes (23): asNonEmptyString(), asOptionalString(), asPositiveTimestamp(), asRecord(), parseExecApprovalRequested(), parseExecApprovalResolved(), RequestedPayload, ResolvedPayload (+15 more)

### Community 25 - "chatItems.ts"
Cohesion: 0.15
Nodes (29): AgentChatRenderBlock, appendThinkingTraceEvent(), AssistantTraceEvent, buildAgentChatItems(), BuildAgentChatItemsInput, buildAgentChatRenderBlocks(), buildFinalAgentChatItems(), extractFirstCodeBlockLine() (+21 more)

### Community 26 - "GatewayClient"
Cohesion: 0.23
Nodes (13): normalizeToolList(), shouldRetryConfigWrite(), updateGatewayAgentOverrides(), buildSkillRemovalMessage(), escapeForJsonString(), normalizeRequired(), removeSkillViaGatewayAgent(), resolveAllowedRoot() (+5 more)

### Community 27 - "skills/types.ts"
Cohesion: 0.14
Nodes (26): MarketplaceMessage, useOfficeSkillsMarketplace(), readGatewayAgentSkillsAllowlist(), resolveRequiredAgentId(), updateGatewayAgentSkillsAllowlist(), normalizeSkillName(), resolveVisibleAgentSkillNames(), setAgentSkillEnabled() (+18 more)

### Community 28 - "github.ts"
Cohesion: 0.08
Nodes (60): GET(), parsePullRequestNumber(), POST(), ReviewRequestBody, runtime, getDiffLineTone(), GitHubDiffFile, ParsedDiffLine (+52 more)

### Community 29 - "constants.ts"
Cohesion: 0.07
Nodes (39): AGENT_SCALE, BUMP_RECOVERY_MS, DESK_STICKY_MS, EAST_HALL_WIDTH, EAST_WING_DOOR_Y, EAST_WING_ROOM_HEIGHT, EAST_WING_ROOM_TOP_Y, EAST_WING_SIDE_MARGIN (+31 more)

### Community 30 - "QA Department Spec"
Cohesion: 0.05
Nodes (40): Agent Interaction Model, Approval-Aware Review, Approvals, Approved, Blocked, Bug Triage, Bulletin Board, Changes Requested (+32 more)

### Community 31 - "QA Department Spec"
Cohesion: 0.05
Nodes (40): Agent Interaction Model, Approval-Aware Review, Approvals, Approved, Blocked, Bug Triage, Bulletin Board, Changes Requested (+32 more)

### Community 32 - "mutationLifecycleWorkflow.ts"
Cohesion: 0.09
Nodes (21): AgentCreateModalSubmitPayload, AgentConfigMutationLifecycleDeps, AgentConfigMutationLifecycleKind, AwaitingRestartPatch, CreateAgentBlockState, CreateAgentLifecycleCompletion, CreateAgentMutationLifecycleDeps, FALLBACK_MUTATION_FAILURE_MESSAGE (+13 more)

### Community 33 - "eventTriggers.ts"
Cohesion: 0.10
Nodes (32): How Office Motion Works, OfficeCallDirective, OfficeCallPhase, OfficeTextDirective, OfficeTextPhase, applyHoldDirective(), BooleanByAgentId, buildOfficeAnimationState() (+24 more)

### Community 34 - "floors.ts"
Cohesion: 0.10
Nodes (36): Floor Registry Slice, Immediate Implementation Checklist, Per-Floor Runtime State Slice, Phase 1: Floor Registry, Roster Slice, UI Shell Slice, OfficeFloorNav(), OfficeFloorNavProps (+28 more)

### Community 35 - "coordinator.ts"
Cohesion: 0.07
Nodes (36): fetchJson(), AnalyticsPatch, AvatarsPatch, createStudioSettingsCoordinator(), DeskAssignmentsPatch, fetchStudioSettings(), FocusedPatch, mergeAnalyticsPatch() (+28 more)

### Community 36 - "Agent State Model Spec"
Cohesion: 0.05
Nodes (38): Agent State Model Spec, Blocked, Bulletin Board, Core Principle, Degraded, Desk Progression / Hierarchy, Error, Existing Code Seams (+30 more)

### Community 37 - "devDependencies"
Cohesion: 0.08
Nodes (34): react-dom@19.2.3, devDependencies, jsdom@^27.4.0, @playwright/test@^1.58.0, selfsigned@^5.5.0, tailwindcss@^4, @tailwindcss/postcss@^4, @testing-library/react@^16.3.2 (+26 more)

### Community 38 - "Desk Progression Spec"
Cohesion: 0.05
Nodes (37): Agent Interaction Model, Bulletin Board / Whiteboard, Contractor, Contractor Desk, Core Principle, Desk Progression Spec, Employee, Employee Desk (+29 more)

### Community 39 - "Desk Progression Spec"
Cohesion: 0.05
Nodes (37): Agent Interaction Model, Bulletin Board / Whiteboard, Contractor, Contractor Desk, Core Principle, Desk Progression Spec, Employee, Employee Desk (+29 more)

### Community 40 - "cron/types.ts"
Cohesion: 0.09
Nodes (34): deleteAgentRecordViaStudio(), DeleteAgentTransactionDeps, DeleteAgentTransactionResult, deleteAgentViaStudio(), EMPTY_TRASH_RESULT, FetchJson, GatewayAgentStateMove, RestoreAgentStateResult (+26 more)

### Community 41 - "deskDirectives.ts"
Cohesion: 0.11
Nodes (31): cacheIntentSnapshot(), getCachedIntentSnapshot(), intentSnapshotCache, normalizeDirectiveText(), normalizeOfficeCallCallee(), normalizeOfficeTextRecipient(), OfficeDeskDirective, OfficeGithubDirective (+23 more)

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
Cohesion: 0.16
Nodes (21): GET(), isPatch(), PUT(), runtime, sanitizeStudioGatewaySettings(), sanitizeStudioOfficePreference(), sanitizeStudioSettings(), sanitizeTaskBoardPreference() (+13 more)

### Community 49 - "AgentChatPanel.tsx"
Cohesion: 0.10
Nodes (27): AgentChatComposer, AgentChatFinalItems, AgentChatPanelProps, AgentChatTranscript, AssistantIntroCard, AssistantMessageCard, CHAT_SELECT_STYLE, EMPTY_CHAT_INTRO_MESSAGES (+19 more)

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

### Community 54 - "furniture.tsx"
Cohesion: 0.05
Nodes (40): main(), main(), main(), @react-three/drei, @react-three/fiber, three, PING_PONG_BALL_RADIUS, PING_PONG_TABLE_SURFACE_Y (+32 more)

### Community 55 - "shared-store.ts"
Cohesion: 0.15
Nodes (27): DELETE(), errorJson(), GET(), isRecord(), json(), PUT(), isTaskBoardSource(), isTaskBoardStatus() (+19 more)

### Community 56 - "profile.ts"
Cohesion: 0.09
Nodes (32): AgentAvatarEditorPanelHandle, AgentAvatarEditorPanelProps, AGENT_AVATAR_BOTTOM_STYLE_OPTIONS, AGENT_AVATAR_CLOTHING_COLOR_OPTIONS, AGENT_AVATAR_GENDER_OPTIONS, AGENT_AVATAR_HAIR_COLOR_OPTIONS, AGENT_AVATAR_HAIR_STYLE_OPTIONS, AGENT_AVATAR_HAT_STYLE_OPTIONS (+24 more)

### Community 57 - "runtimeEventBridge.ts"
Cohesion: 0.10
Nodes (33): extractReasoningBody(), hasReasoningSignal(), hasUnclosedThinkingTag(), isReasoningOnlyAssistantChunk(), normalizeReasoningComparable(), planRuntimeAgentEvent(), resolveThinkingFromAgentStream(), RuntimeAgentWorkflowResult (+25 more)

### Community 58 - "district.ts"
Cohesion: 0.10
Nodes (24): WORLD_H, WORLD_W, CITY_PATH_ZONE, clampPointToZone(), clampZoneValue(), DISTRICT_CAMERA_POSITION, DISTRICT_CAMERA_TARGET, DISTRICT_CAMERA_ZOOM (+16 more)

### Community 59 - "triggers.ts"
Cohesion: 0.13
Nodes (25): isSkillEnabledForAgent(), useOfficeSkillTriggers(), buildOfficeSkillTriggerHoldMaps(), DEFAULT_SKILL_TRIGGER_FALLBACKS_BY_SKILL_KEY, DefaultSkillTriggerFallback, isOfficeSkillTriggerMovementTarget(), OFFICE_INTERACTION_TARGETS, OFFICE_SKILL_TRIGGER_MOVEMENT_TARGETS (+17 more)

### Community 60 - "Hierarchy And Teams Spec"
Cohesion: 0.06
Nodes (32): Agent Interaction Model, Contractor, Core Principle, Delegation Model, Executive, Existing Code Seams, Future Extensions, Goal (+24 more)

### Community 61 - "Hierarchy And Teams Spec"
Cohesion: 0.06
Nodes (32): Agent Interaction Model, Contractor, Core Principle, Delegation Model, Executive, Existing Code Seams, Future Extensions, Goal (+24 more)

### Community 62 - "colorSemantics.ts"
Cohesion: 0.10
Nodes (24): applyTheme(), getPreferredTheme(), ThemeMode, ThemeToggle(), AGENT_STATUS_BADGE_CLASS, AGENT_STATUS_LABEL, GATEWAY_STATUS_BADGE_CLASS, GATEWAY_STATUS_LABEL (+16 more)

### Community 63 - "runtimeChatEventWorkflow.ts"
Cohesion: 0.11
Nodes (26): planRuntimeChatEvent(), resolveTerminalSeq(), RuntimeChatWorkflowCommand, RuntimeChatWorkflowInput, RuntimeChatWorkflowResult, summarizeThinkingMessage(), terminalAssistantFinalEntryId(), terminalAssistantMetaEntryId() (+18 more)

### Community 64 - "store.tsx"
Cohesion: 0.06
Nodes (51): buildHistoryMetadataPatch(), HistoryRequestIntent, HistoryResponseDisposition, resolveHistoryFetchLimit(), resolveHistoryRequestIntent(), resolveHistoryResponseDisposition(), areStringArraysEqual(), ChatHistoryMessage (+43 more)

### Community 65 - "with"
Cohesion: 0.06
Nodes (31): env, IMAGE_BASENAME, REGISTRY, jobs, publish, name, contents, packages (+23 more)

### Community 66 - "browser-preview/route.ts"
Cohesion: 0.18
Nodes (17): BrowserOpenResponse, browserRequest(), BrowserScreenshotResponse, BrowserTab, BrowserTabsResponse, buildBrowserHeaders(), ensurePreviewTab(), GET() (+9 more)

### Community 67 - "GatewayResponseError"
Cohesion: 0.12
Nodes (18): AgentSessionState, applySessionSettingMutation(), ApplySessionSettingMutationParams, buildErrorPrefix(), buildFallbackError(), buildWebchatBlockedMessage(), resolveModelFromPatchResult(), SessionSettingField (+10 more)

### Community 68 - "schema.ts"
Cohesion: 0.11
Nodes (31): asBoolean(), asNumber(), asString(), defaultLayers(), isRecord(), normalizeAmbiencePreset(), normalizeDeskAssignments(), normalizeInteractionKind() (+23 more)

### Community 69 - "normalizeCommandText"
Cohesion: 0.20
Nodes (18): resolveOfficeCallDirective(), resolveOfficeTextDirective(), applyUserMessageTriggers(), buildPhoneCallDirectiveKey(), buildStableLatestRequestSeed(), buildTextMessageDirectiveKey(), createPhoneCallRequest(), createTextMessageRequest() (+10 more)

### Community 70 - "execApprovalControlLoopWorkflow.ts"
Cohesion: 0.06
Nodes (56): AutoResumeIntent, ExecApprovalIngressCommand, ExecApprovalPendingSnapshot, PauseRunIntent, planAutoResumeIntent(), planIngressCommands(), planPausedRunMapCleanup(), planPauseRunIntent() (+48 more)

### Community 71 - "standup/store.ts"
Cohesion: 0.36
Nodes (11): defaultStore(), ensureDirectory(), isActiveMeetingStale(), isRecord(), loadStandupMeetingStore(), normalizeMeeting(), readStore(), resolveStorePath() (+3 more)

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

### Community 78 - "AgentsPageScreen"
Cohesion: 0.08
Nodes (45): planAwaitingUserInputPatches(), planPendingPruneDelay(), planPrunedPendingState(), runResolveExecApprovalOperation(), AgentChatPanel(), applyCreateAgentBootstrapPermissions(), executeCreateAgentBootstrapCommands(), buildLatestUpdatePatch() (+37 more)

### Community 79 - "resolveStateDir"
Cohesion: 0.15
Nodes (19): contentTypeFromName(), GET(), runtime, uploadsDir(), ensureUnderBase(), GatewayAgentStateMove, isSafeAgentId(), moveIfExists() (+11 more)

### Community 80 - "Runtime Profile Architecture"
Cohesion: 0.08
Nodes (25): 1. `docs: runtime profile architecture`, 2. `feat: claw3doctor`, 3. `refactor: office shell modularization`, 4. `docs: floor schema and builder plan`, 5. `feat: admin floor builder`, Branch Sequence, Core Terms, Custom Runtime Position (+17 more)

### Community 81 - "dependencies"
Cohesion: 0.08
Nodes (24): dependencies, canvas-confetti@^1.9.4, class-variance-authority@^0.7.1, clsx@^2.1.1, lucide-react@^0.563.0, next@16.1.7, @noble/ed25519@^3.0.0, phaser@^3.90.0 (+16 more)

### Community 82 - "GatewayBrowserClient.ts"
Cohesion: 0.10
Nodes (34): base64UrlDecode(), base64UrlEncode(), buildDeviceAuthPayload(), buildScopedTokenKey(), bytesToHex(), clearDeviceAuthToken(), CryptoLike, DeviceAuthEntry (+26 more)

### Community 83 - "Office Systems Roadmap"
Cohesion: 0.08
Nodes (24): Agent State Model, Bulletin Board, Candidate Feature Order, Core Direction, Departments, Design Principles, Desk / CPU Progression, Hierarchy (+16 more)

### Community 84 - "OfficePhaserCanvas.tsx"
Cohesion: 0.15
Nodes (14): phaser, OfficePhaserCanvas(), OfficePhaserCanvasProps, createOfficeBuilderScene(), OfficeBuilderRenderable, createOfficeSceneBridge(), OfficeDebugSettings, OfficeRuntimeSettings (+6 more)

### Community 85 - "Katalog Referensi Warna Avatar 3D GLB"
Cohesion: 0.08
Nodes (23): 1. Aiko — Office Lady / Corporate Lead, 2. Haruto — Store Manager / Smart Casual, 3. Yumi — Schoolkid / Energetic Student, 4. Kenji — Stock Clerk / Tech Specialist, 5. Sakura — Grandma Shopper / Senior Advisor, 6. Ren — Food Courier / Urban Streetwear, 7. Mina — Cashier / Creative Retailer, 8. Takeshi — Shoplifter / Sneaky Rogue (+15 more)

### Community 86 - "useRuntimeSyncController.ts"
Cohesion: 0.09
Nodes (39): executeAgentReconcileCommands(), GatewayClientLike, ReconcileCommand, ReconcileDispatchAction, runAgentReconcileOperation(), buildReconcileTerminalPatch(), ReconcileEligibility, resolveReconcileEligibility() (+31 more)

### Community 87 - "settingsRouteWorkflow.ts"
Cohesion: 0.17
Nodes (23): buildSettingsRouteHref(), InspectSidebarState, parseSettingsRouteAgentIdFromPathname(), parseSettingsRouteAgentIdFromQueryParam(), planBackToChatCommands(), planFleetSelectCommands(), planNonRouteSelectionSyncCommands(), planOpenSettingsRouteCommands() (+15 more)

### Community 88 - "CustomRuntimeProvider"
Cohesion: 0.10
Nodes (27): CustomRuntimeProxyInput, fetchCustomRuntimeJson(), normalizeCustomBaseUrl(), probeCustomRuntime(), requestCustomRuntime(), ActiveRunRecord, buildChatFailureMessage(), buildIdentityAgent() (+19 more)

### Community 89 - "Step-by-step tasks"
Cohesion: 0.12
Nodes (15): 1. Pre-flight: confirm graphify + current state (read-only), 2. Write failing unit test, 3. Implement auto-hide state in `OfficeFloorNav.tsx`, 4. Re-run the test, 5. Full test suite — confirm no regressions, 6. Typecheck + lint, 7. Manual sanity (dev server), 8. Update graphify + commit (+7 more)

### Community 90 - "Claw3D + OpenClaw + Tailscale Setup Tutorial"
Cohesion: 0.06
Nodes (31): 0) Architecture and Responsibilities, 10) Security Notes, 1) Prerequisites, 2.1 Install OpenClaw, 2.2 Run onboarding and install daemon, 2.3 Verify Gateway health, 2.4 Get your Gateway token, 2) Install and Start OpenClaw on Machine A (+23 more)

### Community 91 - "[0.1.4] - 2026-04-23"
Cohesion: 0.08
Nodes (23): [0.1.0] - 2026-03-16, [0.1.1] - 2026-03-19, [0.1.2] - 2026-03-20, [0.1.3] - 2026-03-28, [0.1.4] - 2026-04-23, Added, Added, Added (+15 more)

### Community 92 - "Claw3D — A 3D Workspace for AI Agents"
Cohesion: 0.08
Nodes (24): AI Editing Guardrails, Claw3D — A 3D Workspace for AI Agents, Common Setups, Configuration, Contributing, Current Limitations, Demo mode, Documentation (+16 more)

### Community 93 - "SmsBoothImmersiveScreen.tsx"
Cohesion: 0.14
Nodes (19): normalizeText(), POST(), runtime, TextMessageRequestBody, Bubble(), ContactList(), KEYBOARD_ROWS, KeyboardKey() (+11 more)

### Community 94 - "agents/agentFiles.ts"
Cohesion: 0.15
Nodes (18): AgentFilesState, useAgentFilesEditor(), UseAgentFilesEditorResult, AGENT_FILE_NAMES, AGENT_FILE_PLACEHOLDERS, AgentFileName, createAgentFilesState(), isAgentFileName() (+10 more)

### Community 95 - "agentFleetHydrationDerivation.ts"
Cohesion: 0.08
Nodes (39): AgentsListResult, ExecApprovalsSnapshot, GatewayClientLike, hydrateAgentFleetFromGateway(), HydrateAgentFleetResult, isRecord(), parseIdentityNameFromContent(), resolveAgentsListFromHelloSnapshot() (+31 more)

### Community 96 - "index.js"
Cohesion: 0.08
Nodes (33): createAccessGate(), createRateLimiter(), parseCookies(), resolveClientIp(), safeCompare(), buildErrorResponse(), createFrameRateLimiter(), createGatewayProxy() (+25 more)

### Community 97 - "tasks/types.ts"
Cohesion: 0.12
Nodes (23): TaskBoardPanel(), KanbanImmersiveScreen(), compareCards(), sortTaskBoardCards(), TaskBoardAction, taskBoardReducer(), upsertTaskBoardCard(), formatRelativeTime() (+15 more)

### Community 98 - "PI + Chat Streaming (Studio Side)"
Cohesion: 0.09
Nodes (23): Connect failures, Connect handshake, Debugging Checklist (When Chat “Feels Buggy”), End-To-End Flow (PI Run -> UI), `event: "agent"` payload, `event: "chat"` payload, Exec Approvals In Chat (Related To “PI Runs”), High-Level Network Path (+15 more)

### Community 99 - "demo-gateway-adapter.js"
Cohesion: 0.13
Nodes (19): activeRuns, activeSendEventFns, ADAPTER_PORT, agentListPayload(), agents, broadcastEvent(), buildDemoReply(), clearHistory() (+11 more)

### Community 100 - "runtime/types.ts"
Cohesion: 0.10
Nodes (27): buildAgentHandoffInstruction(), buildDirectedAgentMessageInstruction(), GatewayAgentsListResult, GatewayCallLike, resolveLabel(), resolveSessionKeyFromAgentList(), RuntimeAgentHandoffPayload, RuntimeAgentMessagePayload (+19 more)

### Community 101 - "Step-by-step tasks"
Cohesion: 0.08
Nodes (24): Architecture / proposed approach, Current context / assumptions, Files touched, Goal, Plan: Run Claw3D natively on the host (drop Docker), keep kerja.besoksenin.web.id, Risks, tradeoffs, open questions, Step-by-step tasks, Task 0: Graphify read and baseline snapshot (2 min) (+16 more)

### Community 102 - "personalityBuilder.ts"
Cohesion: 0.16
Nodes (22): buildIdentityFileDraft(), AgentFilesInput, cleanLabel(), cleanValue(), IDENTITY_PLACEHOLDER_VALUES, isIdentityPlaceholder(), isSectionHeading(), isUserContextPlaceholder() (+14 more)

### Community 103 - "Custom Runtime Provider Spec"
Cohesion: 0.09
Nodes (21): Capability Philosophy, Core Principle, Current Branch Status, Custom Metadata Surface, Custom Runtime Provider Spec, Event Model, Goal, Implementation Strategy (+13 more)

### Community 104 - "AgentSettingsPanel.tsx"
Cohesion: 0.21
Nodes (15): AgentInspectHeader(), AgentInspectHeaderProps, AgentSettingsPanel(), AgentSettingsPanelProps, applyTemplateDefaults(), arePermissionsDraftEqual(), createInitialCronDraft(), CRON_TEMPLATE_OPTIONS (+7 more)

### Community 105 - "standup/types.ts"
Cohesion: 0.10
Nodes (17): runtime, StandupAgentSnapshot, StandupCommitSummary, StandupConfig, StandupConfigPayload, StandupJiraConfig, StandupManualEntry, StandupMeeting (+9 more)

### Community 106 - "README.md"
Cohesion: 0.10
Nodes (11): Code Of Conduct, Enforcement, Expected Behavior, Our Pledge, Unacceptable Behavior, Roadmap, Current Security Limitations, Deployment Notes (+3 more)

### Community 107 - "useRunLog.ts"
Cohesion: 0.26
Nodes (10): formatClockTime(), formatDuration(), HistoryPanel(), TRIGGER_LABELS, findAgentForRunEvent(), resolveLifecyclePhase(), resolveRunTrigger(), RunOutcomeKind (+2 more)

### Community 108 - "Universal Backend Plan"
Cohesion: 0.10
Nodes (20): Capability Matrix, Core Adapter Contract, Event Model, Hermes Provider, High-Value PR Split, Near-Term Guidance For Luke, OpenClaw Provider, PR 1: Runtime Abstraction (+12 more)

### Community 109 - "GatewayBrowserClient"
Cohesion: 0.14
Nodes (5): GatewayConnectOptions, parseConnectFailedCloseReason(), GatewayBrowserClient, gatewayBrowserDebugLog(), MockWebSocket

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
Cohesion: 0.12
Nodes (25): lucide-react, AgentsStep(), AgentsStepProps, CompanyStep(), CompanyStepProps, CompleteStep(), ConnectStep(), ConnectStepProps (+17 more)

### Community 114 - "useOfficeBuilderStore.ts"
Cohesion: 0.16
Nodes (17): OfficeBuilderPage(), nextId(), OfficeBuilderPanel(), OfficeBuilderPanelProps, BuilderAction, BuilderHistory, BuilderSelection, BuilderState (+9 more)

### Community 115 - "StudioSettingsCoordinator"
Cohesion: 0.14
Nodes (11): useOfficeFloorRuntimePersistence(), useStudioVoiceRepliesPreference(), UseStudioVoiceRepliesPreferenceParams, StudioSettingsCoordinator, defaultStudioSettings(), defaultStudioVoiceRepliesPreference(), resolveVoiceRepliesPreference(), StudioSettingsPatch (+3 more)

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
Nodes (18): 10.1 Route and navigation model, 10.2 Skills tab data and interactions, 10.3 Mutation wiring from Studio, 10.4 Scope warning shown in Studio, 10) Claw3D UX (current behavior), 11) What recent `.agent/done` plans show, 12) UX redesign constraints that are not optional, 13) Practical mental model for reviewing a Skills screenshot (+10 more)

### Community 120 - "createAgentBootstrapOperation.ts"
Cohesion: 0.22
Nodes (11): CREATE_AGENT_DEFAULT_PERMISSIONS, CreateCompletion, CreatedAgent, resolveBootstrapErrorMessage(), runCreateAgentBootstrapOperation(), buildBootstrapGlobalErrorMessage(), buildBootstrapModalErrorMessage(), buildMissingCreatedAgentMessage() (+3 more)

### Community 121 - "gateway.ts"
Cohesion: 0.29
Nodes (10): createGatewayTask(), deleteGatewayTask(), GatewayTaskCreateInput, GatewayTaskRecord, GatewayTasksListResult, GatewayTaskUpdateInput, isUnsupportedTaskGatewayError(), listGatewayTasks() (+2 more)

### Community 122 - "marketplace.ts"
Cohesion: 0.15
Nodes (17): buildPackagedSkillStatusEntry(), EMPTY_REQUIREMENTS, getPackagedSkillBySkillKey(), PACKAGED_SKILLS, PackagedSkillId, buildFallbackCapabilities(), buildFallbackMetadata(), buildSkillMarketplaceCollections() (+9 more)

### Community 123 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 124 - "layout/route.ts"
Cohesion: 0.22
Nodes (16): fetchRemoteOfficeLayoutSnapshot(), GET(), PUT(), runtime, deriveRemoteLayoutUrlFromPresenceUrl(), isRecord(), normalizeOfficeLayoutSnapshot(), defaultStore() (+8 more)

### Community 125 - "run/route.ts"
Cohesion: 0.22
Nodes (12): GET(), PUT(), readGatewayUrl(), runtime, POST(), defaultStudioStandupJiraConfig(), defaultStudioStandupPreference(), defaultStudioStandupScheduleConfig() (+4 more)

### Community 126 - "handleMethod"
Cohesion: 0.18
Nodes (20): broadcastEvent(), clearHistory(), execConfigureAgent(), execDelegateTask(), execDismissAgent(), execListTeam(), execReadAgentContext(), execSpawnAgent() (+12 more)

### Community 127 - "presence.ts"
Cohesion: 0.07
Nodes (49): GET(), runtime, POST(), runtime, stripRemoteAgentPrefix(), AgentsListResult, POST(), resolveLatestAssistantHistoryText() (+41 more)

### Community 128 - "gatewayReloadMode.ts"
Cohesion: 0.23
Nodes (13): resolveGatewayClientName(), ensureGatewayReloadModeHotForLocalStudio(), GatewayConfigSnapshot, isRecord(), resolveReloadModeFromConfig(), shouldAwaitDisconnectRestartForReloadMode(), shouldAwaitDisconnectRestartForRemoteMutation(), shouldRetryConfigWrite() (+5 more)

### Community 129 - "chatSendOperation.ts"
Cohesion: 0.20
Nodes (12): Sending Messages (Browser -> PI via Gateway), extractImmediateAssistantText(), GatewayClientLike, resolveChatSendCompletionMode(), sendChatMessageViaStudio(), SendDispatch, SendDispatchAction, RuntimeAttachment (+4 more)

### Community 130 - "studioRoute.ts"
Cohesion: 0.31
Nodes (5): @playwright/test, createStudioRoute(), DEFAULT_SETTINGS, stubStudioRoute(), StudioSettingsFixture

### Community 131 - "ref_node_path"
Cohesion: 0.08
Nodes (24): main(), parseArgs(), tryReadGatewayTokenFromOpenclawCli(), contents, destPath, repoRoot, isRecord(), LEGACY_STATE_DIRNAMES (+16 more)

### Community 132 - "SkillsMarketplacePanel.tsx"
Cohesion: 0.21
Nodes (13): SkillsMarketplaceModal(), SkillsMarketplaceModalProps, buildSearchBlob(), FILTER_LABELS, formatInstalls(), formatRating(), getAgentSkillEnabled(), MarketplaceFilter (+5 more)

### Community 133 - "react"
Cohesion: 0.07
Nodes (33): react, @testing-library/react, AgentAvatarCreatorModal(), AgentAvatarCreatorModalProps, AgentAvatarEditorPanel, AgentCreateModal(), AgentCreateWizardModal(), AgentCreateWizardModalProps (+25 more)

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

### Community 140 - "deskMonitor.ts"
Cohesion: 0.22
Nodes (15): AgentChatItem, buildOfficeDeskMonitor(), deriveEditorDocument(), derivePseudoEditor(), extractDomains(), extractPath(), extractUrls(), flattenMonitorEntry() (+7 more)

### Community 141 - "agentSettingsMutationWorkflow.ts"
Cohesion: 0.16
Nodes (14): AgentSettingsMutationContext, AgentSettingsMutationDecision, AgentSettingsMutationDenyReason, AgentSettingsMutationRequest, CronActionKind, GuardedActionKind, isCronActionBusy(), isGuardedAction() (+6 more)

### Community 142 - "useConfigMutationQueue.ts"
Cohesion: 0.18
Nodes (12): ConfigMutationGateInput, shouldStartNextConfigMutation(), GatewayStatus, observeGatewayRestart(), RestartObservation, ActiveConfigMutation, ConfigMutationKind, mutationRequiresIdleAgents() (+4 more)

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
Cohesion: 0.24
Nodes (13): everyoneArrived(), expandRange(), getZonedParts(), isMeetingActive(), matchesCronPart(), OfficeStandupController, sameScheduledMinute(), shouldRunNow() (+5 more)

### Community 147 - "install-gateway.ts"
Cohesion: 0.26
Nodes (13): getPackagedSkillById(), buildInstallerMessage(), escapeForJsonString(), getPathLeaf(), installPackagedSkillViaGatewayAgent(), isRootWorkspace(), normalizeOptional(), normalizeRequired() (+5 more)

### Community 148 - "mutationLifecycleWorkflow.integration.test.ts"
Cohesion: 0.22
Nodes (11): assertMutationKind(), buildConfigMutationFailureMessage(), buildMutatingMutationBlock(), buildMutationSideEffectCommands(), buildQueuedMutationBlock(), MutationWorkflowKind, resolveConfigMutationPostRunEffects(), resolveConfigMutationStatusLine() (+3 more)

### Community 149 - "RunningAvatarLoader"
Cohesion: 0.24
Nodes (11): OfficeLoadingFallback(), OfficePage(), readDebugFlag(), GatewayConnectScreen(), GatewayConnectScreenProps, resolveLocalGatewayPort(), box(), RunningAvatarLoader() (+3 more)

### Community 150 - "execApprovals.ts"
Cohesion: 0.21
Nodes (11): OpenClaw (Upstream): Exec Approvals (Policy + Events), ExecAllowlistEntry, ExecApprovalsAgent, ExecApprovalsFile, ExecApprovalsSnapshot, GatewayExecApprovalAsk, GatewayExecApprovalSecurity, normalizeAllowlist() (+3 more)

### Community 151 - "Critical Fixes"
Cohesion: 0.17
Nodes (11): 1. Telemetry Removed, 2. Constant-Time Token Comparison, 3. Auth Rate Limiting, 4. WebSocket Frame Validation, 5. Upstream URL Allowlist, 6. Custom Runtime Proxy Allowlist, 7. Security Headers, 8. Media Route Symlink Rejection (+3 more)

### Community 152 - "MonitorImmersiveContent.tsx"
Cohesion: 0.26
Nodes (10): BrowserPreviewSnapshot, MonitorBrowserContent(), MonitorImmersiveContent(), useBrowserPreviewScreenshot(), normalizeBrowserPreviewUrl(), normalizeLoopbackHostname(), resolveBrowserControlBaseUrl(), SCREENSHOT_ONLY_HOSTS (+2 more)

### Community 153 - "AmbienceSystem.ts"
Cohesion: 0.27
Nodes (6): AmbienceSystem, AmbienceSystemParams, resolveZoneBounds(), ZoneBounds, OfficeAmbienceEmitter, OfficeZone

### Community 154 - "Claw3D Vision"
Cohesion: 0.17
Nodes (12): Architecture Direction, Claw3D Vision, Contribution Rules, Core Architecture, Current Priorities, Developer Ergonomics, Long-Term Direction, Relationship to OpenClaw (+4 more)

### Community 155 - "Task Manager"
Cohesion: 0.20
Nodes (10): File format, Matching rules, Required workflow, Response rules, Status rules, Storage location, Task fields, Task Manager (+2 more)

### Community 156 - "TODO Board"
Cohesion: 0.20
Nodes (9): Field rules, File format, Mutation rules, Required workflow, Response style, Storage location, Supported actions, TODO Board (+1 more)

### Community 157 - "studioBootstrapWorkflow.ts"
Cohesion: 0.24
Nodes (10): BootstrapSelectionIntent, FocusedPreferenceRestoreIntent, FocusedSelectionPatchIntent, FocusFilterPatchIntent, planBootstrapSelection(), planFocusedFilterPatch(), planFocusedPreferenceRestore(), planFocusedSelectionPatch() (+2 more)

### Community 158 - "runtimeAgentEventWorkflow.test.ts"
Cohesion: 0.20
Nodes (8): RuntimeAgentWorkflowCommand, RuntimeAgentWorkflowInput, RuntimeTerminalCommand, RuntimeTerminalState, createAgent(), createInput(), createPayload(), InputOverrides

### Community 159 - "clawd3d-start.sh"
Cohesion: 0.44
Nodes (8): find_free_port(), info(), log(), pids_on_port(), port_free(), port_owned_by(), clawd3d-start.sh script, warn()

### Community 160 - "media/route.ts"
Cohesion: 0.36
Nodes (9): expandTildeLocal(), GET(), isWithinAllowedRoot(), MIME_BY_EXT, readLocalMedia(), resolveAndValidateLocalMediaPath(), runtime, validateRawMediaPath() (+1 more)

### Community 161 - "Plan: Fix 3D Anime Character Size in Claw3D Retro Office"
Cohesion: 0.20
Nodes (9): Architecture / Proposed Approach, Current Context / Assumptions, Plan: Fix 3D Anime Character Size in Claw3D Retro Office, Risks, Tradeoffs, and Open Questions, Step-by-Step Tasks, Task 1: Add Unit Test for Avatar Sizing / Scaling Constants, Task 2: Update Office GLB Avatar Target Height, Task 3: Run Full Test Suite & Validation (+1 more)

### Community 162 - "ws"
Cohesion: 0.25
Nodes (5): ws@^8.18.3, ws, ws, ws, ws

### Community 163 - "vitest"
Cohesion: 0.08
Nodes (15): vitest, Action, AgentState, AgentStoreContext, AgentStoreContextValue, agentStoreReducer, AgentStoreSeed, AgentStoreState (+7 more)

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

### Community 168 - "upload/route.ts"
Cohesion: 0.25
Nodes (10): ALLOWED_CONTENT_TYPES, ALLOWED_EXTENSIONS, CONTENT_TYPE_BY_EXT, isTextContentType(), POST(), resolveUploadContentType(), runtime, sanitizeFilename() (+2 more)

### Community 169 - "pathfinding.ts"
Cohesion: 0.16
Nodes (19): ASSET_SIZE, astar2D(), BLOCKING_ASSET_IDS, BLOCKING_LAYERS, BLOCKING_TAGS, buildNavGrid2D(), clamp(), findFreeCell() (+11 more)

### Community 170 - "contact_links"
Cohesion: 0.33
Nodes (5): blank_issues_enabled, contact_links, about, name, url

### Community 171 - "shared-store-client.ts"
Cohesion: 0.30
Nodes (10): archiveSharedTaskRecord(), fetchWithTimeout(), isRetryable(), listSharedTaskRecords(), parseResponse(), sleep(), TaskStoreRequestError, upsertSharedTaskRecord() (+2 more)

### Community 172 - "meeting/route.ts"
Cohesion: 0.43
Nodes (7): GET(), PUT(), runtime, advanceStandupMeeting(), startStandupSpeaker(), updateStandupArrivals(), loadActiveStandupMeeting()

### Community 173 - "Contributing"
Cohesion: 0.22
Nodes (9): Before you start, Contributing, Local setup, Minimal issue template, Minimal PR template, Pull requests, Reporting issues, Support And Routing (+1 more)

### Community 174 - "Step-by-step tasks"
Cohesion: 0.10
Nodes (21): Architecture / proposed approach, Claw3D — Ganti geometri male procedural dengan model GLB dari Drive, Current context / assumptions, Goal, Risks, tradeoffs, open questions, Step-by-step tasks, Task 10 — Visual calibration (manual, 1 iterasi), Task 11 — Regression: existing unit tests (+13 more)

### Community 176 - "useStudioOfficePreference.ts"
Cohesion: 0.53
Nodes (5): useStudioOfficePreference(), UseStudioOfficePreferenceParams, defaultStudioOfficePreferencePublic(), resolveOfficePreferencePublic(), StudioOfficePreferencePublic

### Community 177 - "multiavatar.ts"
Cohesion: 0.19
Nodes (14): AgentAvatar(), AgentAvatarProps, AgentCreateModalContent(), AgentCreateModalProps, resolveInitialName(), AVATAR_ACCENTS, AVATAR_FOREGROUNDS, AVATAR_PALETTE (+6 more)

### Community 178 - "layout.tsx"
Cohesion: 0.28
Nodes (6): display, metadata, mono, RootLayout(), sans, SuspenseStreamGuard()

### Community 179 - "custom/route.ts"
Cohesion: 0.33
Nodes (7): CustomRuntimeRequestBody, isRuntimeUrlAllowed(), normalizeMethod(), normalizePathname(), normalizeRuntimeUrl(), POST(), runtime

### Community 187 - "profilePortrait.ts"
Cohesion: 0.47
Nodes (8): blendHex(), buildAgentAvatarPortraitSvg(), buildGlassesSvg(), buildHairSvg(), buildHatSvg(), buildHeadsetSvg(), escapeXml(), normalizeHex()

### Community 189 - "custom/route.ts"
Cohesion: 0.09
Nodes (13): nextConfig, securityHeaders, next, runtime, GET(), isWithinHome(), listPathAutocompleteEntries(), normalizeQuery() (+5 more)

### Community 192 - "useVoiceRecorder.ts"
Cohesion: 0.33
Nodes (8): PREFERRED_VOICE_MIME_TYPES, resolvePreferredVoiceMimeType(), resolveVoiceErrorMessage(), resolveVoiceExtension(), stopVoiceStream(), useVoiceRecorder(), VoiceRecorderState, VoiceSendPayload

### Community 193 - "eslint.config.mjs"
Cohesion: 0.25
Nodes (7): eslintConfig, eslint@^9, eslint-config-next@16.1.6, eslint-config-prettier@^10.1.8, eslint, eslint-config-next, eslint-config-prettier

### Community 194 - "deploy-local.sh"
Cohesion: 0.40
Nodes (4): NEXT_PUBLIC_GATEWAY_URL, NEXT_TELEMETRY_DISABLED, PATH, deploy-local.sh script

### Community 196 - "Top-Level Code Map"
Cohesion: 0.29
Nodes (7): `scripts`, `server`, `src/app`, `src/features`, `src/lib`, `tests`, Top-Level Code Map

### Community 198 - "janitorReset.ts"
Cohesion: 0.38
Nodes (4): buildSessionEpochSnapshot(), OfficeCleaningCue, resolveResetAgentIds(), SessionEpochSnapshot

### Community 199 - "StudioGatewayAdapterType"
Cohesion: 0.40
Nodes (4): SettingsPanelProps, StudioGatewayAdapterType, CURATED_ELEVENLABS_VOICES, CuratedVoiceOption

### Community 200 - "smoke-dev-server.mjs"
Cohesion: 0.60
Nodes (3): getFreePort(), main(), sleep()

### Community 201 - "Support"
Cohesion: 0.40
Nodes (4): Maintainer Contact Notes, Public Help, Sensitive Reports, Support

### Community 202 - "studioSettings.test.ts"
Cohesion: 0.47
Nodes (5): defaultStudioFloorRuntimeState(), resolveDefaultStudioGatewayProfile(), resolveStudioActiveFloorId(), resolveStudioFloorRuntimeState(), resolveStudioGatewayProfiles()

## Knowledge Gaps
- **3 isolated node(s):** `PATH`, `NEXT_TELEMETRY_DISABLED`, `NEXT_PUBLIC_GATEWAY_URL`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 2117 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **11 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `vitest` connect `vitest` to `useTaskBoardController.ts`, `useAgentSettingsMutationController.ts`, `OfficeScreen.tsx`, `navigation.ts`, `GatewayClient.ts`, `RetroOffice3D.tsx`, `media/route.ts`, `presentation.ts`, `agentConfig.ts`, `message-extract.ts`, `gatewayRuntimeEventHandler.ts`, `GatewayClient`, `chatSendOperation.ts`, `agents.tsx`, `settings.ts`, `claw3doctor.mjs`, `agentPermissionsOperation.ts`, `AgentState`, `chatItems.ts`, `GatewayClient`, `skills/types.ts`, `constants.ts`, `mutationLifecycleWorkflow.ts`, `floors.ts`, `coordinator.ts`, `devDependencies`, `cron/types.ts`, `deskDirectives.ts`, `settings-store.ts`, `AgentChatPanel.tsx`, `planning.ts`, `shared-store.ts`, `profile.ts`, `runtimeEventBridge.ts`, `triggers.ts`, `colorSemantics.ts`, `runtimeChatEventWorkflow.ts`, `store.tsx`, `GatewayResponseError`, `execApprovalControlLoopWorkflow.ts`, `models.ts`, `voiceTranscription.ts`, `AgentsPageScreen`, `resolveStateDir`, `useRuntimeSyncController.ts`, `settingsRouteWorkflow.ts`, `agents/agentFiles.ts`, `agentFleetHydrationDerivation.ts`, `index.js`, `tasks/types.ts`, `demo-gateway-adapter.js`, `runtime/types.ts`, `standup/types.ts`, `GatewayBrowserClient`, `lucide-react`, `StudioSettingsCoordinator`, `cleanup-ux-artifacts.mjs`, `createAgentBootstrapOperation.ts`, `gateway.ts`, `marketplace.ts`, `gatewayReloadMode.ts`, `chatSendOperation.ts`, `ref_node_path`, `react`, `agentSettingsMutationWorkflow.ts`, `useConfigMutationQueue.ts`, `animePresets.ts`, `install-gateway.ts`, `mutationLifecycleWorkflow.integration.test.ts`, `execApprovals.ts`, `MonitorImmersiveContent.tsx`, `studioBootstrapWorkflow.ts`, `runtimeAgentEventWorkflow.test.ts`, `gatewayClient.reconnect-recovery.test.ts`, `pathfinding.ts`, `multiavatar.ts`, `custom/route.ts`, `navigation.diagonalCorner.test.ts`, `janitorReset.ts`, `studioSettings.test.ts`?**
  _High betweenness centrality (0.086) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `OfficeScreen()` (e.g. with `Current Post-Merge Sequence` and `Immediate Next Deliverables`) actually correct?**
  _`OfficeScreen()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `PATH`, `NEXT_TELEMETRY_DISABLED`, `NEXT_PUBLIC_GATEWAY_URL` to the rest of the system?**
  _3 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `CompanyBuilderModal.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.11396011396011396 - nodes in this community are weakly interconnected._
- **Why does `react` connect `react` to `useTaskBoardController.ts`, `CompanyBuilderModal.tsx`, `useAgentSettingsMutationController.ts`, `toWorld`, `OfficeScreen.tsx`, `SkillsMarketplacePanel.tsx`, `GatewayClient.ts`, `RetroOffice3D.tsx`, `useUsageAnalytics.ts`, `presentation.ts`, `voiceReply/provider.ts`, `useConfigMutationQueue.ts`, `animePresets.ts`, `GatewayClient`, `chatSendOperation.ts`, `useOfficeStandupController.ts`, `agents.tsx`, `RunningAvatarLoader`, `AgentState`, `MonitorImmersiveContent.tsx`, `skills/types.ts`, `github.ts`, `constants.ts`, `floors.ts`, `vitest`, `devDependencies`, `useStudioOfficePreference.ts`, `multiavatar.ts`, `layout.tsx`, `AgentChatPanel.tsx`, `spotify-jukebox/store.ts`, `furniture.tsx`, `profile.ts`, `district.ts`, `triggers.ts`, `colorSemantics.ts`, `useVoiceRecorder.ts`, `StudioGatewayAdapterType`, `models.ts`, `AgentsPageScreen`, `dependencies`, `OfficePhaserCanvas.tsx`, `useRuntimeSyncController.ts`, `settingsRouteWorkflow.ts`, `agents/agentFiles.ts`, `tasks/types.ts`, `AgentSettingsPanel.tsx`, `useRunLog.ts`, `lucide-react`, `useOfficeBuilderStore.ts`, `StudioSettingsCoordinator`, `presence.ts`?**
  _High betweenness centrality (0.083) - this node is a cross-community bridge._
- **Should `useAgentSettingsMutationController.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.0951219512195122 - nodes in this community are weakly interconnected._
- **Why does `next` connect `custom/route.ts` to `OfficeScreen.tsx`, `media/route.ts`, `call/mock.ts`, `voiceReply/provider.ts`, `animePresets.ts`, `MonitorImmersiveContent.tsx`, `github.ts`, `media/route.ts`, `devDependencies`, `upload/route.ts`, `meeting/route.ts`, `settings-store.ts`, `multiavatar.ts`, `layout.tsx`, `custom/route.ts`, `browser-preview/route.ts`, `voiceTranscription.ts`, `office/store.ts`, `AgentsPageScreen`, `resolveStateDir`, `dependencies`, `SmsBoothImmersiveScreen.tsx`, `index.js`, `standup/types.ts`, `layout/route.ts`, `run/route.ts`, `presence.ts`?**
  _High betweenness centrality (0.045) - this node is a cross-community bridge._