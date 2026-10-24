# Graph Report - claw3d  (2026-10-24)

## Corpus Check
- 582 files · ~429,325 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 29 file(s) not represented in the graph (top: .glb 17, (none) 6, .css 2)

## Summary
- 5130 nodes · 12128 edges · 186 communities (176 shown, 10 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 179 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `a881e223`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- useTaskBoardController.ts
- vitest
- ref_node_path
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
- runtimeEventBridge.ts
- gatewayRuntimeEventHandler.ts
- spotify-jukebox/store.ts
- chatSendOperation.ts
- execApprovalControlLoopWorkflow.ts
- furnitureDefaults.ts
- loadStudioSettings
- settings.ts
- claw3doctor.mjs
- agentPermissionsOperation.ts
- EventFrame
- chatItems.ts
- useAgentSettingsMutationController.ts
- GatewayClient
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
- isRecord
- Meeting Room Workflow Spec
- Meeting Room Workflow Spec
- visualSystems.tsx
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
- RuntimeProvider
- schema.ts
- next
- execApprovalRunControlOperation.ts
- AgentsPageScreen.tsx
- models.ts
- Claw3Doctor Spec
- Multi-Agent Beta
- voiceTranscription.ts
- office/store.ts
- AgentCreateWizardModal.tsx
- AgentsPageScreen
- marketplace.ts
- Runtime Profile Architecture
- dependencies
- GatewayBrowserClient.ts
- Office Systems Roadmap
- OfficePhaserCanvas.tsx
- agents.tsx
- useRuntimeSyncController.ts
- settingsRouteWorkflow.ts
- CustomRuntimeProvider
- runtime/types.ts
- Claw3D + OpenClaw + Tailscale Setup Tutorial
- [0.1.4] - 2026-04-23
- Claw3D — A 3D Workspace for AI Agents
- SmsBoothImmersiveScreen.tsx
- agents/agentFiles.ts
- agentFleetHydrationDerivation.ts
- deleteAgentOperation.ts
- custom/provider.ts
- PI + Chat Streaming (Studio Side)
- index.js
- gateway-proxy.js
- GithubImmersiveScreen.tsx
- personalityBuilder.ts
- Custom Runtime Provider Spec
- AgentSettingsPanel.tsx
- GatewayBrowserClient
- README.md
- claw3d
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
- fleetLifecycleWorkflow.ts
- runtimeAgentEventWorkflow.ts
- coerceString
- compilerOptions
- layout/route.ts
- RunningAvatarLoader
- specialLatestUpdateOperation.ts
- buildAgentMainSessionKey
- AgentEffectsSystem.ts
- Permissions, Sandboxing, and Workspaces (Studio -> Gateway -> PI)
- studioRoute.ts
- studio-settings.js
- onboarding/index.ts
- normalizeCommandText
- Hermes Gateway Adapter
- Agent Bus Integration
- scripts
- PR89.md
- call/mock.ts
- voiceReply/provider.ts
- agentFleetHydration.ts
- agentSettingsMutationWorkflow.ts
- useConfigMutationQueue.ts
- remove-gateway.ts
- Creating Skills
- Runtime Profiles
- network-policy.js
- useOfficeStandupController.ts
- agentMessaging.ts
- AgentAvatarProfile
- randomUUID
- Critical Fixes
- sessionSettingsMutations.ts
- AmbienceSystem.ts
- Claw3D Vision
- Task Manager
- TODO Board
- multiavatar.ts
- Contributing
- clawd3d-start.sh
- createDefaultAgentAvatarProfile
- companyBuilderGateway.ts
- useVoiceRecorder.ts
- storeDeviceAuthToken
- gatewayClient.reconnect-recovery.test.ts
- Cursor Cloud specific instructions
- OpenClaw Gateway Skill Contract
- Roadmap
- Top-Level Code Map
- Code Of Conduct
- contact_links
- StudioGatewayAdapterType
- useStudioVoiceRepliesPreference.ts
- GatewayGapInfo
- GatewayStatus
- 9) Troubleshooting
- settingsSidebarTabs.ts
- usePerformanceAnalytics.ts
- gatewayBrowserClient.test.ts
- @testing-library/jest-dom
- multiavatar
- .github/SECURITY.md
- postcss.config.mjs

## God Nodes (most connected - your core abstractions)
1. `vitest` - 179 edges
2. `OfficeScreen()` - 117 edges
3. `react` - 114 edges
4. `AgentState` - 98 edges
5. `GatewayClient` - 82 edges
6. `AgentsPageScreen()` - 68 edges
7. `toWorld()` - 62 edges
8. `RetroOffice3D()` - 50 edges
9. `next` - 38 edges
10. `getItemRotationRadians()` - 37 edges

## Surprising Connections (you probably didn't know these)
- `History Sync (Recovery, Load More)` --references--> `buildHistoryLines()`  [INFERRED]
  docs/pi-chat-streaming.md → src/features/agents/state/runtimeEventBridge.ts
- `Current Post-Merge Sequence` --references--> `OfficeScreen()`  [INFERRED]
  docs/office_sys/office-systems-roadmap.md → src/features/office/screens/OfficeScreen.tsx
- `Immediate Next Deliverables` --references--> `OfficeScreen()`  [INFERRED]
  docs/office_sys/office-systems-roadmap.md → src/features/office/screens/OfficeScreen.tsx
- `Platform Prerequisites` --references--> `OfficeScreen()`  [INFERRED]
  docs/office_sys/office-systems-roadmap.md → src/features/office/screens/OfficeScreen.tsx
- `Main Runtime Flow` --references--> `GatewayClient`  [INFERRED]
  CODE_DOCUMENTATION.md → src/lib/gateway/GatewayClient.ts

## Import Cycles
- None detected.

## Communities (186 total, 10 thin omitted)

### Community 0 - "useTaskBoardController.ts"
Cohesion: 0.05
Nodes (75): TaskBoardPanel(), RunRecord, KanbanImmersiveScreen(), compareCards(), sortTaskBoardCards(), TaskBoardAction, taskBoardReducer(), upsertTaskBoardCard() (+67 more)

### Community 1 - "vitest"
Cohesion: 0.06
Nodes (28): react, @testing-library/react, vitest, AgentChatPanel(), HistorySyncCommand, Action, AgentState, AgentStoreContext (+20 more)

### Community 2 - "ref_node_path"
Cohesion: 0.05
Nodes (53): contents, destPath, repoRoot, contentTypeFromName(), GET(), runtime, uploadsDir(), ALLOWED_CONTENT_TYPES (+45 more)

### Community 3 - "toWorld"
Cohesion: 0.07
Nodes (69): @react-three/drei, DOOR_LENGTH, DOOR_THICKNESS, SCALE, FURNITURE_ROTATION, getItemBaseSize(), getItemRotationRadians(), resolveItemTypeKey() (+61 more)

### Community 4 - "OfficeScreen.tsx"
Cohesion: 0.04
Nodes (68): GatewayConnectScreen(), GatewayConnectScreenProps, resolveLocalGatewayPort(), useAgentStore(), buildGenerateCompanyPlanPrompt(), buildImproveCompanyBriefPrompt(), HQSidebar(), HQSidebarProps (+60 more)

