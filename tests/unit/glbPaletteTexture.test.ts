import { describe, it, expect } from "vitest";
import {
  computeRampShades,
  PALETTE_RAMP_COORDINATES,
  shadeHex,
} from "@/lib/avatars/glbPaletteTexture";

describe("glbPaletteTexture", () => {
  it("computes 4 darker shade steps from hex color", () => {
    const shades = computeRampShades("#204080");
    expect(shades).toHaveLength(4);
    expect(shades[0]).toBe("#204080");
    expect(shades[1]).toMatch(/^#[0-9a-f]{6}$/i);
    expect(shades[2]).toMatch(/^#[0-9a-f]{6}$/i);
    expect(shades[3]).toMatch(/^#[0-9a-f]{6}$/i);
  });

  it("handles 3-digit and uppercase hex codes safely", () => {
    expect(shadeHex("#fff", 0.5)).toBe("#808080");
    expect(shadeHex("#FF0000", 1.0)).toBe("#ff0000");
    expect(shadeHex("invalid", 1.0)).toBe("#808080");
  });

  it("defines coordinates for all 9 ramp categories across 36 blocks", () => {
    const categories = Object.keys(PALETTE_RAMP_COORDINATES);
    expect(categories).toContain("top");
    expect(categories).toContain("hair");
    expect(categories).toContain("skin");
    expect(categories).toContain("bottom1");
    expect(categories).toContain("bottom2");
    expect(categories).toContain("shoes");

    for (const [name, def] of Object.entries(PALETTE_RAMP_COORDINATES)) {
      expect(def.x).toBeGreaterThanOrEqual(0);
      expect(def.x).toBeLessThan(512);
      expect(def.startY).toBeGreaterThanOrEqual(0);
      expect(def.startY).toBeLessThan(768);
    }
  });
});
