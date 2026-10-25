import { describe, it, expect } from "vitest";
import { normalizeAgentAvatarProfile } from "@/lib/avatars/profile";

describe("3D Avatar Custom Color Persistence", () => {
  it("normalizes and preserves both custom colors and imageUrl simultaneously", () => {
    const raw = {
      imageUrl: "/avatars/anime/aiko.svg",
      body: { skinTone: "#112233" },
      hair: { color: "#445566" },
      clothing: {
        topColor: "#778899",
        bottomColor: "#aabbcc",
        shoesColor: "#ddeeff",
      },
    };

    const normalized = normalizeAgentAvatarProfile(raw, "test-agent");
    expect(normalized.imageUrl).toBe("/avatars/anime/aiko.svg");
    expect(normalized.body.skinTone).toBe("#112233");
    expect(normalized.hair.color).toBe("#445566");
    expect(normalized.clothing.topColor).toBe("#778899");
    expect(normalized.clothing.bottomColor).toBe("#aabbcc");
    expect(normalized.clothing.shoesColor).toBe("#ddeeff");
  });
});