### Community 5 - "navigation.ts"
Cohesion: 0.06
Nodes (52): CANVAS_H, CANVAS_W, MIN_WALL_LENGTH, WALL_THICKNESS, createWallItem(), getItemBounds(), ITEM_FOOTPRINT, ITEM_METADATA (+44 more)

### Community 6 - "GatewayClient.ts"
Cohesion: 0.05
Nodes (45): Reconnects And Retries, Studio Settings (Where Gateway URL/Token Come From), GatewayErrorPayload, GatewayResponseError, EventHandler, formatGatewayError(), GapHandler, gatewayDebugLog() (+37 more)

### Community 7 - "hermes-gateway-adapter.js"
Cohesion: 0.06
Nodes (60): activeRuns, activeSendEventFns, ADAPTER_PORT, agentListPayload(), agents, broadcastEvent(), buildDemoReply(), clearHistory() (+52 more)

### Community 8 - "RetroOffice3D.tsx"
Cohesion: 0.05
Nodes (57): SettingsPanel(), Bubble(), PhoneBoothImmersiveScreen(), PhoneCallStep, sourceTone(), StandupImmersiveScreen(), AGENT_RADIUS, BUMP_FREEZE_MS (+49 more)

### Community 9 - "media/route.ts"
Cohesion: 0.07
Nodes (47): isSafeAgentId(), POST(), PUT(), resolveAgentStateSshTarget(), RestoreAgentStateRequest, runtime, TrashAgentStateRequest, expandTildeLocal() (+39 more)

### Community 10 - "service.ts"
Cohesion: 0.07
Nodes (53): GET(), PUT(), runtime, runtime, advanceStandupMeeting(), buildJiraSearchUrl(), buildSourceState(), buildSpeech() (+45 more)

### Community 11 - "useUsageAnalytics.ts"
Cohesion: 0.08
Nodes (57): AnalyticsPanel(), DatePickerField(), formatBudgetInput(), formatDuration(), formatPercent(), openNativeDatePicker(), parseBudgetInput(), StatCard() (+49 more)

### Community 12 - "presentation.ts"
Cohesion: 0.07
Nodes (52): AgentSkillsPanel(), AgentSkillsPanelProps, DISPLAY_CLASSES, DISPLAY_LABELS, FILTERS, resolveHint(), SkillRowFilter, AgentSkillsSetupModal() (+44 more)

### Community 13 - "agentConfig.ts"
Cohesion: 0.07
Nodes (51): How Studio Chooses the Default Workspace Path, Studio -> Gateway: “Create Agent” End-to-End, AgentHeartbeat, AgentHeartbeatActiveHours, AgentHeartbeatResult, AgentHeartbeatSummary, AgentHeartbeatUpdatePayload, AgentSkillsAccessMode (+43 more)

### Community 14 - "runtimeEventBridge.ts"
Cohesion: 0.07
Nodes (48): buildHistoryMetadataPatch(), HistoryRequestIntent, HistoryResponseDisposition, resolveHistoryFetchLimit(), resolveHistoryRequestIntent(), resolveHistoryResponseDisposition(), areStringArraysEqual(), ChatHistoryMessage (+40 more)

### Community 15 - "gatewayRuntimeEventHandler.ts"
Cohesion: 0.10
Nodes (48): createGatewayRuntimeEventHandler(), findAgentByRunId(), GatewayRuntimeEventHandler, GatewayRuntimeEventHandlerDeps, resolveRole(), AgentEventPayload, classifyGatewayEventKind(), getChatSummaryPatch() (+40 more)

### Community 16 - "spotify-jukebox/store.ts"
Cohesion: 0.09
Nodes (47): BrowserJukeboxCommand, BrowserJukeboxExecutionResult, executeBrowserJukeboxCommand(), normalize(), parseBrowserJukeboxCommand(), stripPlayPrefix(), base64urlEncode(), buildRedirectUri() (+39 more)

### Community 17 - "chatSendOperation.ts"
Cohesion: 0.06
Nodes (42): Sending Messages (Browser -> PI via Gateway), DraftFlushIntent, DraftTimerIntent, NewSessionIntent, planDraftFlushIntent(), planDraftTimerIntent(), planNewSessionIntent(), planStopRunIntent() (+34 more)

### Community 18 - "execApprovalControlLoopWorkflow.ts"
Cohesion: 0.09
Nodes (35): AutoResumeIntent, PauseRunIntent, planAutoResumeIntent(), planAwaitingUserInputPatches(), planPauseRunIntent(), planPendingPruneDelay(), planPrunedPendingState(), resolvePauseTargetAgent() (+27 more)

### Community 19 - "furnitureDefaults.ts"
Cohesion: 0.07
Nodes (51): createFurnitureSignature(), DEFAULT_ART_ROOM_ITEMS, DEFAULT_ATM_MACHINE, DEFAULT_DINING_ITEMS, DEFAULT_FURNITURE, DEFAULT_GYM_ITEMS, DEFAULT_JUKEBOX, DEFAULT_KANBAN_BOARD (+43 more)

### Community 20 - "loadStudioSettings"
Cohesion: 0.09
Nodes (35): GET(), runtime, POST(), runtime, stripRemoteAgentPrefix(), AgentsListResult, POST(), resolveLatestAssistantHistoryText() (+27 more)

### Community 21 - "settings.ts"
Cohesion: 0.06
Nodes (44): useStudioOfficePreference(), UseStudioOfficePreferenceParams, DEFAULT_REMOTE_OFFICE_SOURCE_KIND, defaultStudioFloorRuntimeState(), defaultStudioOfficePreferencePublic(), defaultStudioStandupJiraConfig(), defaultStudioStandupPreference(), defaultStudioStandupScheduleConfig() (+36 more)

### Community 22 - "claw3doctor.mjs"
Cohesion: 0.12
Nodes (44): checkFail(), checkPass(), checkWarn(), detectHermesModelHealth(), detectOpenClawVersion(), detectWorkspaceState(), formatErrorMessage(), loadDotenvFile() (+36 more)

### Community 23 - "agentPermissionsOperation.ts"
Cohesion: 0.09
Nodes (42): Capabilities Permissions Updates, One-Shot Sandbox Tool Policy Repair, Runtime Tool Groups Used By Capability Updates, Studio Note: Authority Is No Longer Compiled During Create, Studio Post-Create “Permissions” Flows (Not Just Creation), Studio: Where “Permissions” Are Chosen, AgentRuntimeConfigContext, coerceStringArray() (+34 more)

### Community 24 - "EventFrame"
Cohesion: 0.10
Nodes (28): asNonEmptyString(), asOptionalString(), asPositiveTimestamp(), asRecord(), parseExecApprovalRequested(), parseExecApprovalResolved(), RequestedPayload, ResolvedPayload (+20 more)

