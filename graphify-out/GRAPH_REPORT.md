# Graph Report - claw3d  (2026-10-24)

## Corpus Check
- 588 files · ~434,778 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 29 file(s) not represented in the graph (top: .glb 17, (none) 6, .css 2)

## Summary
- 5176 nodes · 12193 edges · 194 communities (184 shown, 10 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 190 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `c2ff06ae`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- useTaskBoardController.ts
- react
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
- presentation.ts
- agentConfig.ts
- runtimeAgentEventWorkflow.ts
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
- remote-message/route.ts
- schema.ts
- randomUUID
- execApprovalControlLoopWorkflow.ts
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
- agentFleetHydration.ts
- personalityBuilder.ts
- Custom Runtime Provider Spec
- AgentSettingsPanel.tsx
- GithubImmersiveScreen.tsx
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
- createAgentBootstrapOperation.ts
- GatewayResponseError
- coerceString
- compilerOptions
- layout/route.ts
- RunningAvatarLoader
- specialLatestUpdateOperation.ts
- presence.ts
- AgentEffectsSystem.ts
- Permissions, Sandboxing, and Workspaces (Studio -> Gateway -> PI)
- studioRoute.ts
- vitest
- useOnboardingState.ts
- normalizeCommandText
- Hermes Gateway Adapter
- Agent Bus Integration
- scripts
- PR89.md
- call/mock.ts
- voiceReply/provider.ts
- execApprovals.ts
- agentSettingsMutationWorkflow.ts
- useConfigMutationQueue.ts
- gateway.ts
- Creating Skills
- Runtime Profiles
- nodeGatewayClient.ts
- ws
- agentMessaging.ts
- RunningAvatarLoader
- useOfficeStandupController.ts
- Critical Fixes
- sessionSettingsMutations.ts
- AmbienceSystem.ts
- Claw3D Vision
- Task Manager
- TODO Board
- install-gateway.ts
- ref_node_crypto
- clawd3d-start.sh
- path-suggestions/route.ts
- runtimeEventBridge.ts
- CompanyBuilderModal.tsx
- HeaderBar.tsx
- gatewayClient.reconnect-recovery.test.ts
- Cursor Cloud specific instructions
- OpenClaw Gateway Skill Contract
- Roadmap
- Top-Level Code Map
- agentBridge.ts
- contact_links
- shared-store-client.ts
- useStudioVoiceRepliesPreference.ts
- studioSettings.test.ts
- Step-by-step tasks
- 9) Troubleshooting
- taskBoardState.ts
- janitorReset.ts
- GatewayBrowserClient
- @testing-library/jest-dom
- multiavatar
- .github/SECURITY.md
- postcss.config.mjs
- useStudioOfficePreference.ts
- AgentCreateModal.tsx
- Contributing
- custom/route.ts
- navigation.diagonalCorner.test.ts
- settingsSidebarTabs.ts
- ref_node_https
- Code Of Conduct

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
- `Capabilities Permissions Updates` --references--> `updateAgentPermissionsViaStudio()`  [INFERRED]
  docs/permissions-sandboxing.md → src/features/agents/operations/agentPermissionsOperation.ts
- `History Sync (Recovery, Load More)` --references--> `buildHistoryLines()`  [INFERRED]
  docs/pi-chat-streaming.md → src/features/agents/state/runtimeEventBridge.ts
- `3. Implement auto-hide state in `OfficeFloorNav.tsx`` --references--> `OfficeFloorNav()`  [INFERRED]
  .hermes/plans/2026-10-25_033617-office-floor-nav-autohide.md → src/features/office/components/OfficeFloorNav.tsx
- `Risks, tradeoffs, open questions` --references--> `OfficeFloorNav()`  [INFERRED]
  .hermes/plans/2026-10-25_033617-office-floor-nav-autohide.md → src/features/office/components/OfficeFloorNav.tsx
- `Current Post-Merge Sequence` --references--> `OfficeScreen()`  [INFERRED]
  docs/office_sys/office-systems-roadmap.md → src/features/office/screens/OfficeScreen.tsx

## Import Cycles
- None detected.

## Communities (194 total, 10 thin omitted)

### Community 0 - "useTaskBoardController.ts"
Cohesion: 0.15
Nodes (32): RunRecord, buildActiveRunOptions(), buildCardFromExplicitEvent(), buildCardFromGatewayTask(), buildCardFromSharedTaskRecord(), buildPlaybookCards(), buildStandupSeedCards(), cardTextKey() (+24 more)

### Community 1 - "react"
Cohesion: 0.08
Nodes (10): react, @testing-library/react, vitest, AgentChatPanel(), AgentState, GatewayModelChoice, createSkillsReport(), createSkillsReportWithOsIncompatibleBrowser() (+2 more)

### Community 2 - "resolveStateDir"
Cohesion: 0.10
Nodes (29): contentTypeFromName(), GET(), runtime, uploadsDir(), ALLOWED_CONTENT_TYPES, ALLOWED_EXTENSIONS, CONTENT_TYPE_BY_EXT, isTextContentType() (+21 more)

### Community 3 - "toWorld"
Cohesion: 0.10
Nodes (50): DOOR_LENGTH, DOOR_THICKNESS, SCALE, WALL_THICKNESS, getItemBaseSize(), getItemRotationRadians(), resolveItemTypeKey(), toWorld() (+42 more)

### Community 4 - "OfficeScreen.tsx"
Cohesion: 0.04
Nodes (70): findAgentBySessionKey(), classifyGatewayEventKind(), isReasoningRuntimeAgentStream(), useAgentStore(), HQSidebar(), HQSidebarProps, HQSidebarTab, PRIMARY_TABS (+62 more)

### Community 5 - "navigation.ts"
Cohesion: 0.06
Nodes (51): CANVAS_H, CANVAS_W, SNAP_GRID, getItemBounds(), ITEM_FOOTPRINT, ITEM_METADATA, buildJanitorActorsForCue(), hashString() (+43 more)

### Community 6 - "GatewayClient.ts"
Cohesion: 0.08
Nodes (35): Reconnects And Retries, Studio Settings (Where Gateway URL/Token Come From), EventHandler, formatGatewayError(), GapHandler, GatewayConnectionState, gatewayDebugLog(), GatewayFrame (+27 more)

