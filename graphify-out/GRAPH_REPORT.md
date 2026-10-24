# Graph Report - claw3d  (2026-10-24)

## Corpus Check
- 591 files · ~437,870 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 29 file(s) not represented in the graph (top: .glb 17, (none) 6, .service 2)

## Summary
- 5193 nodes · 12211 edges · 196 communities (186 shown, 10 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 192 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `0741ded6`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- useTaskBoardController.ts
- deskMonitor.ts
- resolveStateDir
- toWorld
- OfficeScreen.tsx
- navigation.ts
- GatewayClient.ts
- hermes-gateway-adapter.js
- RetroOffice3D.tsx
- media/route.ts
- service.ts
- useUsageAnalytics.ts
- AgentSkillsPanel.tsx
- agentConfig.ts
- runtimeAgentEventWorkflow.test.ts
- gatewayRuntimeEventHandler.ts
- JukeboxPanel.tsx
- chatSendOperation.ts
- execApprovalControlLoopWorkflow.ts
- furnitureDefaults.ts
- geometry.ts
- settings.ts
- claw3doctor.mjs
- agentPermissionsOperation.ts
- EventFrame
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
- package.json
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
- message-extract.ts
- district.ts
- triggers.ts
- Hierarchy And Teams Spec
- Hierarchy And Teams Spec
- colorSemantics.ts
- runtimeChatEventWorkflow.ts
- transcript.ts
- with
- browser-preview/route.ts
- useAgentSettingsMutationController.ts
- schema.ts
- historySyncOperation.ts
- execApprovalRunControlOperation.ts
- standup/store.ts
- models.ts
- Claw3Doctor Spec
- Multi-Agent Beta
- voiceTranscription.ts
- office/store.ts
- createPayloadBuilder.ts
- AgentsPageScreen
- marketplace.ts
- Runtime Profile Architecture
- dependencies
- GatewayBrowserClient.ts
- Office Systems Roadmap
- OfficePhaserCanvas.tsx
- github/route.ts
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
- GatewayClient
- Step-by-step tasks
- personalityBuilder.ts
- Custom Runtime Provider Spec
- AgentSettingsPanel.tsx
- GithubImmersiveScreen.tsx
- README.md
- presentation.ts
- Universal Backend Plan
- useRunLog.ts
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
- vitest
- custom/provider.ts
- compilerOptions
- layout/route.ts
- RunningAvatarLoader
- specialLatestUpdateOperation.ts
- presence.ts
- studio-settings.js
- Permissions, Sandboxing, and Workspaces (Studio -> Gateway -> PI)
- studioRoute.ts
- vitest
- useOnboardingState.ts
- AgentEditorModal.tsx
- Hermes Gateway Adapter
- Agent Bus Integration
- scripts
- PR89.md
- call/mock.ts
- voiceReply/provider.ts
- execApprovals.ts
- agentSettingsMutationWorkflow.ts
- useConfigMutationQueue.ts
- cronCreateOperation.ts
- Creating Skills
- Runtime Profiles
- useOfficeStandupController.ts
- ws
- agentMessaging.ts
- RunningAvatarLoader
- standup/types.ts
- Critical Fixes
- sessionSettingsMutations.ts
- AmbienceSystem.ts
- Claw3D Vision
- Task Manager
- TODO Board
- useOfficeSkillsMarketplace.ts
- ref_node_crypto
- clawd3d-start.sh
- Step-by-step tasks
- runtimeEventBridge.ts
- CompanyBuilderModal.tsx
- HeaderBar.tsx
- GatewayClient
- Cursor Cloud specific instructions
- OpenClaw Gateway Skill Contract
- Roadmap
- upload/route.ts
- agentBridge.ts
- contact_links
- shared-store-client.ts
- useStudioVoiceRepliesPreference.ts
- studioSettings.test.ts
- Step-by-step tasks
- task-store/route.ts
- taskBoardState.ts
- multiavatar.ts
- layout.tsx
- gatewayReloadMode.ts
- multiavatar
- .github/SECURITY.md
- postcss.config.mjs
- Concrete Delivery Plan
- AgentCreateModal.tsx
- GatewayGapInfo
- custom/route.ts
- GatewayStatus
- AgentsPageScreen.tsx
- ref_node_https
- Building Layers
- deploy-local.sh
- verify-claw3d.sh

## God Nodes (most connected - your core abstractions)
1. `vitest` - 180 edges
2. `OfficeScreen()` - 117 edges
3. `react` - 115 edges
4. `AgentState` - 98 edges
5. `GatewayClient` - 82 edges
6. `AgentsPageScreen()` - 68 edges
7. `toWorld()` - 62 edges
8. `RetroOffice3D()` - 50 edges
9. `next` - 38 edges
10. `getItemRotationRadians()` - 37 edges

## Surprising Connections (you probably didn't know these)
- `Task 9 — Hook ke `AgentModel` di scene (`agents.tsx`)` --references--> `AvatarFeminineHair()`  [INFERRED]
  .hermes/plans/2026-10-25_000000-claw3d-male-avatar-glb.md → src/features/agents/components/avatar3d/AvatarGenderParts.tsx
- `History Sync (Recovery, Load More)` --references--> `buildHistoryLines()`  [INFERRED]
  docs/pi-chat-streaming.md → src/features/agents/state/runtimeEventBridge.ts
- `Risks, tradeoffs, open questions` --references--> `OfficeFloorNav()`  [INFERRED]
  .hermes/plans/2026-10-25_033617-office-floor-nav-autohide.md → src/features/office/components/OfficeFloorNav.tsx
- `Current Post-Merge Sequence` --references--> `OfficeScreen()`  [INFERRED]
  docs/office_sys/office-systems-roadmap.md → src/features/office/screens/OfficeScreen.tsx
- `Immediate Next Deliverables` --references--> `OfficeScreen()`  [INFERRED]
  docs/office_sys/office-systems-roadmap.md → src/features/office/screens/OfficeScreen.tsx

## Import Cycles
- None detected.

## Communities (196 total, 10 thin omitted)

### Community 0 - "useTaskBoardController.ts"
Cohesion: 0.17
Nodes (29): buildActiveRunOptions(), buildCardFromExplicitEvent(), buildCardFromGatewayTask(), buildCardFromSharedTaskRecord(), buildPlaybookCards(), buildStandupSeedCards(), cardTextKey(), compareDuplicatePriority() (+21 more)

### Community 1 - "deskMonitor.ts"
Cohesion: 0.19
Nodes (15): AgentChatItem, buildOfficeDeskMonitor(), deriveEditorDocument(), derivePseudoEditor(), extractDomains(), extractPath(), extractUrls(), flattenMonitorEntry() (+7 more)

### Community 2 - "resolveStateDir"
Cohesion: 0.19
Nodes (14): contentTypeFromName(), GET(), runtime, uploadsDir(), ensureUnderBase(), GatewayAgentStateMove, isSafeAgentId(), moveIfExists() (+6 more)

### Community 3 - "toWorld"
Cohesion: 0.10
Nodes (50): DOOR_LENGTH, DOOR_THICKNESS, SCALE, WALL_THICKNESS, getItemBaseSize(), getItemRotationRadians(), resolveItemTypeKey(), toWorld() (+42 more)

### Community 4 - "OfficeScreen.tsx"
Cohesion: 0.04
Nodes (75): buildGenerateCompanyPlanPrompt(), buildImproveCompanyBriefPrompt(), HQSidebar(), HQSidebarProps, HQSidebarTab, PRIMARY_TABS, TAB_LABELS, formatRelativeTime() (+67 more)

### Community 5 - "navigation.ts"
Cohesion: 0.06
Nodes (45): CANVAS_H, CANVAS_W, SNAP_GRID, getItemBounds(), ITEM_FOOTPRINT, ITEM_METADATA, astar(), buildNavGrid() (+37 more)

### Community 6 - "GatewayClient.ts"
Cohesion: 0.08
Nodes (37): Reconnects And Retries, Studio Settings (Where Gateway URL/Token Come From), EventHandler, formatGatewayError(), GapHandler, gatewayDebugLog(), GatewayFrame, GatewayStateVersion (+29 more)

### Community 7 - "hermes-gateway-adapter.js"
Cohesion: 0.06
Nodes (60): activeRuns, activeSendEventFns, ADAPTER_PORT, agentListPayload(), agents, broadcastEvent(), buildDemoReply(), clearHistory() (+52 more)

### Community 8 - "RetroOffice3D.tsx"
Cohesion: 0.06
Nodes (54): SettingsPanel(), Bubble(), PhoneBoothImmersiveScreen(), PhoneCallStep, AGENT_RADIUS, BUMP_FREEZE_MS, SEPARATION_STRENGTH, isRemoteOfficeAgentId() (+46 more)

### Community 9 - "media/route.ts"
Cohesion: 0.07
Nodes (49): getFreePort(), main(), sleep(), isSafeAgentId(), POST(), PUT(), resolveAgentStateSshTarget(), RestoreAgentStateRequest (+41 more)

### Community 10 - "service.ts"
Cohesion: 0.22
Nodes (18): buildJiraSearchUrl(), buildSourceState(), buildSpeech(), buildStandupMeeting(), coerceText(), dedupePullRequests(), expandRange(), getZonedDateParts() (+10 more)

### Community 11 - "useUsageAnalytics.ts"
Cohesion: 0.07
Nodes (61): AnalyticsPanel(), DatePickerField(), formatBudgetInput(), formatDuration(), formatPercent(), openNativeDatePicker(), parseBudgetInput(), StatCard() (+53 more)

### Community 12 - "AgentSkillsPanel.tsx"
Cohesion: 0.12
Nodes (23): AgentSkillsPanel(), AgentSkillsPanelProps, DISPLAY_CLASSES, DISPLAY_LABELS, FILTERS, resolveHint(), SkillRowFilter, AgentSkillsSetupModal() (+15 more)

### Community 13 - "agentConfig.ts"
Cohesion: 0.07
Nodes (50): How Studio Chooses the Default Workspace Path, Studio -> Gateway: “Create Agent” End-to-End, AgentHeartbeat, AgentHeartbeatActiveHours, AgentHeartbeatResult, AgentHeartbeatSummary, AgentHeartbeatUpdatePayload, AgentSkillsAccessMode (+42 more)

### Community 14 - "runtimeAgentEventWorkflow.test.ts"
Cohesion: 0.24
Nodes (6): RuntimeAgentWorkflowCommand, RuntimeAgentWorkflowInput, createAgent(), createInput(), createPayload(), InputOverrides

### Community 15 - "gatewayRuntimeEventHandler.ts"
Cohesion: 0.08
Nodes (49): createGatewayRuntimeEventHandler(), findAgentByRunId(), GatewayRuntimeEventHandler, GatewayRuntimeEventHandlerDeps, resolveRole(), AgentEventPayload, dedupeRunLines(), appendToolLinesEffects() (+41 more)

### Community 16 - "JukeboxPanel.tsx"
Cohesion: 0.21
Nodes (20): base64urlEncode(), buildRedirectUri(), exchangeCodeForToken(), generateRandom(), loadAuthState(), loadCallbackBaseUrl(), loadClientId(), loadToken() (+12 more)

### Community 17 - "chatSendOperation.ts"
Cohesion: 0.07
Nodes (38): Sending Messages (Browser -> PI via Gateway), DraftFlushIntent, DraftTimerIntent, NewSessionIntent, planDraftFlushIntent(), planDraftTimerIntent(), planNewSessionIntent(), planStopRunIntent() (+30 more)

### Community 18 - "execApprovalControlLoopWorkflow.ts"
Cohesion: 0.08
Nodes (37): AutoResumeIntent, PauseRunIntent, planAutoResumeIntent(), planAwaitingUserInputPatches(), planPauseRunIntent(), planPendingPruneDelay(), planPrunedPendingState(), resolvePauseTargetAgent() (+29 more)

### Community 19 - "furnitureDefaults.ts"
Cohesion: 0.05
Nodes (68): ATM_MIGRATION_KEY, GYM_ROOM_MIGRATION_KEY, PHONE_BOOTH_MIGRATION_KEY, QA_LAB_MIGRATION_KEY, SERVER_ROOM_MIGRATION_KEY, SMS_BOOTH_MIGRATION_KEY, STORAGE_KEY, createFurnitureSignature() (+60 more)

### Community 20 - "geometry.ts"
Cohesion: 0.08
Nodes (30): @react-three/drei, @react-three/fiber, AGENT_SCALE, WALK_ANIM_SPEED, FURNITURE_ROTATION, OfficeAgent, RenderAgent, FURNITURE_GLB (+22 more)

### Community 21 - "settings.ts"
Cohesion: 0.06
Nodes (86): coerceString(), DEFAULT_REMOTE_OFFICE_SOURCE_KIND, defaultFocusedPreference(), defaultStudioOfficePreference(), defaultStudioStandupJiraConfig(), defaultStudioStandupManualEntry(), defaultStudioStandupPreference(), defaultStudioStandupScheduleConfig() (+78 more)

### Community 22 - "claw3doctor.mjs"
Cohesion: 0.12
Nodes (44): checkFail(), checkPass(), checkWarn(), detectHermesModelHealth(), detectOpenClawVersion(), detectWorkspaceState(), formatErrorMessage(), loadDotenvFile() (+36 more)

### Community 23 - "agentPermissionsOperation.ts"
Cohesion: 0.13
Nodes (31): Capabilities Permissions Updates, One-Shot Sandbox Tool Policy Repair, Runtime Tool Groups Used By Capability Updates, Studio Note: Authority Is No Longer Compiled During Create, Studio Post-Create “Permissions” Flows (Not Just Creation), Studio: Where “Permissions” Are Chosen, AgentRuntimeConfigContext, coerceStringArray() (+23 more)

### Community 24 - "EventFrame"
Cohesion: 0.11
Nodes (24): asNonEmptyString(), asOptionalString(), asPositiveTimestamp(), asRecord(), parseExecApprovalRequested(), parseExecApprovalResolved(), RequestedPayload, ResolvedPayload (+16 more)

### Community 25 - "chatItems.ts"
Cohesion: 0.15
Nodes (29): AgentChatRenderBlock, appendThinkingTraceEvent(), AssistantTraceEvent, buildAgentChatItems(), BuildAgentChatItemsInput, buildAgentChatRenderBlocks(), buildFinalAgentChatItems(), extractFirstCodeBlockLine() (+21 more)

### Community 26 - "GatewayClient"
Cohesion: 0.26
Nodes (12): buildSkillRemovalMessage(), escapeForJsonString(), normalizeRequired(), removeSkillViaGatewayAgent(), resolveAllowedRoot(), resolveMainKey(), resolveRemovalWorkspace(), resolveRunId() (+4 more)

### Community 27 - "skills/types.ts"
Cohesion: 0.14
Nodes (23): getPackagedSkillById(), buildInstallerMessage(), escapeForJsonString(), getPathLeaf(), installPackagedSkillViaGatewayAgent(), isRootWorkspace(), normalizeOptional(), normalizeRequired() (+15 more)

### Community 28 - "github.ts"
Cohesion: 0.23
Nodes (24): GitHubAuthState, GitHubCommentEntry, GitHubCommitEntry, GitHubFileEntry, GitHubReviewEntry, GitHubStatusCheck, loadPullRequestDetail(), loadPullRequestDiff() (+16 more)

### Community 29 - "constants.ts"
Cohesion: 0.07
Nodes (36): BUMP_RECOVERY_MS, DESK_STICKY_MS, EAST_HALL_WIDTH, EAST_WING_DOOR_Y, EAST_WING_ROOM_HEIGHT, EAST_WING_ROOM_TOP_Y, EAST_WING_SIDE_MARGIN, EAST_WING_SPECIALTY_ROOM_WIDTH (+28 more)

### Community 30 - "QA Department Spec"
Cohesion: 0.05
Nodes (40): Agent Interaction Model, Approval-Aware Review, Approvals, Approved, Blocked, Bug Triage, Bulletin Board, Changes Requested (+32 more)

### Community 31 - "QA Department Spec"
Cohesion: 0.05
Nodes (40): Agent Interaction Model, Approval-Aware Review, Approvals, Approved, Blocked, Bug Triage, Bulletin Board, Changes Requested (+32 more)

### Community 32 - "mutationLifecycleWorkflow.ts"
Cohesion: 0.09
Nodes (30): AgentCreateModalSubmitPayload, AgentConfigMutationLifecycleDeps, AgentConfigMutationLifecycleKind, assertMutationKind(), AwaitingRestartPatch, buildConfigMutationFailureMessage(), buildMutatingMutationBlock(), buildMutationSideEffectCommands() (+22 more)

### Community 33 - "eventTriggers.ts"
Cohesion: 0.06
Nodes (58): How Office Motion Works, findAgentBySessionKey(), isSameSessionKey(), parseAgentIdFromSessionKey(), OfficeCallDirective, OfficeCallPhase, OfficeTextDirective, OfficeTextPhase (+50 more)

### Community 34 - "floors.ts"
Cohesion: 0.09
Nodes (40): Floor Registry Slice, Immediate Implementation Checklist, Per-Floor Runtime State Slice, Phase 1: Floor Registry, Roster Slice, UI Shell Slice, 3. Implement auto-hide state in `OfficeFloorNav.tsx`, OfficeFloorNav() (+32 more)

### Community 35 - "coordinator.ts"
Cohesion: 0.07
Nodes (36): fetchJson(), AnalyticsPatch, AvatarsPatch, createStudioSettingsCoordinator(), DeskAssignmentsPatch, fetchStudioSettings(), FocusedPatch, mergeAnalyticsPatch() (+28 more)

### Community 36 - "Agent State Model Spec"
Cohesion: 0.05
Nodes (38): Agent State Model Spec, Blocked, Bulletin Board, Core Principle, Degraded, Desk Progression / Hierarchy, Error, Existing Code Seams (+30 more)

### Community 37 - "package.json"
Cohesion: 0.07
Nodes (39): eslintConfig, devDependencies, eslint@^9, eslint-config-next@16.1.6, eslint-config-prettier@^10.1.8, jsdom@^27.4.0, @playwright/test@^1.58.0, tailwindcss@^4 (+31 more)

### Community 38 - "Desk Progression Spec"
Cohesion: 0.05
Nodes (37): Agent Interaction Model, Bulletin Board / Whiteboard, Contractor, Contractor Desk, Core Principle, Desk Progression Spec, Employee, Employee Desk (+29 more)

### Community 39 - "Desk Progression Spec"
Cohesion: 0.05
Nodes (37): Agent Interaction Model, Bulletin Board / Whiteboard, Contractor, Contractor Desk, Core Principle, Desk Progression Spec, Employee, Employee Desk (+29 more)

### Community 40 - "useAgentSettingsMutationController.ts"
Cohesion: 0.09
Nodes (34): deleteAgentRecordViaStudio(), DeleteAgentTransactionDeps, DeleteAgentTransactionResult, deleteAgentViaStudio(), EMPTY_TRASH_RESULT, FetchJson, GatewayAgentStateMove, RestoreAgentStateResult (+26 more)

### Community 41 - "deskDirectives.ts"
Cohesion: 0.11
Nodes (34): TranscriptEntry, cacheIntentSnapshot(), getCachedIntentSnapshot(), intentSnapshotCache, normalizeDirectiveText(), normalizeOfficeCallCallee(), normalizeOfficeTextRecipient(), OfficeDeskDirective (+26 more)

### Community 42 - "Office Systems Roadmap"
Cohesion: 0.05
Nodes (36): Agent State Model, Auth And Enterprise Adoption, Bulletin Board, Candidate Feature Order, `claw3doctor` v1, `claw3doctor` v2, Core Direction, Current Post-Merge Sequence (+28 more)

### Community 43 - "Multi-Floor Runtime Architecture"
Cohesion: 0.08
Nodes (24): Building shell, Building Shell vs Floor Scene, Core Principles, Cross-Floor Messaging Model, Current Implementation Status, Floor Registry, Floor scene, Goal (+16 more)

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
Nodes (30): GET(), PUT(), readGatewayUrl(), runtime, POST(), GET(), isPatch(), PUT() (+22 more)

### Community 49 - "AgentChatPanel.tsx"
Cohesion: 0.06
Nodes (42): @testing-library/react, AgentChatComposer, AgentChatFinalItems, AgentChatPanel(), AgentChatPanelProps, AgentChatTranscript, AssistantIntroCard, AssistantMessageCard (+34 more)

### Community 50 - "planning.ts"
Cohesion: 0.15
Nodes (24): runCompanyBootstrapOperation(), buildCompanyAgentBlueprints(), buildRoleAgentsMarkdown(), buildRoleHeartbeatMarkdown(), buildRoleIdentity(), buildRoleMemoryMarkdown(), buildRoleSoulDraft(), buildRoleToolsMarkdown() (+16 more)

### Community 51 - "spotify-jukebox/store.ts"
Cohesion: 0.20
Nodes (21): clearToken(), saveClientId(), fetchPlayerState(), headers(), mapTrack(), pausePlayback(), PlayerState, playTrack() (+13 more)

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
Cohesion: 0.19
Nodes (21): isTaskBoardSource(), isTaskBoardStatus(), appendHistory(), archiveSharedTask(), defaultStore(), ensureDirectory(), listSharedTasks(), normalizeHistoryEntry() (+13 more)

### Community 56 - "profile.ts"
Cohesion: 0.10
Nodes (31): AgentAvatarEditorPanelHandle, AgentAvatarEditorPanelProps, AGENT_AVATAR_BOTTOM_STYLE_OPTIONS, AGENT_AVATAR_CLOTHING_COLOR_OPTIONS, AGENT_AVATAR_GENDER_OPTIONS, AGENT_AVATAR_HAIR_COLOR_OPTIONS, AGENT_AVATAR_HAIR_STYLE_OPTIONS, AGENT_AVATAR_HAT_STYLE_OPTIONS (+23 more)

### Community 57 - "message-extract.ts"
Cohesion: 0.12
Nodes (28): AgentInstructionParams, buildAgentInstruction(), ENVELOPE_CHANNELS, EXEC_APPROVAL_AUTO_RESUME_MARKER, EXEC_APPROVAL_WAIT_POLICY, extractRawText(), extractText(), extractTextCached() (+20 more)

### Community 58 - "district.ts"
Cohesion: 0.09
Nodes (31): WORLD_H, WORLD_W, CITY_PATH_ZONE, clampPointToZone(), clampZoneValue(), DISTRICT_CAMERA_POSITION, DISTRICT_CAMERA_TARGET, DISTRICT_CAMERA_ZOOM (+23 more)

### Community 59 - "triggers.ts"
Cohesion: 0.11
Nodes (27): isSkillEnabledForAgent(), useOfficeSkillTriggers(), buildOfficeSkillTriggerHoldMaps(), DEFAULT_SKILL_TRIGGER_FALLBACKS_BY_SKILL_KEY, DefaultSkillTriggerFallback, isOfficeSkillTriggerMovementTarget(), OFFICE_INTERACTION_TARGETS, OFFICE_SKILL_TRIGGER_MOVEMENT_TARGETS (+19 more)

### Community 60 - "Hierarchy And Teams Spec"
Cohesion: 0.06
Nodes (32): Agent Interaction Model, Contractor, Core Principle, Delegation Model, Executive, Existing Code Seams, Future Extensions, Goal (+24 more)

### Community 61 - "Hierarchy And Teams Spec"
Cohesion: 0.06
Nodes (32): Agent Interaction Model, Contractor, Core Principle, Delegation Model, Executive, Existing Code Seams, Future Extensions, Goal (+24 more)

### Community 62 - "colorSemantics.ts"
Cohesion: 0.15
Nodes (18): AGENT_STATUS_BADGE_CLASS, AGENT_STATUS_LABEL, GATEWAY_STATUS_BADGE_CLASS, GATEWAY_STATUS_LABEL, NEEDS_APPROVAL_BADGE_CLASS, resolveAgentStatusBadgeClass(), resolveAgentStatusLabel(), resolveGatewayStatusBadgeClass() (+10 more)

### Community 63 - "runtimeChatEventWorkflow.ts"
Cohesion: 0.11
Nodes (26): planRuntimeChatEvent(), resolveTerminalSeq(), RuntimeChatWorkflowCommand, RuntimeChatWorkflowInput, RuntimeChatWorkflowResult, summarizeThinkingMessage(), terminalAssistantFinalEntryId(), terminalAssistantMetaEntryId() (+18 more)

### Community 64 - "transcript.ts"
Cohesion: 0.09
Nodes (36): Action, AgentStoreContext, AgentStoreContextValue, agentStoreReducer, AgentStoreState, areStringArraysEqual(), createRuntimeAgentState(), ensureTranscriptEntries() (+28 more)

### Community 65 - "with"
Cohesion: 0.06
Nodes (31): env, IMAGE_BASENAME, REGISTRY, jobs, publish, name, contents, packages (+23 more)

### Community 66 - "browser-preview/route.ts"
Cohesion: 0.11
Nodes (27): BrowserOpenResponse, browserRequest(), BrowserScreenshotResponse, BrowserTab, BrowserTabsResponse, buildBrowserHeaders(), ensurePreviewTab(), GET() (+19 more)

### Community 67 - "useAgentSettingsMutationController.ts"
Cohesion: 0.12
Nodes (28): AgentPermissionsDraft, MutationBlockState, AgentForSettingsMutation, RestartingMutationBlockState, SkillSetupMessage, SkillSetupMessageMap, useAgentSettingsMutationController(), UseAgentSettingsMutationControllerParams (+20 more)

### Community 68 - "schema.ts"
Cohesion: 0.11
Nodes (31): asBoolean(), asNumber(), asString(), defaultLayers(), isRecord(), normalizeAmbiencePreset(), normalizeDeskAssignments(), normalizeInteractionKind() (+23 more)

### Community 69 - "historySyncOperation.ts"
Cohesion: 0.12
Nodes (22): buildHistoryMetadataPatch(), HistoryRequestIntent, HistoryResponseDisposition, resolveHistoryFetchLimit(), resolveHistoryRequestIntent(), resolveHistoryResponseDisposition(), areStringArraysEqual(), ChatHistoryMessage (+14 more)

### Community 70 - "execApprovalRunControlOperation.ts"
Cohesion: 0.12
Nodes (19): ExecApprovalIngressCommand, ExecApprovalPendingSnapshot, planIngressCommands(), planPausedRunMapCleanup(), EXEC_APPROVAL_AUTO_RESUME_WAIT_TIMEOUT_MS, executeExecApprovalIngressCommands(), GatewayClientLike, RunControlDispatch (+11 more)

### Community 71 - "standup/store.ts"
Cohesion: 0.17
Nodes (19): GET(), PUT(), runtime, advanceStandupMeeting(), startStandupSpeaker(), updateStandupArrivals(), defaultStore(), ensureDirectory() (+11 more)

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
Cohesion: 0.14
Nodes (23): executeStudioBootstrapLoadCommands(), executeStudioFocusedPatchCommands(), executeStudioFocusedPreferenceLoadCommands(), GatewayClientLike, runStudioBootstrapLoadOperation(), runStudioFocusedPreferenceLoadOperation(), runStudioFocusedSelectionPersistenceOperation(), runStudioFocusFilterPersistenceOperation() (+15 more)

### Community 79 - "marketplace.ts"
Cohesion: 0.12
Nodes (25): SkillsMarketplaceModal(), SkillsMarketplaceModalProps, buildSearchBlob(), FILTER_LABELS, formatInstalls(), formatRating(), getAgentSkillEnabled(), MarketplaceFilter (+17 more)

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

### Community 85 - "github/route.ts"
Cohesion: 0.20
Nodes (18): GET(), parsePullRequestNumber(), POST(), ReviewRequestBody, runtime, extractCommandMessage(), getGitHubAuthState(), GitHubInlineCommentSide (+10 more)

### Community 86 - "useRuntimeSyncController.ts"
Cohesion: 0.09
Nodes (40): executeAgentReconcileCommands(), GatewayClientLike, ReconcileCommand, ReconcileDispatchAction, runAgentReconcileOperation(), buildReconcileTerminalPatch(), ReconcileEligibility, resolveReconcileEligibility() (+32 more)

### Community 87 - "settingsRouteWorkflow.ts"
Cohesion: 0.22
Nodes (20): buildSettingsRouteHref(), InspectSidebarState, parseSettingsRouteAgentIdFromQueryParam(), planBackToChatCommands(), planFleetSelectCommands(), planNonRouteSelectionSyncCommands(), planOpenSettingsRouteCommands(), planSettingsRouteSyncCommands() (+12 more)

### Community 88 - "CustomRuntimeProvider"
Cohesion: 0.20
Nodes (8): buildChatFailureMessage(), CustomRuntimeProvider, extractContentText(), isRecord(), normalizeModelChoices(), resolveAssistantTextFromResponse(), resolveDefaultModelId(), resolveOptionalString()

### Community 89 - "Step-by-step tasks"
Cohesion: 0.13
Nodes (14): 1. Pre-flight: confirm graphify + current state (read-only), 2. Write failing unit test, 4. Re-run the test, 5. Full test suite — confirm no regressions, 6. Typecheck + lint, 7. Manual sanity (dev server), 8. Update graphify + commit, Current context / assumptions (+6 more)

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
Cohesion: 0.16
Nodes (17): AgentFilesState, useAgentFilesEditor(), UseAgentFilesEditorResult, AGENT_FILE_NAMES, AGENT_FILE_PLACEHOLDERS, AgentFileName, createAgentFilesState(), isAgentFileName() (+9 more)

### Community 95 - "agentFleetHydrationDerivation.ts"
Cohesion: 0.08
Nodes (40): AgentsListResult, ExecApprovalsSnapshot, GatewayClientLike, hydrateAgentFleetFromGateway(), HydrateAgentFleetResult, isRecord(), parseIdentityNameFromContent(), resolveAgentsListFromHelloSnapshot() (+32 more)

### Community 96 - "gateway-proxy.js"
Cohesion: 0.30
Nodes (13): buildErrorResponse(), createFrameRateLimiter(), createGatewayProxy(), hasCompleteDeviceAuth(), hasNonEmptyDeviceToken(), hasNonEmptyPassword(), hasNonEmptyToken(), injectAuthToken() (+5 more)

### Community 97 - "tasks/types.ts"
Cohesion: 0.15
Nodes (17): TaskBoardPanel(), KanbanImmersiveScreen(), formatRelativeTime(), STATUS_LABELS, STATUS_ORDER, stopAndGetCardId(), TaskBoardView(), TASK_BOARD_SOURCES (+9 more)

### Community 98 - "PI + Chat Streaming (Studio Side)"
Cohesion: 0.09
Nodes (23): Connect failures, Connect handshake, Debugging Checklist (When Chat “Feels Buggy”), End-To-End Flow (PI Run -> UI), `event: "agent"` payload, `event: "chat"` payload, Exec Approvals In Chat (Related To “PI Runs”), High-Level Network Path (+15 more)

### Community 99 - "index.js"
Cohesion: 0.21
Nodes (16): selfsigned@^5.5.0, selfsigned, CERT_DIR, CERT_PATH, generateHttpsCert(), KEY_PATH, main(), resolvePathname() (+8 more)

### Community 100 - "GatewayClient"
Cohesion: 0.07
Nodes (26): GatewayConnectionState, GatewayConnectOptions, createRuntimeProvider(), DEMO_RUNTIME_CAPABILITIES, DemoRuntimeProvider, HERMES_RUNTIME_CAPABILITIES, HermesRuntimeProvider, coerceTimestamp() (+18 more)

### Community 101 - "Step-by-step tasks"
Cohesion: 0.08
Nodes (24): Architecture / proposed approach, Current context / assumptions, Files touched, Goal, Plan: Run Claw3D natively on the host (drop Docker), keep kerja.besoksenin.web.id, Risks, tradeoffs, open questions, Step-by-step tasks, Task 0: Graphify read and baseline snapshot (2 min) (+16 more)

### Community 102 - "personalityBuilder.ts"
Cohesion: 0.10
Nodes (37): AgentCreateWizardModal(), AgentCreateWizardModalProps, buildInitialDraft(), WizardField(), WizardStepId, wizardSteps, WizardTextAreaField(), AgentIdentityFields() (+29 more)

### Community 103 - "Custom Runtime Provider Spec"
Cohesion: 0.09
Nodes (21): Capability Philosophy, Core Principle, Current Branch Status, Custom Metadata Surface, Custom Runtime Provider Spec, Event Model, Goal, Implementation Strategy (+13 more)

### Community 104 - "AgentSettingsPanel.tsx"
Cohesion: 0.13
Nodes (18): AgentBrainPanelProps, AgentInspectHeader(), AgentInspectHeaderProps, AgentSettingsPanel(), AgentSettingsPanelProps, applyTemplateDefaults(), arePermissionsDraftEqual(), createInitialCronDraft() (+10 more)

### Community 105 - "GithubImmersiveScreen.tsx"
Cohesion: 0.17
Nodes (18): getDiffLineTone(), GitHubDiffFile, ParsedDiffLine, parseDiffPatch(), FileDiffModal(), FileDiffModalProps, BrowserPreviewState, useBrowserPreview() (+10 more)

### Community 106 - "README.md"
Cohesion: 0.06
Nodes (24): Code Of Conduct, Enforcement, Expected Behavior, Our Pledge, Unacceptable Behavior, Before you start, Contributing, Local setup (+16 more)

### Community 107 - "presentation.ts"
Cohesion: 0.16
Nodes (21): AgentSkillDisplayState, AgentSkillsAccessMode, buildSkillReasons(), canRemoveSkill(), canRemoveSkillSource(), filterOsCompatibleSkills(), GROUP_DEFINITIONS, groupSkillsBySource() (+13 more)

### Community 108 - "Universal Backend Plan"
Cohesion: 0.10
Nodes (20): Capability Matrix, Core Adapter Contract, Event Model, Hermes Provider, High-Value PR Split, Near-Term Guidance For Luke, OpenClaw Provider, PR 1: Runtime Abstraction (+12 more)

### Community 109 - "useRunLog.ts"
Cohesion: 0.24
Nodes (11): formatClockTime(), formatDuration(), HistoryPanel(), TRIGGER_LABELS, findAgentForRunEvent(), resolveLifecyclePhase(), resolveRunTrigger(), RunOutcomeKind (+3 more)

### Community 110 - "pathfinding.ts"
Cohesion: 0.10
Nodes (29): AgentEffectsSystem, AgentEffectsSystemParams, AvatarState, stateColor(), thoughtFromSeed(), THOUGHTS, ASSET_SIZE, astar2D() (+21 more)

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
Cohesion: 0.24
Nodes (4): StudioSettingsCoordinator, defaultStudioSettings(), StudioSettingsPatch, makeCoordinator()

### Community 116 - "Code Documentation"
Cohesion: 0.08
Nodes (26): API Route Inventory, Builder Stack, Code Documentation, Contributor Footguns, Documentation Philosophy, Folder Structure Conventions, How Desk Assignment Works, How To Add A New 3D Object (+18 more)

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

### Community 121 - "vitest"
Cohesion: 0.10
Nodes (18): vitest, GatewayErrorPayload, GatewayResponseError, createGatewayTask(), deleteGatewayTask(), GatewayTaskCreateInput, GatewayTaskRecord, GatewayTasksListResult (+10 more)

### Community 122 - "custom/provider.ts"
Cohesion: 0.13
Nodes (19): CustomRuntimeProxyInput, fetchCustomRuntimeJson(), normalizeCustomBaseUrl(), probeCustomRuntime(), requestCustomRuntime(), ActiveRunRecord, buildIdentityAgent(), buildSyntheticAgents() (+11 more)

### Community 123 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 124 - "layout/route.ts"
Cohesion: 0.22
Nodes (16): fetchRemoteOfficeLayoutSnapshot(), GET(), PUT(), runtime, deriveRemoteLayoutUrlFromPresenceUrl(), isRecord(), normalizeOfficeLayoutSnapshot(), defaultStore() (+8 more)

### Community 125 - "RunningAvatarLoader"
Cohesion: 0.40
Nodes (4): SettingsPanelProps, StudioGatewayAdapterType, CURATED_ELEVENLABS_VOICES, CuratedVoiceOption

### Community 126 - "specialLatestUpdateOperation.ts"
Cohesion: 0.20
Nodes (12): buildLatestUpdatePatch(), LatestUpdateIntent, LatestUpdateKind, resolveLatestUpdateIntent(), resolveLatestUpdateKind(), ChatHistoryMessage, ChatHistoryResult, createSpecialLatestUpdateOperation() (+4 more)

### Community 127 - "presence.ts"
Cohesion: 0.07
Nodes (47): GET(), runtime, POST(), runtime, stripRemoteAgentPrefix(), AgentsListResult, POST(), resolveLatestAssistantHistoryText() (+39 more)

### Community 128 - "studio-settings.js"
Cohesion: 0.22
Nodes (12): main(), parseArgs(), tryReadGatewayTokenFromOpenclawCli(), isRecord(), LEGACY_STATE_DIRNAMES, loadUpstreamGatewaySettings(), readJsonFile(), readOpenclawGatewayDefaults() (+4 more)

### Community 129 - "Permissions, Sandboxing, and Workspaces (Studio -> Gateway -> PI)"
Cohesion: 0.13
Nodes (15): Debug Checklist (When Something Feels “Wrong”), Glossary, Hard Enforcement: Filesystem Tool Root Guard, Mental Model (First Principles), OpenClaw (Upstream): Sandbox Semantics, OpenClaw (Upstream): Tool Availability and `workspaceAccess=ro`, OpenClaw (Upstream): What `agents.create` Actually Does, Permissions, Sandboxing, and Workspaces (Studio -> Gateway -> PI) (+7 more)

### Community 130 - "studioRoute.ts"
Cohesion: 0.26
Nodes (5): @playwright/test, createStudioRoute(), DEFAULT_SETTINGS, stubStudioRoute(), StudioSettingsFixture

### Community 131 - "vitest"
Cohesion: 0.08
Nodes (26): contents, destPath, repoRoot, GET(), isWithinHome(), listPathAutocompleteEntries(), normalizeQuery(), PathAutocompleteEntry (+18 more)

### Community 132 - "useOnboardingState.ts"
Cohesion: 0.53
Nodes (4): OnboardingStateReturn, readCompleted(), useOnboardingState(), writeCompleted()

### Community 133 - "AgentEditorModal.tsx"
Cohesion: 0.21
Nodes (9): AgentAvatarCreatorModal(), AgentAvatarCreatorModalProps, AgentAvatarEditorPanel, AgentEditorModal(), AgentEditorModalProps, AgentEditorSection, editorSections, renameGatewayAgent() (+1 more)

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

### Community 140 - "execApprovals.ts"
Cohesion: 0.21
Nodes (11): OpenClaw (Upstream): Exec Approvals (Policy + Events), ExecAllowlistEntry, ExecApprovalsAgent, ExecApprovalsFile, ExecApprovalsSnapshot, GatewayExecApprovalAsk, GatewayExecApprovalSecurity, normalizeAllowlist() (+3 more)

### Community 141 - "agentSettingsMutationWorkflow.ts"
Cohesion: 0.17
Nodes (13): AgentSettingsMutationContext, AgentSettingsMutationDecision, AgentSettingsMutationDenyReason, AgentSettingsMutationRequest, CronActionKind, GuardedActionKind, isCronActionBusy(), isGuardedAction() (+5 more)

### Community 142 - "useConfigMutationQueue.ts"
Cohesion: 0.18
Nodes (12): ConfigMutationGateInput, shouldStartNextConfigMutation(), GatewayStatus, observeGatewayRestart(), RestartObservation, ActiveConfigMutation, ConfigMutationKind, mutationRequiresIdleAgents() (+4 more)

### Community 143 - "cronCreateOperation.ts"
Cohesion: 0.21
Nodes (9): CRON_ACTION_BUSY_MESSAGE, CronBusyState, CronCreateDeps, isCronActionBusy(), performCronCreateFlow(), resolveCreateAgentId(), resolveCreateErrorMessage(), CronCreateDraft (+1 more)

### Community 144 - "Creating Skills"
Cohesion: 0.14
Nodes (13): 1. Create the skill files, 2. Mirror the files into `src/lib/skills/packaged.ts`, 3. Register the skill in `src/lib/skills/catalog.ts`, 4. Add marketplace presentation metadata, 5. Understand where the files get installed, 6. Keep the example production-ready, 7. Verify your changes, Creating Skills (+5 more)

### Community 145 - "Runtime Profiles"
Cohesion: 0.14
Nodes (13): `claw3d`, Current Profiles, Current Runtime Contract, `custom`, `demo`, `hermes`, `local`, Multi-Agent Message Contract (+5 more)

### Community 146 - "useOfficeStandupController.ts"
Cohesion: 0.24
Nodes (13): everyoneArrived(), expandRange(), getZonedParts(), isMeetingActive(), matchesCronPart(), OfficeStandupController, sameScheduledMinute(), shouldRunNow() (+5 more)

### Community 147 - "ws"
Cohesion: 0.17
Nodes (4): ws@^8.18.3, ws, ws, ws

### Community 148 - "agentMessaging.ts"
Cohesion: 0.18
Nodes (13): buildAgentHandoffInstruction(), GatewayAgentsListResult, GatewayCallLike, resolveLabel(), resolveSessionKeyFromAgentList(), RuntimeAgentHandoffPayload, RuntimeAgentMessagePayload, sendAgentHandoffViaRuntime() (+5 more)

### Community 149 - "RunningAvatarLoader"
Cohesion: 0.24
Nodes (11): OfficeLoadingFallback(), OfficePage(), readDebugFlag(), GatewayConnectScreen(), GatewayConnectScreenProps, resolveLocalGatewayPort(), box(), RunningAvatarLoader() (+3 more)

### Community 150 - "standup/types.ts"
Cohesion: 0.11
Nodes (18): runtime, sourceTone(), StandupImmersiveScreen(), StandupAgentSnapshot, StandupCommitSummary, StandupConfig, StandupConfigPayload, StandupJiraConfig (+10 more)

### Community 151 - "Critical Fixes"
Cohesion: 0.17
Nodes (11): 1. Telemetry Removed, 2. Constant-Time Token Comparison, 3. Auth Rate Limiting, 4. WebSocket Frame Validation, 5. Upstream URL Allowlist, 6. Custom Runtime Proxy Allowlist, 7. Security Headers, 8. Media Route Symlink Rejection (+3 more)

### Community 152 - "sessionSettingsMutations.ts"
Cohesion: 0.23
Nodes (11): AgentSessionState, applySessionSettingMutation(), ApplySessionSettingMutationParams, buildErrorPrefix(), buildFallbackError(), buildWebchatBlockedMessage(), resolveModelFromPatchResult(), SessionSettingField (+3 more)

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

### Community 157 - "useOfficeSkillsMarketplace.ts"
Cohesion: 0.23
Nodes (13): MarketplaceMessage, useOfficeSkillsMarketplace(), readGatewayAgentSkillsAllowlist(), normalizeSkillName(), resolveVisibleAgentSkillNames(), setAgentSkillEnabled(), appendPackagedSkillsToMarketplace(), buildPackagedSkillStatusEntry() (+5 more)

### Community 158 - "ref_node_crypto"
Cohesion: 0.36
Nodes (5): createAccessGate(), createRateLimiter(), parseCookies(), resolveClientIp(), safeCompare()

### Community 159 - "clawd3d-start.sh"
Cohesion: 0.44
Nodes (8): find_free_port(), info(), log(), pids_on_port(), port_free(), port_owned_by(), clawd3d-start.sh script, warn()

### Community 160 - "Step-by-step tasks"
Cohesion: 0.15
Nodes (13): Step-by-step tasks, Task 10 — Visual calibration (manual, 1 iterasi), Task 11 — Regression: existing unit tests, Task 12 — Graphify refresh (WAJIB per AGENTS.md), Task 13 — Dokumentasi singkat, Task 1 — Ambil file `.blend` dari Drive, Task 2 — Install Blender headless (one-time), Task 3 — Export `.blend` → `.glb` (Draco-compressed, web) (+5 more)

### Community 161 - "runtimeEventBridge.ts"
Cohesion: 0.08
Nodes (44): findLatestHeartbeatResponse(), extractReasoningBody(), hasReasoningSignal(), hasUnclosedThinkingTag(), isReasoningOnlyAssistantChunk(), normalizeReasoningComparable(), planRuntimeAgentEvent(), resolveThinkingFromAgentStream() (+36 more)

### Community 162 - "CompanyBuilderModal.tsx"
Cohesion: 0.11
Nodes (23): CommandModeId, ChatHistoryMessage, TranscriptAppendMeta, buildRoleAvatarProfile(), CompanyBuilderModal(), CompanyBuilderModalProps, createEmptyRole(), joinCommaList() (+15 more)

### Community 163 - "HeaderBar.tsx"
Cohesion: 0.24
Nodes (7): react, applyTheme(), getPreferredTheme(), ThemeMode, ThemeToggle(), HeaderBar(), HeaderBarProps

### Community 164 - "GatewayClient"
Cohesion: 0.08
Nodes (7): GatewayClient, parseConnectFailedCloseReason(), GatewayBrowserClient, GatewayBrowserClient, instances, MockClientOptions, MockInstance

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

### Community 169 - "agentBridge.ts"
Cohesion: 0.43
Nodes (6): BrowserJukeboxCommand, BrowserJukeboxExecutionResult, executeBrowserJukeboxCommand(), normalize(), parseBrowserJukeboxCommand(), stripPlayPrefix()

### Community 170 - "contact_links"
Cohesion: 0.33
Nodes (5): blank_issues_enabled, contact_links, about, name, url

### Community 171 - "shared-store-client.ts"
Cohesion: 0.30
Nodes (10): archiveSharedTaskRecord(), fetchWithTimeout(), isRetryable(), listSharedTaskRecords(), parseResponse(), sleep(), TaskStoreRequestError, upsertSharedTaskRecord() (+2 more)

### Community 172 - "useStudioVoiceRepliesPreference.ts"
Cohesion: 0.53
Nodes (5): useStudioVoiceRepliesPreference(), UseStudioVoiceRepliesPreferenceParams, defaultStudioVoiceRepliesPreference(), resolveVoiceRepliesPreference(), StudioVoiceRepliesPreference

### Community 173 - "studioSettings.test.ts"
Cohesion: 0.67
Nodes (3): defaultStudioFloorRuntimeState(), resolveStudioActiveFloorId(), resolveStudioFloorRuntimeState()

### Community 174 - "Step-by-step tasks"
Cohesion: 0.13
Nodes (24): Architecture / proposed approach, Claw3D — Ganti geometri male procedural dengan model GLB dari Drive, Current context / assumptions, Goal, Risks, tradeoffs, open questions, Task 0 — Graphify preflight (read-only), Task 8 — Hook ke `AgentAvatarPreview3D` (editor preview), Tests / validation (+16 more)

### Community 175 - "task-store/route.ts"
Cohesion: 0.47
Nodes (6): DELETE(), errorJson(), GET(), isRecord(), json(), PUT()

### Community 176 - "taskBoardState.ts"
Cohesion: 0.36
Nodes (8): compareCards(), sortTaskBoardCards(), TaskBoardAction, taskBoardReducer(), upsertTaskBoardCard(), defaultTaskBoardPreference(), defaultStudioTaskBoardPreference(), resolveTaskBoardPreference()

### Community 177 - "multiavatar.ts"
Cohesion: 0.33
Nodes (8): AVATAR_ACCENTS, AVATAR_FOREGROUNDS, AVATAR_PALETTE, buildAvatarDataUrl(), buildAvatarLabel(), buildAvatarSvg(), hashSeed(), pick()

### Community 178 - "layout.tsx"
Cohesion: 0.28
Nodes (6): display, metadata, mono, RootLayout(), sans, SuspenseStreamGuard()

### Community 179 - "gatewayReloadMode.ts"
Cohesion: 0.42
Nodes (7): ensureGatewayReloadModeHotForLocalStudio(), GatewayConfigSnapshot, isRecord(), resolveReloadModeFromConfig(), shouldAwaitDisconnectRestartForReloadMode(), shouldAwaitDisconnectRestartForRemoteMutation(), shouldRetryConfigWrite()

### Community 186 - "Concrete Delivery Plan"
Cohesion: 0.33
Nodes (6): Concrete Delivery Plan, Phase 2: Persistent Per-Floor Runtime State, Phase 3: Per-Floor Roster Hydration, Phase 4: Building Shell + Floor Switcher, Phase 5: Cross-Floor Coordination Primitives, Phase 6: Office Systems on Top

### Community 187 - "AgentCreateModal.tsx"
Cohesion: 0.19
Nodes (17): AgentAvatar(), AgentAvatarProps, AgentCreateModal(), AgentCreateModalContent(), AgentCreateModalProps, resolveInitialName(), AgentAvatarProfile, blendHex() (+9 more)

### Community 189 - "custom/route.ts"
Cohesion: 0.10
Nodes (11): nextConfig, securityHeaders, next, runtime, CustomRuntimeRequestBody, isRuntimeUrlAllowed(), normalizeMethod(), normalizePathname() (+3 more)

### Community 191 - "AgentsPageScreen.tsx"
Cohesion: 0.14
Nodes (22): runResolveExecApprovalOperation(), mergePendingApprovalsForFocusedAgent(), applyCreateAgentBootstrapPermissions(), executeCreateAgentBootstrapCommands(), isCreateBlockTimedOut(), resolveConfigMutationStatusLine(), runCreateAgentMutationLifecycle(), parseSettingsRouteAgentIdFromPathname() (+14 more)

### Community 193 - "Building Layers"
Cohesion: 0.40
Nodes (5): 1. Building Shell, 2. Floor Runtime Surface, 3. Shared Building Systems, 4. Cross-Floor Coordination, Building Layers

### Community 194 - "deploy-local.sh"
Cohesion: 0.40
Nodes (4): NEXT_PUBLIC_GATEWAY_URL, NEXT_TELEMETRY_DISABLED, PATH, deploy-local.sh script

## Knowledge Gaps
- **3 isolated node(s):** `PATH`, `NEXT_TELEMETRY_DISABLED`, `NEXT_PUBLIC_GATEWAY_URL`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 2084 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **10 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `vitest` connect `vitest` to `useTaskBoardController.ts`, `deskMonitor.ts`, `resolveStateDir`, `navigation.ts`, `GatewayClient.ts`, `hermes-gateway-adapter.js`, `RetroOffice3D.tsx`, `media/route.ts`, `agentConfig.ts`, `runtimeAgentEventWorkflow.test.ts`, `gatewayRuntimeEventHandler.ts`, `chatSendOperation.ts`, `execApprovalControlLoopWorkflow.ts`, `settings.ts`, `claw3doctor.mjs`, `agentPermissionsOperation.ts`, `EventFrame`, `chatItems.ts`, `GatewayClient`, `skills/types.ts`, `mutationLifecycleWorkflow.ts`, `eventTriggers.ts`, `floors.ts`, `coordinator.ts`, `package.json`, `useAgentSettingsMutationController.ts`, `deskDirectives.ts`, `settings-store.ts`, `AgentChatPanel.tsx`, `planning.ts`, `shared-store.ts`, `profile.ts`, `message-extract.ts`, `triggers.ts`, `colorSemantics.ts`, `runtimeChatEventWorkflow.ts`, `transcript.ts`, `browser-preview/route.ts`, `useAgentSettingsMutationController.ts`, `historySyncOperation.ts`, `execApprovalRunControlOperation.ts`, `standup/store.ts`, `models.ts`, `voiceTranscription.ts`, `createPayloadBuilder.ts`, `AgentsPageScreen`, `GatewayBrowserClient.ts`, `useRuntimeSyncController.ts`, `settingsRouteWorkflow.ts`, `agents/agentFiles.ts`, `agentFleetHydrationDerivation.ts`, `tasks/types.ts`, `index.js`, `GatewayClient`, `AgentSettingsPanel.tsx`, `presentation.ts`, `pathfinding.ts`, `lucide-react`, `StudioSettingsCoordinator`, `cleanup-ux-artifacts.mjs`, `createAgentBootstrapOperation.ts`, `specialLatestUpdateOperation.ts`, `studio-settings.js`, `vitest`, `useOnboardingState.ts`, `AgentEditorModal.tsx`, `execApprovals.ts`, `agentSettingsMutationWorkflow.ts`, `useConfigMutationQueue.ts`, `cronCreateOperation.ts`, `ws`, `agentMessaging.ts`, `ref_node_crypto`, `runtimeEventBridge.ts`, `HeaderBar.tsx`, `GatewayClient`, `studioSettings.test.ts`, `Step-by-step tasks`, `task-store/route.ts`, `multiavatar.ts`, `gatewayReloadMode.ts`, `AgentCreateModal.tsx`, `custom/route.ts`, `AgentsPageScreen.tsx`?**
  _High betweenness centrality (0.075) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `OfficeScreen()` (e.g. with `Current Post-Merge Sequence` and `Immediate Next Deliverables`) actually correct?**
  _`OfficeScreen()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `PATH`, `NEXT_TELEMETRY_DISABLED`, `NEXT_PUBLIC_GATEWAY_URL` to the rest of the system?**
  _3 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `toWorld` be split into smaller, more focused modules?**
  _Cohesion score 0.10272536687631027 - nodes in this community are weakly interconnected._
- **Why does `react` connect `HeaderBar.tsx` to `useTaskBoardController.ts`, `toWorld`, `OfficeScreen.tsx`, `AgentEditorModal.tsx`, `useOnboardingState.ts`, `GatewayClient.ts`, `RetroOffice3D.tsx`, `useUsageAnalytics.ts`, `AgentSkillsPanel.tsx`, `voiceReply/provider.ts`, `useConfigMutationQueue.ts`, `JukeboxPanel.tsx`, `chatSendOperation.ts`, `useOfficeStandupController.ts`, `execApprovalControlLoopWorkflow.ts`, `geometry.ts`, `RunningAvatarLoader`, `EventFrame`, `useOfficeSkillsMarketplace.ts`, `constants.ts`, `CompanyBuilderModal.tsx`, `floors.ts`, `GatewayClient`, `package.json`, `useStudioVoiceRepliesPreference.ts`, `Step-by-step tasks`, `AgentChatPanel.tsx`, `layout.tsx`, `profile.ts`, `district.ts`, `AgentCreateModal.tsx`, `triggers.ts`, `colorSemantics.ts`, `AgentsPageScreen.tsx`, `transcript.ts`, `browser-preview/route.ts`, `useAgentSettingsMutationController.ts`, `models.ts`, `marketplace.ts`, `dependencies`, `OfficePhaserCanvas.tsx`, `useRuntimeSyncController.ts`, `settingsRouteWorkflow.ts`, `agents/agentFiles.ts`, `tasks/types.ts`, `GatewayClient`, `personalityBuilder.ts`, `AgentSettingsPanel.tsx`, `GithubImmersiveScreen.tsx`, `useRunLog.ts`, `lucide-react`, `useOfficeBuilderStore.ts`, `RunningAvatarLoader`, `presence.ts`?**
  _High betweenness centrality (0.065) - this node is a cross-community bridge._
- **Should `OfficeScreen.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.039586919104991396 - nodes in this community are weakly interconnected._
- **Why does `next` connect `custom/route.ts` to `resolveStateDir`, `vitest`, `OfficeScreen.tsx`, `media/route.ts`, `call/mock.ts`, `voiceReply/provider.ts`, `standup/types.ts`, `package.json`, `upload/route.ts`, `settings-store.ts`, `layout.tsx`, `AgentCreateModal.tsx`, `AgentsPageScreen.tsx`, `browser-preview/route.ts`, `standup/store.ts`, `voiceTranscription.ts`, `office/store.ts`, `dependencies`, `github/route.ts`, `SmsBoothImmersiveScreen.tsx`, `index.js`, `GithubImmersiveScreen.tsx`, `layout/route.ts`, `presence.ts`?**
  _High betweenness centrality (0.048) - this node is a cross-community bridge._