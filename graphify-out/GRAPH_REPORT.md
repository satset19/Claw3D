# Graph Report - claw3d  (2026-10-24)

## Corpus Check
- 589 files · ~432,218 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 30 file(s) not represented in the graph (top: .glb 18, (none) 6, .css 2)

## Summary
- 5168 nodes · 12197 edges · 182 communities (173 shown, 9 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 191 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `11d462f6`
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
- historySyncOperation.ts
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
- .connect
- schema.ts
- next
- execApprovalControlLoopWorkflow.ts
- AgentsPageScreen.tsx
- models.ts
- Claw3Doctor Spec
- Multi-Agent Beta
- voiceTranscription.ts
- office/store.ts
- randomUUID
- AgentsPageScreen
- marketplace.ts
- Runtime Profile Architecture
- dependencies
- GatewayBrowserClient.ts
- Office Systems Roadmap
- OfficePhaserCanvas.tsx
- AgentAvatarPreview3D.tsx
- useRuntimeSyncController.ts
- settingsRouteWorkflow.ts
- custom/provider.ts
- EventFrame
- Claw3D + OpenClaw + Tailscale Setup Tutorial
- [0.1.4] - 2026-04-23
- Claw3D — A 3D Workspace for AI Agents
- SmsBoothImmersiveScreen.tsx
- agents/agentFiles.ts
- agentFleetHydrationDerivation.ts
- deleteAgentOperation.ts
- tasks/types.ts
- PI + Chat Streaming (Studio Side)
- index.js
- runtimeEventBridge.ts
- remove/route.ts
- personalityBuilder.ts
- Custom Runtime Provider Spec
- AgentSettingsPanel.tsx
- GatewayClient
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
- buildAgentMainSessionKey
- AgentEffectsSystem.ts
- Permissions, Sandboxing, and Workspaces (Studio -> Gateway -> PI)
- studioRoute.ts
- vitest
- onboarding/index.ts
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
- settings-store.ts
- shared-store-client.ts
- agentMessaging.ts
- AgentAvatarProfile
- randomUUID
- Critical Fixes
- sessionSettingsMutations.ts
- AmbienceSystem.ts
- Claw3D Vision
- Task Manager
- TODO Board
- upload/route.ts
- janitors.ts
- clawd3d-start.sh
- taskBoardState.ts
- chatSendOperation.ts
- useVoiceRecorder.ts
- Security Policy
- gatewayClient.reconnect-recovery.test.ts
- Cursor Cloud specific instructions
- OpenClaw Gateway Skill Contract
- Roadmap
- Top-Level Code Map
- useStudioOfficePreference.ts
- contact_links
- StudioGatewayAdapterType
- parseAgentIdFromSessionKey
- 9) Troubleshooting
- @testing-library/jest-dom
- multiavatar
- .github/SECURITY.md
- postcss.config.mjs

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
- `Goal` --references--> `AgentAvatarPreview3D()`  [INFERRED]
  .hermes/plans/2026-10-25_000000-claw3d-male-avatar-glb.md → src/features/agents/components/AgentAvatarPreview3D.tsx
- `Capabilities Permissions Updates` --references--> `updateAgentPermissionsViaStudio()`  [INFERRED]
  docs/permissions-sandboxing.md → src/features/agents/operations/agentPermissionsOperation.ts
- `Sending Messages (Browser -> PI via Gateway)` --references--> `sendChatMessageViaStudio()`  [INFERRED]
  docs/pi-chat-streaming.md → src/features/agents/operations/chatSendOperation.ts
- `History Sync (Recovery, Load More)` --references--> `buildHistoryLines()`  [INFERRED]
  docs/pi-chat-streaming.md → src/features/agents/state/runtimeEventBridge.ts
- `Current Post-Merge Sequence` --references--> `OfficeScreen()`  [INFERRED]
  docs/office_sys/office-systems-roadmap.md → src/features/office/screens/OfficeScreen.tsx

## Import Cycles
- None detected.

## Communities (182 total, 9 thin omitted)

### Community 0 - "useTaskBoardController.ts"
Cohesion: 0.16
Nodes (30): RunRecord, buildActiveRunOptions(), buildCardFromExplicitEvent(), buildCardFromGatewayTask(), buildCardFromSharedTaskRecord(), buildPlaybookCards(), buildStandupSeedCards(), cardTextKey() (+22 more)

### Community 1 - "react"
Cohesion: 0.10
Nodes (9): react, @testing-library/react, applyTheme(), getPreferredTheme(), ThemeMode, ThemeToggle(), HeaderBar(), HeaderBarProps (+1 more)

### Community 2 - "resolveStateDir"
Cohesion: 0.10
Nodes (28): contentTypeFromName(), GET(), runtime, uploadsDir(), GET(), isWithinHome(), listPathAutocompleteEntries(), normalizeQuery() (+20 more)

### Community 3 - "toWorld"
Cohesion: 0.10
Nodes (50): DOOR_LENGTH, DOOR_THICKNESS, SCALE, WALL_THICKNESS, getItemBaseSize(), getItemRotationRadians(), resolveItemTypeKey(), toWorld() (+42 more)

### Community 4 - "OfficeScreen.tsx"
Cohesion: 0.05
Nodes (65): AgentEditorModal(), buildGenerateCompanyPlanPrompt(), buildImproveCompanyBriefPrompt(), HQSidebar(), HQSidebarProps, HQSidebarTab, PRIMARY_TABS, TAB_LABELS (+57 more)

### Community 5 - "navigation.ts"
Cohesion: 0.07
Nodes (45): CANVAS_H, CANVAS_W, SNAP_GRID, createWallItem(), getItemBounds(), ITEM_FOOTPRINT, ITEM_METADATA, snap() (+37 more)

### Community 6 - "GatewayClient.ts"
Cohesion: 0.08
Nodes (36): Reconnects And Retries, Studio Settings (Where Gateway URL/Token Come From), EventHandler, formatGatewayError(), GapHandler, GatewayConnectionState, gatewayDebugLog(), GatewayFrame (+28 more)

