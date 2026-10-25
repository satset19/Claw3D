# Plan: Custom Color Support untuk Avatar 3D di Claw3D

## Goal
Mengaktifkan kustomisasi warna penuh (kulit, rambut, atasan, bawahan, dan sepatu) pada avatar 3D GLB dan procedural di Claw3D secara real-time di editor preview maupun retro office map tanpa menghilangkan model 3D yang dipilih.

## Current Context / Assumptions
- Repo: `~/claw3d` (Next.js 16 + React Three Fiber `@react-three/drei`, `three`).
- Saat ini Claw3D memiliki 8 model anime GLB (`aiko`, `haruto`, `yumi`, `kenji`, `sakura`, `ren`, `mina`, `takeshi`) di `public/office-assets/models/avatars/`.
- Setiap model 3D GLB menggunakan 1 texture atlas PNG (dimensi 512x2048) di mana area UV baris Y=0..768 terbagi menjadi 36 blok palet warna berukuran 32x32 pixel (9 ramp warna vertikal dengan 4 tingkat shading: highlight, midtone, dark, shadow).
- Masalah utama saat ini:
  1. Pada `AgentAvatarEditorPanel.tsx`, setiap kali pengguna memilih swatch warna atau memilih warna kustom via `<input type="color">`, state `imageUrl` dipaksa menjadi `null` (`imageUrl: null`), sehingga model 3D langsung hilang dan kembali menjadi avatar kotak prosedural.
  2. Komponen `AgentAvatarGlbModel.tsx` hanya memuat tekstur statis PNG (`textures/${charId}.png`) dan belum mengonsumsi parameter warna dinamis dari `profile`.
  3. Karakter 3D di office map (`AgentModel` di `agents.tsx`) belum meneruskan warna profil agen ke `AgentAvatarGlbModel`.
  4. CATATAN PENTING: Nilai `targetHeight` pada seluruh pemanggilan GLB (`AgentAvatarGlbModel`) TIDAK BOLEH DIUBAH sama sekali (harus mempertahankan nilai aslinya).

## Architecture / Proposed Approach
1. **Dynamic Palette Atlas Texture Generator (`glbPaletteTexture.ts`)**:
   Membuat modul utilitas untuk menghasilkan `THREE.CanvasTexture` dinamis berukuran 512x2048 berbasis `<canvas>`. Modul ini menyalin tekstur dasar karakter dan mengecat ulang 36 blok palet UV (rambut, kulit, atasan, bawahan, sepatu) sesuai kode HEX warna yang dipilih dengan 4 shade multiplier (1.0, 0.85, 0.70, 0.55).
2. **Koneksi Warna ke 3D Renderer (`AgentAvatarGlbModel.tsx` & `agents.tsx`)**:
   Meneruskan prop warna (`colors: { skin, hair, top, bottom, shoes }`) ke `AgentAvatarGlbModel` dan memperbarui `material.map` secara reaktif saat warna diubah, TANPA mengubah nilai `targetHeight`.
3. **Editor UI Preservation (`AgentAvatarEditorPanel.tsx`)**:
   Menghapus pemaksaan `imageUrl: null` pada kontrol warna (skin tone, hair color, top color, bottom color, shoes color) sehingga model 3D tetap aktif saat warna dikustomisasi. Saat preset karakter anime dipilih, draft warna diinisialisasi dengan palet bawaan karakter tersebut agar kontrol warna langsung tersinkronisasi.
4. **Sinkronisasi Portrait 2D (`AgentAvatar.tsx`)**:
   Membuat helper recolor SVG sederhana agar portrait 2D di sidebar dan chat turut menampilkan warna rambut dan kulit kustom yang dipilih.

---

## Step-by-Step Tasks