### Community 7 - "hermes-gateway-adapter.js"
Cohesion: 0.06
Nodes (60): activeRuns, activeSendEventFns, ADAPTER_PORT, agentListPayload(), agents, broadcastEvent(), buildDemoReply(), clearHistory() (+52 more)

### Community 8 - "RetroOffice3D.tsx"
Cohesion: 0.06
Nodes (46): SettingsPanel(), Bubble(), PhoneBoothImmersiveScreen(), PhoneCallStep, AGENT_RADIUS, BUMP_FREEZE_MS, SEPARATION_STRENGTH, isRemoteOfficeAgentId() (+38 more)

### Community 9 - "media/route.ts"
Cohesion: 0.07
Nodes (46): isSafeAgentId(), POST(), PUT(), resolveAgentStateSshTarget(), RestoreAgentStateRequest, runtime, TrashAgentStateRequest, expandTildeLocal() (+38 more)

### Community 10 - "service.ts"
Cohesion: 0.14
Nodes (24): GitHubPullRequestSummary, buildJiraSearchUrl(), buildSourceState(), buildSpeech(), buildStandupMeeting(), coerceText(), dedupePullRequests(), expandRange() (+16 more)

### Community 11 - "useUsageAnalytics.ts"
Cohesion: 0.08
Nodes (57): AnalyticsPanel(), DatePickerField(), formatBudgetInput(), formatDuration(), formatPercent(), openNativeDatePicker(), parseBudgetInput(), StatCard() (+49 more)

### Community 12 - "presentation.ts"
Cohesion: 0.08
Nodes (50): AgentSkillsPanel(), AgentSkillsPanelProps, DISPLAY_CLASSES, DISPLAY_LABELS, FILTERS, resolveHint(), SkillRowFilter, AgentSkillsSetupModal() (+42 more)

### Community 13 - "agentConfig.ts"
Cohesion: 0.09
Nodes (45): AgentHeartbeat, AgentHeartbeatActiveHours, AgentHeartbeatResult, AgentHeartbeatSummary, AgentHeartbeatUpdatePayload, AgentSkillsAccessMode, applyGatewayConfigPatch(), areStringArraysEqual() (+37 more)

### Community 14 - "runtimeAgentEventWorkflow.ts"
Cohesion: 0.10
Nodes (32): extractReasoningBody(), hasReasoningSignal(), hasUnclosedThinkingTag(), isReasoningOnlyAssistantChunk(), normalizeReasoningComparable(), planRuntimeAgentEvent(), resolveThinkingFromAgentStream(), RuntimeAgentWorkflowCommand (+24 more)

### Community 15 - "gatewayRuntimeEventHandler.ts"
Cohesion: 0.12
Nodes (35): createGatewayRuntimeEventHandler(), findAgentByRunId(), GatewayRuntimeEventHandler, GatewayRuntimeEventHandlerDeps, resolveRole(), dedupeRunLines(), appendToolLinesEffects(), applyRuntimeTerminalCommands() (+27 more)

### Community 16 - "JukeboxPanel.tsx"
Cohesion: 0.17
Nodes (23): base64urlEncode(), buildRedirectUri(), clearToken(), exchangeCodeForToken(), generateRandom(), loadAuthState(), loadCallbackBaseUrl(), loadClientId() (+15 more)

### Community 17 - "chatSendOperation.ts"
Cohesion: 0.06
Nodes (43): Sending Messages (Browser -> PI via Gateway), DraftFlushIntent, DraftTimerIntent, NewSessionIntent, planDraftFlushIntent(), planDraftTimerIntent(), planNewSessionIntent(), planStopRunIntent() (+35 more)

### Community 18 - "execApprovalControlLoopWorkflow.ts"
Cohesion: 0.17
Nodes (19): normalizeExecAsk(), shouldPauseRunForPendingExecApproval(), applyApprovalIngressEffects(), ApprovalIngressResult, ApprovalPauseRequest, AutoResumeDispatchIntent, AutoResumePreflightIntent, prunePendingApprovalState() (+11 more)

### Community 19 - "furnitureDefaults.ts"
Cohesion: 0.05
Nodes (68): ATM_MIGRATION_KEY, GYM_ROOM_MIGRATION_KEY, PHONE_BOOTH_MIGRATION_KEY, QA_LAB_MIGRATION_KEY, SERVER_ROOM_MIGRATION_KEY, SMS_BOOTH_MIGRATION_KEY, STORAGE_KEY, createFurnitureSignature() (+60 more)

### Community 20 - "geometry.ts"
Cohesion: 0.08
Nodes (31): @react-three/drei, @react-three/fiber, AGENT_SCALE, WALK_ANIM_SPEED, FURNITURE_ROTATION, JanitorActor, OfficeAgent, RenderAgent (+23 more)

### Community 21 - "settings.ts"
Cohesion: 0.06
Nodes (69): DEFAULT_REMOTE_OFFICE_SOURCE_KIND, defaultFocusedPreference(), defaultStudioOfficePreference(), defaultStudioStandupJiraConfig(), defaultStudioStandupManualEntry(), defaultStudioStandupPreference(), defaultStudioStandupScheduleConfig(), FloorRuntimeConnectionStatus (+61 more)

### Community 22 - "claw3doctor.mjs"
Cohesion: 0.12
Nodes (44): checkFail(), checkPass(), checkWarn(), detectHermesModelHealth(), detectOpenClawVersion(), detectWorkspaceState(), formatErrorMessage(), loadDotenvFile() (+36 more)

### Community 23 - "agentPermissionsOperation.ts"
Cohesion: 0.17
Nodes (24): AgentRuntimeConfigContext, coerceStringArray(), ExecutionRoleId, isPermissionsCustom(), isRecord(), resolveAgentPermissionsDraft(), resolveAgentRuntimeConfigContext(), resolveCommandModeFromRole() (+16 more)

### Community 24 - "EventFrame"
Cohesion: 0.09
Nodes (28): asNonEmptyString(), asOptionalString(), asPositiveTimestamp(), asRecord(), parseExecApprovalRequested(), parseExecApprovalResolved(), RequestedPayload, ResolvedPayload (+20 more)

