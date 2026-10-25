import { describe, it, expect } from "vitest";
import {
  CHARACTER_COLOR_PALETTES,
  getCharacterColorPalette,
} from "@/lib/avatars/colorPalettes";
import { ANIME_AVATAR_PRESETS } from "@/lib/avatars/animePresets";

describe("Character Color Palettes", () => {
  it("defines palettes for all 8 anime avatar presets", () => {
    for (const preset of ANIME_AVATAR_PRESETS) {
      const palette = CHARACTER_COLOR_PALETTES[preset.id];
      expect(palette).toBeDefined();
      expect(palette.skin).toMatch(/^#[0-9a-fA-F]{6}$/);
      expect(palette.hair).toMatch(/^#[0-9a-fA-F]{6}$/);
      expect(palette.top).toMatch(/^#[0-9a-fA-F]{6}$/);
      expect(palette.bottom).toMatch(/^#[0-9a-fA-F]{6}$/);
      expect(palette.shoes).toMatch(/^#[0-9a-fA-F]{6}$/);
    }
  });

  it("resolves palette by preset url or slug", () => {
    expect(getCharacterColorPalette("/avatars/anime/aiko.svg")?.name).toBe("Aiko");
    expect(getCharacterColorPalette("ren")?.name).toBe("Ren");
    expect(getCharacterColorPalette(null)).toBeNull();
  });
});