### Community 25 - "chatItems.ts"
Cohesion: 0.10
Nodes (43): AgentChatItem, AgentChatRenderBlock, appendThinkingTraceEvent(), AssistantTraceEvent, buildAgentChatItems(), BuildAgentChatItemsInput, buildAgentChatRenderBlocks(), buildFinalAgentChatItems() (+35 more)

### Community 26 - "useAgentSettingsMutationController.ts"
Cohesion: 0.09
Nodes (36): AgentPermissionsDraft, CRON_ACTION_BUSY_MESSAGE, CronBusyState, CronCreateDeps, isCronActionBusy(), performCronCreateFlow(), resolveCreateAgentId(), resolveCreateErrorMessage() (+28 more)

### Community 27 - "GatewayClient"
Cohesion: 0.10
Nodes (37): MarketplaceMessage, useOfficeSkillsMarketplace(), readGatewayAgentSkillsAllowlist(), GatewayClient, normalizeSkillName(), resolveVisibleAgentSkillNames(), setAgentSkillEnabled(), appendPackagedSkillsToMarketplace() (+29 more)

### Community 28 - "github.ts"
Cohesion: 0.13
Nodes (42): GET(), parsePullRequestNumber(), POST(), ReviewRequestBody, runtime, extractCommandMessage(), getGitHubAuthState(), GitHubAuthState (+34 more)

### Community 29 - "constants.ts"
Cohesion: 0.07
Nodes (39): ATM_MIGRATION_KEY, BUMP_RECOVERY_MS, DESK_STICKY_MS, EAST_HALL_WIDTH, EAST_WING_DOOR_Y, EAST_WING_ROOM_HEIGHT, EAST_WING_ROOM_TOP_Y, EAST_WING_SIDE_MARGIN (+31 more)

### Community 30 - "QA Department Spec"
Cohesion: 0.05
Nodes (40): Agent Interaction Model, Approval-Aware Review, Approvals, Approved, Blocked, Bug Triage, Bulletin Board, Changes Requested (+32 more)

### Community 31 - "QA Department Spec"
Cohesion: 0.05
Nodes (40): Agent Interaction Model, Approval-Aware Review, Approvals, Approved, Blocked, Bug Triage, Bulletin Board, Changes Requested (+32 more)

### Community 32 - "mutationLifecycleWorkflow.ts"
Cohesion: 0.08
Nodes (32): AgentCreateModalSubmitPayload, AgentConfigMutationLifecycleDeps, AgentConfigMutationLifecycleKind, assertMutationKind(), AwaitingRestartPatch, buildConfigMutationFailureMessage(), buildMutatingMutationBlock(), buildMutationSideEffectCommands() (+24 more)

### Community 33 - "eventTriggers.ts"
Cohesion: 0.09
Nodes (36): How Office Motion Works, applyHoldDirective(), BooleanByAgentId, buildOfficeAnimationState(), clearOfficeAnimationTriggerHold(), createOfficeAnimationTriggerState(), emptyObject(), isUserLikeChatRole() (+28 more)

### Community 34 - "floors.ts"
Cohesion: 0.10
Nodes (34): Floor Registry Slice, Immediate Implementation Checklist, Per-Floor Runtime State Slice, Phase 1: Floor Registry, Roster Slice, UI Shell Slice, OfficeFloorNav(), OfficeFloorNavProps (+26 more)

### Community 35 - "coordinator.ts"
Cohesion: 0.07
Nodes (36): fetchJson(), AnalyticsPatch, AvatarsPatch, createStudioSettingsCoordinator(), DeskAssignmentsPatch, fetchStudioSettings(), FocusedPatch, mergeAnalyticsPatch() (+28 more)

### Community 36 - "Agent State Model Spec"
Cohesion: 0.05
Nodes (38): Agent State Model Spec, Blocked, Bulletin Board, Core Principle, Degraded, Desk Progression / Hierarchy, Error, Existing Code Seams (+30 more)

### Community 37 - "package.json"
Cohesion: 0.07
Nodes (37): eslintConfig, devDependencies, eslint@^9, eslint-config-next@16.1.6, eslint-config-prettier@^10.1.8, jsdom@^27.4.0, @playwright/test@^1.58.0, tailwindcss@^4 (+29 more)

### Community 38 - "Desk Progression Spec"
Cohesion: 0.05
Nodes (37): Agent Interaction Model, Bulletin Board / Whiteboard, Contractor, Contractor Desk, Core Principle, Desk Progression Spec, Employee, Employee Desk (+29 more)

### Community 39 - "Desk Progression Spec"
Cohesion: 0.05
Nodes (37): Agent Interaction Model, Bulletin Board / Whiteboard, Contractor, Contractor Desk, Core Principle, Desk Progression Spec, Employee, Employee Desk (+29 more)

### Community 40 - "cron/types.ts"
Cohesion: 0.09
Nodes (31): addDays(), buildCronJobCreateInput(), CronCreateDraft, formatterCache, getFormatter(), resolveAgentId(), resolveAtSchedule(), resolveEverySchedule() (+23 more)

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
Nodes (30): GET(), PUT(), readGatewayUrl(), runtime, POST(), GET(), isPatch(), PUT() (+22 more)

### Community 49 - "AgentChatPanel.tsx"
Cohesion: 0.10
Nodes (28): AgentAvatar(), AgentChatComposer, AgentChatFinalItems, AgentChatPanelProps, AgentChatTranscript, AssistantIntroCard, AssistantMessageCard, CHAT_SELECT_STYLE (+20 more)

### Community 50 - "planning.ts"
Cohesion: 0.12
Nodes (30): CreatedAgentRecord, runCompanyBootstrapOperation(), buildCompanyAgentBlueprints(), buildRoleAgentsMarkdown(), buildRoleHeartbeatMarkdown(), buildRoleIdentity(), buildRoleMemoryMarkdown(), buildRoleSoulDraft() (+22 more)

### Community 51 - "isRecord"
Cohesion: 0.13
Nodes (34): defaultFocusedPreference(), defaultStudioOfficePreference(), defaultStudioStandupManualEntry(), isRecord(), mergeStudioSettings(), normalizeAnalytics(), normalizeAnalyticsPreference(), normalizeAvatars() (+26 more)

### Community 52 - "Meeting Room Workflow Spec"
Cohesion: 0.06
Nodes (33): Agent Interaction Model, Archived, Bulletin Board Integration, Complete, Core Principle, Decision, Existing Code Seams, Existing Foundation (+25 more)

### Community 53 - "Meeting Room Workflow Spec"
Cohesion: 0.06
Nodes (33): Agent Interaction Model, Archived, Bulletin Board Integration, Complete, Core Principle, Decision, Existing Code Seams, Existing Foundation (+25 more)

### Community 54 - "visualSystems.tsx"
Cohesion: 0.07
Nodes (21): main(), main(), main(), @react-three/fiber, three, PING_PONG_BALL_RADIUS, PING_PONG_TABLE_SURFACE_Y, SNAP_GRID (+13 more)

### Community 55 - "shared-store.ts"
Cohesion: 0.15
Nodes (27): DELETE(), errorJson(), GET(), isRecord(), json(), PUT(), isTaskBoardSource(), isTaskBoardStatus() (+19 more)