### Community 25 - "chatItems.ts"
Cohesion: 0.10
Nodes (42): AgentChatItem, AgentChatRenderBlock, appendThinkingTraceEvent(), buildAgentChatItems(), BuildAgentChatItemsInput, buildAgentChatRenderBlocks(), buildFinalAgentChatItems(), extractFirstCodeBlockLine() (+34 more)

### Community 26 - "GatewayClient"
Cohesion: 0.28
Nodes (11): buildSkillRemovalMessage(), escapeForJsonString(), normalizeRequired(), removeSkillViaGatewayAgent(), resolveAllowedRoot(), resolveMainKey(), resolveRemovalWorkspace(), resolveRunId() (+3 more)

### Community 27 - "skills/types.ts"
Cohesion: 0.13
Nodes (27): MarketplaceMessage, useOfficeSkillsMarketplace(), readGatewayAgentSkillsAllowlist(), resolveRequiredAgentId(), updateGatewayAgentSkillsAllowlist(), normalizeSkillName(), resolveVisibleAgentSkillNames(), setAgentSkillEnabled() (+19 more)

### Community 28 - "github.ts"
Cohesion: 0.20
Nodes (26): GitHubAuthState, GitHubCommentEntry, GitHubCommitEntry, GitHubDashboardResponse, GitHubDetailResponse, GitHubFileEntry, GitHubReviewEntry, GitHubStatusCheck (+18 more)

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
Cohesion: 0.08
Nodes (33): AgentCreateModalSubmitPayload, AgentConfigMutationLifecycleDeps, AgentConfigMutationLifecycleKind, assertMutationKind(), AwaitingRestartPatch, buildConfigMutationFailureMessage(), buildMutatingMutationBlock(), buildMutationSideEffectCommands() (+25 more)

### Community 33 - "eventTriggers.ts"
Cohesion: 0.11
Nodes (30): How Office Motion Works, applyHoldDirective(), BooleanByAgentId, buildOfficeAnimationState(), createOfficeAnimationTriggerState(), emptyObject(), isUserLikeChatRole(), LatestDirective (+22 more)

### Community 34 - "floors.ts"
Cohesion: 0.10
Nodes (35): Floor Registry Slice, Immediate Implementation Checklist, Per-Floor Runtime State Slice, Phase 1: Floor Registry, Roster Slice, UI Shell Slice, OfficeFloorNav(), OfficeFloorNavProps (+27 more)

### Community 35 - "coordinator.ts"
Cohesion: 0.07
Nodes (36): fetchJson(), AnalyticsPatch, AvatarsPatch, createStudioSettingsCoordinator(), DeskAssignmentsPatch, fetchStudioSettings(), FocusedPatch, mergeAnalyticsPatch() (+28 more)

### Community 36 - "Agent State Model Spec"
Cohesion: 0.05
Nodes (38): Agent State Model Spec, Blocked, Bulletin Board, Core Principle, Degraded, Desk Progression / Hierarchy, Error, Existing Code Seams (+30 more)

### Community 37 - "package.json"
Cohesion: 0.07
Nodes (39): eslintConfig, devDependencies, eslint@^9, eslint-config-next@16.1.6, eslint-config-prettier@^10.1.8, jsdom@^27.4.0, @playwright/test@^1.58.0, selfsigned@^5.5.0 (+31 more)

### Community 38 - "Desk Progression Spec"
Cohesion: 0.05
Nodes (37): Agent Interaction Model, Bulletin Board / Whiteboard, Contractor, Contractor Desk, Core Principle, Desk Progression Spec, Employee, Employee Desk (+29 more)

### Community 39 - "Desk Progression Spec"
Cohesion: 0.05
Nodes (37): Agent Interaction Model, Bulletin Board / Whiteboard, Contractor, Contractor Desk, Core Principle, Desk Progression Spec, Employee, Employee Desk (+29 more)

### Community 40 - "useAgentSettingsMutationController.ts"
Cohesion: 0.06
Nodes (62): AgentPermissionsDraft, CRON_ACTION_BUSY_MESSAGE, CronBusyState, CronCreateDeps, isCronActionBusy(), performCronCreateFlow(), resolveCreateAgentId(), resolveCreateErrorMessage() (+54 more)

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
Nodes (32): runtime, GET(), PUT(), readGatewayUrl(), runtime, POST(), runtime, GET() (+24 more)

### Community 49 - "AgentChatPanel.tsx"
Cohesion: 0.08
Nodes (36): AgentChatComposer, AgentChatFinalItems, AgentChatPanelProps, AgentChatTranscript, AssistantIntroCard, AssistantMessageCard, CHAT_SELECT_STYLE, EMPTY_CHAT_INTRO_MESSAGES (+28 more)

### Community 50 - "planning.ts"
Cohesion: 0.11
Nodes (34): CommandModeId, CreatedAgentRecord, runCompanyBootstrapOperation(), buildCompanyRolePermissionsDraft(), buildCompanyAgentBlueprints(), buildGenerateCompanyPlanPrompt(), buildImproveCompanyBriefPrompt(), buildRoleAgentsMarkdown() (+26 more)

### Community 51 - "spotify-jukebox/store.ts"
Cohesion: 0.23
Nodes (18): fetchPlayerState(), headers(), mapTrack(), pausePlayback(), PlayerState, playTrack(), RawPlayerState, RawTrack (+10 more)

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
Cohesion: 0.08
Nodes (38): AgentAvatarCreatorModal(), AgentAvatarCreatorModalProps, AgentAvatarEditorPanel, AgentAvatarEditorPanelHandle, AgentAvatarEditorPanelProps, createDemoMainAgentSeed(), AGENT_AVATAR_BOTTOM_STYLE_OPTIONS, AGENT_AVATAR_CLOTHING_COLOR_OPTIONS (+30 more)

### Community 57 - "message-extract.ts"
Cohesion: 0.11
Nodes (30): getChatSummaryPatch(), normalizeAssistantDisplayText(), AgentInstructionParams, buildAgentInstruction(), ENVELOPE_CHANNELS, EXEC_APPROVAL_WAIT_POLICY, extractRawText(), extractText() (+22 more)

### Community 58 - "district.ts"
Cohesion: 0.09
Nodes (31): WORLD_H, WORLD_W, CITY_PATH_ZONE, clampPointToZone(), clampZoneValue(), DISTRICT_CAMERA_POSITION, DISTRICT_CAMERA_TARGET, DISTRICT_CAMERA_ZOOM (+23 more)