### Community 7 - "hermes-gateway-adapter.js"
Cohesion: 0.06
Nodes (60): activeRuns, activeSendEventFns, ADAPTER_PORT, agentListPayload(), agents, broadcastEvent(), buildDemoReply(), clearHistory() (+52 more)

### Community 8 - "RetroOffice3D.tsx"
Cohesion: 0.05
Nodes (55): SettingsPanel(), Bubble(), PhoneBoothImmersiveScreen(), PhoneCallStep, Bubble(), ContactList(), KEYBOARD_ROWS, KeyboardKey() (+47 more)

### Community 9 - "media/route.ts"
Cohesion: 0.10
Nodes (36): isSafeAgentId(), POST(), PUT(), resolveAgentStateSshTarget(), RestoreAgentStateRequest, runtime, TrashAgentStateRequest, expandTildeLocal() (+28 more)

### Community 10 - "service.ts"
Cohesion: 0.06
Nodes (66): GET(), PUT(), runtime, POST(), runtime, everyoneArrived(), expandRange(), getZonedParts() (+58 more)

### Community 11 - "useUsageAnalytics.ts"
Cohesion: 0.07
Nodes (61): AnalyticsPanel(), DatePickerField(), formatBudgetInput(), formatDuration(), formatPercent(), openNativeDatePicker(), parseBudgetInput(), StatCard() (+53 more)

### Community 12 - "presentation.ts"
Cohesion: 0.07
Nodes (56): AgentSkillsPanel(), AgentSkillsPanelProps, DISPLAY_CLASSES, DISPLAY_LABELS, FILTERS, resolveHint(), SkillRowFilter, AgentSkillsSetupModal() (+48 more)

### Community 13 - "agentConfig.ts"
Cohesion: 0.09
Nodes (43): AgentHeartbeat, AgentHeartbeatActiveHours, AgentHeartbeatResult, AgentHeartbeatSummary, AgentHeartbeatUpdatePayload, AgentSkillsAccessMode, applyGatewayConfigPatch(), areStringArraysEqual() (+35 more)

### Community 14 - "historySyncOperation.ts"
Cohesion: 0.12
Nodes (22): buildHistoryMetadataPatch(), HistoryRequestIntent, HistoryResponseDisposition, resolveHistoryFetchLimit(), resolveHistoryRequestIntent(), resolveHistoryResponseDisposition(), areStringArraysEqual(), ChatHistoryMessage (+14 more)

### Community 15 - "gatewayRuntimeEventHandler.ts"
Cohesion: 0.06
Nodes (74): createGatewayRuntimeEventHandler(), findAgentByRunId(), GatewayRuntimeEventHandler, GatewayRuntimeEventHandlerDeps, resolveRole(), extractReasoningBody(), hasReasoningSignal(), hasUnclosedThinkingTag() (+66 more)

### Community 16 - "spotify-jukebox/store.ts"
Cohesion: 0.09
Nodes (47): BrowserJukeboxCommand, BrowserJukeboxExecutionResult, executeBrowserJukeboxCommand(), normalize(), parseBrowserJukeboxCommand(), stripPlayPrefix(), base64urlEncode(), buildRedirectUri() (+39 more)

### Community 17 - "chatSendOperation.ts"
Cohesion: 0.07
Nodes (34): DraftFlushIntent, DraftTimerIntent, NewSessionIntent, planDraftFlushIntent(), planDraftTimerIntent(), planNewSessionIntent(), planStopRunIntent(), StopRunIntent (+26 more)

### Community 18 - "execApprovalControlLoopWorkflow.ts"
Cohesion: 0.17
Nodes (19): applyApprovalIngressEffects(), ApprovalIngressResult, ApprovalPauseRequest, ApprovalPendingState, AutoResumeDispatchIntent, AutoResumePreflightIntent, deriveAwaitingUserInputPatches(), derivePendingApprovalPruneDelayMs() (+11 more)

### Community 19 - "furnitureDefaults.ts"
Cohesion: 0.05
Nodes (68): ATM_MIGRATION_KEY, GYM_ROOM_MIGRATION_KEY, PHONE_BOOTH_MIGRATION_KEY, QA_LAB_MIGRATION_KEY, SERVER_ROOM_MIGRATION_KEY, SMS_BOOTH_MIGRATION_KEY, STORAGE_KEY, createFurnitureSignature() (+60 more)

### Community 20 - "loadStudioSettings"
Cohesion: 0.09
Nodes (36): GET(), runtime, POST(), runtime, stripRemoteAgentPrefix(), AgentsListResult, POST(), resolveLatestAssistantHistoryText() (+28 more)

### Community 21 - "settings.ts"
Cohesion: 0.06
Nodes (44): useStudioVoiceRepliesPreference(), UseStudioVoiceRepliesPreferenceParams, DEFAULT_REMOTE_OFFICE_SOURCE_KIND, defaultFocusedPreference(), defaultStudioFloorRuntimeState(), defaultStudioOfficePreference(), defaultStudioStandupJiraConfig(), defaultStudioStandupPreference() (+36 more)

### Community 22 - "claw3doctor.mjs"
Cohesion: 0.10
Nodes (48): ws@^8.18.3, ws, checkFail(), checkPass(), checkWarn(), detectHermesModelHealth(), detectOpenClawVersion(), detectWorkspaceState() (+40 more)

### Community 23 - "agentPermissionsOperation.ts"
Cohesion: 0.18
Nodes (24): Studio Note: Authority Is No Longer Compiled During Create, AgentRuntimeConfigContext, coerceStringArray(), ExecutionRoleId, isPermissionsCustom(), isRecord(), resolveAgentPermissionsDraft(), resolveAgentRuntimeConfigContext() (+16 more)

### Community 24 - "EventFrame"
Cohesion: 0.12
Nodes (23): asNonEmptyString(), asOptionalString(), asPositiveTimestamp(), asRecord(), parseExecApprovalRequested(), parseExecApprovalResolved(), RequestedPayload, ResolvedPayload (+15 more)

### Community 25 - "chatItems.ts"
Cohesion: 0.09
Nodes (43): AgentChatItem, AgentChatRenderBlock, appendThinkingTraceEvent(), AssistantTraceEvent, buildAgentChatItems(), BuildAgentChatItemsInput, buildAgentChatRenderBlocks(), buildFinalAgentChatItems() (+35 more)

