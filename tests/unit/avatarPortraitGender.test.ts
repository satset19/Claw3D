import { describe, expect, it } from "vitest";
import { createAgentAvatarProfileFromSeed } from "@/lib/avatars/profile";
import { buildAgentAvatarPortraitSvg } from "@/lib/avatars/profilePortrait";

const make = (gender: "male" | "female", style: "long" | "ponytail" | "bob" | "short") => {
  const p = createAgentAvatarProfileFromSeed("portrait");
  return { ...p, body: { ...p.body, gender }, hair: { ...p.hair, style } };
};

describe("portrait gender", () => {
  it.each(["long", "ponytail", "bob"] as const)("draws %s hair", (style) => {
    expect(buildAgentAvatarPortraitSvg(make("female", style))).toContain(`data-hair="${style}"`);
  });

  it("adds lashes and lip color only for female", () => {
    const f = buildAgentAvatarPortraitSvg(make("female", "long"));
    const m = buildAgentAvatarPortraitSvg(make("male", "short"));
    expect(f).toContain('data-lashes="true"');
    expect(f).toContain("#c2416b");
    expect(m).not.toContain("data-lashes");
    expect(m).toContain("#9c4a4a");
  });
});