### Task 1 — TDD: Unit Test untuk Glb Palette Texture Generator
- **File path**: `tests/unit/glbPaletteTexture.test.ts`
- **Tujuan**: Memastikan perhitungan shade RGB, mapping blok koordinat palet, dan validasi warna HEX berjalan akurat tanpa dependensi browser DOM berat.
- **Kode**:
```ts
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
    // Steps should be progressively darker
    expect(shades[1]).toMatch(/^#[0-9a-f]{6}$/i);
    expect(shades[2]).toMatch(/^#[0-9a-f]{6}$/i);
    expect(shades[3]).toMatch(/^#[0-9a-f]{6}$/i);
  });

  it("handles 3-digit and uppercase hex codes safely", () => {
    expect(shadeHex("#fff", 0.5)).toBe("#7f7f7f");
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
```
- **Perintah Verifikasi (Gagal pada awal)**:
```bash
cd ~/claw3d && npx vitest run tests/unit/glbPaletteTexture.test.ts
```
- **Expected Output**: FAIL (modul belum dibuat).

---

### Task 2 — Implementasi Modul `glbPaletteTexture.ts`
- **File path**: `src/lib/avatars/glbPaletteTexture.ts`
- **Tujuan**: Logika kalkulasi shade warna dan generator canvas texture untuk GLB texture atlas Gobkit 512x2048.
- **Kode**:
```ts
import * as THREE from "three";

export type CustomAvatarColors = {
  skin?: string;
  hair?: string;
  top?: string;
  bottom?: string;
  shoes?: string;
  accent?: string;
};

export type RampDefinition = {
  x: number;
  startY: number;
  stepHeight: number;
};

// 9 vertical ramps of 32x32 blocks in the 512x2048 texture atlas
export const PALETTE_RAMP_COORDINATES: Record<string, RampDefinition> = {
  top: { x: 0, startY: 0, stepHeight: 32 },
  accent: { x: 32, startY: 0, stepHeight: 32 },
  hair: { x: 480, startY: 0, stepHeight: 32 },
  topInner: { x: 0, startY: 128, stepHeight: 32 },
  shoes: { x: 320, startY: 128, stepHeight: 32 },
  skin: { x: 0, startY: 256, stepHeight: 32 },
  jacket: { x: 256, startY: 512, stepHeight: 32 },
  bottom1: { x: 160, startY: 640, stepHeight: 32 },
  bottom2: { x: 192, startY: 640, stepHeight: 32 },
};

const SHADE_MULTIPLIERS = [1.0, 0.85, 0.7, 0.55] as const;

export const parseHex = (hex: string): [number, number, number] | null => {
  const clean = hex.trim().replace(/^#/, "");
  if (clean.length === 3) {
    const r = Number.parseInt(clean[0] + clean[0], 16);
    const g = Number.parseInt(clean[1] + clean[1], 16);
    const b = Number.parseInt(clean[2] + clean[2], 16);
    return [r, g, b];
  }
  if (clean.length === 6) {
    const r = Number.parseInt(clean.slice(0, 2), 16);
    const g = Number.parseInt(clean.slice(2, 4), 16);
    const b = Number.parseInt(clean.slice(4, 6), 16);
    return [r, g, b];
  }
  return null;
};

export const shadeHex = (hex: string, factor: number): string => {
  const rgb = parseHex(hex);
  if (!rgb) return "#808080";
  const r = Math.min(255, Math.max(0, Math.round(rgb[0] * factor)));
  const g = Math.min(255, Math.max(0, Math.round(rgb[1] * factor)));
  const b = Math.min(255, Math.max(0, Math.round(rgb[2] * factor)));
  return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
};

export const computeRampShades = (baseHex: string): string[] => {
  return SHADE_MULTIPLIERS.map((factor) => shadeHex(baseHex, factor));
};

export const applyColorsToPaletteCanvas = (
  canvas: HTMLCanvasElement,
  baseImage: HTMLImageElement | HTMLCanvasElement,
  colors: CustomAvatarColors,
): void => {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  canvas.width = 512;
  canvas.height = 2048;
  ctx.drawImage(baseImage, 0, 0, 512, 2048);

  const drawRamp = (def: RampDefinition, hexColor: string | undefined) => {
    if (!hexColor) return;
    const shades = computeRampShades(hexColor);
    for (let step = 0; step < 4; step += 1) {
      ctx.fillStyle = shades[step];
      ctx.fillRect(def.x, def.startY + step * def.stepHeight, 32, def.stepHeight);
    }
  };

  if (colors.top) {
    drawRamp(PALETTE_RAMP_COORDINATES.top, colors.top);
    drawRamp(PALETTE_RAMP_COORDINATES.jacket, colors.top);
  }
  if (colors.accent) {
    drawRamp(PALETTE_RAMP_COORDINATES.accent, colors.accent);
  }
  if (colors.hair) {
    drawRamp(PALETTE_RAMP_COORDINATES.hair, colors.hair);
  }
  if (colors.skin) {
    drawRamp(PALETTE_RAMP_COORDINATES.skin, colors.skin);
  }
  if (colors.shoes) {
    drawRamp(PALETTE_RAMP_COORDINATES.shoes, colors.shoes);
  }
  if (colors.bottom) {
    drawRamp(PALETTE_RAMP_COORDINATES.bottom1, colors.bottom);
    drawRamp(PALETTE_RAMP_COORDINATES.bottom2, colors.bottom);
  }
};
```
- **Perintah Verifikasi**:
```bash
cd ~/claw3d && npx vitest run tests/unit/glbPaletteTexture.test.ts
```
- **Expected Output**: 3 passed.