### Community 26 - "useAgentSettingsMutationController.ts"
Cohesion: 0.11
Nodes (24): AgentPermissionsDraft, buildQueuedMutationBlock(), MutationBlockState, runAgentConfigMutationLifecycle(), AgentForSettingsMutation, RestartingMutationBlockState, SkillSetupMessage, SkillSetupMessageMap (+16 more)

### Community 27 - "GatewayClient"
Cohesion: 0.09
Nodes (42): MarketplaceMessage, useOfficeSkillsMarketplace(), readGatewayAgentSkillsAllowlist(), resolveRequiredAgentId(), updateGatewayAgentSkillsAllowlist(), normalizeSkillName(), resolveVisibleAgentSkillNames(), setAgentSkillEnabled() (+34 more)

### Community 28 - "github.ts"
Cohesion: 0.08
Nodes (60): GET(), parsePullRequestNumber(), POST(), ReviewRequestBody, runtime, getDiffLineTone(), GitHubDiffFile, ParsedDiffLine (+52 more)

### Community 29 - "constants.ts"
Cohesion: 0.07
Nodes (38): BUMP_RECOVERY_MS, DESK_STICKY_MS, EAST_HALL_WIDTH, EAST_WING_DOOR_Y, EAST_WING_ROOM_HEIGHT, EAST_WING_ROOM_TOP_Y, EAST_WING_SIDE_MARGIN, EAST_WING_SPECIALTY_ROOM_WIDTH (+30 more)

### Community 30 - "QA Department Spec"
Cohesion: 0.05
Nodes (40): Agent Interaction Model, Approval-Aware Review, Approvals, Approved, Blocked, Bug Triage, Bulletin Board, Changes Requested (+32 more)

### Community 31 - "QA Department Spec"
Cohesion: 0.05
Nodes (40): Agent Interaction Model, Approval-Aware Review, Approvals, Approved, Blocked, Bug Triage, Bulletin Board, Changes Requested (+32 more)

### Community 32 - "mutationLifecycleWorkflow.ts"
Cohesion: 0.10
Nodes (26): AgentConfigMutationLifecycleDeps, AgentConfigMutationLifecycleKind, assertMutationKind(), AwaitingRestartPatch, buildConfigMutationFailureMessage(), buildMutatingMutationBlock(), buildMutationSideEffectCommands(), CreateAgentBlockState (+18 more)

### Community 33 - "eventTriggers.ts"
Cohesion: 0.09
Nodes (34): applyHoldDirective(), BooleanByAgentId, clearOfficeAnimationTriggerHold(), createOfficeAnimationTriggerState(), emptyObject(), isUserLikeChatRole(), LatestDirective, NumberByAgentId (+26 more)

### Community 34 - "floors.ts"
Cohesion: 0.11
Nodes (31): Floor Registry Slice, Phase 1: Floor Registry, Roster Slice, OfficeFloorNav(), OfficeFloorNavProps, PROVIDER_LABEL, renderFloorButton(), buildFloorRosterErrorState() (+23 more)

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
Cohesion: 0.06
Nodes (62): CRON_ACTION_BUSY_MESSAGE, CronBusyState, CronCreateDeps, isCronActionBusy(), performCronCreateFlow(), resolveCreateAgentId(), resolveCreateErrorMessage(), useAgentSettingsMutationController() (+54 more)

### Community 41 - "deskDirectives.ts"
Cohesion: 0.10
Nodes (35): cacheIntentSnapshot(), getCachedIntentSnapshot(), intentSnapshotCache, normalizeDirectiveText(), normalizeOfficeCallCallee(), normalizeOfficeTextRecipient(), OfficeCallDirective, OfficeCallPhase (+27 more)

### Community 42 - "Office Systems Roadmap"
Cohesion: 0.05
Nodes (36): Agent State Model, Auth And Enterprise Adoption, Bulletin Board, Candidate Feature Order, `claw3doctor` v1, `claw3doctor` v2, Core Direction, Current Post-Merge Sequence (+28 more)

### Community 43 - "Multi-Floor Runtime Architecture"
Cohesion: 0.05
Nodes (38): 1. Building Shell, 2. Floor Runtime Surface, 3. Shared Building Systems, 4. Cross-Floor Coordination, Building Layers, Building shell, Building Shell vs Floor Scene, Concrete Delivery Plan (+30 more)

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
Cohesion: 0.19
Nodes (17): GET(), PUT(), readGatewayUrl(), runtime, GET(), isPatch(), PUT(), runtime (+9 more)

### Community 49 - "AgentChatPanel.tsx"
Cohesion: 0.10
Nodes (28): AgentChatComposer, AgentChatFinalItems, AgentChatPanel(), AgentChatPanelProps, AgentChatTranscript, AssistantIntroCard, AssistantMessageCard, CHAT_SELECT_STYLE (+20 more)

### Community 50 - "planning.ts"
Cohesion: 0.11
Nodes (32): CommandModeId, CreatedAgentRecord, runCompanyBootstrapOperation(), buildCompanyRolePermissionsDraft(), buildCompanyAgentBlueprints(), buildRoleAgentsMarkdown(), buildRoleHeartbeatMarkdown(), buildRoleIdentity() (+24 more)

### Community 51 - "isRecord"
Cohesion: 0.17
Nodes (29): defaultStudioStandupManualEntry(), isRecord(), mergeStudioSettings(), normalizeAnalytics(), normalizeAnalyticsPreference(), normalizeAvatars(), normalizeDeskAssignments(), normalizeFloorRuntimeConnectionStatus() (+21 more)

### Community 52 - "Meeting Room Workflow Spec"
Cohesion: 0.06
Nodes (33): Agent Interaction Model, Archived, Bulletin Board Integration, Complete, Core Principle, Decision, Existing Code Seams, Existing Foundation (+25 more)

### Community 53 - "Meeting Room Workflow Spec"
Cohesion: 0.06
Nodes (33): Agent Interaction Model, Archived, Bulletin Board Integration, Complete, Core Principle, Decision, Existing Code Seams, Existing Foundation (+25 more)

