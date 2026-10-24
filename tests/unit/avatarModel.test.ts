import { describe, it, expect } from "vitest";
import { getAvatarModelUrl, hasAvatarModel } from "@/lib/avatars/avatarModel";

describe("avatar model url", () => {
  it("returns male GLB url for male gender", () => {
    expect(getAvatarModelUrl("male")).toBe("/office-assets/models/avatars/male.glb");
    expect(hasAvatarModel("male")).toBe(true);
  });
  it("returns null for female (procedural)", () => {
    expect(getAvatarModelUrl("female")).toBeNull();
    expect(hasAvatarModel("female")).toBe(false);
  });
});