### Community 59 - "triggers.ts"
Cohesion: 0.17
Nodes (18): buildOfficeSkillTriggerHoldMaps(), DEFAULT_SKILL_TRIGGER_FALLBACKS_BY_SKILL_KEY, DefaultSkillTriggerFallback, isOfficeSkillTriggerMovementTarget(), OFFICE_INTERACTION_TARGETS, OFFICE_SKILL_TRIGGER_MOVEMENT_TARGETS, OFFICE_SKILL_TRIGGER_PLACE_REGISTRY, OfficeInteractionTargetId (+10 more)

### Community 60 - "Hierarchy And Teams Spec"
Cohesion: 0.06
Nodes (32): Agent Interaction Model, Contractor, Core Principle, Delegation Model, Executive, Existing Code Seams, Future Extensions, Goal (+24 more)

### Community 61 - "Hierarchy And Teams Spec"
Cohesion: 0.06
Nodes (32): Agent Interaction Model, Contractor, Core Principle, Delegation Model, Executive, Existing Code Seams, Future Extensions, Goal (+24 more)

### Community 62 - "colorSemantics.ts"
Cohesion: 0.17
Nodes (18): AGENT_STATUS_BADGE_CLASS, AGENT_STATUS_LABEL, GATEWAY_STATUS_BADGE_CLASS, GATEWAY_STATUS_LABEL, NEEDS_APPROVAL_BADGE_CLASS, resolveAgentStatusBadgeClass(), resolveAgentStatusLabel(), resolveGatewayStatusBadgeClass() (+10 more)

### Community 63 - "runtimeChatEventWorkflow.ts"
Cohesion: 0.12
Nodes (23): planRuntimeChatEvent(), resolveTerminalSeq(), RuntimeChatWorkflowCommand, RuntimeChatWorkflowInput, RuntimeChatWorkflowResult, summarizeThinkingMessage(), terminalAssistantFinalEntryId(), terminalAssistantMetaEntryId() (+15 more)

### Community 64 - "transcript.ts"
Cohesion: 0.05
Nodes (65): buildHistoryMetadataPatch(), HistoryRequestIntent, HistoryResponseDisposition, resolveHistoryFetchLimit(), resolveHistoryRequestIntent(), resolveHistoryResponseDisposition(), areStringArraysEqual(), ChatHistoryMessage (+57 more)

### Community 65 - "with"
Cohesion: 0.06
Nodes (31): env, IMAGE_BASENAME, REGISTRY, jobs, publish, name, contents, packages (+23 more)

### Community 66 - "browser-preview/route.ts"
Cohesion: 0.09
Nodes (30): getFreePort(), main(), sleep(), BrowserOpenResponse, browserRequest(), BrowserScreenshotResponse, BrowserTab, BrowserTabsResponse (+22 more)

### Community 67 - "remote-message/route.ts"
Cohesion: 0.21
Nodes (12): GET(), POST(), stripRemoteAgentPrefix(), AgentsListResult, POST(), resolveLatestAssistantHistoryText(), runtime, stripRemoteAgentPrefix() (+4 more)

### Community 68 - "schema.ts"
Cohesion: 0.11
Nodes (31): asBoolean(), asNumber(), asString(), defaultLayers(), isRecord(), normalizeAmbiencePreset(), normalizeDeskAssignments(), normalizeInteractionKind() (+23 more)

### Community 69 - "randomUUID"
Cohesion: 0.17
Nodes (15): AgentCreateWizardModal(), AgentCreateWizardModalProps, buildInitialDraft(), WizardField(), WizardStepId, wizardSteps, WizardTextAreaField(), AgentIdentityFields() (+7 more)

### Community 70 - "execApprovalControlLoopWorkflow.ts"
Cohesion: 0.06
Nodes (40): AutoResumeIntent, ExecApprovalIngressCommand, ExecApprovalPendingSnapshot, PauseRunIntent, planAutoResumeIntent(), planAwaitingUserInputPatches(), planIngressCommands(), planPausedRunMapCleanup() (+32 more)

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
Cohesion: 0.10
Nodes (26): addDays(), buildCronJobCreateInput(), CronCreateDraft, CronCreateTemplateId, formatterCache, getFormatter(), resolveAgentId(), resolveAtSchedule() (+18 more)

### Community 78 - "AgentsPageScreen"
Cohesion: 0.11
Nodes (34): hydrateAgentFleetFromGateway(), executeStudioBootstrapLoadCommands(), executeStudioFocusedPatchCommands(), executeStudioFocusedPreferenceLoadCommands(), GatewayClientLike, runStudioBootstrapLoadOperation(), runStudioFocusedPreferenceLoadOperation(), runStudioFocusedSelectionPersistenceOperation() (+26 more)

### Community 79 - "marketplace.ts"
Cohesion: 0.13
Nodes (24): SkillsMarketplaceModal(), SkillsMarketplaceModalProps, buildSearchBlob(), FILTER_LABELS, formatInstalls(), formatRating(), getAgentSkillEnabled(), MarketplaceFilter (+16 more)

### Community 80 - "Runtime Profile Architecture"
Cohesion: 0.08
Nodes (25): 1. `docs: runtime profile architecture`, 2. `feat: claw3doctor`, 3. `refactor: office shell modularization`, 4. `docs: floor schema and builder plan`, 5. `feat: admin floor builder`, Branch Sequence, Core Terms, Custom Runtime Position (+17 more)

### Community 81 - "dependencies"
Cohesion: 0.08
Nodes (24): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, lucide-react@^0.563.0, next@16.1.7, @noble/ed25519@^3.0.0, phaser@^3.90.0, react@19.2.3 (+16 more)

### Community 82 - "GatewayBrowserClient.ts"
Cohesion: 0.07
Nodes (38): base64UrlDecode(), base64UrlEncode(), buildDeviceAuthPayload(), buildScopedTokenKey(), bytesToHex(), clearDeviceAuthToken(), CryptoLike, DeviceAuthEntry (+30 more)