### Community 54 - "visualSystems.tsx"
Cohesion: 0.05
Nodes (43): main(), main(), main(), @react-three/drei, @react-three/fiber, three, AGENT_SCALE, PING_PONG_BALL_RADIUS (+35 more)

### Community 55 - "shared-store.ts"
Cohesion: 0.18
Nodes (27): DELETE(), errorJson(), GET(), isRecord(), json(), PUT(), isTaskBoardSource(), isTaskBoardStatus() (+19 more)

### Community 56 - "profile.ts"
Cohesion: 0.09
Nodes (35): AgentAvatarCreatorModal(), AgentAvatarCreatorModalProps, AgentAvatarEditorPanel, AgentAvatarEditorPanelHandle, AgentAvatarEditorPanelProps, createDemoMainAgentSeed(), AGENT_AVATAR_BOTTOM_STYLE_OPTIONS, AGENT_AVATAR_CLOTHING_COLOR_OPTIONS (+27 more)

### Community 57 - "message-extract.ts"
Cohesion: 0.12
Nodes (25): shouldSuppressPhoneBoothAssistantReply(), AgentInstructionParams, ENVELOPE_CHANNELS, EXEC_APPROVAL_WAIT_POLICY, extractRawText(), extractText(), extractTextCached(), extractThinkingFromTaggedStream() (+17 more)

### Community 58 - "district.ts"
Cohesion: 0.11
Nodes (23): WORLD_H, WORLD_W, clampPointToZone(), clampZoneValue(), DISTRICT_CAMERA_POSITION, DISTRICT_CAMERA_TARGET, DISTRICT_CAMERA_ZOOM, DistrictZone (+15 more)

### Community 59 - "triggers.ts"
Cohesion: 0.12
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
Nodes (25): planRuntimeChatEvent(), resolveTerminalSeq(), RuntimeChatWorkflowCommand, RuntimeChatWorkflowInput, RuntimeChatWorkflowResult, summarizeThinkingMessage(), terminalAssistantFinalEntryId(), terminalAssistantMetaEntryId() (+17 more)

### Community 64 - "transcript.ts"
Cohesion: 0.08
Nodes (43): Action, AgentStoreContext, AgentStoreContextValue, agentStoreReducer, AgentStoreSeed, AgentStoreState, areStringArraysEqual(), buildNewSessionAgentPatch() (+35 more)

### Community 65 - "with"
Cohesion: 0.06
Nodes (31): env, IMAGE_BASENAME, REGISTRY, jobs, publish, name, contents, packages (+23 more)

### Community 66 - "browser-preview/route.ts"
Cohesion: 0.09
Nodes (30): getFreePort(), main(), sleep(), BrowserOpenResponse, browserRequest(), BrowserScreenshotResponse, BrowserTab, BrowserTabsResponse (+22 more)

### Community 68 - "schema.ts"
Cohesion: 0.11
Nodes (31): asBoolean(), asNumber(), asString(), defaultLayers(), isRecord(), normalizeAmbiencePreset(), normalizeDeskAssignments(), normalizeInteractionKind() (+23 more)

### Community 69 - "next"
Cohesion: 0.07
Nodes (15): nextConfig, securityHeaders, next, runtime, CustomRuntimeRequestBody, isRuntimeUrlAllowed(), normalizeMethod(), normalizePathname() (+7 more)

### Community 70 - "execApprovalControlLoopWorkflow.ts"
Cohesion: 0.07
Nodes (37): AutoResumeIntent, ExecApprovalIngressCommand, ExecApprovalPendingSnapshot, PauseRunIntent, planAutoResumeIntent(), planIngressCommands(), planPausedRunMapCleanup(), planPauseRunIntent() (+29 more)

### Community 71 - "AgentsPageScreen.tsx"
Cohesion: 0.11
Nodes (28): planAwaitingUserInputPatches(), planPendingPruneDelay(), planPrunedPendingState(), runPauseRunForExecApprovalOperation(), runResolveExecApprovalOperation(), applyCreateAgentBootstrapPermissions(), executeCreateAgentBootstrapCommands(), isCreateBlockTimedOut() (+20 more)

### Community 72 - "models.ts"
Cohesion: 0.14
Nodes (23): asRecord(), GatewayConnectionStatus, GatewayModelsSyncIntent, RecordLike, resolveGatewayConfigRecord(), resolveGatewayModelsSyncIntent(), resolveSandboxRepairAgentIds(), resolveSandboxRepairIntent() (+15 more)

### Community 73 - "Claw3Doctor Spec"
Cohesion: 0.07
Nodes (29): Auth / Token Checks, Claw3D Settings / Environment, Claw3Doctor Spec, Custom Runtime, First-Pass Scope, Follow-Up Docs, Gateway Reachability, Goal (+21 more)

### Community 74 - "Multi-Agent Beta"
Cohesion: 0.08
Nodes (26): 1. Remote Claw3D Presence Endpoint, 2. Remote OpenClaw Gateway, Connection Modes, Current Beta Limitations, Disable Behavior, Gateway mode connects but messaging fails, How To Connect, Mental Model (+18 more)

### Community 75 - "voiceTranscription.ts"
Cohesion: 0.11
Nodes (23): MAX_VOICE_UPLOAD_BYTES, POST(), runtime, buildVoiceTranscriptionErrorMessage(), inferVoiceFileExtension(), loadOpenClawSdk(), MediaUnderstandingDecision, MediaUnderstandingOutput (+15 more)

### Community 76 - "office/store.ts"
Cohesion: 0.17
Nodes (25): asString(), PUT(), runtime, asString(), GET(), PUT(), runtime, createEmptyOfficeMap() (+17 more)

### Community 77 - "randomUUID"
Cohesion: 0.18
Nodes (14): AgentCreateWizardModal(), AgentCreateWizardModalProps, buildInitialDraft(), WizardField(), WizardStepId, wizardSteps, WizardTextAreaField(), AgentIdentityFields() (+6 more)