---

### Task 3 — Update `AgentAvatarGlbModel.tsx` untuk Dynamic Canvas Texture
- **File path**: `src/features/agents/components/AgentAvatarGlbModel.tsx`
- **Tujuan**: Menerima prop `colors` opsional dan menghasilkan `THREE.CanvasTexture` dinamis saat custom colors diberikan, dengan fallback ke tekstur statis per karakter jika tidak ada custom color.
- **Implementasi**:
  1. Tambahkan prop `colors?: CustomAvatarColors | null` pada `AgentAvatarGlbModel`.
  2. Buat hook/ref internal yang memuat gambar tekstur dasar `textures/${charId}.png`, membuat offscreen `<canvas>`, mengecat palet via `applyColorsToPaletteCanvas`, dan membuat `THREE.CanvasTexture`.
  3. Konfigurasi `texture.colorSpace = THREE.SRGBColorSpace; texture.flipY = false; texture.needsUpdate = true;`
  4. Lakukan pembersihan (`texture.dispose()`) saat komponen unmount atau saat tekstur baru dibuat.
- **Kode**:
```tsx
import {
  type CustomAvatarColors,
  applyColorsToPaletteCanvas,
} from "@/lib/avatars/glbPaletteTexture";

// Dalam props AgentAvatarGlbModel:
type Props = {
  modelUrl: string;
  animationName?: AgentAvatarGlbAnimation;
  targetHeight?: number;
  palette?: CharacterColorPalette | null;
  colors?: CustomAvatarColors | null;
};
```
- **Perintah Verifikasi**:
```bash
cd ~/claw3d && npx tsc --noEmit
```
- **Expected Output**: Exit code 0, 0 errors.

---

### Task 4 — Teruskan Warna di `AgentAvatarPreview3D.tsx` (targetHeight Tetap)
- **File path**: `src/features/agents/components/AgentAvatarPreview3D.tsx`
- **Tujuan**:
  1. Meneruskan warna profil pengguna ke `AgentAvatarGlbModel`.
  2. PERINGATAN: `targetHeight` pada baris 53 TIDAK BOLEH DIUBAH (tetap pertahankan nilai aslinya `targetHeight={0.0042}`).