### Community 83 - "Office Systems Roadmap"
Cohesion: 0.08
Nodes (24): Agent State Model, Bulletin Board, Candidate Feature Order, Core Direction, Departments, Design Principles, Desk / CPU Progression, Hierarchy (+16 more)

### Community 84 - "OfficePhaserCanvas.tsx"
Cohesion: 0.15
Nodes (14): phaser, OfficePhaserCanvas(), OfficePhaserCanvasProps, createOfficeBuilderScene(), OfficeBuilderRenderable, createOfficeSceneBridge(), OfficeDebugSettings, OfficeRuntimeSettings (+6 more)

### Community 85 - "github/route.ts"
Cohesion: 0.22
Nodes (17): GET(), parsePullRequestNumber(), POST(), ReviewRequestBody, runtime, extractCommandMessage(), getGitHubAuthState(), GitHubReviewAction (+9 more)

### Community 86 - "useRuntimeSyncController.ts"
Cohesion: 0.09
Nodes (39): executeAgentReconcileCommands(), GatewayClientLike, ReconcileCommand, ReconcileDispatchAction, runAgentReconcileOperation(), buildReconcileTerminalPatch(), ReconcileEligibility, resolveReconcileEligibility() (+31 more)

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

### Community 94 - "agents/agentFiles.ts"
Cohesion: 0.16
Nodes (17): AgentFilesState, useAgentFilesEditor(), UseAgentFilesEditorResult, AGENT_FILE_NAMES, AgentFileName, createAgentFilesState(), isAgentFileName(), PERSONALITY_FILE_LABELS (+9 more)

### Community 95 - "agentFleetHydrationDerivation.ts"
Cohesion: 0.13
Nodes (22): AgentsListResult, DerivedHydrateAgentFleetResult, DeriveFleetHydrationInput, deriveHydrateAgentFleetResult(), ExecApprovalsSnapshot, ExecAsk, ExecHost, ExecPolicyEntry (+14 more)

### Community 96 - "gateway-proxy.js"
Cohesion: 0.30
Nodes (13): buildErrorResponse(), createFrameRateLimiter(), createGatewayProxy(), hasCompleteDeviceAuth(), hasNonEmptyDeviceToken(), hasNonEmptyPassword(), hasNonEmptyToken(), injectAuthToken() (+5 more)

### Community 97 - "tasks/types.ts"
Cohesion: 0.14
Nodes (18): lucide-react, TaskBoardPanel(), KanbanImmersiveScreen(), formatRelativeTime(), STATUS_LABELS, STATUS_ORDER, stopAndGetCardId(), TaskBoardView() (+10 more)

### Community 98 - "PI + Chat Streaming (Studio Side)"
Cohesion: 0.09
Nodes (23): Connect failures, Connect handshake, Debugging Checklist (When Chat “Feels Buggy”), End-To-End Flow (PI Run -> UI), `event: "agent"` payload, `event: "chat"` payload, Exec Approvals In Chat (Related To “PI Runs”), High-Level Network Path (+15 more)

### Community 99 - "index.js"
Cohesion: 0.25
Nodes (14): CERT_DIR, CERT_PATH, generateHttpsCert(), KEY_PATH, main(), resolvePathname(), resolvePort(), assertPublicHostAllowed() (+6 more)

### Community 100 - "GatewayClient"
Cohesion: 0.06
Nodes (29): GatewayClient, GatewayConnectOptions, GatewayGapInfo, GatewayStatus, parseConnectFailedCloseReason(), createRuntimeProvider(), DEMO_RUNTIME_CAPABILITIES, DemoRuntimeProvider (+21 more)

### Community 101 - "agentFleetHydration.ts"
Cohesion: 0.17
Nodes (13): AgentsListResult, ExecApprovalsSnapshot, GatewayClientLike, HydrateAgentFleetResult, isRecord(), parseIdentityNameFromContent(), resolveAgentsListFromHelloSnapshot(), SessionsListEntry (+5 more)

### Community 102 - "personalityBuilder.ts"
Cohesion: 0.10
Nodes (34): AgentEditorModal(), AgentEditorModalProps, AgentEditorSection, editorSections, AgentBrainPanel(), AgentBrainPanelProps, AgentBrainPanelSection(), AgentFileProvenance() (+26 more)

### Community 103 - "Custom Runtime Provider Spec"
Cohesion: 0.09
Nodes (21): Capability Philosophy, Core Principle, Current Branch Status, Custom Metadata Surface, Custom Runtime Provider Spec, Event Model, Goal, Implementation Strategy (+13 more)

### Community 104 - "AgentSettingsPanel.tsx"
Cohesion: 0.25
Nodes (13): AgentInspectHeader(), AgentInspectHeaderProps, AgentSettingsPanel(), applyTemplateDefaults(), arePermissionsDraftEqual(), createInitialCronDraft(), CRON_TEMPLATE_OPTIONS, CronTemplateOption (+5 more)

### Community 105 - "GithubImmersiveScreen.tsx"
Cohesion: 0.20
Nodes (16): getDiffLineTone(), GitHubDiffFile, ParsedDiffLine, parseDiffPatch(), FileDiffModal(), FileDiffModalProps, BrowserPreviewState, useBrowserPreview() (+8 more)

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
Cohesion: 0.19
Nodes (14): findLatestHeartbeatResponse(), formatClockTime(), formatDuration(), HistoryPanel(), TRIGGER_LABELS, findAgentForRunEvent(), resolveLifecyclePhase(), resolveRunTrigger() (+6 more)

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
Cohesion: 0.15
Nodes (18): canvas-confetti@^1.9.4, canvas-confetti, AgentsStep(), AgentsStepProps, CompanyStep(), CompanyStepProps, CompleteStep(), OnboardingWizard() (+10 more)

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
Cohesion: 0.12
Nodes (18): __dirname, nextConfig, securityHeaders, cleanupPlaywrightProcesses(), clearDirContents(), ensureDir(), killPattern(), main() (+10 more)

### Community 119 - "Skills in OpenClaw + Claw3D"
Cohesion: 0.11
Nodes (18): 10.1 Route and navigation model, 10.2 Skills tab data and interactions, 10.3 Mutation wiring from Studio, 10.4 Scope warning shown in Studio, 10) Claw3D UX (current behavior), 11) What recent `.agent/done` plans show, 12) UX redesign constraints that are not optional, 13) Practical mental model for reviewing a Skills screenshot (+10 more)