### Community 78 - "AgentsPageScreen"
Cohesion: 0.08
Nodes (39): AgentsListResult, ExecApprovalsSnapshot, GatewayClientLike, hydrateAgentFleetFromGateway(), HydrateAgentFleetResult, isRecord(), parseIdentityNameFromContent(), resolveAgentsListFromHelloSnapshot() (+31 more)

### Community 79 - "marketplace.ts"
Cohesion: 0.18
Nodes (14): SkillsMarketplaceModal(), SkillsMarketplaceModalProps, buildSearchBlob(), FILTER_LABELS, formatInstalls(), formatRating(), getAgentSkillEnabled(), MarketplaceFilter (+6 more)

### Community 80 - "Runtime Profile Architecture"
Cohesion: 0.08
Nodes (25): 1. `docs: runtime profile architecture`, 2. `feat: claw3doctor`, 3. `refactor: office shell modularization`, 4. `docs: floor schema and builder plan`, 5. `feat: admin floor builder`, Branch Sequence, Core Terms, Custom Runtime Position (+17 more)

### Community 81 - "dependencies"
Cohesion: 0.08
Nodes (26): dependencies, canvas-confetti@^1.9.4, class-variance-authority@^0.7.1, clsx@^2.1.1, lucide-react@^0.563.0, next@16.1.7, @noble/ed25519@^3.0.0, phaser@^3.90.0 (+18 more)

### Community 82 - "GatewayBrowserClient.ts"
Cohesion: 0.07
Nodes (37): base64UrlDecode(), base64UrlEncode(), buildDeviceAuthPayload(), buildScopedTokenKey(), bytesToHex(), clearDeviceAuthToken(), CryptoLike, DeviceAuthEntry (+29 more)

### Community 83 - "Office Systems Roadmap"
Cohesion: 0.08
Nodes (24): Agent State Model, Bulletin Board, Candidate Feature Order, Core Direction, Departments, Design Principles, Desk / CPU Progression, Hierarchy (+16 more)

### Community 84 - "OfficePhaserCanvas.tsx"
Cohesion: 0.15
Nodes (14): phaser, OfficePhaserCanvas(), OfficePhaserCanvasProps, createOfficeBuilderScene(), OfficeBuilderRenderable, createOfficeSceneBridge(), OfficeDebugSettings, OfficeRuntimeSettings (+6 more)

### Community 85 - "AgentAvatarPreview3D.tsx"
Cohesion: 0.07
Nodes (43): Architecture / proposed approach, Claw3D — Ganti geometri male procedural dengan model GLB dari Drive, Current context / assumptions, Goal, Risks, tradeoffs, open questions, Step-by-step tasks, Task 0 — Graphify preflight (read-only), Task 10 — Visual calibration (manual, 1 iterasi) (+35 more)

### Community 86 - "useRuntimeSyncController.ts"
Cohesion: 0.09
Nodes (40): executeAgentReconcileCommands(), GatewayClientLike, ReconcileCommand, ReconcileDispatchAction, runAgentReconcileOperation(), buildReconcileTerminalPatch(), ReconcileEligibility, resolveReconcileEligibility() (+32 more)

### Community 87 - "settingsRouteWorkflow.ts"
Cohesion: 0.21
Nodes (21): buildSettingsRouteHref(), InspectSidebarState, parseSettingsRouteAgentIdFromPathname(), parseSettingsRouteAgentIdFromQueryParam(), planBackToChatCommands(), planFleetSelectCommands(), planNonRouteSelectionSyncCommands(), planOpenSettingsRouteCommands() (+13 more)

### Community 88 - "custom/provider.ts"
Cohesion: 0.10
Nodes (27): CustomRuntimeProxyInput, fetchCustomRuntimeJson(), normalizeCustomBaseUrl(), probeCustomRuntime(), requestCustomRuntime(), ActiveRunRecord, buildChatFailureMessage(), buildIdentityAgent() (+19 more)

### Community 89 - "EventFrame"
Cohesion: 0.07
Nodes (30): EventFrame, GatewayGapInfo, GatewayStatus, resolveSessionKeyFromAgentList(), sendAgentHandoffViaRuntime(), sendDirectedAgentMessageViaRuntime(), createRuntimeProvider(), DEMO_RUNTIME_CAPABILITIES (+22 more)

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
Cohesion: 0.28
Nodes (10): normalizeText(), POST(), runtime, TextMessageRequestBody, buildConfirmationText(), buildMockTextMessageScenario(), buildPromptText(), formatRecipientLabel() (+2 more)

### Community 94 - "agents/agentFiles.ts"
Cohesion: 0.12
Nodes (25): AgentEditorModalProps, AgentEditorSection, editorSections, AgentBrainPanel(), AgentBrainPanelSection(), AgentFileProvenance(), AgentFilesState, useAgentFilesEditor() (+17 more)

### Community 95 - "agentFleetHydrationDerivation.ts"
Cohesion: 0.13
Nodes (23): AgentsListResult, DerivedHydrateAgentFleetResult, DeriveFleetHydrationInput, deriveHydrateAgentFleetResult(), ExecApprovalsSnapshot, ExecAsk, ExecHost, ExecPolicyEntry (+15 more)

### Community 96 - "deleteAgentOperation.ts"
Cohesion: 0.15
Nodes (16): deleteAgentRecordViaStudio(), DeleteAgentTransactionDeps, DeleteAgentTransactionResult, deleteAgentViaStudio(), EMPTY_TRASH_RESULT, FetchJson, GatewayAgentStateMove, RestoreAgentStateResult (+8 more)

### Community 97 - "tasks/types.ts"
Cohesion: 0.15
Nodes (17): TaskBoardPanel(), KanbanImmersiveScreen(), formatRelativeTime(), STATUS_LABELS, STATUS_ORDER, stopAndGetCardId(), TaskBoardView(), TASK_BOARD_SOURCES (+9 more)

### Community 98 - "PI + Chat Streaming (Studio Side)"
Cohesion: 0.08
Nodes (24): Connect failures, Connect handshake, Debugging Checklist (When Chat “Feels Buggy”), End-To-End Flow (PI Run -> UI), `event: "agent"` payload, `event: "chat"` payload, Exec Approvals In Chat (Related To “PI Runs”), High-Level Network Path (+16 more)

