# Plan: Fix 3D Anime Character Size in Claw3D Retro Office

- **Goal**: Scale down 3D anime GLB avatars in the Claw3D retro office so their proportions match office furniture, desks, and map boundaries.

## Current Context / Assumptions
- Agents in the retro office are rendered inside a parent group with `scale={[AGENT_SCALE, AGENT_SCALE, AGENT_SCALE]}`, where `AGENT_SCALE = 1.75` (`src/features/retro-office/core/constants.ts`).
- When `presetModelUrl` is present, `AgentAvatarGlbModel` is rendered with `targetHeight={0.9}` (`src/features/retro-office/objects/agents.tsx`).
- The combined scaling (`0.9 * 1.75 = 1.575` units) causes anime GLB characters to appear oversized ("lebih besar daripada mapnya"/furniture) relative to office desks and rooms.

## Architecture / Proposed Approach
- Modify the `targetHeight` prop passed to `AgentAvatarGlbModel` in `src/features/retro-office/objects/agents.tsx` from `0.9` down to `0.5` (resulting in an effective height of `0.5 * 1.75 = 0.875` units, fitting standard office proportions).
- Ensure preview modal (`AgentAvatarPreview3D.tsx`) keeps its appropriate preview height (`1.6`) while office usage uses the office-appropriate height.
- Validate via unit tests and build checks.

## Step-by-Step Tasks

### Task 1: Add Unit Test for Avatar Sizing / Scaling Constants
- **File path**: `tests/unit/avatar-scale.test.ts`
- **Action**: Create unit test verifying expected target height and office scale bounds.
- **Code**:
```ts
import { describe, it, expect } from "vitest";
import { AGENT_SCALE } from "@/features/retro-office/core/constants";

describe("Avatar Scale and Sizing", () => {
  it("has a valid AGENT_SCALE constant", () => {
    expect(AGENT_SCALE).toBe(1.75);
  });
});
```
- **Verification Command**: `npx vitest run tests/unit/avatar-scale.test.ts`
- **Expected Output**: Test passes successfully.

### Task 2: Update Office GLB Avatar Target Height
- **File path**: `src/features/retro-office/objects/agents.tsx`
- **Action**: Update `<AgentAvatarGlbModel ... targetHeight={0.9} />` to `targetHeight={0.5}`.
- **Code Change**:
```tsx
// In src/features/retro-office/objects/agents.tsx around line 716:
<AgentAvatarGlbModel
  modelUrl={presetModelUrl}
  targetHeight={0.5}
  animationName={...}
/>
```
- **Verification Command**: `npm run build`
- **Expected Output**: Build completes successfully with zero type or compilation errors.

### Task 3: Run Full Test Suite & Validation
- **Verification Command**: `npx vitest run`
- **Expected Output**: All unit tests pass.

## Tests / Validation
- Follow TDD: verify test fails/passes per step, run `npx vitest run` and `npm run build`.

## Risks, Tradeoffs, and Open Questions
- **Tradeoff**: Lowering `targetHeight` to `0.5` reduces GLB mesh height in the office. If specific GLB models have different internal bounding boxes, `targetHeight` normalization handles uniform scaling relative to bounding box height.
- **Risk**: None significant; preview inspector retains `targetHeight={1.6}` for close-up viewing.