- **Kode**:
```tsx
const customColors = useMemo(
  () => ({
    skin: profile.body.skinTone,
    hair: profile.hair.color,
    top: profile.clothing.topColor,
    bottom: profile.clothing.bottomColor,
    shoes: profile.clothing.shoesColor,
  }),
  [profile],
);

// Pada baris render (targetHeight TETAP 0.0042 tidak berubah):
<AgentAvatarGlbModel
  modelUrl={presetModelUrl}
  animationName="idle"
  targetHeight={0.0042}
  colors={customColors}
/>
```
- **Perintah Verifikasi**:
```bash
cd ~/claw3d && npx tsc --noEmit
```
- **Expected Output**: Exit code 0, 0 errors.

---

### Task 5 — Teruskan Warna Karakter 3D GLB di In-World Office (`agents.tsx`)
- **File path**: `src/features/retro-office/objects/agents.tsx`
- **Tujuan**: Karakter 3D GLB yang berjalan di kantor menampilkan warna custom yang disimpan user pada profil agennya.
- **Implementasi**:
  Pada render branch `presetModelUrl` (baris 719):
```tsx
<AgentAvatarGlbModel
  modelUrl={presetModelUrl}
  targetHeight={0.0042}
  colors={{
    skin: resolvedAppearance.body.skinTone,
    hair: resolvedAppearance.hair.color,
    top: resolvedAppearance.clothing.topColor,
    bottom: resolvedAppearance.clothing.bottomColor,
    shoes: resolvedAppearance.clothing.shoesColor,
  }}
  animationName={...}
/>
```
- **Perintah Verifikasi**:
```bash
cd ~/claw3d && npx tsc --noEmit
```
- **Expected Output**: Exit code 0, 0 errors.

---

### Task 6 — Hapus Reset `imageUrl: null` pada Kontrol Warna di `AgentAvatarEditorPanel.tsx`
- **File path**: `src/features/agents/components/AgentAvatarEditorPanel.tsx`
- **Tujuan**: Mengizinkan pengguna memilih swatch atau custom color picker (`<input type="color">`) tanpa menghilangkan model 3D anime yang sedang dipilih.
- **Perubahan Spesifik**:
  1. Hapus baris `imageUrl: null,` pada handler pemilihan warna:
     - Skin tone swatch & input: baris 220 & 234
     - Hair color swatch & input: baris 293 & 307
     - Top color swatch & input: baris 366 & 380
     - Bottom color swatch & input: baris 439 & 453
     - Shoe color swatch & input: baris 481 & 495
  2. Saat pengguna memilih preset anime baru di `AnimePresetPicker`, isi draft warna dari `CHARACTER_COLOR_PALETTES[preset.id]` jika tersedia:
```tsx
<AnimePresetPicker
  selectedUrl={draft.imageUrl ?? null}
  onSelect={(url) => {
    if (!url) {
      setDraft((current) => ({ ...current, imageUrl: null }));
      return;
    }
    const cleanId = url.replace(/^.*\/|\.[^.]+$/g, "").toLowerCase();
    const presetPalette = CHARACTER_COLOR_PALETTES[cleanId];
    setDraft((current) => ({
      ...current,
      imageUrl: url,
      body: {
        ...current.body,
        skinTone: presetPalette?.skin ?? current.body.skinTone,
      },
      hair: {
        ...current.hair,
        color: presetPalette?.hair ?? current.hair.color,
      },
      clothing: {
        ...current.clothing,
        topColor: presetPalette?.top ?? current.clothing.topColor,
        bottomColor: presetPalette?.bottom ?? current.clothing.bottomColor,
        shoesColor: presetPalette?.shoes ?? current.clothing.shoesColor,
      },
    }));
  }}
/>
```
- **Perintah Verifikasi**:
```bash
cd ~/claw3d && npx tsc --noEmit
cd ~/claw3d && npx vitest run tests/unit/avatarEditorGender.test.ts tests/unit/AnimePresetPicker.test.tsx
```
- **Expected Output**: All tests pass, 0 TypeScript errors.