### Community 56 - "profile.ts"
Cohesion: 0.10
Nodes (29): AgentAvatarEditorPanelHandle, AgentAvatarEditorPanelProps, AGENT_AVATAR_BOTTOM_STYLE_OPTIONS, AGENT_AVATAR_CLOTHING_COLOR_OPTIONS, AGENT_AVATAR_GENDER_OPTIONS, AGENT_AVATAR_HAIR_COLOR_OPTIONS, AGENT_AVATAR_HAIR_STYLE_OPTIONS, AGENT_AVATAR_HAT_STYLE_OPTIONS (+21 more)

### Community 57 - "message-extract.ts"
Cohesion: 0.11
Nodes (29): findLatestHeartbeatResponse(), resolveThinkingFromAgentStream(), AgentInstructionParams, buildAgentInstruction(), ENVELOPE_CHANNELS, EXEC_APPROVAL_WAIT_POLICY, extractRawText(), extractText() (+21 more)

### Community 58 - "district.ts"
Cohesion: 0.09
Nodes (31): WORLD_H, WORLD_W, CITY_PATH_ZONE, clampPointToZone(), clampZoneValue(), DISTRICT_CAMERA_POSITION, DISTRICT_CAMERA_TARGET, DISTRICT_CAMERA_ZOOM (+23 more)

### Community 59 - "triggers.ts"
Cohesion: 0.09
Nodes (26): buildOfficeSkillTriggerHoldMaps(), DEFAULT_SKILL_TRIGGER_FALLBACKS_BY_SKILL_KEY, DefaultSkillTriggerFallback, isOfficeSkillTriggerMovementTarget(), OFFICE_INTERACTION_TARGETS, OFFICE_SKILL_TRIGGER_MOVEMENT_TARGETS, OFFICE_SKILL_TRIGGER_PLACE_REGISTRY, OfficeInteractionTargetId (+18 more)

### Community 60 - "Hierarchy And Teams Spec"
Cohesion: 0.06
Nodes (32): Agent Interaction Model, Contractor, Core Principle, Delegation Model, Executive, Existing Code Seams, Future Extensions, Goal (+24 more)

### Community 61 - "Hierarchy And Teams Spec"
Cohesion: 0.06
Nodes (32): Agent Interaction Model, Contractor, Core Principle, Delegation Model, Executive, Existing Code Seams, Future Extensions, Goal (+24 more)

### Community 62 - "colorSemantics.ts"
Cohesion: 0.11
Nodes (24): applyTheme(), getPreferredTheme(), ThemeMode, ThemeToggle(), AGENT_STATUS_BADGE_CLASS, AGENT_STATUS_LABEL, GATEWAY_STATUS_BADGE_CLASS, GATEWAY_STATUS_LABEL (+16 more)

### Community 63 - "runtimeChatEventWorkflow.ts"
Cohesion: 0.11
Nodes (26): planRuntimeChatEvent(), resolveTerminalSeq(), RuntimeChatWorkflowCommand, RuntimeChatWorkflowInput, RuntimeChatWorkflowResult, summarizeThinkingMessage(), terminalAssistantFinalEntryId(), terminalAssistantMetaEntryId() (+18 more)

### Community 64 - "transcript.ts"
Cohesion: 0.11
Nodes (30): areStringArraysEqual(), createRuntimeAgentState(), ensureTranscriptEntries(), nextTranscriptSequenceCounter(), reducer(), trimOutputLines(), trimTranscriptEntries(), areTranscriptEntriesEqual() (+22 more)

### Community 65 - "with"
Cohesion: 0.06
Nodes (31): env, IMAGE_BASENAME, REGISTRY, jobs, publish, name, contents, packages (+23 more)

### Community 66 - "browser-preview/route.ts"
Cohesion: 0.11
Nodes (27): BrowserOpenResponse, browserRequest(), BrowserScreenshotResponse, BrowserTab, BrowserTabsResponse, buildBrowserHeaders(), ensurePreviewTab(), GET() (+19 more)

### Community 67 - "RuntimeProvider"
Cohesion: 0.09
Nodes (10): GatewayConnectionState, GatewayConnectOptions, createRuntimeProvider(), DemoRuntimeProvider, HermesRuntimeProvider, OpenClawRuntimeProvider, hasRuntimeCapability(), RuntimeProvider (+2 more)

### Community 68 - "schema.ts"
Cohesion: 0.11
Nodes (31): asBoolean(), asNumber(), asString(), defaultLayers(), isRecord(), normalizeAmbiencePreset(), normalizeDeskAssignments(), normalizeInteractionKind() (+23 more)

### Community 69 - "next"
Cohesion: 0.07
Nodes (15): nextConfig, securityHeaders, next, runtime, CustomRuntimeRequestBody, isRuntimeUrlAllowed(), normalizeMethod(), normalizePathname() (+7 more)

### Community 70 - "execApprovalRunControlOperation.ts"
Cohesion: 0.11
Nodes (21): ExecApprovalIngressCommand, ExecApprovalPendingSnapshot, planIngressCommands(), planPausedRunMapCleanup(), EXEC_APPROVAL_AUTO_RESUME_WAIT_TIMEOUT_MS, executeExecApprovalIngressCommands(), GatewayClientLike, RunControlDispatch (+13 more)

### Community 71 - "AgentsPageScreen.tsx"
Cohesion: 0.10
Nodes (25): applyCreateAgentBootstrapPermissions(), CREATE_AGENT_DEFAULT_PERMISSIONS, CreateCompletion, CreatedAgent, executeCreateAgentBootstrapCommands(), resolveBootstrapErrorMessage(), runCreateAgentBootstrapOperation(), buildBootstrapGlobalErrorMessage() (+17 more)

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

### Community 77 - "AgentCreateWizardModal.tsx"
Cohesion: 0.12
Nodes (23): AgentCreateWizardModal(), AgentCreateWizardModalProps, buildInitialDraft(), WizardField(), WizardStepId, wizardSteps, WizardTextAreaField(), AgentEditorModal() (+15 more)

### Community 78 - "AgentsPageScreen"
Cohesion: 0.15
Nodes (24): hydrateAgentFleetFromGateway(), executeStudioBootstrapLoadCommands(), executeStudioFocusedPatchCommands(), executeStudioFocusedPreferenceLoadCommands(), GatewayClientLike, runStudioBootstrapLoadOperation(), runStudioFocusedPreferenceLoadOperation(), runStudioFocusedSelectionPersistenceOperation() (+16 more)

### Community 79 - "marketplace.ts"
Cohesion: 0.13
Nodes (24): SkillsMarketplaceModal(), SkillsMarketplaceModalProps, buildSearchBlob(), FILTER_LABELS, formatInstalls(), formatRating(), getAgentSkillEnabled(), MarketplaceFilter (+16 more)