### Community 120 - "createAgentBootstrapOperation.ts"
Cohesion: 0.18
Nodes (13): applyCreateAgentBootstrapPermissions(), CREATE_AGENT_DEFAULT_PERMISSIONS, CreateCompletion, CreatedAgent, executeCreateAgentBootstrapCommands(), resolveBootstrapErrorMessage(), runCreateAgentBootstrapOperation(), buildBootstrapGlobalErrorMessage() (+5 more)

### Community 121 - "GatewayResponseError"
Cohesion: 0.12
Nodes (13): GatewayErrorPayload, GatewayResponseError, ensureGatewayReloadModeHotForLocalStudio(), GatewayConfigSnapshot, isRecord(), resolveReloadModeFromConfig(), shouldAwaitDisconnectRestartForReloadMode(), shouldAwaitDisconnectRestartForRemoteMutation() (+5 more)

### Community 122 - "coerceString"
Cohesion: 0.24
Nodes (18): coerceString(), mergeGatewayConnectionState(), mergeGatewayProfiles(), mergeGatewaySettings(), normalizeCompanyField(), normalizeCompanyRoleTitles(), normalizeGatewayAdapterType(), normalizeGatewayConnectionState() (+10 more)

### Community 123 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 124 - "layout/route.ts"
Cohesion: 0.22
Nodes (16): fetchRemoteOfficeLayoutSnapshot(), GET(), PUT(), runtime, deriveRemoteLayoutUrlFromPresenceUrl(), isRecord(), normalizeOfficeLayoutSnapshot(), defaultStore() (+8 more)

### Community 125 - "RunningAvatarLoader"
Cohesion: 0.22
Nodes (8): GatewayConnectScreen(), GatewayConnectScreenProps, resolveLocalGatewayPort(), SettingsPanelProps, StudioGatewayAdapterType, StudioGatewaySettings, CURATED_ELEVENLABS_VOICES, CuratedVoiceOption

### Community 126 - "specialLatestUpdateOperation.ts"
Cohesion: 0.20
Nodes (12): buildLatestUpdatePatch(), LatestUpdateIntent, LatestUpdateKind, resolveLatestUpdateIntent(), resolveLatestUpdateKind(), ChatHistoryMessage, ChatHistoryResult, createSpecialLatestUpdateOperation() (+4 more)

### Community 127 - "presence.ts"
Cohesion: 0.14
Nodes (24): runtime, SummaryStatusSnapshot, normalizeRemoteGatewayUrl(), useRemoteOfficePresence(), UseRemoteOfficePresenceParams, UseRemoteOfficePresenceResult, buildAgentMainSessionKey(), buildOfficePresenceSnapshotFromGateway() (+16 more)

### Community 128 - "AgentEffectsSystem.ts"
Cohesion: 0.19
Nodes (10): AgentEffectsSystem, AgentEffectsSystemParams, AvatarState, stateColor(), thoughtFromSeed(), THOUGHTS, NavGrid2D, Waypoint (+2 more)

### Community 129 - "Permissions, Sandboxing, and Workspaces (Studio -> Gateway -> PI)"
Cohesion: 0.08
Nodes (26): Capabilities Permissions Updates, Debug Checklist (When Something Feels “Wrong”), Glossary, Hard Enforcement: Filesystem Tool Root Guard, How Studio Chooses the Default Workspace Path, Mental Model (First Principles), One-Shot Sandbox Tool Policy Repair, OpenClaw (Upstream): Sandbox Semantics (+18 more)

### Community 130 - "studioRoute.ts"
Cohesion: 0.31
Nodes (5): @playwright/test, createStudioRoute(), DEFAULT_SETTINGS, stubStudioRoute(), StudioSettingsFixture

### Community 131 - "vitest"
Cohesion: 0.08
Nodes (24): main(), parseArgs(), tryReadGatewayTokenFromOpenclawCli(), contents, destPath, repoRoot, isRecord(), LEGACY_STATE_DIRNAMES (+16 more)

### Community 132 - "useOnboardingState.ts"
Cohesion: 0.36
Nodes (6): OnboardingWizardProps, OnboardingStep, OnboardingStateReturn, readCompleted(), useOnboardingState(), writeCompleted()

### Community 133 - "normalizeCommandText"
Cohesion: 0.20
Nodes (18): resolveOfficeCallDirective(), resolveOfficeTextDirective(), applyUserMessageTriggers(), buildPhoneCallDirectiveKey(), buildStableLatestRequestSeed(), buildTextMessageDirectiveKey(), createPhoneCallRequest(), createTextMessageRequest() (+10 more)

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

### Community 143 - "gateway.ts"
Cohesion: 0.29
Nodes (10): createGatewayTask(), deleteGatewayTask(), GatewayTaskCreateInput, GatewayTaskRecord, GatewayTasksListResult, GatewayTaskUpdateInput, isUnsupportedTaskGatewayError(), listGatewayTasks() (+2 more)

### Community 144 - "Creating Skills"
Cohesion: 0.14
Nodes (13): 1. Create the skill files, 2. Mirror the files into `src/lib/skills/packaged.ts`, 3. Register the skill in `src/lib/skills/catalog.ts`, 4. Add marketplace presentation metadata, 5. Understand where the files get installed, 6. Keep the example production-ready, 7. Verify your changes, Creating Skills (+5 more)

### Community 145 - "Runtime Profiles"
Cohesion: 0.14
Nodes (13): `claw3d`, Current Profiles, Current Runtime Contract, `custom`, `demo`, `hermes`, `local`, Multi-Agent Message Contract (+5 more)

### Community 146 - "nodeGatewayClient.ts"
Cohesion: 0.21
Nodes (12): asRecord(), base64UrlEncode(), buildConnectParams(), buildDeviceAuthPayload(), createDeviceIdentity(), DeviceIdentity, fingerprintPublicKey(), GATEWAY_SCOPES (+4 more)

### Community 147 - "ws"
Cohesion: 0.17
Nodes (4): ws@^8.18.3, ws, ws, ws