### Community 99 - "index.js"
Cohesion: 0.07
Nodes (35): selfsigned@^5.5.0, selfsigned, createAccessGate(), createRateLimiter(), parseCookies(), resolveClientIp(), safeCompare(), buildErrorResponse() (+27 more)

### Community 100 - "runtimeEventBridge.ts"
Cohesion: 0.10
Nodes (20): AssistantCompletionTimestampInput, DedupeRunLinesResult, extractMessageTimestamp(), GatewayEventKind, HistoryLinesResult, HistorySyncPatchInput, LifecyclePatchInput, LifecyclePhase (+12 more)

### Community 101 - "remove/route.ts"
Cohesion: 0.24
Nodes (12): normalizeRemoveRequest(), normalizeRequired(), POST(), REMOVABLE_SOURCES, runtime, isPathInside(), normalizeRequiredPath(), removeSkillLocally() (+4 more)

### Community 102 - "personalityBuilder.ts"
Cohesion: 0.15
Nodes (23): buildIdentityFileDraft(), AgentFilesInput, cleanLabel(), cleanValue(), IDENTITY_PLACEHOLDER_VALUES, isIdentityPlaceholder(), isSectionHeading(), isUserContextPlaceholder() (+15 more)

### Community 103 - "Custom Runtime Provider Spec"
Cohesion: 0.09
Nodes (21): Capability Philosophy, Core Principle, Current Branch Status, Custom Metadata Surface, Custom Runtime Provider Spec, Event Model, Goal, Implementation Strategy (+13 more)

### Community 104 - "AgentSettingsPanel.tsx"
Cohesion: 0.14
Nodes (19): AgentBrainPanelProps, AgentInspectHeader(), AgentInspectHeaderProps, AgentSettingsPanel(), AgentSettingsPanelProps, applyTemplateDefaults(), arePermissionsDraftEqual(), createInitialCronDraft() (+11 more)

### Community 105 - "GatewayClient"
Cohesion: 0.10
Nodes (10): GatewayClient, ensureGatewayReloadModeHotForLocalStudio(), GatewayConfigSnapshot, isRecord(), resolveReloadModeFromConfig(), shouldAwaitDisconnectRestartForReloadMode(), shouldAwaitDisconnectRestartForRemoteMutation(), shouldRetryConfigWrite() (+2 more)

### Community 106 - "README.md"
Cohesion: 0.11
Nodes (10): Code Of Conduct, Enforcement, Expected Behavior, Our Pledge, Unacceptable Behavior, Multi-Agent Beta, Maintainer Contact Notes, Public Help (+2 more)

### Community 107 - "claw3d"
Cohesion: 0.10
Nodes (20): context, dockerfile, build, container_name, env_file, environment, image, network_mode (+12 more)

### Community 108 - "Universal Backend Plan"
Cohesion: 0.10
Nodes (20): Capability Matrix, Core Adapter Contract, Event Model, Hermes Provider, High-Value PR Split, Near-Term Guidance For Luke, OpenClaw Provider, PR 1: Runtime Abstraction (+12 more)

### Community 109 - "useRunLog.ts"
Cohesion: 0.21
Nodes (13): formatClockTime(), formatDuration(), HistoryPanel(), TRIGGER_LABELS, findAgentForRunEvent(), resolveLifecyclePhase(), resolveRunTrigger(), RunOutcomeKind (+5 more)

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
Cohesion: 0.10
Nodes (21): API Route Inventory, Builder Stack, Code Documentation, Contributor Footguns, Documentation Philosophy, Folder Structure Conventions, How Desk Assignment Works, How Office Motion Works (+13 more)

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

### Community 121 - "GatewayResponseError"
Cohesion: 0.17
Nodes (5): GatewayErrorPayload, GatewayResponseError, createWebchatBlockedPatchError(), GatewayBrowserClient, createWebchatBlockedPatchError()

### Community 122 - "coerceString"
Cohesion: 0.19
Nodes (21): coerceString(), mergeGatewayConnectionState(), mergeGatewayProfiles(), mergeGatewaySettings(), normalizeCompanyField(), normalizeCompanyRoleTitles(), normalizeFocusFilter(), normalizeGatewayAdapterType() (+13 more)

### Community 123 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 124 - "layout/route.ts"
Cohesion: 0.22
Nodes (17): fetchRemoteOfficeLayoutSnapshot(), GET(), PUT(), runtime, deriveRemoteLayoutUrlFromPresenceUrl(), isRecord(), normalizeOfficeLayoutSnapshot(), OfficeLayoutSnapshot (+9 more)

### Community 125 - "RunningAvatarLoader"
Cohesion: 0.16
Nodes (19): OfficeLoadingFallback(), OfficePage(), readDebugFlag(), AgentAvatarPreview3D(), GatewayConnectScreen(), GatewayConnectScreenProps, resolveLocalGatewayPort(), box() (+11 more)

### Community 126 - "specialLatestUpdateOperation.ts"
Cohesion: 0.19
Nodes (13): buildLatestUpdatePatch(), LatestUpdateIntent, LatestUpdateKind, resolveLatestUpdateIntent(), resolveLatestUpdateKind(), ChatHistoryMessage, ChatHistoryResult, createSpecialLatestUpdateOperation() (+5 more)

### Community 127 - "buildAgentMainSessionKey"
Cohesion: 0.23
Nodes (14): SummaryPreviewSnapshot, normalizeRemoteGatewayUrl(), useRemoteOfficePresence(), UseRemoteOfficePresenceParams, UseRemoteOfficePresenceResult, buildAgentMainSessionKey(), buildOfficePresenceSnapshotFromGateway(), GatewayAgentsListEntry (+6 more)

### Community 128 - "AgentEffectsSystem.ts"
Cohesion: 0.19
Nodes (10): AgentEffectsSystem, AgentEffectsSystemParams, AvatarState, stateColor(), thoughtFromSeed(), THOUGHTS, NavGrid2D, Waypoint (+2 more)

