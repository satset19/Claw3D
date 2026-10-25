import { describe, it, expect } from "vitest";
import { AGENT_SCALE } from "@/features/retro-office/core/constants";

describe("Avatar Scale and Sizing", () => {
  it("has a valid AGENT_SCALE constant", () => {
    expect(AGENT_SCALE).toBe(1.75);
  });
});