### Community 148 - "agentMessaging.ts"
Cohesion: 0.24
Nodes (9): buildAgentHandoffInstruction(), GatewayAgentsListResult, GatewayCallLike, resolveLabel(), resolveSessionKeyFromAgentList(), RuntimeAgentHandoffPayload, RuntimeAgentMessagePayload, sendAgentHandoffViaRuntime() (+1 more)

### Community 149 - "RunningAvatarLoader"
Cohesion: 0.29
Nodes (9): OfficeLoadingFallback(), OfficePage(), readDebugFlag(), box(), RunningAvatarLoader(), RunningAvatarLoaderProps, AgentStoreProvider(), ConnectStep() (+1 more)

### Community 150 - "useOfficeStandupController.ts"
Cohesion: 0.10
Nodes (26): everyoneArrived(), expandRange(), getZonedParts(), isMeetingActive(), matchesCronPart(), OfficeStandupController, sameScheduledMinute(), shouldRunNow() (+18 more)

### Community 151 - "Critical Fixes"
Cohesion: 0.17
Nodes (11): 1. Telemetry Removed, 2. Constant-Time Token Comparison, 3. Auth Rate Limiting, 4. WebSocket Frame Validation, 5. Upstream URL Allowlist, 6. Custom Runtime Proxy Allowlist, 7. Security Headers, 8. Media Route Symlink Rejection (+3 more)

### Community 152 - "sessionSettingsMutations.ts"
Cohesion: 0.22
Nodes (12): AgentSessionState, applySessionSettingMutation(), ApplySessionSettingMutationParams, buildErrorPrefix(), buildFallbackError(), buildWebchatBlockedMessage(), resolveModelFromPatchResult(), SessionSettingField (+4 more)

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

### Community 157 - "install-gateway.ts"
Cohesion: 0.13
Nodes (20): appendPackagedSkillsToMarketplace(), buildPackagedSkillStatusEntry(), EMPTY_REQUIREMENTS, getPackagedSkillById(), PACKAGED_SKILLS, PackagedSkillId, buildInstallerMessage(), escapeForJsonString() (+12 more)

### Community 158 - "ref_node_crypto"
Cohesion: 0.31
Nodes (5): createAccessGate(), createRateLimiter(), parseCookies(), resolveClientIp(), safeCompare()

### Community 159 - "clawd3d-start.sh"
Cohesion: 0.44
Nodes (8): find_free_port(), info(), log(), pids_on_port(), port_free(), port_owned_by(), clawd3d-start.sh script, warn()

### Community 160 - "path-suggestions/route.ts"
Cohesion: 0.29
Nodes (9): GET(), isWithinHome(), listPathAutocompleteEntries(), normalizeQuery(), PathAutocompleteEntry, PathAutocompleteOptions, PathAutocompleteResult, resolveRealPath() (+1 more)

### Community 161 - "runtimeEventBridge.ts"
Cohesion: 0.08
Nodes (31): AssistantCompletionTimestampInput, buildHistoryLines(), buildSummarySnapshotPatches(), ChatHistoryMessage, DedupeRunLinesResult, extractMessageTimestamp(), GatewayEventKind, getAgentSummaryPatch() (+23 more)

### Community 162 - "CompanyBuilderModal.tsx"
Cohesion: 0.43
Nodes (7): buildRoleAvatarProfile(), CompanyBuilderModal(), CompanyBuilderModalProps, createEmptyRole(), joinCommaList(), parseCommaList(), renderRoleFacts()

### Community 163 - "HeaderBar.tsx"
Cohesion: 0.31
Nodes (6): applyTheme(), getPreferredTheme(), ThemeMode, ThemeToggle(), HeaderBar(), HeaderBarProps

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
Cohesion: 0.47
Nodes (5): defaultStudioFloorRuntimeState(), resolveDefaultStudioGatewayProfile(), resolveStudioActiveFloorId(), resolveStudioFloorRuntimeState(), resolveStudioGatewayProfiles()

### Community 174 - "Step-by-step tasks"
Cohesion: 0.08
Nodes (37): Architecture / proposed approach, Claw3D — Ganti geometri male procedural dengan model GLB dari Drive, Current context / assumptions, Goal, Risks, tradeoffs, open questions, Step-by-step tasks, Task 0 — Graphify preflight (read-only), Task 10 — Visual calibration (manual, 1 iterasi) (+29 more)

### Community 175 - "9) Troubleshooting"
Cohesion: 0.33
Nodes (6): `401` or auth errors from Claw3D, 9) Troubleshooting, Claw3D still cannot connect after token is correct, `EPROTO` or `wrong version number`, Gateway itself is unhealthy, Tailscale URL works nowhere

### Community 176 - "taskBoardState.ts"
Cohesion: 0.43
Nodes (7): compareCards(), sortTaskBoardCards(), TaskBoardAction, taskBoardReducer(), upsertTaskBoardCard(), defaultTaskBoardPreference(), defaultStudioTaskBoardPreference()

### Community 177 - "janitorReset.ts"
Cohesion: 0.47
Nodes (3): buildSessionEpochSnapshot(), resolveResetAgentIds(), SessionEpochSnapshot

### Community 186 - "useStudioOfficePreference.ts"
Cohesion: 0.53
Nodes (5): useStudioOfficePreference(), UseStudioOfficePreferenceParams, defaultStudioOfficePreferencePublic(), resolveOfficePreferencePublic(), StudioOfficePreferencePublic

### Community 187 - "AgentCreateModal.tsx"
Cohesion: 0.13
Nodes (24): AgentAvatar(), AgentAvatarProps, AgentCreateModal(), AgentCreateModalContent(), AgentCreateModalProps, resolveInitialName(), AVATAR_ACCENTS, AVATAR_FOREGROUNDS (+16 more)

### Community 188 - "Contributing"
Cohesion: 0.22
Nodes (9): Before you start, Contributing, Local setup, Minimal issue template, Minimal PR template, Pull requests, Reporting issues, Support And Routing (+1 more)

### Community 189 - "custom/route.ts"
Cohesion: 0.07
Nodes (17): nextConfig, securityHeaders, next, runtime, CustomRuntimeRequestBody, isRuntimeUrlAllowed(), normalizeMethod(), normalizePathname() (+9 more)

### Community 191 - "settingsSidebarTabs.ts"
Cohesion: 0.50
Nodes (3): BASE_SETTINGS_SIDEBAR_ENTRIES, resolveSettingsSidebarEntries(), SettingsSidebarEntry

