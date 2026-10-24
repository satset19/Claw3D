import { describe, expect, it } from "vitest";
import { getAvatarBodyShape } from "@/lib/avatars/bodyShape";

describe("getAvatarBodyShape", () => {
  it("keeps male proportions identical to the original model", () => {
    expect(getAvatarBodyShape("male")).toEqual({
      torsoWidthScale: 1,
      torsoDepthScale: 1,
      armOffsetScale: 1,
      showLashes: false,
      mouthColor: "#9c4a4a",
    });
  });

  it("gives female avatars a slimmer torso, lashes and lip color", () => {
    const shape = getAvatarBodyShape("female");
    expect(shape.torsoWidthScale).toBeLessThan(1);
    expect(shape.armOffsetScale).toBeLessThan(1);
    expect(shape.showLashes).toBe(true);
    expect(shape.mouthColor).toBe("#c2416b");
  });
});