### Community 80 - "Runtime Profile Architecture"
Cohesion: 0.08
Nodes (25): 1. `docs: runtime profile architecture`, 2. `feat: claw3doctor`, 3. `refactor: office shell modularization`, 4. `docs: floor schema and builder plan`, 5. `feat: admin floor builder`, Branch Sequence, Core Terms, Custom Runtime Position (+17 more)

### Community 81 - "dependencies"
Cohesion: 0.08
Nodes (26): dependencies, canvas-confetti@^1.9.4, class-variance-authority@^0.7.1, clsx@^2.1.1, lucide-react@^0.563.0, next@16.1.7, @noble/ed25519@^3.0.0, phaser@^3.90.0 (+18 more)

### Community 82 - "GatewayBrowserClient.ts"
Cohesion: 0.11
Nodes (24): base64UrlDecode(), base64UrlEncode(), bytesToHex(), CryptoLike, DeviceAuthEntry, DeviceAuthPayloadParams, DeviceAuthStore, DeviceIdentity (+16 more)

### Community 83 - "Office Systems Roadmap"
Cohesion: 0.08
Nodes (24): Agent State Model, Bulletin Board, Candidate Feature Order, Core Direction, Departments, Design Principles, Desk / CPU Progression, Hierarchy (+16 more)

### Community 84 - "OfficePhaserCanvas.tsx"
Cohesion: 0.15
Nodes (14): phaser, OfficePhaserCanvas(), OfficePhaserCanvasProps, createOfficeBuilderScene(), OfficeBuilderRenderable, createOfficeSceneBridge(), OfficeDebugSettings, OfficeRuntimeSettings (+6 more)

### Community 85 - "agents.tsx"
Cohesion: 0.17
Nodes (20): PreviewFigure(), AvatarFeminineHair(), AvatarLashes(), AvatarLegClothing(), AvatarSkirt(), Box(), Vec3, AGENT_SCALE (+12 more)

### Community 86 - "useRuntimeSyncController.ts"
Cohesion: 0.16
Nodes (22): executeHistorySyncCommands(), resolveRuntimeSyncBootstrapHistoryAgentIds(), resolveRuntimeSyncFocusedHistoryPollingIntent(), resolveRuntimeSyncGapRecoveryIntent(), resolveRuntimeSyncLoadMoreHistoryLimit(), resolveRuntimeSyncReconcilePollingIntent(), RUNTIME_SYNC_DEFAULT_HISTORY_LIMIT, RUNTIME_SYNC_FOCUSED_HISTORY_INTERVAL_MS (+14 more)

### Community 87 - "settingsRouteWorkflow.ts"
Cohesion: 0.21
Nodes (21): buildSettingsRouteHref(), InspectSidebarState, parseSettingsRouteAgentIdFromPathname(), parseSettingsRouteAgentIdFromQueryParam(), planBackToChatCommands(), planFleetSelectCommands(), planNonRouteSelectionSyncCommands(), planOpenSettingsRouteCommands() (+13 more)

### Community 88 - "CustomRuntimeProvider"
Cohesion: 0.22
Nodes (6): CustomRuntimeProvider, extractContentText(), isRecord(), normalizeModelChoices(), resolveAssistantTextFromResponse(), resolveDefaultModelId()

### Community 89 - "runtime/types.ts"
Cohesion: 0.15
Nodes (16): DEMO_RUNTIME_CAPABILITIES, HERMES_RUNTIME_CAPABILITIES, coerceTimestamp(), isRecord(), normalizeGatewayEvent(), resolveChatText(), resolveTimestamp(), OPENCLAW_RUNTIME_CAPABILITIES (+8 more)

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

### Community 94 - "agents/agentFiles.ts"
Cohesion: 0.16
Nodes (17): AgentFilesState, useAgentFilesEditor(), UseAgentFilesEditorResult, AGENT_FILE_NAMES, AgentFileName, createAgentFilesState(), isAgentFileName(), PERSONALITY_FILE_LABELS (+9 more)

### Community 95 - "agentFleetHydrationDerivation.ts"
Cohesion: 0.12
Nodes (23): AgentsListResult, DerivedHydrateAgentFleetResult, DeriveFleetHydrationInput, deriveHydrateAgentFleetResult(), ExecApprovalsSnapshot, ExecAsk, ExecHost, ExecPolicyEntry (+15 more)

### Community 96 - "deleteAgentOperation.ts"
Cohesion: 0.13
Nodes (20): deleteAgentRecordViaStudio(), DeleteAgentTransactionDeps, DeleteAgentTransactionResult, deleteAgentViaStudio(), EMPTY_TRASH_RESULT, FetchJson, GatewayAgentStateMove, RestoreAgentStateResult (+12 more)

### Community 97 - "custom/provider.ts"
Cohesion: 0.13
Nodes (21): CustomRuntimeProxyInput, fetchCustomRuntimeJson(), normalizeCustomBaseUrl(), probeCustomRuntime(), requestCustomRuntime(), ActiveRunRecord, buildChatFailureMessage(), buildIdentityAgent() (+13 more)

### Community 98 - "PI + Chat Streaming (Studio Side)"
Cohesion: 0.09
Nodes (23): Connect failures, Connect handshake, Debugging Checklist (When Chat “Feels Buggy”), End-To-End Flow (PI Run -> UI), `event: "agent"` payload, `event: "chat"` payload, Exec Approvals In Chat (Related To “PI Runs”), High-Level Network Path (+15 more)

### Community 99 - "index.js"
Cohesion: 0.13
Nodes (15): selfsigned@^5.5.0, selfsigned, createAccessGate(), createRateLimiter(), parseCookies(), resolveClientIp(), safeCompare(), CERT_DIR (+7 more)

### Community 100 - "gateway-proxy.js"
Cohesion: 0.16
Nodes (15): ws@^8.18.3, ws, buildErrorResponse(), createFrameRateLimiter(), createGatewayProxy(), hasCompleteDeviceAuth(), hasNonEmptyDeviceToken(), hasNonEmptyPassword() (+7 more)

### Community 101 - "GithubImmersiveScreen.tsx"
Cohesion: 0.17
Nodes (18): getDiffLineTone(), GitHubDiffFile, ParsedDiffLine, parseDiffPatch(), FileDiffModal(), FileDiffModalProps, BrowserPreviewState, useBrowserPreview() (+10 more)

### Community 102 - "personalityBuilder.ts"
Cohesion: 0.16
Nodes (22): buildIdentityFileDraft(), AgentFilesInput, cleanLabel(), cleanValue(), IDENTITY_PLACEHOLDER_VALUES, isIdentityPlaceholder(), isSectionHeading(), isUserContextPlaceholder() (+14 more)

### Community 103 - "Custom Runtime Provider Spec"
Cohesion: 0.09
Nodes (21): Capability Philosophy, Core Principle, Current Branch Status, Custom Metadata Surface, Custom Runtime Provider Spec, Event Model, Goal, Implementation Strategy (+13 more)

### Community 104 - "AgentSettingsPanel.tsx"
Cohesion: 0.16
Nodes (18): AgentInspectHeader(), AgentInspectHeaderProps, AgentSettingsPanel(), applyTemplateDefaults(), arePermissionsDraftEqual(), createInitialCronDraft(), CRON_TEMPLATE_OPTIONS, CronTemplateOption (+10 more)