### Community 195 - "Code Of Conduct"
Cohesion: 0.33
Nodes (5): Code Of Conduct, Enforcement, Expected Behavior, Our Pledge, Unacceptable Behavior

## Knowledge Gaps
- **10 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `vitest` connect `react` to `useTaskBoardController.ts`, `resolveStateDir`, `OfficeScreen.tsx`, `navigation.ts`, `GatewayClient.ts`, `hermes-gateway-adapter.js`, `media/route.ts`, `presentation.ts`, `agentConfig.ts`, `runtimeAgentEventWorkflow.ts`, `gatewayRuntimeEventHandler.ts`, `chatSendOperation.ts`, `execApprovalControlLoopWorkflow.ts`, `settings.ts`, `claw3doctor.mjs`, `agentPermissionsOperation.ts`, `EventFrame`, `chatItems.ts`, `GatewayClient`, `skills/types.ts`, `mutationLifecycleWorkflow.ts`, `floors.ts`, `coordinator.ts`, `package.json`, `useAgentSettingsMutationController.ts`, `deskDirectives.ts`, `settings-store.ts`, `AgentChatPanel.tsx`, `planning.ts`, `shared-store.ts`, `profile.ts`, `message-extract.ts`, `triggers.ts`, `colorSemantics.ts`, `runtimeChatEventWorkflow.ts`, `transcript.ts`, `browser-preview/route.ts`, `randomUUID`, `execApprovalControlLoopWorkflow.ts`, `standup/store.ts`, `models.ts`, `voiceTranscription.ts`, `createPayloadBuilder.ts`, `AgentsPageScreen`, `GatewayBrowserClient.ts`, `useRuntimeSyncController.ts`, `settingsRouteWorkflow.ts`, `agents/agentFiles.ts`, `tasks/types.ts`, `index.js`, `pathfinding.ts`, `lucide-react`, `StudioSettingsCoordinator`, `cleanup-ux-artifacts.mjs`, `createAgentBootstrapOperation.ts`, `GatewayResponseError`, `specialLatestUpdateOperation.ts`, `vitest`, `useOnboardingState.ts`, `execApprovals.ts`, `agentSettingsMutationWorkflow.ts`, `useConfigMutationQueue.ts`, `gateway.ts`, `ws`, `install-gateway.ts`, `ref_node_crypto`, `runtimeEventBridge.ts`, `HeaderBar.tsx`, `gatewayClient.reconnect-recovery.test.ts`, `studioSettings.test.ts`, `Step-by-step tasks`, `janitorReset.ts`, `GatewayBrowserClient`, `AgentCreateModal.tsx`, `custom/route.ts`, `navigation.diagonalCorner.test.ts`, `settingsSidebarTabs.ts`?**
  _High betweenness centrality (0.105) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `OfficeScreen()` (e.g. with `Current Post-Merge Sequence` and `Immediate Next Deliverables`) actually correct?**
  _`OfficeScreen()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `react` be split into smaller, more focused modules?**
  _Cohesion score 0.08333333333333333 - nodes in this community are weakly interconnected._
- **Why does `react` connect `react` to `useTaskBoardController.ts`, `toWorld`, `OfficeScreen.tsx`, `useOnboardingState.ts`, `GatewayClient.ts`, `RetroOffice3D.tsx`, `useUsageAnalytics.ts`, `presentation.ts`, `voiceReply/provider.ts`, `useConfigMutationQueue.ts`, `JukeboxPanel.tsx`, `chatSendOperation.ts`, `geometry.ts`, `RunningAvatarLoader`, `useOfficeStandupController.ts`, `EventFrame`, `skills/types.ts`, `constants.ts`, `CompanyBuilderModal.tsx`, `HeaderBar.tsx`, `floors.ts`, `package.json`, `useAgentSettingsMutationController.ts`, `useStudioVoiceRepliesPreference.ts`, `Step-by-step tasks`, `AgentChatPanel.tsx`, `profile.ts`, `district.ts`, `AgentCreateModal.tsx`, `useStudioOfficePreference.ts`, `custom/route.ts`, `colorSemantics.ts`, `transcript.ts`, `browser-preview/route.ts`, `randomUUID`, `models.ts`, `AgentsPageScreen`, `marketplace.ts`, `dependencies`, `OfficePhaserCanvas.tsx`, `useRuntimeSyncController.ts`, `settingsRouteWorkflow.ts`, `agents/agentFiles.ts`, `tasks/types.ts`, `GatewayClient`, `personalityBuilder.ts`, `AgentSettingsPanel.tsx`, `GithubImmersiveScreen.tsx`, `useRunLog.ts`, `lucide-react`, `useOfficeBuilderStore.ts`, `StudioSettingsCoordinator`, `RunningAvatarLoader`, `presence.ts`?**
  _High betweenness centrality (0.069) - this node is a cross-community bridge._
- **Should `resolveStateDir` be split into smaller, more focused modules?**
  _Cohesion score 0.09747899159663866 - nodes in this community are weakly interconnected._
- **Why does `GatewayClient` connect `GatewayClient` to `useTaskBoardController.ts`, `react`, `OfficeScreen.tsx`, `GatewayClient.ts`, `useUsageAnalytics.ts`, `presentation.ts`, `agentConfig.ts`, `execApprovals.ts`, `gateway.ts`, `chatSendOperation.ts`, `agentPermissionsOperation.ts`, `EventFrame`, `sessionSettingsMutations.ts`, `GatewayClient`, `skills/types.ts`, `install-gateway.ts`, `gatewayClient.reconnect-recovery.test.ts`, `useAgentSettingsMutationController.ts`, `GatewayBrowserClient`, `models.ts`, `GatewayBrowserClient.ts`, `CustomRuntimeProvider`, `agents/agentFiles.ts`, `personalityBuilder.ts`, `useRunLog.ts`, `Code Documentation`, `createAgentBootstrapOperation.ts`, `GatewayResponseError`, `presence.ts`?**
  _High betweenness centrality (0.041) - this node is a cross-community bridge._
- **Should `toWorld` be split into smaller, more focused modules?**
  _Cohesion score 0.10272536687631027 - nodes in this community are weakly interconnected._