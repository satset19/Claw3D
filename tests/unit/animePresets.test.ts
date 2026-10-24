import { describe, it, expect } from "vitest";
import fs from "node:fs";
import path from "node:path";
import {
  ANIME_AVATAR_PRESETS,
  findAnimePresetByUrl,
  isAllowedAvatarUrl,
} from "@/lib/avatars/animePresets";

describe("ANIME_AVATAR_PRESETS", () => {
  it("exposes 8 presets with unique ids", () => {
    expect(ANIME_AVATAR_PRESETS.length).toBe(8);
    const ids = ANIME_AVATAR_PRESETS.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("every preset url is under /avatars/anime/ and the file exists on disk", () => {
    for (const p of ANIME_AVATAR_PRESETS) {
      expect(p.url.startsWith("/avatars/anime/")).toBe(true);
      expect(p.license).toMatch(/^CC0/);
      const abs = path.join(process.cwd(), "public", p.url);
      expect(fs.existsSync(abs)).toBe(true);
    }
  });

  it("findAnimePresetByUrl resolves known urls, ignores unknown and empty", () => {
    const first = ANIME_AVATAR_PRESETS[0];
    expect(findAnimePresetByUrl(first.url)?.id).toBe(first.id);
    expect(findAnimePresetByUrl("  " + first.url + "  ")?.id).toBe(first.id);
    expect(findAnimePresetByUrl(null)).toBeNull();
    expect(findAnimePresetByUrl("")).toBeNull();
    expect(findAnimePresetByUrl("/avatars/anime/missing.svg")).toBeNull();
  });

  it("isAllowedAvatarUrl whitelists /avatars/ only", () => {
    expect(isAllowedAvatarUrl("/avatars/anime/aiko.svg")).toBe(true);
    expect(isAllowedAvatarUrl("https://evil.example/x.svg")).toBe(false);
    expect(isAllowedAvatarUrl("/foo.svg")).toBe(false);
    expect(isAllowedAvatarUrl("")).toBe(false);
    expect(isAllowedAvatarUrl(null)).toBe(false);
  });
});