### Community 105 - "GatewayBrowserClient"
Cohesion: 0.17
Nodes (5): parseConnectFailedCloseReason(), buildDeviceAuthPayload(), GatewayBrowserClient, gatewayBrowserDebugLog(), truncateWsCloseReason()

### Community 106 - "README.md"
Cohesion: 0.10
Nodes (10): Roadmap, Current Security Limitations, Deployment Notes, Reporting A Vulnerability, Scope, Security Policy, Maintainer Contact Notes, Public Help (+2 more)

### Community 107 - "claw3d"
Cohesion: 0.10
Nodes (20): context, dockerfile, build, container_name, env_file, environment, image, network_mode (+12 more)

### Community 108 - "Universal Backend Plan"
Cohesion: 0.10
Nodes (20): Capability Matrix, Core Adapter Contract, Event Model, Hermes Provider, High-Value PR Split, Near-Term Guidance For Luke, OpenClaw Provider, PR 1: Runtime Abstraction (+12 more)

### Community 109 - "useRunLog.ts"
Cohesion: 0.15
Nodes (18): findAgentBySessionKey(), formatClockTime(), formatDuration(), HistoryPanel(), TRIGGER_LABELS, findAgentForRunEvent(), resolveLifecyclePhase(), resolveRunTrigger() (+10 more)

### Community 110 - "pathfinding.ts"
Cohesion: 0.16
Nodes (19): ASSET_SIZE, astar2D(), BLOCKING_ASSET_IDS, BLOCKING_LAYERS, BLOCKING_TAGS, buildNavGrid2D(), clamp(), findFreeCell() (+11 more)

### Community 111 - "Architecture"
Cohesion: 0.10
Nodes (20): 1. Gateway-owned state, 2. Studio-owned local state, 3. Client-server boundary, 4. Browser-gateway boundary, Agent runtime flow, Architecture, Connection flow, Constraints (+12 more)

### Community 112 - "Custom Provider Reference"
Cohesion: 0.10
Nodes (19): Agent Mapping, Capability Profile, Current Implementation Notes, Custom Provider Reference, Event Mapping, Explicit Non-Goals, Goal, Position (+11 more)

### Community 113 - "lucide-react"
Cohesion: 0.19
Nodes (13): lucide-react, AgentsStep(), AgentsStepProps, CompanyStep(), CompanyStepProps, CompleteStep(), ConnectStep(), ConnectStepProps (+5 more)

### Community 114 - "useOfficeBuilderStore.ts"
Cohesion: 0.16
Nodes (17): OfficeBuilderPage(), nextId(), OfficeBuilderPanel(), OfficeBuilderPanelProps, BuilderAction, BuilderHistory, BuilderSelection, BuilderState (+9 more)

### Community 115 - "StudioSettingsCoordinator"
Cohesion: 0.18
Nodes (8): Params, useOfficeFloorRuntimePersistence(), FloorId, StudioSettingsCoordinator, defaultStudioSettings(), StudioSettingsPatch, HookParams, makeCoordinator()

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

### Community 120 - "fleetLifecycleWorkflow.ts"
Cohesion: 0.22
Nodes (13): executeAgentReconcileCommands(), GatewayClientLike, ReconcileCommand, ReconcileDispatchAction, runAgentReconcileOperation(), buildReconcileTerminalPatch(), ReconcileEligibility, resolveReconcileEligibility() (+5 more)

### Community 121 - "runtimeAgentEventWorkflow.ts"
Cohesion: 0.16
Nodes (14): extractReasoningBody(), hasReasoningSignal(), hasUnclosedThinkingTag(), isReasoningOnlyAssistantChunk(), normalizeReasoningComparable(), RuntimeAgentWorkflowCommand, RuntimeAgentWorkflowInput, RuntimeAgentWorkflowResult (+6 more)

### Community 122 - "coerceString"
Cohesion: 0.22
Nodes (19): coerceString(), mergeGatewayConnectionState(), mergeGatewayProfiles(), mergeGatewaySettings(), normalizeCompanyField(), normalizeCompanyRoleTitles(), normalizeFloorRuntimeConnectionStatus(), normalizeFloorRuntimeState() (+11 more)

### Community 123 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 124 - "layout/route.ts"
Cohesion: 0.22
Nodes (16): fetchRemoteOfficeLayoutSnapshot(), GET(), PUT(), runtime, deriveRemoteLayoutUrlFromPresenceUrl(), isRecord(), normalizeOfficeLayoutSnapshot(), defaultStore() (+8 more)

### Community 125 - "RunningAvatarLoader"
Cohesion: 0.21
Nodes (15): OfficeLoadingFallback(), OfficePage(), readDebugFlag(), AgentAvatarPreview3D(), box(), RunningAvatarLoader(), RunningAvatarLoaderProps, AgentStoreProvider() (+7 more)

### Community 126 - "specialLatestUpdateOperation.ts"
Cohesion: 0.18
Nodes (13): buildLatestUpdatePatch(), LatestUpdateIntent, LatestUpdateKind, resolveLatestUpdateIntent(), resolveLatestUpdateKind(), ChatHistoryMessage, ChatHistoryResult, createSpecialLatestUpdateOperation() (+5 more)

### Community 127 - "buildAgentMainSessionKey"
Cohesion: 0.20
Nodes (16): SummaryPreviewSnapshot, SummaryStatusSnapshot, normalizeRemoteGatewayUrl(), useRemoteOfficePresence(), UseRemoteOfficePresenceParams, UseRemoteOfficePresenceResult, buildAgentMainSessionKey(), buildOfficePresenceSnapshotFromGateway() (+8 more)

### Community 128 - "AgentEffectsSystem.ts"
Cohesion: 0.19
Nodes (10): AgentEffectsSystem, AgentEffectsSystemParams, AvatarState, stateColor(), thoughtFromSeed(), THOUGHTS, NavGrid2D, Waypoint (+2 more)

### Community 129 - "Permissions, Sandboxing, and Workspaces (Studio -> Gateway -> PI)"
Cohesion: 0.12
Nodes (16): Debug Checklist (When Something Feels “Wrong”), Glossary, Hard Enforcement: Filesystem Tool Root Guard, Mental Model (First Principles), OpenClaw (Upstream): Exec Approvals (Policy + Events), OpenClaw (Upstream): Sandbox Semantics, OpenClaw (Upstream): Tool Availability and `workspaceAccess=ro`, OpenClaw (Upstream): What `agents.create` Actually Does (+8 more)

### Community 130 - "studioRoute.ts"
Cohesion: 0.26
Nodes (5): @playwright/test, createStudioRoute(), DEFAULT_SETTINGS, stubStudioRoute(), StudioSettingsFixture

### Community 131 - "studio-settings.js"
Cohesion: 0.22
Nodes (12): main(), parseArgs(), tryReadGatewayTokenFromOpenclawCli(), isRecord(), LEGACY_STATE_DIRNAMES, loadUpstreamGatewaySettings(), readJsonFile(), readOpenclawGatewayDefaults() (+4 more)

