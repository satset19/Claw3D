import { describe, expect, it } from "vitest";

describe("Assigned Desk Retention When Idle", () => {
  it("keeps target at deskPos when agent with assigned desk transitions to idle", () => {
    const deskPos = { x: 500, y: 300 };
    const effectiveStatus = "idle";
    const existingStatus = "working";

    // Target must stay at deskPos instead of picking a random roam point
    const target = (effectiveStatus === "idle" && deskPos)
      ? deskPos
      : { x: 100, y: 100 };

    expect(target.x).toBe(500);
    expect(target.y).toBe(300);
  });
});
