# Graph Report - claw3d  (2026-10-24)

## Corpus Check
- 597 files · ~447,074 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 37 file(s) not represented in the graph (top: .glb 25, (none) 6, .service 2)

## Summary
- 5211 nodes · 12264 edges · 205 communities (193 shown, 12 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 192 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `abb72ba1`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- useTaskBoardController.ts
- chatSendOperation.ts
- AnalyticsPanel.tsx
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
- historySyncOperation.ts
- gatewayRuntimeEventHandler.ts
- RuntimeProvider
- chatSendOperation.ts
- execApprovalControlLoopWorkflow.ts
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
- useAgentSettingsMutationController.ts
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
- buildAgentMainSessionKey
- schema.ts
- normalizeCommandText
- execApprovalRunControlOperation.ts
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
- execApprovalRuntimeCoordinator.ts
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
- gateway-proxy.js
- tasks/types.ts
- PI + Chat Streaming (Studio Side)
- index.js
- runtime/types.ts
- Step-by-step tasks
- personalityBuilder.ts
- Custom Runtime Provider Spec
- AgentSettingsPanel.tsx
- agentFleetHydration.ts
- README.md
- useRunLog.ts
- Universal Backend Plan
- .connect
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
- custom/provider.ts
- compilerOptions
- layout/route.ts
- run/route.ts
- specialLatestUpdateOperation.ts
- presence.ts
- studio-settings.js
- approvals/types.ts
- studioRoute.ts
- ref_node_path
- useOnboardingState.ts
- randomUUID
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
- execApprovalEvents.ts
- agentMessaging.ts
- RunningAvatarLoader
- package.json
- Critical Fixes
- AnalyticsPanel.tsx
- AmbienceSystem.ts
- Claw3D Vision
- Task Manager
- TODO Board
- nodeGatewayClient.ts
- ref_node_crypto
- clawd3d-start.sh
- media/route.ts
- path-suggestions/route.ts
- CompanyBuilderModal.tsx
- models.ts
- gatewayClient.reconnect-recovery.test.ts
- Cursor Cloud specific instructions
- OpenClaw Gateway Skill Contract
- Roadmap
- upload/route.ts
- pathfinding.ts
- contact_links
- shared-store-client.ts
- useStudioVoiceRepliesPreference.ts
- Contributing
- Step-by-step tasks
- GatewayBrowserClient
- taskBoardState.ts
- multiavatar.ts
- layout.tsx
- custom/route.ts
- multiavatar
- .github/SECURITY.md
- postcss.config.mjs
- presence.ts
- profilePortrait.ts
- GatewayGapInfo
- custom/route.ts
- GatewayStatus
- settingsSidebarTabs.ts
- useVoiceRecorder.ts
- eslint.config.mjs
- deploy-local.sh
- verify-claw3d.sh
- Top-Level Code Map
- AgentCreateModal.tsx
- janitorReset.ts
- StudioGatewayAdapterType
- smoke-dev-server.mjs
- Support
- studioSettings.test.ts
- rewriteMediaLinesToMarkdown
- @testing-library/jest-dom

## God Nodes (most connected - your core abstractions)
1. `vitest` - 183 edges
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
- `Current context / assumptions` --references--> `AvatarFeminineHair()`  [INFERRED]
  .hermes/plans/2026-10-25_000000-claw3d-male-avatar-glb.md → src/features/agents/components/avatar3d/AvatarGenderParts.tsx
- `Task 9 — Hook ke `AgentModel` di scene (`agents.tsx`)` --references--> `AvatarFeminineHair()`  [INFERRED]
  .hermes/plans/2026-10-25_000000-claw3d-male-avatar-glb.md → src/features/agents/components/avatar3d/AvatarGenderParts.tsx
- `History Sync (Recovery, Load More)` --references--> `buildHistoryLines()`  [INFERRED]
  docs/pi-chat-streaming.md → src/features/agents/state/runtimeEventBridge.ts
- `3. Implement auto-hide state in `OfficeFloorNav.tsx`` --references--> `OfficeFloorNav()`  [INFERRED]
  .hermes/plans/2026-10-25_033617-office-floor-nav-autohide.md → src/features/office/components/OfficeFloorNav.tsx
- `Risks, tradeoffs, open questions` --references--> `OfficeFloorNav()`  [INFERRED]
  .hermes/plans/2026-10-25_033617-office-floor-nav-autohide.md → src/features/office/components/OfficeFloorNav.tsx

## Import Cycles
- None detected.

## Communities (205 total, 12 thin omitted)

### Community 0 - "useTaskBoardController.ts"
Cohesion: 0.16
Nodes (31): RunRecord, buildActiveRunOptions(), buildCardFromExplicitEvent(), buildCardFromGatewayTask(), buildCardFromSharedTaskRecord(), buildPlaybookCards(), buildStandupSeedCards(), cardTextKey() (+23 more)

### Community 1 - "chatSendOperation.ts"
Cohesion: 0.15
Nodes (17): Sending Messages (Browser -> PI via Gateway), extractImmediateAssistantText(), GatewayClientLike, resolveChatSendCompletionMode(), resolveLatestTranscriptTimestampMs(), sendChatMessageViaStudio(), SendDispatch, SendDispatchAction (+9 more)

### Community 2 - "AnalyticsPanel.tsx"
Cohesion: 0.25
Nodes (15): OfficeUsageAnalyticsParams, useOfficeUsageAnalyticsViewModel(), AtmImmersiveScreen(), EmptyPanelState(), ListRow(), resolveInitialPinMode(), SectionCard(), SummaryCard() (+7 more)

### Community 3 - "toWorld"
Cohesion: 0.06
Nodes (77): @react-three/drei, @react-three/fiber, DOOR_THICKNESS, SCALE, SNAP_GRID, WALL_THICKNESS, FURNITURE_ROTATION, getItemBaseSize() (+69 more)

### Community 4 - "OfficeScreen.tsx"
Cohesion: 0.04
Nodes (68): buildGenerateCompanyPlanPrompt(), buildImproveCompanyBriefPrompt(), HQSidebar(), HQSidebarProps, HQSidebarTab, PRIMARY_TABS, TAB_LABELS, formatRelativeTime() (+60 more)

### Community 5 - "navigation.ts"
Cohesion: 0.06
Nodes (47): CANVAS_H, CANVAS_W, DOOR_LENGTH, MIN_WALL_LENGTH, getItemBounds(), ITEM_FOOTPRINT, ITEM_METADATA, normalizeDegrees() (+39 more)

### Community 6 - "GatewayClient.ts"
Cohesion: 0.05
Nodes (51): Reconnects And Retries, Studio Settings (Where Gateway URL/Token Come From), vitest, GatewayErrorPayload, GatewayResponseError, EventHandler, formatGatewayError(), GapHandler (+43 more)

### Community 7 - "hermes-gateway-adapter.js"
Cohesion: 0.06
Nodes (60): activeRuns, activeSendEventFns, ADAPTER_PORT, agentListPayload(), agents, broadcastEvent(), buildDemoReply(), clearHistory() (+52 more)

### Community 8 - "RetroOffice3D.tsx"
Cohesion: 0.05
Nodes (55): SettingsPanel(), Bubble(), PhoneBoothImmersiveScreen(), PhoneCallStep, sourceTone(), StandupImmersiveScreen(), AGENT_RADIUS, BUMP_FREEZE_MS (+47 more)

### Community 9 - "media/route.ts"
Cohesion: 0.08
Nodes (39): isSafeAgentId(), POST(), PUT(), resolveAgentStateSshTarget(), RestoreAgentStateRequest, runtime, TrashAgentStateRequest, resolveSshTarget() (+31 more)

### Community 10 - "service.ts"
Cohesion: 0.10
Nodes (34): runtime, GitHubPullRequestSummary, buildJiraSearchUrl(), buildSourceState(), buildSpeech(), buildStandupMeeting(), coerceText(), dedupePullRequests() (+26 more)

### Community 11 - "useUsageAnalytics.ts"
Cohesion: 0.13
Nodes (34): addTotals(), asArray(), asNumber(), asRecord(), asString(), calculateBudgetAlerts(), CostDailyRow, EMPTY_MESSAGE_COUNTS (+26 more)

### Community 12 - "presentation.ts"
Cohesion: 0.05
Nodes (70): AgentSkillsPanel(), AgentSkillsPanelProps, DISPLAY_CLASSES, DISPLAY_LABELS, FILTERS, resolveHint(), SkillRowFilter, AgentSkillsSetupModal() (+62 more)

### Community 13 - "agentConfig.ts"
Cohesion: 0.07
Nodes (55): How Studio Chooses the Default Workspace Path, Studio -> Gateway: “Create Agent” End-to-End, AgentHeartbeat, AgentHeartbeatActiveHours, AgentHeartbeatResult, AgentHeartbeatSummary, AgentHeartbeatUpdatePayload, AgentSkillsAccessMode (+47 more)

### Community 14 - "historySyncOperation.ts"
Cohesion: 0.12
Nodes (22): buildHistoryMetadataPatch(), HistoryRequestIntent, HistoryResponseDisposition, resolveHistoryFetchLimit(), resolveHistoryRequestIntent(), resolveHistoryResponseDisposition(), areStringArraysEqual(), ChatHistoryMessage (+14 more)

### Community 15 - "gatewayRuntimeEventHandler.ts"
Cohesion: 0.08
Nodes (49): createGatewayRuntimeEventHandler(), findAgentByRunId(), GatewayRuntimeEventHandler, GatewayRuntimeEventHandlerDeps, resolveRole(), AgentEventPayload, classifyGatewayEventKind(), dedupeRunLines() (+41 more)

### Community 16 - "RuntimeProvider"
Cohesion: 0.14
Nodes (8): GatewayConnectionState, createRuntimeProvider(), DemoRuntimeProvider, OpenClawRuntimeProvider, hasRuntimeCapability(), RuntimeProvider, RuntimeConnectionState, useRuntimeConnection()

### Community 17 - "chatSendOperation.ts"
Cohesion: 0.07
Nodes (34): DraftFlushIntent, DraftTimerIntent, NewSessionIntent, planDraftFlushIntent(), planDraftTimerIntent(), planNewSessionIntent(), planStopRunIntent(), StopRunIntent (+26 more)

### Community 18 - "execApprovalControlLoopWorkflow.ts"
Cohesion: 0.16
Nodes (13): AutoResumeIntent, PauseRunIntent, planAutoResumeIntent(), planAwaitingUserInputPatches(), planPausedRunMapCleanup(), planPauseRunIntent(), planPendingPruneDelay(), resolvePauseTargetAgent() (+5 more)

### Community 19 - "furnitureDefaults.ts"
Cohesion: 0.05
Nodes (68): ATM_MIGRATION_KEY, GYM_ROOM_MIGRATION_KEY, PHONE_BOOTH_MIGRATION_KEY, QA_LAB_MIGRATION_KEY, SERVER_ROOM_MIGRATION_KEY, SMS_BOOTH_MIGRATION_KEY, STORAGE_KEY, createFurnitureSignature() (+60 more)

### Community 20 - "agents.tsx"
Cohesion: 0.18
Nodes (20): AgentAvatarGlbModel(), Props, PreviewFigure(), AvatarFeminineHair(), AvatarLashes(), AvatarLegClothing(), AvatarSkirt(), Box() (+12 more)

### Community 21 - "settings.ts"
Cohesion: 0.07
Nodes (82): coerceString(), DEFAULT_REMOTE_OFFICE_SOURCE_KIND, defaultFocusedPreference(), defaultStudioOfficePreference(), defaultStudioStandupManualEntry(), FloorRuntimeConnectionStatus, FocusFilter, isRecord() (+74 more)

### Community 22 - "claw3doctor.mjs"
Cohesion: 0.12
Nodes (44): checkFail(), checkPass(), checkWarn(), detectHermesModelHealth(), detectOpenClawVersion(), detectWorkspaceState(), formatErrorMessage(), loadDotenvFile() (+36 more)

### Community 23 - "agentPermissionsOperation.ts"
Cohesion: 0.05
Nodes (68): Capabilities Permissions Updates, Debug Checklist (When Something Feels “Wrong”), Glossary, Hard Enforcement: Filesystem Tool Root Guard, Mental Model (First Principles), One-Shot Sandbox Tool Policy Repair, OpenClaw (Upstream): Exec Approvals (Policy + Events), OpenClaw (Upstream): Sandbox Semantics (+60 more)

### Community 24 - "AgentState"
Cohesion: 0.14
Nodes (14): planIngressCommands(), EMPTY_EVENT_EFFECTS, ExecApprovalEventEffects, ExecApprovalFollowUpIntent, NO_FOLLOW_UP_INTENT, resolveExecApprovalEventEffects(), resolveExecApprovalFollowUpIntent(), shouldTreatExecApprovalResolveErrorAsUnknownId() (+6 more)

### Community 25 - "chatItems.ts"
Cohesion: 0.16
Nodes (27): AgentChatRenderBlock, appendThinkingTraceEvent(), buildAgentChatItems(), BuildAgentChatItemsInput, buildAgentChatRenderBlocks(), buildFinalAgentChatItems(), extractFirstCodeBlockLine(), extractToolArgSummary() (+19 more)

### Community 26 - "GatewayClient"
Cohesion: 0.28
Nodes (11): buildSkillRemovalMessage(), escapeForJsonString(), normalizeRequired(), removeSkillViaGatewayAgent(), resolveAllowedRoot(), resolveMainKey(), resolveRemovalWorkspace(), resolveRunId() (+3 more)

### Community 27 - "skills/types.ts"
Cohesion: 0.09
Nodes (37): MarketplaceMessage, useOfficeSkillsMarketplace(), appendPackagedSkillsToMarketplace(), buildPackagedSkillStatusEntry(), EMPTY_REQUIREMENTS, getPackagedSkillById(), listPackagedSkills(), PACKAGED_SKILLS (+29 more)

### Community 28 - "github.ts"
Cohesion: 0.08
Nodes (59): GET(), parsePullRequestNumber(), POST(), ReviewRequestBody, runtime, getDiffLineTone(), GitHubDiffFile, ParsedDiffLine (+51 more)

### Community 29 - "constants.ts"
Cohesion: 0.07
Nodes (37): AGENT_SCALE, BUMP_RECOVERY_MS, DESK_STICKY_MS, EAST_HALL_WIDTH, EAST_WING_DOOR_Y, EAST_WING_ROOM_HEIGHT, EAST_WING_ROOM_TOP_Y, EAST_WING_SIDE_MARGIN (+29 more)

### Community 30 - "QA Department Spec"
Cohesion: 0.05
Nodes (40): Agent Interaction Model, Approval-Aware Review, Approvals, Approved, Blocked, Bug Triage, Bulletin Board, Changes Requested (+32 more)

### Community 31 - "QA Department Spec"
Cohesion: 0.05
Nodes (40): Agent Interaction Model, Approval-Aware Review, Approvals, Approved, Blocked, Bug Triage, Bulletin Board, Changes Requested (+32 more)

### Community 32 - "mutationLifecycleWorkflow.ts"
Cohesion: 0.08
Nodes (31): AgentCreateModalSubmitPayload, AgentConfigMutationLifecycleDeps, AgentConfigMutationLifecycleKind, assertMutationKind(), AwaitingRestartPatch, buildConfigMutationFailureMessage(), buildMutatingMutationBlock(), buildMutationSideEffectCommands() (+23 more)

### Community 33 - "eventTriggers.ts"
Cohesion: 0.10
Nodes (33): How Office Motion Works, applyHoldDirective(), BooleanByAgentId, buildOfficeAnimationState(), clearOfficeAnimationTriggerHold(), createOfficeAnimationTriggerState(), emptyObject(), isUserLikeChatRole() (+25 more)

### Community 34 - "floors.ts"
Cohesion: 0.09
Nodes (38): Floor Registry Slice, Immediate Implementation Checklist, Per-Floor Runtime State Slice, Phase 1: Floor Registry, Roster Slice, UI Shell Slice, OfficeFloorNav(), OfficeFloorNavProps (+30 more)

### Community 35 - "coordinator.ts"
Cohesion: 0.07
Nodes (36): fetchJson(), AnalyticsPatch, AvatarsPatch, createStudioSettingsCoordinator(), DeskAssignmentsPatch, fetchStudioSettings(), FocusedPatch, mergeAnalyticsPatch() (+28 more)

### Community 36 - "Agent State Model Spec"
Cohesion: 0.05
Nodes (38): Agent State Model Spec, Blocked, Bulletin Board, Core Principle, Degraded, Desk Progression / Hierarchy, Error, Existing Code Seams (+30 more)

### Community 37 - "devDependencies"
Cohesion: 0.10
Nodes (20): devDependencies, jsdom@^27.4.0, @playwright/test@^1.58.0, tailwindcss@^4, @tailwindcss/postcss@^4, @testing-library/react@^16.3.2, tw-animate-css@^1.4.0, @types/canvas-confetti@^1.9.0 (+12 more)

### Community 38 - "Desk Progression Spec"
Cohesion: 0.05
Nodes (37): Agent Interaction Model, Bulletin Board / Whiteboard, Contractor, Contractor Desk, Core Principle, Desk Progression Spec, Employee, Employee Desk (+29 more)

### Community 39 - "Desk Progression Spec"
Cohesion: 0.05
Nodes (37): Agent Interaction Model, Bulletin Board / Whiteboard, Contractor, Contractor Desk, Core Principle, Desk Progression Spec, Employee, Employee Desk (+29 more)

### Community 40 - "useAgentSettingsMutationController.ts"
Cohesion: 0.05
Nodes (70): AgentPermissionsDraft, CRON_ACTION_BUSY_MESSAGE, CronBusyState, CronCreateDeps, isCronActionBusy(), performCronCreateFlow(), resolveCreateAgentId(), resolveCreateErrorMessage() (+62 more)

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
Cohesion: 0.12
Nodes (23): GET(), isPatch(), PUT(), runtime, defaultStudioSettings(), sanitizeStudioGatewaySettings(), sanitizeStudioOfficePreference(), sanitizeStudioSettings() (+15 more)

### Community 49 - "AgentChatPanel.tsx"
Cohesion: 0.11
Nodes (26): AgentAvatar(), AgentChatComposer, AgentChatFinalItems, AgentChatPanel(), AgentChatPanelProps, AgentChatTranscript, AssistantIntroCard, AssistantMessageCard (+18 more)

### Community 50 - "planning.ts"
Cohesion: 0.12
Nodes (31): CommandModeId, CreatedAgentRecord, runCompanyBootstrapOperation(), buildCompanyAgentBlueprints(), buildRoleAgentsMarkdown(), buildRoleHeartbeatMarkdown(), buildRoleIdentity(), buildRoleMemoryMarkdown() (+23 more)

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
Cohesion: 0.14
Nodes (28): DELETE(), errorJson(), GET(), isRecord(), json(), PUT(), isTaskBoardSource(), isTaskBoardStatus() (+20 more)

### Community 56 - "profile.ts"
Cohesion: 0.09
Nodes (31): AgentAvatarEditorPanelHandle, AgentAvatarEditorPanelProps, AGENT_AVATAR_BOTTOM_STYLE_OPTIONS, AGENT_AVATAR_CLOTHING_COLOR_OPTIONS, AGENT_AVATAR_GENDER_OPTIONS, AGENT_AVATAR_HAIR_COLOR_OPTIONS, AGENT_AVATAR_HAIR_STYLE_OPTIONS, AGENT_AVATAR_HAT_STYLE_OPTIONS (+23 more)

### Community 57 - "runtimeEventBridge.ts"
Cohesion: 0.06
Nodes (63): extractReasoningBody(), hasReasoningSignal(), hasUnclosedThinkingTag(), isReasoningOnlyAssistantChunk(), normalizeReasoningComparable(), planRuntimeAgentEvent(), resolveThinkingFromAgentStream(), RuntimeAgentWorkflowResult (+55 more)

### Community 58 - "district.ts"
Cohesion: 0.09
Nodes (31): WORLD_H, WORLD_W, CITY_PATH_ZONE, clampPointToZone(), clampZoneValue(), DISTRICT_CAMERA_POSITION, DISTRICT_CAMERA_TARGET, DISTRICT_CAMERA_ZOOM (+23 more)

### Community 59 - "triggers.ts"
Cohesion: 0.16
Nodes (21): isSkillEnabledForAgent(), useOfficeSkillTriggers(), buildOfficeSkillTriggerHoldMaps(), DEFAULT_SKILL_TRIGGER_FALLBACKS_BY_SKILL_KEY, DefaultSkillTriggerFallback, isOfficeSkillTriggerMovementTarget(), OFFICE_INTERACTION_TARGETS, OFFICE_SKILL_TRIGGER_MOVEMENT_TARGETS (+13 more)

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
Cohesion: 0.08
Nodes (32): RuntimeAgentWorkflowCommand, RuntimeAgentWorkflowInput, planRuntimeChatEvent(), resolveTerminalSeq(), RuntimeChatWorkflowCommand, RuntimeChatWorkflowInput, RuntimeChatWorkflowResult, summarizeThinkingMessage() (+24 more)

### Community 64 - "store.tsx"
Cohesion: 0.09
Nodes (40): Action, AgentStoreContext, AgentStoreContextValue, agentStoreReducer, AgentStoreSeed, AgentStoreState, areStringArraysEqual(), createRuntimeAgentState() (+32 more)

### Community 65 - "with"
Cohesion: 0.06
Nodes (31): env, IMAGE_BASENAME, REGISTRY, jobs, publish, name, contents, packages (+23 more)

### Community 66 - "browser-preview/route.ts"
Cohesion: 0.11
Nodes (27): BrowserOpenResponse, browserRequest(), BrowserScreenshotResponse, BrowserTab, BrowserTabsResponse, buildBrowserHeaders(), ensurePreviewTab(), GET() (+19 more)

### Community 67 - "buildAgentMainSessionKey"
Cohesion: 0.19
Nodes (17): runtime, SummaryPreviewSnapshot, SummaryStatusSnapshot, normalizeRemoteGatewayUrl(), useRemoteOfficePresence(), UseRemoteOfficePresenceParams, UseRemoteOfficePresenceResult, buildAgentMainSessionKey() (+9 more)

### Community 68 - "schema.ts"
Cohesion: 0.11
Nodes (31): asBoolean(), asNumber(), asString(), defaultLayers(), isRecord(), normalizeAmbiencePreset(), normalizeDeskAssignments(), normalizeInteractionKind() (+23 more)

### Community 69 - "normalizeCommandText"
Cohesion: 0.22
Nodes (17): resolveOfficeCallDirective(), resolveOfficeTextDirective(), applyUserMessageTriggers(), buildPhoneCallDirectiveKey(), buildStableLatestRequestSeed(), buildTextMessageDirectiveKey(), createPhoneCallRequest(), createTextMessageRequest() (+9 more)

### Community 70 - "execApprovalRunControlOperation.ts"
Cohesion: 0.12
Nodes (18): ExecApprovalIngressCommand, ExecApprovalPendingSnapshot, EXEC_APPROVAL_AUTO_RESUME_WAIT_TIMEOUT_MS, executeExecApprovalIngressCommands(), GatewayClientLike, RunControlDispatch, RunControlDispatchAction, runExecApprovalAutoResumeOperation() (+10 more)

### Community 71 - "standup/store.ts"
Cohesion: 0.17
Nodes (19): GET(), PUT(), runtime, advanceStandupMeeting(), startStandupSpeaker(), updateStandupArrivals(), defaultStore(), ensureDirectory() (+11 more)

### Community 72 - "models.ts"
Cohesion: 0.16
Nodes (18): asRecord(), GatewayConnectionStatus, GatewayModelsSyncIntent, RecordLike, resolveGatewayConfigRecord(), resolveGatewayModelsSyncIntent(), resolveSandboxRepairAgentIds(), resolveSandboxRepairIntent() (+10 more)

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
Cohesion: 0.10
Nodes (39): runResolveExecApprovalOperation(), mergePendingApprovalsForFocusedAgent(), applyCreateAgentBootstrapPermissions(), executeCreateAgentBootstrapCommands(), resolveConfigMutationStatusLine(), executeStudioBootstrapLoadCommands(), executeStudioFocusedPatchCommands(), executeStudioFocusedPreferenceLoadCommands() (+31 more)

### Community 79 - "resolveStateDir"
Cohesion: 0.16
Nodes (19): contentTypeFromName(), GET(), runtime, uploadsDir(), ensureUnderBase(), GatewayAgentStateMove, isSafeAgentId(), moveIfExists() (+11 more)

### Community 80 - "Runtime Profile Architecture"
Cohesion: 0.08
Nodes (25): 1. `docs: runtime profile architecture`, 2. `feat: claw3doctor`, 3. `refactor: office shell modularization`, 4. `docs: floor schema and builder plan`, 5. `feat: admin floor builder`, Branch Sequence, Core Terms, Custom Runtime Position (+17 more)

### Community 81 - "dependencies"
Cohesion: 0.09
Nodes (22): dependencies, canvas-confetti@^1.9.4, class-variance-authority@^0.7.1, lucide-react@^0.563.0, next@16.1.7, @noble/ed25519@^3.0.0, phaser@^3.90.0, react@19.2.3 (+14 more)

### Community 82 - "GatewayBrowserClient.ts"
Cohesion: 0.07
Nodes (38): base64UrlDecode(), base64UrlEncode(), buildDeviceAuthPayload(), buildScopedTokenKey(), bytesToHex(), clearDeviceAuthToken(), CryptoLike, DeviceAuthEntry (+30 more)

### Community 83 - "Office Systems Roadmap"
Cohesion: 0.08
Nodes (24): Agent State Model, Bulletin Board, Candidate Feature Order, Core Direction, Departments, Design Principles, Desk / CPU Progression, Hierarchy (+16 more)

### Community 84 - "OfficePhaserCanvas.tsx"
Cohesion: 0.15
Nodes (14): phaser, OfficePhaserCanvas(), OfficePhaserCanvasProps, createOfficeBuilderScene(), OfficeBuilderRenderable, createOfficeSceneBridge(), OfficeDebugSettings, OfficeRuntimeSettings (+6 more)

### Community 85 - "execApprovalRuntimeCoordinator.ts"
Cohesion: 0.22
Nodes (17): planPrunedPendingState(), applyApprovalIngressEffects(), ApprovalIngressResult, ApprovalPauseRequest, AutoResumeDispatchIntent, AutoResumePreflightIntent, AwaitingUserInputPatch, prunePendingApprovalState() (+9 more)

### Community 86 - "useRuntimeSyncController.ts"
Cohesion: 0.09
Nodes (41): executeAgentReconcileCommands(), GatewayClientLike, ReconcileCommand, ReconcileDispatchAction, runAgentReconcileOperation(), buildReconcileTerminalPatch(), ReconcileEligibility, resolveReconcileEligibility() (+33 more)

### Community 87 - "settingsRouteWorkflow.ts"
Cohesion: 0.21
Nodes (21): buildSettingsRouteHref(), InspectSidebarState, parseSettingsRouteAgentIdFromPathname(), parseSettingsRouteAgentIdFromQueryParam(), planBackToChatCommands(), planFleetSelectCommands(), planNonRouteSelectionSyncCommands(), planOpenSettingsRouteCommands() (+13 more)

### Community 88 - "CustomRuntimeProvider"
Cohesion: 0.22
Nodes (6): CustomRuntimeProvider, extractContentText(), isRecord(), normalizeModelChoices(), resolveAssistantTextFromResponse(), resolveDefaultModelId()

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
Cohesion: 0.13
Nodes (22): AgentsListResult, DerivedHydrateAgentFleetResult, DeriveFleetHydrationInput, deriveHydrateAgentFleetResult(), ExecApprovalsSnapshot, ExecAsk, ExecHost, ExecPolicyEntry (+14 more)

### Community 96 - "gateway-proxy.js"
Cohesion: 0.13
Nodes (17): ws@^8.18.3, ws, buildErrorResponse(), createFrameRateLimiter(), createGatewayProxy(), hasCompleteDeviceAuth(), hasNonEmptyDeviceToken(), hasNonEmptyPassword() (+9 more)

### Community 97 - "tasks/types.ts"
Cohesion: 0.13
Nodes (17): react, TaskBoardPanel(), KanbanImmersiveScreen(), formatRelativeTime(), STATUS_LABELS, STATUS_ORDER, stopAndGetCardId(), TaskBoardView() (+9 more)

### Community 98 - "PI + Chat Streaming (Studio Side)"
Cohesion: 0.09
Nodes (23): Connect failures, Connect handshake, Debugging Checklist (When Chat “Feels Buggy”), End-To-End Flow (PI Run -> UI), `event: "agent"` payload, `event: "chat"` payload, Exec Approvals In Chat (Related To “PI Runs”), High-Level Network Path (+15 more)

### Community 99 - "index.js"
Cohesion: 0.16
Nodes (17): selfsigned@^5.5.0, selfsigned, CERT_DIR, CERT_PATH, generateHttpsCert(), KEY_PATH, main(), resolvePathname() (+9 more)

### Community 100 - "runtime/types.ts"
Cohesion: 0.13
Nodes (17): EventFrame, DEMO_RUNTIME_CAPABILITIES, HERMES_RUNTIME_CAPABILITIES, coerceTimestamp(), isRecord(), normalizeGatewayEvent(), resolveChatText(), resolveTimestamp() (+9 more)

### Community 101 - "Step-by-step tasks"
Cohesion: 0.08
Nodes (24): Architecture / proposed approach, Current context / assumptions, Files touched, Goal, Plan: Run Claw3D natively on the host (drop Docker), keep kerja.besoksenin.web.id, Risks, tradeoffs, open questions, Step-by-step tasks, Task 0: Graphify read and baseline snapshot (2 min) (+16 more)

### Community 102 - "personalityBuilder.ts"
Cohesion: 0.14
Nodes (27): AgentIdentityFields(), AgentBrainPanel(), AgentBrainPanelSection(), AgentFileProvenance(), buildIdentityFileDraft(), AgentFilesInput, cleanLabel(), cleanValue() (+19 more)

### Community 103 - "Custom Runtime Provider Spec"
Cohesion: 0.09
Nodes (21): Capability Philosophy, Core Principle, Current Branch Status, Custom Metadata Surface, Custom Runtime Provider Spec, Event Model, Goal, Implementation Strategy (+13 more)

### Community 104 - "AgentSettingsPanel.tsx"
Cohesion: 0.13
Nodes (19): AgentBrainPanelProps, AgentInspectHeader(), AgentInspectHeaderProps, AgentSettingsPanel(), AgentSettingsPanelProps, applyTemplateDefaults(), arePermissionsDraftEqual(), createInitialCronDraft() (+11 more)

### Community 105 - "agentFleetHydration.ts"
Cohesion: 0.17
Nodes (15): AgentsListResult, ExecApprovalsSnapshot, GatewayClientLike, hydrateAgentFleetFromGateway(), HydrateAgentFleetResult, isRecord(), parseIdentityNameFromContent(), resolveAgentsListFromHelloSnapshot() (+7 more)

### Community 106 - "README.md"
Cohesion: 0.10
Nodes (11): Code Of Conduct, Enforcement, Expected Behavior, Our Pledge, Unacceptable Behavior, Roadmap, Current Security Limitations, Deployment Notes (+3 more)

### Community 107 - "useRunLog.ts"
Cohesion: 0.15
Nodes (18): findLatestHeartbeatResponse(), findAgentBySessionKey(), formatClockTime(), formatDuration(), HistoryPanel(), TRIGGER_LABELS, findAgentForRunEvent(), resolveLifecyclePhase() (+10 more)

### Community 108 - "Universal Backend Plan"
Cohesion: 0.10
Nodes (20): Capability Matrix, Core Adapter Contract, Event Model, Hermes Provider, High-Value PR Split, Near-Term Guidance For Luke, OpenClaw Provider, PR 1: Runtime Abstraction (+12 more)

### Community 109 - ".connect"
Cohesion: 0.17
Nodes (3): GatewayConnectOptions, parseConnectFailedCloseReason(), HermesRuntimeProvider

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
Nodes (21): lucide-react, AgentsStep(), AgentsStepProps, CompanyStep(), CompanyStepProps, CompleteStep(), ConnectStep(), ConnectStepProps (+13 more)

### Community 114 - "useOfficeBuilderStore.ts"
Cohesion: 0.16
Nodes (17): OfficeBuilderPage(), nextId(), OfficeBuilderPanel(), OfficeBuilderPanelProps, BuilderAction, BuilderHistory, BuilderSelection, BuilderState (+9 more)

### Community 115 - "StudioSettingsCoordinator"
Cohesion: 0.20
Nodes (7): useStudioOfficePreference(), UseStudioOfficePreferenceParams, StudioSettingsCoordinator, defaultStudioOfficePreferencePublic(), resolveOfficePreferencePublic(), StudioOfficePreferencePublic, StudioSettingsPatch

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

### Community 120 - "createAgentBootstrapOperation.ts"
Cohesion: 0.22
Nodes (11): CREATE_AGENT_DEFAULT_PERMISSIONS, CreateCompletion, CreatedAgent, resolveBootstrapErrorMessage(), runCreateAgentBootstrapOperation(), buildBootstrapGlobalErrorMessage(), buildBootstrapModalErrorMessage(), buildMissingCreatedAgentMessage() (+3 more)

### Community 121 - "gateway.ts"
Cohesion: 0.29
Nodes (10): createGatewayTask(), deleteGatewayTask(), GatewayTaskCreateInput, GatewayTaskRecord, GatewayTasksListResult, GatewayTaskUpdateInput, isUnsupportedTaskGatewayError(), listGatewayTasks() (+2 more)

### Community 122 - "custom/provider.ts"
Cohesion: 0.13
Nodes (21): CustomRuntimeProxyInput, fetchCustomRuntimeJson(), normalizeCustomBaseUrl(), probeCustomRuntime(), requestCustomRuntime(), ActiveRunRecord, buildChatFailureMessage(), buildIdentityAgent() (+13 more)

### Community 123 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 124 - "layout/route.ts"
Cohesion: 0.22
Nodes (17): fetchRemoteOfficeLayoutSnapshot(), GET(), PUT(), runtime, deriveRemoteLayoutUrlFromPresenceUrl(), isRecord(), normalizeOfficeLayoutSnapshot(), OfficeLayoutSnapshot (+9 more)

### Community 125 - "run/route.ts"
Cohesion: 0.24
Nodes (12): GET(), PUT(), readGatewayUrl(), runtime, POST(), defaultStudioStandupJiraConfig(), defaultStudioStandupPreference(), defaultStudioStandupScheduleConfig() (+4 more)

### Community 126 - "specialLatestUpdateOperation.ts"
Cohesion: 0.20
Nodes (12): buildLatestUpdatePatch(), LatestUpdateIntent, LatestUpdateKind, resolveLatestUpdateIntent(), resolveLatestUpdateKind(), ChatHistoryMessage, ChatHistoryResult, createSpecialLatestUpdateOperation() (+4 more)

### Community 127 - "presence.ts"
Cohesion: 0.19
Nodes (12): GET(), POST(), runtime, stripRemoteAgentPrefix(), AgentsListResult, POST(), resolveLatestAssistantHistoryText(), runtime (+4 more)

### Community 128 - "studio-settings.js"
Cohesion: 0.26
Nodes (12): main(), parseArgs(), tryReadGatewayTokenFromOpenclawCli(), isRecord(), LEGACY_STATE_DIRNAMES, loadUpstreamGatewaySettings(), readJsonFile(), readOpenclawGatewayDefaults() (+4 more)

### Community 129 - "approvals/types.ts"
Cohesion: 0.17
Nodes (8): normalizeExecAsk(), shouldPauseRunForPendingExecApproval(), GatewayClientLike, resolveExecApprovalViaStudio(), SetState, updatePendingApprovalById(), PendingExecApproval, SetState

### Community 130 - "studioRoute.ts"
Cohesion: 0.31
Nodes (5): @playwright/test, createStudioRoute(), DEFAULT_SETTINGS, stubStudioRoute(), StudioSettingsFixture

### Community 131 - "ref_node_path"
Cohesion: 0.08
Nodes (15): contents, destPath, repoRoot, isPathInside(), normalizeRequiredPath(), removeSkillLocally(), resolveAllowedRoot(), resolveComparablePath() (+7 more)

### Community 132 - "useOnboardingState.ts"
Cohesion: 0.53
Nodes (4): OnboardingStateReturn, readCompleted(), useOnboardingState(), writeCompleted()

### Community 133 - "randomUUID"
Cohesion: 0.12
Nodes (21): AgentAvatarEditorPanel, AgentCreateWizardModal(), AgentCreateWizardModalProps, buildInitialDraft(), WizardField(), WizardStepId, wizardSteps, WizardTextAreaField() (+13 more)

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
Cohesion: 0.19
Nodes (15): AgentChatItem, buildOfficeDeskMonitor(), deriveEditorDocument(), derivePseudoEditor(), extractDomains(), extractPath(), extractUrls(), flattenMonitorEntry() (+7 more)

### Community 141 - "agentSettingsMutationWorkflow.ts"
Cohesion: 0.17
Nodes (13): AgentSettingsMutationContext, AgentSettingsMutationDecision, AgentSettingsMutationDenyReason, AgentSettingsMutationRequest, CronActionKind, GuardedActionKind, isCronActionBusy(), isGuardedAction() (+5 more)

### Community 142 - "useConfigMutationQueue.ts"
Cohesion: 0.18
Nodes (12): ConfigMutationGateInput, shouldStartNextConfigMutation(), GatewayStatus, observeGatewayRestart(), RestartObservation, ActiveConfigMutation, ConfigMutationKind, mutationRequiresIdleAgents() (+4 more)

### Community 143 - "animePresets.ts"
Cohesion: 0.27
Nodes (7): AnimePresetPicker(), Props, ALLOWED_AVATAR_URL_PREFIXES, ANIME_AVATAR_PRESETS, AnimeAvatarPreset, findAnimePresetByUrl(), isAllowedAvatarUrl()

### Community 144 - "Creating Skills"
Cohesion: 0.14
Nodes (13): 1. Create the skill files, 2. Mirror the files into `src/lib/skills/packaged.ts`, 3. Register the skill in `src/lib/skills/catalog.ts`, 4. Add marketplace presentation metadata, 5. Understand where the files get installed, 6. Keep the example production-ready, 7. Verify your changes, Creating Skills (+5 more)

### Community 145 - "Runtime Profiles"
Cohesion: 0.14
Nodes (13): `claw3d`, Current Profiles, Current Runtime Contract, `custom`, `demo`, `hermes`, `local`, Multi-Agent Message Contract (+5 more)

### Community 146 - "useOfficeStandupController.ts"
Cohesion: 0.22
Nodes (14): everyoneArrived(), expandRange(), getZonedParts(), isMeetingActive(), matchesCronPart(), OfficeStandupController, sameScheduledMinute(), shouldRunNow() (+6 more)

### Community 147 - "execApprovalEvents.ts"
Cohesion: 0.28
Nodes (12): asNonEmptyString(), asOptionalString(), asPositiveTimestamp(), asRecord(), parseExecApprovalRequested(), parseExecApprovalResolved(), RequestedPayload, ResolvedPayload (+4 more)

### Community 148 - "agentMessaging.ts"
Cohesion: 0.24
Nodes (10): buildAgentHandoffInstruction(), buildDirectedAgentMessageInstruction(), GatewayAgentsListResult, GatewayCallLike, resolveLabel(), resolveSessionKeyFromAgentList(), RuntimeAgentHandoffPayload, RuntimeAgentMessagePayload (+2 more)

### Community 149 - "RunningAvatarLoader"
Cohesion: 0.24
Nodes (11): OfficeLoadingFallback(), OfficePage(), readDebugFlag(), GatewayConnectScreen(), GatewayConnectScreenProps, resolveLocalGatewayPort(), box(), RunningAvatarLoader() (+3 more)

### Community 150 - "package.json"
Cohesion: 0.13
Nodes (14): clsx@^2.1.1, react-mentions-ts@^5.4.7, @types/react-dom@^19, @types/ws@^8.18.1, typescript@^5, license, name, private (+6 more)

### Community 151 - "Critical Fixes"
Cohesion: 0.17
Nodes (11): 1. Telemetry Removed, 2. Constant-Time Token Comparison, 3. Auth Rate Limiting, 4. WebSocket Frame Validation, 5. Upstream URL Allowlist, 6. Custom Runtime Proxy Allowlist, 7. Security Headers, 8. Media Route Symlink Rejection (+3 more)

### Community 152 - "AnalyticsPanel.tsx"
Cohesion: 0.25
Nodes (12): AnalyticsPanel(), DatePickerField(), formatBudgetInput(), formatDuration(), formatPercent(), openNativeDatePicker(), parseBudgetInput(), StatCard() (+4 more)

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

### Community 157 - "nodeGatewayClient.ts"
Cohesion: 0.21
Nodes (12): asRecord(), base64UrlEncode(), buildConnectParams(), buildDeviceAuthPayload(), createDeviceIdentity(), DeviceIdentity, fingerprintPublicKey(), GATEWAY_SCOPES (+4 more)

### Community 158 - "ref_node_crypto"
Cohesion: 0.36
Nodes (5): createAccessGate(), createRateLimiter(), parseCookies(), resolveClientIp(), safeCompare()

### Community 159 - "clawd3d-start.sh"
Cohesion: 0.44
Nodes (8): find_free_port(), info(), log(), pids_on_port(), port_free(), port_owned_by(), clawd3d-start.sh script, warn()

### Community 160 - "media/route.ts"
Cohesion: 0.36
Nodes (9): expandTildeLocal(), GET(), isWithinAllowedRoot(), MIME_BY_EXT, readLocalMedia(), resolveAndValidateLocalMediaPath(), runtime, validateRawMediaPath() (+1 more)

### Community 161 - "path-suggestions/route.ts"
Cohesion: 0.29
Nodes (9): GET(), isWithinHome(), listPathAutocompleteEntries(), normalizeQuery(), PathAutocompleteEntry, PathAutocompleteOptions, PathAutocompleteResult, resolveRealPath() (+1 more)

### Community 162 - "CompanyBuilderModal.tsx"
Cohesion: 0.23
Nodes (11): @testing-library/react, AgentAvatarCreatorModal(), AgentAvatarCreatorModalProps, buildRoleAvatarProfile(), CompanyBuilderModal(), CompanyBuilderModalProps, createEmptyRole(), joinCommaList() (+3 more)

### Community 163 - "models.ts"
Cohesion: 0.21
Nodes (6): buildAllowedModelKeys(), buildGatewayModelChoices(), GatewayModelAliasEntry, GatewayModelChoice, GatewayModelDefaults, resolveConfiguredModelKey()

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
Cohesion: 0.35
Nodes (9): archiveSharedTaskRecord(), fetchWithTimeout(), isRetryable(), listSharedTaskRecords(), parseResponse(), sleep(), TaskStoreRequestError, upsertSharedTaskRecord() (+1 more)

### Community 172 - "useStudioVoiceRepliesPreference.ts"
Cohesion: 0.53
Nodes (5): useStudioVoiceRepliesPreference(), UseStudioVoiceRepliesPreferenceParams, defaultStudioVoiceRepliesPreference(), resolveVoiceRepliesPreference(), StudioVoiceRepliesPreference

### Community 173 - "Contributing"
Cohesion: 0.22
Nodes (9): Before you start, Contributing, Local setup, Minimal issue template, Minimal PR template, Pull requests, Reporting issues, Support And Routing (+1 more)

### Community 174 - "Step-by-step tasks"
Cohesion: 0.10
Nodes (22): Architecture / proposed approach, Claw3D — Ganti geometri male procedural dengan model GLB dari Drive, Current context / assumptions, Goal, Risks, tradeoffs, open questions, Step-by-step tasks, Task 0 — Graphify preflight (read-only), Task 10 — Visual calibration (manual, 1 iterasi) (+14 more)

### Community 176 - "taskBoardState.ts"
Cohesion: 0.43
Nodes (7): compareCards(), sortTaskBoardCards(), TaskBoardAction, taskBoardReducer(), upsertTaskBoardCard(), defaultTaskBoardPreference(), defaultStudioTaskBoardPreference()

### Community 177 - "multiavatar.ts"
Cohesion: 0.33
Nodes (8): AVATAR_ACCENTS, AVATAR_FOREGROUNDS, AVATAR_PALETTE, buildAvatarDataUrl(), buildAvatarLabel(), buildAvatarSvg(), hashSeed(), pick()

### Community 178 - "layout.tsx"
Cohesion: 0.28
Nodes (6): display, metadata, mono, RootLayout(), sans, SuspenseStreamGuard()

### Community 179 - "custom/route.ts"
Cohesion: 0.33
Nodes (7): CustomRuntimeRequestBody, isRuntimeUrlAllowed(), normalizeMethod(), normalizePathname(), normalizeRuntimeUrl(), POST(), runtime

### Community 186 - "presence.ts"
Cohesion: 0.36
Nodes (8): asRecord(), fetchRemoteOfficePresenceSnapshot(), loadOfficePresenceSnapshot(), normalizeOfficeAgentState(), normalizeOfficePresenceSnapshot(), resolveStateFromSeed(), stableHash(), OfficeAgentState

### Community 187 - "profilePortrait.ts"
Cohesion: 0.31
Nodes (11): AgentAvatarProps, AgentAvatarProfile, blendHex(), buildAgentAvatarPortraitDataUrl(), buildAgentAvatarPortraitSvg(), buildGlassesSvg(), buildHairSvg(), buildHatSvg() (+3 more)

### Community 189 - "custom/route.ts"
Cohesion: 0.13
Nodes (4): nextConfig, securityHeaders, next, runtime

### Community 191 - "settingsSidebarTabs.ts"
Cohesion: 0.50
Nodes (3): BASE_SETTINGS_SIDEBAR_ENTRIES, resolveSettingsSidebarEntries(), SettingsSidebarEntry

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

### Community 197 - "AgentCreateModal.tsx"
Cohesion: 0.48
Nodes (5): AgentCreateModal(), AgentCreateModalContent(), AgentCreateModalProps, resolveInitialName(), openModal()

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

### Community 203 - "rewriteMediaLinesToMarkdown"
Cohesion: 0.53
Nodes (4): IMAGE_EXTENSIONS, isImagePath(), rewriteMediaLinesToMarkdown(), toMediaUrl()

## Knowledge Gaps
- **3 isolated node(s):** `PATH`, `NEXT_TELEMETRY_DISABLED`, `NEXT_PUBLIC_GATEWAY_URL`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 2089 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **12 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `vitest` connect `GatewayClient.ts` to `useTaskBoardController.ts`, `navigation.ts`, `hermes-gateway-adapter.js`, `RetroOffice3D.tsx`, `media/route.ts`, `presentation.ts`, `agentConfig.ts`, `historySyncOperation.ts`, `gatewayRuntimeEventHandler.ts`, `RuntimeProvider`, `chatSendOperation.ts`, `execApprovalControlLoopWorkflow.ts`, `agents.tsx`, `settings.ts`, `claw3doctor.mjs`, `agentPermissionsOperation.ts`, `AgentState`, `chatItems.ts`, `GatewayClient`, `skills/types.ts`, `mutationLifecycleWorkflow.ts`, `eventTriggers.ts`, `floors.ts`, `coordinator.ts`, `devDependencies`, `useAgentSettingsMutationController.ts`, `deskDirectives.ts`, `settings-store.ts`, `planning.ts`, `shared-store.ts`, `profile.ts`, `runtimeEventBridge.ts`, `triggers.ts`, `colorSemantics.ts`, `runtimeChatEventWorkflow.ts`, `store.tsx`, `browser-preview/route.ts`, `execApprovalRunControlOperation.ts`, `standup/store.ts`, `models.ts`, `voiceTranscription.ts`, `createPayloadBuilder.ts`, `AgentsPageScreen`, `GatewayBrowserClient.ts`, `execApprovalRuntimeCoordinator.ts`, `useRuntimeSyncController.ts`, `settingsRouteWorkflow.ts`, `agents/agentFiles.ts`, `gateway-proxy.js`, `tasks/types.ts`, `index.js`, `AgentSettingsPanel.tsx`, `agentFleetHydration.ts`, `useRunLog.ts`, `lucide-react`, `cleanup-ux-artifacts.mjs`, `createAgentBootstrapOperation.ts`, `gateway.ts`, `specialLatestUpdateOperation.ts`, `approvals/types.ts`, `ref_node_path`, `useOnboardingState.ts`, `randomUUID`, `deskMonitor.ts`, `agentSettingsMutationWorkflow.ts`, `useConfigMutationQueue.ts`, `animePresets.ts`, `execApprovalEvents.ts`, `package.json`, `ref_node_crypto`, `CompanyBuilderModal.tsx`, `models.ts`, `pathfinding.ts`, `multiavatar.ts`, `custom/route.ts`, `settingsSidebarTabs.ts`, `AgentCreateModal.tsx`, `janitorReset.ts`, `studioSettings.test.ts`, `rewriteMediaLinesToMarkdown`?**
  _High betweenness centrality (0.088) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `OfficeScreen()` (e.g. with `Current Post-Merge Sequence` and `Immediate Next Deliverables`) actually correct?**
  _`OfficeScreen()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `PATH`, `NEXT_TELEMETRY_DISABLED`, `NEXT_PUBLIC_GATEWAY_URL` to the rest of the system?**
  _3 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `chatSendOperation.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.14619883040935672 - nodes in this community are weakly interconnected._
- **Why does `react` connect `tasks/types.ts` to `useTaskBoardController.ts`, `approvals/types.ts`, `AnalyticsPanel.tsx`, `toWorld`, `OfficeScreen.tsx`, `randomUUID`, `useOnboardingState.ts`, `GatewayClient.ts`, `RetroOffice3D.tsx`, `useUsageAnalytics.ts`, `presentation.ts`, `voiceReply/provider.ts`, `useConfigMutationQueue.ts`, `RuntimeProvider`, `chatSendOperation.ts`, `useOfficeStandupController.ts`, `execApprovalEvents.ts`, `agents.tsx`, `RunningAvatarLoader`, `package.json`, `AnalyticsPanel.tsx`, `skills/types.ts`, `github.ts`, `constants.ts`, `CompanyBuilderModal.tsx`, `floors.ts`, `models.ts`, `useAgentSettingsMutationController.ts`, `useStudioVoiceRepliesPreference.ts`, `AgentChatPanel.tsx`, `layout.tsx`, `spotify-jukebox/store.ts`, `profile.ts`, `runtimeEventBridge.ts`, `district.ts`, `profilePortrait.ts`, `triggers.ts`, `colorSemantics.ts`, `store.tsx`, `useVoiceRecorder.ts`, `browser-preview/route.ts`, `buildAgentMainSessionKey`, `AgentCreateModal.tsx`, `StudioGatewayAdapterType`, `models.ts`, `AgentsPageScreen`, `dependencies`, `OfficePhaserCanvas.tsx`, `useRuntimeSyncController.ts`, `settingsRouteWorkflow.ts`, `agents/agentFiles.ts`, `personalityBuilder.ts`, `AgentSettingsPanel.tsx`, `useRunLog.ts`, `lucide-react`, `useOfficeBuilderStore.ts`, `StudioSettingsCoordinator`?**
  _High betweenness centrality (0.076) - this node is a cross-community bridge._
- **Should `toWorld` be split into smaller, more focused modules?**
  _Cohesion score 0.06022408963585434 - nodes in this community are weakly interconnected._
- **Why does `next` connect `custom/route.ts` to `OfficeScreen.tsx`, `media/route.ts`, `call/mock.ts`, `service.ts`, `voiceReply/provider.ts`, `animePresets.ts`, `package.json`, `github.ts`, `media/route.ts`, `path-suggestions/route.ts`, `upload/route.ts`, `settings-store.ts`, `layout.tsx`, `custom/route.ts`, `profilePortrait.ts`, `browser-preview/route.ts`, `buildAgentMainSessionKey`, `standup/store.ts`, `voiceTranscription.ts`, `office/store.ts`, `AgentsPageScreen`, `resolveStateDir`, `dependencies`, `SmsBoothImmersiveScreen.tsx`, `index.js`, `layout/route.ts`, `run/route.ts`, `presence.ts`?**
  _High betweenness centrality (0.048) - this node is a cross-community bridge._