### Community 132 - "onboarding/index.ts"
Cohesion: 0.22
Nodes (12): OnboardingWizardProps, getNextStep(), getPrevStep(), getStepIndex(), ONBOARDING_STEPS, OnboardingState, OnboardingStep, OnboardingStepId (+4 more)

### Community 133 - "normalizeCommandText"
Cohesion: 0.22
Nodes (17): resolveOfficeCallDirective(), resolveOfficeTextDirective(), applyUserMessageTriggers(), buildPhoneCallDirectiveKey(), buildStableLatestRequestSeed(), buildTextMessageDirectiveKey(), createPhoneCallRequest(), createTextMessageRequest() (+9 more)

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

### Community 140 - "agentFleetHydration.ts"
Cohesion: 0.17
Nodes (13): AgentsListResult, ExecApprovalsSnapshot, GatewayClientLike, HydrateAgentFleetResult, isRecord(), parseIdentityNameFromContent(), resolveAgentsListFromHelloSnapshot(), SessionsListEntry (+5 more)

### Community 141 - "agentSettingsMutationWorkflow.ts"
Cohesion: 0.18
Nodes (12): AgentSettingsMutationContext, AgentSettingsMutationDecision, AgentSettingsMutationDenyReason, AgentSettingsMutationRequest, CronActionKind, GuardedActionKind, isCronActionBusy(), isGuardedAction() (+4 more)

### Community 142 - "useConfigMutationQueue.ts"
Cohesion: 0.21
Nodes (10): ConfigMutationGateInput, shouldStartNextConfigMutation(), GatewayStatus, observeGatewayRestart(), RestartObservation, ActiveConfigMutation, ConfigMutationKind, mutationRequiresIdleAgents() (+2 more)

### Community 143 - "remove-gateway.ts"
Cohesion: 0.28
Nodes (11): buildSkillRemovalMessage(), escapeForJsonString(), normalizeRequired(), removeSkillViaGatewayAgent(), resolveAllowedRoot(), resolveMainKey(), resolveRemovalWorkspace(), resolveRunId() (+3 more)

### Community 144 - "Creating Skills"
Cohesion: 0.14
Nodes (13): 1. Create the skill files, 2. Mirror the files into `src/lib/skills/packaged.ts`, 3. Register the skill in `src/lib/skills/catalog.ts`, 4. Add marketplace presentation metadata, 5. Understand where the files get installed, 6. Keep the example production-ready, 7. Verify your changes, Creating Skills (+5 more)

### Community 145 - "Runtime Profiles"
Cohesion: 0.14
Nodes (13): `claw3d`, Current Profiles, Current Runtime Contract, `custom`, `demo`, `hermes`, `local`, Multi-Agent Message Contract (+5 more)

### Community 146 - "network-policy.js"
Cohesion: 0.29
Nodes (10): getFreePort(), main(), sleep(), assertPublicHostAllowed(), isIpv4Loopback(), isIpv6Loopback(), isPublicHost(), normalizeHost() (+2 more)

### Community 147 - "useOfficeStandupController.ts"
Cohesion: 0.24
Nodes (13): everyoneArrived(), expandRange(), getZonedParts(), isMeetingActive(), matchesCronPart(), OfficeStandupController, sameScheduledMinute(), shouldRunNow() (+5 more)

### Community 148 - "agentMessaging.ts"
Cohesion: 0.24
Nodes (10): buildAgentHandoffInstruction(), buildDirectedAgentMessageInstruction(), GatewayAgentsListResult, GatewayCallLike, resolveLabel(), resolveSessionKeyFromAgentList(), RuntimeAgentHandoffPayload, RuntimeAgentMessagePayload (+2 more)

### Community 149 - "AgentAvatarProfile"
Cohesion: 0.31
Nodes (11): AgentAvatarProps, AgentAvatarProfile, blendHex(), buildAgentAvatarPortraitDataUrl(), buildAgentAvatarPortraitSvg(), buildGlassesSvg(), buildHairSvg(), buildHatSvg() (+3 more)

### Community 150 - "randomUUID"
Cohesion: 0.27
Nodes (9): AgentCreateModal(), AgentCreateModalContent(), AgentCreateModalProps, resolveInitialName(), CryptoLike, randomUUID(), uuidFromBytes(), weakRandomBytes() (+1 more)

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
Cohesion: 0.20
Nodes (9): File format, Matching rules, Required workflow, Response rules, Status rules, Storage location, Task fields, Task Manager (+1 more)

### Community 156 - "TODO Board"
Cohesion: 0.20
Nodes (9): Field rules, File format, Mutation rules, Required workflow, Response style, Storage location, Supported actions, TODO Board (+1 more)

### Community 157 - "multiavatar.ts"
Cohesion: 0.33
Nodes (8): AVATAR_ACCENTS, AVATAR_FOREGROUNDS, AVATAR_PALETTE, buildAvatarDataUrl(), buildAvatarLabel(), buildAvatarSvg(), hashSeed(), pick()

### Community 158 - "Contributing"
Cohesion: 0.22
Nodes (9): Before you start, Contributing, Local setup, Minimal issue template, Minimal PR template, Pull requests, Reporting issues, Support And Routing (+1 more)

### Community 159 - "clawd3d-start.sh"
Cohesion: 0.44
Nodes (8): find_free_port(), info(), log(), pids_on_port(), port_free(), port_owned_by(), clawd3d-start.sh script, warn()

### Community 160 - "createDefaultAgentAvatarProfile"
Cohesion: 0.36
Nodes (6): AgentAvatarCreatorModal(), AgentAvatarCreatorModalProps, AgentAvatarEditorPanel, createDemoMainAgentSeed(), createDefaultAgentAvatarProfile(), buildAgent()

### Community 161 - "companyBuilderGateway.ts"
Cohesion: 0.25
Nodes (8): CommandModeId, TranscriptAppendMeta, buildCompanyRolePermissionsDraft(), DispatchAction, GatewayClientLike, resolveCompanyPlanningAgent(), runOpenClawPlanningPrompt(), sleep()

### Community 162 - "useVoiceRecorder.ts"
Cohesion: 0.33
Nodes (8): PREFERRED_VOICE_MIME_TYPES, resolvePreferredVoiceMimeType(), resolveVoiceErrorMessage(), resolveVoiceExtension(), stopVoiceStream(), useVoiceRecorder(), VoiceRecorderState, VoiceSendPayload

### Community 163 - "storeDeviceAuthToken"
Cohesion: 0.42
Nodes (9): buildScopedTokenKey(), clearDeviceAuthToken(), loadDeviceAuthToken(), normalizeAuthScope(), normalizeRole(), normalizeScopes(), readDeviceAuthStore(), storeDeviceAuthToken() (+1 more)

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

### Community 168 - "Top-Level Code Map"
Cohesion: 0.29
Nodes (7): `scripts`, `server`, `src/app`, `src/features`, `src/lib`, `tests`, Top-Level Code Map

