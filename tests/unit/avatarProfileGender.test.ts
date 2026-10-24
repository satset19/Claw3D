import { describe, expect, it } from "vitest";
import {
  AGENT_AVATAR_BOTTOM_STYLE_OPTIONS,
  AGENT_AVATAR_GENDER_OPTIONS,
  AGENT_AVATAR_HAIR_STYLE_OPTIONS,
  createAgentAvatarProfileFromSeed,
  normalizeAgentAvatarProfile,
} from "@/lib/avatars/profile";

const FEMALE_HAIR = ["long", "ponytail", "bob", "bun"];
const MALE_HAIR = ["short", "parted", "spiky", "bun"];

describe("avatar gender", () => {
  it("exposes gender, hair and skirt options", () => {
    expect(AGENT_AVATAR_GENDER_OPTIONS.map((o) => o.id)).toEqual(["male", "female"]);
    const hair = AGENT_AVATAR_HAIR_STYLE_OPTIONS.map((o) => o.id);
    expect(hair).toEqual(expect.arrayContaining(["long", "ponytail", "bob"]));
    expect(AGENT_AVATAR_BOTTOM_STYLE_OPTIONS.map((o) => o.id)).toContain("skirt");
  });

  it("defaults missing gender to male so saved profiles keep their look", () => {
    const saved = createAgentAvatarProfileFromSeed("x") as unknown as Record<string, unknown>;
    const legacy = { ...saved, body: { skinTone: "#f7d7c2" } };
    expect(normalizeAgentAvatarProfile(legacy, "x").body.gender).toBe("male");
  });

  it("keeps a valid gender and rejects garbage", () => {
    const base = createAgentAvatarProfileFromSeed("y");
    const female = normalizeAgentAvatarProfile(
      { ...base, body: { ...base.body, gender: "female" } },
      "y",
    );
    expect(female.body.gender).toBe("female");
    const bad = normalizeAgentAvatarProfile(
      { ...base, body: { ...base.body, gender: "robot" } },
      "y",
    );
    expect(bad.body.gender).toBe("male");
  });

  it("keeps new hair and skirt values through normalize", () => {
    const base = createAgentAvatarProfileFromSeed("z");
    const out = normalizeAgentAvatarProfile(
      {
        ...base,
        hair: { ...base.hair, style: "ponytail" },
        clothing: { ...base.clothing, bottomStyle: "skirt" },
      },
      "z",
    );
    expect(out.hair.style).toBe("ponytail");
    expect(out.clothing.bottomStyle).toBe("skirt");
    expect(out.version).toBe(1);
  });

  it("seeds both genders deterministically with matching hair pools", () => {
    const profiles = Array.from({ length: 200 }, (_, i) =>
      createAgentAvatarProfileFromSeed(`agent-${i}`),
    );
    const genders = new Set(profiles.map((p) => p.body.gender));
    expect(genders).toEqual(new Set(["male", "female"]));
    for (const p of profiles) {
      const pool = p.body.gender === "female" ? FEMALE_HAIR : MALE_HAIR;
      expect(pool).toContain(p.hair.style);
      if (p.body.gender === "male") expect(p.clothing.bottomStyle).not.toBe("skirt");
    }
    expect(createAgentAvatarProfileFromSeed("agent-7")).toEqual(
      createAgentAvatarProfileFromSeed("agent-7"),
    );
  });
});