### Community 129 - "Permissions, Sandboxing, and Workspaces (Studio -> Gateway -> PI)"
Cohesion: 0.08
Nodes (26): Capabilities Permissions Updates, Debug Checklist (When Something Feels “Wrong”), Glossary, Hard Enforcement: Filesystem Tool Root Guard, How Studio Chooses the Default Workspace Path, Mental Model (First Principles), One-Shot Sandbox Tool Policy Repair, OpenClaw (Upstream): Sandbox Semantics (+18 more)

### Community 130 - "studioRoute.ts"
Cohesion: 0.26
Nodes (5): @playwright/test, createStudioRoute(), DEFAULT_SETTINGS, stubStudioRoute(), StudioSettingsFixture

### Community 131 - "vitest"
Cohesion: 0.06
Nodes (27): vitest, main(), parseArgs(), tryReadGatewayTokenFromOpenclawCli(), contents, destPath, repoRoot, isRecord() (+19 more)

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

### Community 146 - "settings-store.ts"
Cohesion: 0.31
Nodes (12): buildEnvGatewayDefaults(), buildGatewaySettings(), buildLocalProfile(), isRecord(), loadLocalGatewayDefaults(), mergeGatewayProfiles(), normalizeAdapterType(), readOpenclawGatewayDefaults() (+4 more)

### Community 147 - "shared-store-client.ts"
Cohesion: 0.30
Nodes (10): archiveSharedTaskRecord(), fetchWithTimeout(), isRetryable(), listSharedTaskRecords(), parseResponse(), sleep(), TaskStoreRequestError, upsertSharedTaskRecord() (+2 more)

### Community 148 - "agentMessaging.ts"
Cohesion: 0.22
Nodes (7): buildAgentHandoffInstruction(), GatewayAgentsListResult, GatewayCallLike, resolveLabel(), RuntimeAgentHandoffPayload, RuntimeAgentMessagePayload, buildAgentInstruction()

### Community 149 - "AgentAvatarProfile"
Cohesion: 0.16
Nodes (20): AgentAvatar(), AgentAvatarProps, AVATAR_ACCENTS, AVATAR_FOREGROUNDS, AVATAR_PALETTE, buildAvatarDataUrl(), buildAvatarLabel(), buildAvatarSvg() (+12 more)

### Community 150 - "randomUUID"
Cohesion: 0.23
Nodes (7): AgentCreateModal(), AgentCreateModalContent(), AgentCreateModalProps, resolveInitialName(), AgentCreateModalSubmitPayload, CreateAgentMutationLifecycleDeps, openModal()

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
Cohesion: 0.09
Nodes (21): Before you start, Contributing, Local setup, Minimal issue template, Minimal PR template, Pull requests, Reporting issues, Support And Routing (+13 more)

### Community 155 - "Task Manager"
Cohesion: 0.20
Nodes (9): File format, Matching rules, Required workflow, Response rules, Status rules, Storage location, Task fields, Task Manager (+1 more)

### Community 156 - "TODO Board"
Cohesion: 0.20
Nodes (9): Field rules, File format, Mutation rules, Required workflow, Response style, Storage location, Supported actions, TODO Board (+1 more)

### Community 157 - "upload/route.ts"
Cohesion: 0.25
Nodes (10): ALLOWED_CONTENT_TYPES, ALLOWED_EXTENSIONS, CONTENT_TYPE_BY_EXT, isTextContentType(), POST(), resolveUploadContentType(), runtime, sanitizeFilename() (+2 more)

### Community 158 - "janitors.ts"
Cohesion: 0.25
Nodes (9): buildJanitorActorsForCue(), hashString(), JANITOR_SWEEP_DURATION_MS, JANITOR_TOOLS, pruneExpiredJanitorActors(), JANITOR_ENTRY_POINTS, JANITOR_EXIT_POINTS, ROAM_POINTS (+1 more)

### Community 159 - "clawd3d-start.sh"
Cohesion: 0.44
Nodes (8): find_free_port(), info(), log(), pids_on_port(), port_free(), port_owned_by(), clawd3d-start.sh script, warn()

### Community 160 - "taskBoardState.ts"
Cohesion: 0.52
Nodes (6): compareCards(), sortTaskBoardCards(), TaskBoardAction, taskBoardReducer(), upsertTaskBoardCard(), defaultTaskBoardPreference()

### Community 161 - "chatSendOperation.ts"
Cohesion: 0.16
Nodes (15): extractImmediateAssistantText(), GatewayClientLike, resolveChatSendCompletionMode(), resolveLatestTranscriptTimestampMs(), sendChatMessageViaStudio(), SendDispatch, SendDispatchAction, TranscriptAppendMeta (+7 more)

### Community 162 - "useVoiceRecorder.ts"
Cohesion: 0.33
Nodes (8): PREFERRED_VOICE_MIME_TYPES, resolvePreferredVoiceMimeType(), resolveVoiceErrorMessage(), resolveVoiceExtension(), stopVoiceStream(), useVoiceRecorder(), VoiceRecorderState, VoiceSendPayload

### Community 163 - "Security Policy"
Cohesion: 0.33
Nodes (5): Current Security Limitations, Deployment Notes, Reporting A Vulnerability, Scope, Security Policy

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
Cohesion: 0.18
Nodes (9): Already In Progress Or Partially Covered, Before Starting Bigger Work, Good First Contribution Areas, Later, Next, Now, Product Ideas To Reduce OpenClaw Dependency, Roadmap (+1 more)

### Community 168 - "Top-Level Code Map"
Cohesion: 0.29
Nodes (7): `scripts`, `server`, `src/app`, `src/features`, `src/lib`, `tests`, Top-Level Code Map

### Community 169 - "useStudioOfficePreference.ts"
Cohesion: 0.53
Nodes (5): useStudioOfficePreference(), UseStudioOfficePreferenceParams, defaultStudioOfficePreferencePublic(), resolveOfficePreferencePublic(), StudioOfficePreferencePublic

### Community 170 - "contact_links"
Cohesion: 0.33
Nodes (5): blank_issues_enabled, contact_links, about, name, url

### Community 171 - "StudioGatewayAdapterType"
Cohesion: 0.40
Nodes (4): SettingsPanelProps, StudioGatewayAdapterType, CURATED_ELEVENLABS_VOICES, CuratedVoiceOption