### Community 169 - "Code Of Conduct"
Cohesion: 0.33
Nodes (5): Code Of Conduct, Enforcement, Expected Behavior, Our Pledge, Unacceptable Behavior

### Community 170 - "contact_links"
Cohesion: 0.33
Nodes (5): blank_issues_enabled, contact_links, about, name, url

### Community 171 - "StudioGatewayAdapterType"
Cohesion: 0.40
Nodes (4): SettingsPanelProps, StudioGatewayAdapterType, CURATED_ELEVENLABS_VOICES, CuratedVoiceOption

### Community 172 - "useStudioVoiceRepliesPreference.ts"
Cohesion: 0.53
Nodes (5): useStudioVoiceRepliesPreference(), UseStudioVoiceRepliesPreferenceParams, defaultStudioVoiceRepliesPreference(), resolveVoiceRepliesPreference(), StudioVoiceRepliesPreference

### Community 175 - "9) Troubleshooting"
Cohesion: 0.33
Nodes (6): `401` or auth errors from Claw3D, 9) Troubleshooting, Claw3D still cannot connect after token is correct, `EPROTO` or `wrong version number`, Gateway itself is unhealthy, Tailscale URL works nowhere

### Community 176 - "settingsSidebarTabs.ts"
Cohesion: 0.50
Nodes (3): BASE_SETTINGS_SIDEBAR_ENTRIES, resolveSettingsSidebarEntries(), SettingsSidebarEntry

### Community 177 - "usePerformanceAnalytics.ts"
Cohesion: 0.50
Nodes (4): ApprovalAgentMetrics, AgentPerformanceRow, average(), usePerformanceAnalytics()

## Knowledge Gaps
- **10 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `vitest` connect `vitest` to `useTaskBoardController.ts`, `ref_node_path`, `studio-settings.js`, `onboarding/index.ts`, `navigation.ts`, `GatewayClient.ts`, `hermes-gateway-adapter.js`, `RetroOffice3D.tsx`, `media/route.ts`, `service.ts`, `presentation.ts`, `agentSettingsMutationWorkflow.ts`, `useConfigMutationQueue.ts`, `agentConfig.ts`, `runtimeEventBridge.ts`, `chatSendOperation.ts`, `execApprovalControlLoopWorkflow.ts`, `gatewayRuntimeEventHandler.ts`, `network-policy.js`, `settings.ts`, `randomUUID`, `agentPermissionsOperation.ts`, `claw3doctor.mjs`, `chatItems.ts`, `useAgentSettingsMutationController.ts`, `EventFrame`, `GatewayClient`, `multiavatar.ts`, `createDefaultAgentAvatarProfile`, `eventTriggers.ts`, `floors.ts`, `coordinator.ts`, `gatewayClient.reconnect-recovery.test.ts`, `package.json`, `mutationLifecycleWorkflow.ts`, `cron/types.ts`, `deskDirectives.ts`, `settingsSidebarTabs.ts`, `AgentChatPanel.tsx`, `planning.ts`, `gatewayBrowserClient.test.ts`, `isRecord`, `settings-store.ts`, `shared-store.ts`, `profile.ts`, `message-extract.ts`, `triggers.ts`, `colorSemantics.ts`, `runtimeChatEventWorkflow.ts`, `transcript.ts`, `browser-preview/route.ts`, `next`, `execApprovalRunControlOperation.ts`, `AgentsPageScreen.tsx`, `models.ts`, `voiceTranscription.ts`, `AgentsPageScreen`, `remove-gateway.ts`, `agents.tsx`, `useRuntimeSyncController.ts`, `settingsRouteWorkflow.ts`, `agents/agentFiles.ts`, `deleteAgentOperation.ts`, `index.js`, `gateway-proxy.js`, `AgentSettingsPanel.tsx`, `useRunLog.ts`, `pathfinding.ts`, `StudioSettingsCoordinator`, `cleanup-ux-artifacts.mjs`, `fleetLifecycleWorkflow.ts`, `runtimeAgentEventWorkflow.ts`, `specialLatestUpdateOperation.ts`?**
  _High betweenness centrality (0.096) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `OfficeScreen()` (e.g. with `Current Post-Merge Sequence` and `Immediate Next Deliverables`) actually correct?**
  _`OfficeScreen()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `useTaskBoardController.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.05372405372405373 - nodes in this community are weakly interconnected._
- **Why does `react` connect `vitest` to `useTaskBoardController.ts`, `toWorld`, `OfficeScreen.tsx`, `onboarding/index.ts`, `GatewayClient.ts`, `RetroOffice3D.tsx`, `useUsageAnalytics.ts`, `presentation.ts`, `voiceReply/provider.ts`, `useConfigMutationQueue.ts`, `spotify-jukebox/store.ts`, `chatSendOperation.ts`, `useOfficeStandupController.ts`, `AgentAvatarProfile`, `randomUUID`, `settings.ts`, `EventFrame`, `useAgentSettingsMutationController.ts`, `GatewayClient`, `createDefaultAgentAvatarProfile`, `floors.ts`, `useVoiceRecorder.ts`, `package.json`, `StudioGatewayAdapterType`, `useStudioVoiceRepliesPreference.ts`, `AgentChatPanel.tsx`, `usePerformanceAnalytics.ts`, `visualSystems.tsx`, `profile.ts`, `district.ts`, `colorSemantics.ts`, `browser-preview/route.ts`, `RuntimeProvider`, `AgentsPageScreen.tsx`, `models.ts`, `AgentCreateWizardModal.tsx`, `marketplace.ts`, `dependencies`, `OfficePhaserCanvas.tsx`, `agents.tsx`, `useRuntimeSyncController.ts`, `settingsRouteWorkflow.ts`, `agents/agentFiles.ts`, `GithubImmersiveScreen.tsx`, `AgentSettingsPanel.tsx`, `useRunLog.ts`, `lucide-react`, `useOfficeBuilderStore.ts`, `StudioSettingsCoordinator`, `RunningAvatarLoader`, `buildAgentMainSessionKey`?**
  _High betweenness centrality (0.078) - this node is a cross-community bridge._
- **Should `vitest` be split into smaller, more focused modules?**
  _Cohesion score 0.05664556962025316 - nodes in this community are weakly interconnected._
- **Why does `next` connect `next` to `ref_node_path`, `OfficeScreen.tsx`, `media/route.ts`, `call/mock.ts`, `service.ts`, `voiceReply/provider.ts`, `loadStudioSettings`, `AgentAvatarProfile`, `github.ts`, `package.json`, `settings-store.ts`, `browser-preview/route.ts`, `AgentsPageScreen.tsx`, `voiceTranscription.ts`, `office/store.ts`, `dependencies`, `SmsBoothImmersiveScreen.tsx`, `index.js`, `GithubImmersiveScreen.tsx`, `layout/route.ts`?**
  _High betweenness centrality (0.047) - this node is a cross-community bridge._
- **Should `ref_node_path` be split into smaller, more focused modules?**
  _Cohesion score 0.04771178188899708 - nodes in this community are weakly interconnected._