---

### Task 7 — TDD: Unit Test untuk Preservasi Model 3D saat Kustomisasi Warna
- **File path**: `tests/unit/avatarCustomColor3D.test.ts`
- **Tujuan**: Memvalidasi bahwa pemilihan warna kustom pada `AgentAvatarEditorPanel` mempertahankan model 3D (`imageUrl`).
- **Kode**:
```ts
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
```
- **Perintah Verifikasi**:
```bash
cd ~/claw3d && npx vitest run tests/unit/avatarCustomColor3D.test.ts
```
- **Expected Output**: 1 passed.

---

### Task 8 — Deploy Lokal & Smoke Test Claw3D
- **File path**: `scripts/deploy-local.sh` & `scripts/verify-claw3d.sh`
- **Perintah Verifikasi**:
```bash
cd ~/claw3d
npx tsc --noEmit
npx vitest run tests/unit/glbPaletteTexture.test.ts tests/unit/avatarCustomColor3D.test.ts tests/unit/colorPalettes.test.ts tests/unit/AnimePresetPicker.test.tsx
SKIP_INSTALL=1 ./scripts/deploy-local.sh
./scripts/verify-claw3d.sh
graphify update .
```
- **Expected Output**:
  - `npx tsc`: 0 errors.
  - vitest: All targeted test files PASS.
  - `verify-claw3d.sh`: 8 PASS.
  - `graphify update .` completed.

---

## Tests / Validation
1. **Unit Testing (TDD)**:
   - `tests/unit/glbPaletteTexture.test.ts`: Shading math (multipliers 1.0, 0.85, 0.70, 0.55), parseHex, dan PALETTE_RAMP_COORDINATES 9 ramps.
   - `tests/unit/avatarCustomColor3D.test.ts`: Round-trip normalizer mempertahankan kombinasi `imageUrl` dan arbitrary hex colors.
2. **Visual & Interactive Validation**:
   - Di browser (`http://127.0.0.1:8113/agents`):\n     - Klik \"Customize avatar\" pada salah satu agen.
     - Pilih preset anime \"Aiko\" atau \"Haruto\": Karakter 3D tampil sesuai targetHeight asli tanpa perubahan skala.
     - Klik color picker custom (`<input type=\"color\">`) pada Top color atau Hair color, pilih warna apa saja (misal hijau neon atau pink): model karakter 3D langsung berubah warna secara instan tanpa model menghilang atau berubah menjadi bentuk kotak procedural.
     - Simpan avatar: avatar tetap mempertahankan model 3D dan warna yang dikustomisasi setelah halaman direload.
   - Di retro office (`http://127.0.0.1:8113/office`):
     - Karakter 3D yang berjalan atau duduk di kantor mengenakan warna pakaian/rambut kustom yang telah diatur.

---

## Risks, Tradeoffs, and Open Questions
- **Risk**: Membuat canvas texture baru di setiap frame perubahan slider warna bisa menyebabkan alokasi memori berlebih jika tekstur lama tidak di-dispose.
  - *Mitigasi*: Gunakan 1 canvas tunggal yang di-reuse (`texture.needsUpdate = true`), bukan menginstansiasi canvas baru di setiap tick perubahan warna.
- **Tradeoff**: Model 3D GLB Gobkit memiliki UV mapping bersama di mana beberapa bagian pakaian (seperti blazer luar vs rompi dalam) berbagi ramp warna yang berdekatan. Kustomisasi warna fokus pada 5 zona utama: Kulit, Rambut, Atasan, Bawahan, dan Sepatu.
- **Open Question**: Apakah warna aksesoris (kacamata/headset) perlu ditambahkan ke editor untuk karakter procedural di masa mendatang? (Untuk saat ini, 5 zona warna utama mencakup 100% kebutuhan karakter 3D anime dan procedural).
