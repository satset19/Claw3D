import { describe, it, expect } from "vitest";
import { normalizeAgentAvatarProfile } from "@/lib/avatars/profile";

describe("normalizeAgentAvatarProfile - imageUrl whitelist", () => {
  it("keeps an allowed /avatars/ url", () => {
    const result = normalizeAgentAvatarProfile(
      { imageUrl: "/avatars/anime/aiko.svg" },
      "seed-a",
    );
    expect(result.imageUrl).toBe("/avatars/anime/aiko.svg");
  });

  it("trims whitespace around allowed urls", () => {
    const result = normalizeAgentAvatarProfile(
      { imageUrl: "  /avatars/anime/haruto.svg  " },
      "seed-a",
    );
    expect(result.imageUrl).toBe("/avatars/anime/haruto.svg");
  });

  it("drops disallowed external urls to null", () => {
    const result = normalizeAgentAvatarProfile(
      { imageUrl: "https://evil.example/x.svg" },
      "seed-a",
    );
    expect(result.imageUrl).toBeNull();
  });

  it("drops non-string imageUrl to null", () => {
    expect(
      normalizeAgentAvatarProfile({ imageUrl: 42 }, "seed-a").imageUrl,
    ).toBeNull();
    expect(
      normalizeAgentAvatarProfile({ imageUrl: null }, "seed-a").imageUrl,
    ).toBeNull();
    expect(
      normalizeAgentAvatarProfile({}, "seed-a").imageUrl,
    ).toBeNull();
  });
});