### Community 172 - "parseAgentIdFromSessionKey"
Cohesion: 0.60
Nodes (4): findAgentBySessionKey(), isSameSessionKey(), parseAgentIdFromSessionKey(), resolveAgentIdForSessionKey()

### Community 175 - "9) Troubleshooting"
Cohesion: 0.33
Nodes (6): `401` or auth errors from Claw3D, 9) Troubleshooting, Claw3D still cannot connect after token is correct, `EPROTO` or `wrong version number`, Gateway itself is unhealthy, Tailscale URL works nowhere

## Knowledge Gaps
- **9 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `vitest` connect `vitest` to `useTaskBoardController.ts`, `react`, `resolveStateDir`, `onboarding/index.ts`, `navigation.ts`, `GatewayClient.ts`, `hermes-gateway-adapter.js`, `media/route.ts`, `execApprovals.ts`, `agentSettingsMutationWorkflow.ts`, `useConfigMutationQueue.ts`, `agentConfig.ts`, `gatewayRuntimeEventHandler.ts`, `chatSendOperation.ts`, `execApprovalControlLoopWorkflow.ts`, `historySyncOperation.ts`, `agentMessaging.ts`, `AgentAvatarProfile`, `randomUUID`, `agentPermissionsOperation.ts`, `claw3doctor.mjs`, `chatItems.ts`, `EventFrame`, `GatewayClient`, `useAgentSettingsMutationController.ts`, `settings.ts`, `janitors.ts`, `mutationLifecycleWorkflow.ts`, `chatSendOperation.ts`, `floors.ts`, `coordinator.ts`, `gatewayClient.reconnect-recovery.test.ts`, `package.json`, `eventTriggers.ts`, `cron/types.ts`, `deskDirectives.ts`, `parseAgentIdFromSessionKey`, `AgentChatPanel.tsx`, `planning.ts`, `isRecord`, `profile.ts`, `triggers.ts`, `presentation.ts`, `colorSemantics.ts`, `runtimeChatEventWorkflow.ts`, `transcript.ts`, `browser-preview/route.ts`, `next`, `execApprovalControlLoopWorkflow.ts`, `AgentsPageScreen.tsx`, `models.ts`, `voiceTranscription.ts`, `randomUUID`, `AgentsPageScreen`, `gateway.ts`, `GatewayBrowserClient.ts`, `AgentAvatarPreview3D.tsx`, `useRuntimeSyncController.ts`, `settingsRouteWorkflow.ts`, `EventFrame`, `agents/agentFiles.ts`, `agentFleetHydrationDerivation.ts`, `deleteAgentOperation.ts`, `tasks/types.ts`, `index.js`, `remove/route.ts`, `personalityBuilder.ts`, `AgentSettingsPanel.tsx`, `GatewayClient`, `pathfinding.ts`, `StudioSettingsCoordinator`, `cleanup-ux-artifacts.mjs`, `createAgentBootstrapOperation.ts`, `GatewayResponseError`, `specialLatestUpdateOperation.ts`?**
  _High betweenness centrality (0.103) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `OfficeScreen()` (e.g. with `Current Post-Merge Sequence` and `Immediate Next Deliverables`) actually correct?**
  _`OfficeScreen()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `react` be split into smaller, more focused modules?**
  _Cohesion score 0.09848484848484848 - nodes in this community are weakly interconnected._
- **Why does `react` connect `react` to `useTaskBoardController.ts`, `toWorld`, `OfficeScreen.tsx`, `onboarding/index.ts`, `GatewayClient.ts`, `RetroOffice3D.tsx`, `service.ts`, `useUsageAnalytics.ts`, `presentation.ts`, `voiceReply/provider.ts`, `useConfigMutationQueue.ts`, `spotify-jukebox/store.ts`, `chatSendOperation.ts`, `AgentAvatarProfile`, `randomUUID`, `settings.ts`, `EventFrame`, `useAgentSettingsMutationController.ts`, `GatewayClient`, `github.ts`, `constants.ts`, `floors.ts`, `useVoiceRecorder.ts`, `package.json`, `cron/types.ts`, `useStudioOfficePreference.ts`, `StudioGatewayAdapterType`, `AgentChatPanel.tsx`, `visualSystems.tsx`, `profile.ts`, `district.ts`, `triggers.ts`, `colorSemantics.ts`, `transcript.ts`, `browser-preview/route.ts`, `AgentsPageScreen.tsx`, `models.ts`, `randomUUID`, `marketplace.ts`, `dependencies`, `OfficePhaserCanvas.tsx`, `AgentAvatarPreview3D.tsx`, `useRuntimeSyncController.ts`, `settingsRouteWorkflow.ts`, `EventFrame`, `agents/agentFiles.ts`, `tasks/types.ts`, `AgentSettingsPanel.tsx`, `useRunLog.ts`, `lucide-react`, `useOfficeBuilderStore.ts`, `StudioSettingsCoordinator`, `RunningAvatarLoader`, `buildAgentMainSessionKey`?**
  _High betweenness centrality (0.072) - this node is a cross-community bridge._
- **Should `resolveStateDir` be split into smaller, more focused modules?**
  _Cohesion score 0.10160427807486631 - nodes in this community are weakly interconnected._
- **Why does `next` connect `next` to `resolveStateDir`, `OfficeScreen.tsx`, `media/route.ts`, `call/mock.ts`, `service.ts`, `voiceReply/provider.ts`, `loadStudioSettings`, `AgentAvatarProfile`, `github.ts`, `upload/route.ts`, `package.json`, `settings-store.ts`, `browser-preview/route.ts`, `AgentsPageScreen.tsx`, `voiceTranscription.ts`, `office/store.ts`, `dependencies`, `SmsBoothImmersiveScreen.tsx`, `index.js`, `remove/route.ts`, `layout/route.ts`?**
  _High betweenness centrality (0.048) - this node is a cross-community bridge._
- **Should `toWorld` be split into smaller, more focused modules?**
  _Cohesion score 0.10272536687631027 - nodes in this community are weakly interconnected._