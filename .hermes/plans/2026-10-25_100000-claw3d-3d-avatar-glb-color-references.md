# Plan: Referensi Warna dan Pewarnaan 3D Avatar GLB Claw3D

## Goal
Menyediakan katalog referensi palet warna terkurasi untuk 8 karakter preset avatar 3D GLB di Claw3D, serta merancang arsitektur implementasi pewarnaan 3D (palette atlas generation/binding) dan sinkronisasi portrait 2D agar avatar tampil kaya warna, terbaca jelas, dan konsisten di retro office map maupun editor preview.

## Current Context / Assumptions
- Repo: `~/claw3d` (Next.js 16 + React Three Fiber `@react-three/drei`, `three`).
- Model 3D anime GLB (`public/office-assets/models/avatars/{aiko,haruto,kenji,mina,ren,sakura,takeshi,yumi}.glb`) bersumber dari Gobkit Character Pack Vol. 1.
- Seluruh 8 file GLB memakai 1 material PBR (`Material`) yang memetakan ke 1 file texture atlas PNG (`Texture`, dimensi 512x2048, MD5: `f066a8cc16618ad12447419fd4e27f8c`). Setengah bagian atas atlas berisi swatch gradien warna untuk pemetaan UV mesh, sementara setengah bagian bawah berupa bidang datar abu-abu netral (`#808080`).
- Saat ini 3D GLB terkesan tanpa warna (pucat/drab) karena:
  1. Preset portrait 2D di `public/avatars/anime/*.svg` bersumber dari DiceBear Lorelei default tanpa parameter warna (100% monokrom hitam `#000000` dan putih `#ffffff`).
  2. Komponen `AgentAvatarGlbModel.tsx` sebelumnya sempat memakai `emissive = 0xffffff` yang mencuci seluruh warna tekstur menjadi putih, lalu diubah ke `MeshStandardMaterial` dengan `roughness=0.6` tanpa modul palet warna khusus per karakter.
  3. `targetHeight` pada `AgentAvatarPreview3D.tsx` ter-set `0.0042` (mengikuti skala map office), sehingga karakter di modal preview editor menyusut menjadi mikroskopis dan tidak dapat dilihat oleh pengguna.
- Procedural avatar telah memiliki opsi warna (`AGENT_AVATAR_SKIN_TONE_OPTIONS`, `AGENT_AVATAR_HAIR_COLOR_OPTIONS`, `AGENT_AVATAR_CLOTHING_COLOR_OPTIONS`, `AGENT_AVATAR_SHOE_COLOR_OPTIONS`) di `src/lib/avatars/profile.ts`, namun preset 3D GLB belum terhubung dengan sistem palet warna ini.

## Architecture / Proposed Approach
1. **Color Reference Catalog**: Menyusun kamus palet warna terkurasi untuk masing-masing 8 karakter (Skin, Hair, Top, Bottom, Accent, Shoes) berbasis prinsip desain karakter anime dan keterbacaan kamera isometrik 3D.
2. **Palette Texture Mapper**: Mengimplementasikan generator tekstur palet (`paletteTexture.ts`) berbasis `<canvas>` atau pre-generated atlas map yang menggantikan atau mewarnai swatch tekstur Gobkit sesuai palet karakter yang dipilih.
3. **2D & 3D Synchronization**: Memperbarui SVG 2D DiceBear Lorelei dengan parameter warna yang cocok dengan karakter 3D GLB, serta memperbaiki `targetHeight` di `AgentAvatarPreview3D.tsx` agar preview di `/agents` tampil proporsional (tinggi ~1.2 unit di viewport editor).

---

## Katalog Referensi Warna Avatar 3D GLB

Setiap karakter dirancang dengan rasio distribusi warna 60-30-10:
- 60% Dominan (Pakaian utama/atasan)
- 30% Sekunder (Bawahan/celana/rambut)
- 10% Aksen (Sepatu, emblem, dasi, aksesori)

### 1. Aiko — Office Lady / Corporate Lead
- Karakter: Profesional, rapi, elegan.
- Skin: Fair Warm Almond (`#f8d5c2` / RGB 248, 213, 194)
- Hair: Deep Espresso Brown (`#3a2018` / RGB 58, 32, 24)
- Top: Executive Navy Blazer (`#1e293b` / RGB 30, 41, 59)
- Inner Shirt: Crisp White (`#f8fafc` / RGB 248, 250, 252)
- Bottom: Slate Tailored Skirt (`#334155` / RGB 51, 65, 85)
- Accent: Coral Rouge (`#f43f5e` / RGB 244, 63, 94)
- Shoes: Onyx Black Leather (`#0f172a` / RGB 15, 23, 42)

### 2. Haruto — Store Manager / Smart Casual
- Karakter: Ramah, terorganisir, hangat.
- Skin: Light Warm Tan (`#f4c58a` / RGB 244, 197, 138)
- Hair: Dark Chestnut Brown (`#4a3728` / RGB 74, 55, 40)
- Top: Forest Green Utility Cardigan (`#166534` / RGB 22, 101, 52)
- Inner Shirt: Warm Cream Oxford (`#fef3c7` / RGB 254, 243, 199)
- Bottom: Amber Khaki Chinos (`#b45309` / RGB 180, 83, 9)
- Accent: Brass Yellow Badge (`#f59e0b` / RGB 245, 158, 11)
- Shoes: Saddle Leather Boots (`#78350f` / RGB 120, 53, 15)

### 3. Yumi — Schoolkid / Energetic Student
- Karakter: Ceria, dinamis, bersemangat.
- Skin: Peachy Fair (`#fde7da` / RGB 253, 231, 218)
- Hair: Soft Caramel Auburn (`#c26d38` / RGB 194, 109, 56)
- Top: Pastel Sunflower Yellow Sweater (`#fde047` / RGB 253, 224, 71)
- Inner / Collar: Pure White (`#ffffff` / RGB 255, 255, 255)
- Bottom: Royal Denim Blue Pleated Skirt (`#2563eb` / RGB 37, 99, 235)
- Accent: Bubblegum Pink Ribbon (`#f472b6` / RGB 244, 114, 182)
- Shoes: White Canvas Sneakers (`#f1f5f9` / RGB 241, 245, 249)

### 4. Kenji — Stock Clerk / Tech Specialist
- Karakter: Metodis, fokus, tech-savvy.
- Skin: Golden Tan (`#d8a06e` / RGB 216, 160, 110)
- Hair: Midnight Blue-Black (`#1e1b4b` / RGB 30, 27, 75)
- Top: Deep Electric Teal Polo (`#0d9488` / RGB 13, 148, 136)
- Bottom: Dark Charcoal Utility Cargo (`#374151` / RGB 55, 65, 81)
- Accent: Cyber Cyan Trim (`#06b6d4` / RGB 6, 182, 212)
- Shoes: Industrial Slate Steel-toe (`#4b5563` / RGB 75, 85, 99)

### 5. Sakura — Grandma Shopper / Senior Advisor
- Karakter: Tenang, bijak, hangat.
- Skin: Soft Porcelain Warm (`#f3d7c5` / RGB 243, 215, 197)
- Hair: Silver Lavender Ash (`#cbd5e1` / RGB 203, 213, 225)
- Top: Dusty Rose Knit Cardigan (`#be185d` / RGB 190, 24, 93)
- Inner: Soft Vanilla Cream Blouse (`#fffbeb` / RGB 255, 251, 235)
- Bottom: Deep Royal Plum Trousers (`#581c87` / RGB 88, 28, 135)
- Accent: Antique Gold Brooch (`#d97706` / RGB 217, 119, 6)
- Shoes: Cocoa Velvet Loafers (`#5c2e17` / RGB 92, 46, 23)

### 6. Ren — Food Courier / Urban Streetwear
- Karakter: Cepat, modern, jalanan.
- Skin: Medium Sun-kissed (`#d69a6e` / RGB 214, 154, 110)
- Hair: Bleached Platinum Blonde (`#fef08a` / RGB 254, 240, 138)
- Top: High-vis Neon Tangerine Windbreaker (`#ea580c` / RGB 234, 88, 12)
- Bottom: Matte Black Techwear Joggers (`#18181b` / RGB 24, 24, 27)
- Accent: Signal Lime Zipper (`#84cc16` / RGB 132, 204, 22)
- Shoes: Stealth Black Runners (`#09090b` / RGB 9, 9, 11)

### 7. Mina — Cashier / Creative Retailer
- Karakter: Artistik, ramah, stylish.
- Skin: Light Sand Warm (`#f8dfcd` / RGB 248, 223, 205)
- Hair: Pastel Lilac Purple Bob (`#a855f7` / RGB 168, 85, 247)
- Top: Terracotta Coral Blouse (`#e11d48` / RGB 225, 29, 72)
- Bottom: Indigo Denim Culottes (`#4338ca` / RGB 67, 56, 202)
- Accent: Mint Green Scarf (`#10b981` / RGB 16, 185, 129)
- Shoes: Warm Oat Espadrilles (`#d6d3d1` / RGB 214, 211, 209)

### 8. Takeshi — Shoplifter / Sneaky Rogue
- Karakter: Misterius, berani, edgy.
- Skin: Olive Tan (`#c28b5e` / RGB 194, 139, 94)
- Hair: Charcoal Messy Crop (`#27272a` / RGB 39, 39, 42)
- Top: Dark Slate Streetwear Hoodie (`#1e293b` / RGB 30, 41, 59)
- Bottom: Tactical Olive Green Cargo (`#365314` / RGB 54, 83, 20)
- Accent: Crimson Red Beanie / Tag (`#b91c1c` / RGB 185, 28, 28)
- Shoes: Pitch Black High-tops (`#09090b` / RGB 9, 9, 11)

---

## Step-by-Step Tasks

### Task 1 — Buat Modul Data Palet Warna Karakter
- **File path**: `src/lib/avatars/colorPalettes.ts`
- **Tujuan**: Menampung spesifikasi warna terstruktur untuk setiap preset karakter anime.
- **Kode**:
```ts
export type CharacterColorPalette = {
  id: string;
  name: string;
  skin: string;
  hair: string;
  top: string;
  topInner?: string;
  bottom: string;
  accent: string;
  shoes: string;
};

export const CHARACTER_COLOR_PALETTES: Record<string, CharacterColorPalette> = {
  aiko: {
    id: "aiko",
    name: "Aiko",
    skin: "#f8d5c2",
    hair: "#3a2018",
    top: "#1e293b",
    topInner: "#f8fafc",
    bottom: "#334155",
    accent: "#f43f5e",
    shoes: "#0f172a",
  },
  haruto: {
    id: "haruto",
    name: "Haruto",
    skin: "#f4c58a",
    hair: "#4a3728",
    top: "#166534",
    topInner: "#fef3c7",
    bottom: "#b45309",
    accent: "#f59e0b",
    shoes: "#78350f",
  },
  yumi: {
    id: "yumi",
    name: "Yumi",
    skin: "#fde7da",
    hair: "#c26d38",
    top: "#fde047",
    topInner: "#ffffff",
    bottom: "#2563eb",
    accent: "#f472b6",
    shoes: "#f1f5f9",
  },
  kenji: {
    id: "kenji",
    name: "Kenji",
    skin: "#d8a06e",
    hair: "#1e1b4b",
    top: "#0d9488",
    bottom: "#374151",
    accent: "#06b6d4",
    shoes: "#4b5563",
  },
  sakura: {
    id: "sakura",
    name: "Sakura",
    skin: "#f3d7c5",
    hair: "#cbd5e1",
    top: "#be185d",
    topInner: "#fffbeb",
    bottom: "#581c87",
    accent: "#d97706",
    shoes: "#5c2e17",
  },
  ren: {
    id: "ren",
    name: "Ren",
    skin: "#d69a6e",
    hair: "#fef08a",
    top: "#ea580c",
    bottom: "#18181b",
    accent: "#84cc16",
    shoes: "#09090b",
  },
  mina: {
    id: "mina",
    name: "Mina",
    skin: "#f8dfcd",
    hair: "#a855f7",
    top: "#e11d48",
    bottom: "#4338ca",
    accent: "#10b981",
    shoes: "#d6d3d1",
  },
  takeshi: {
    id: "takeshi",
    name: "Takeshi",
    skin: "#c28b5e",
    hair: "#27272a",
    top: "#1e293b",
    bottom: "#365314",
    accent: "#b91c1c",
    shoes: "#09090b",
  },
};

export const getCharacterColorPalette = (
  idOrUrl: string | null | undefined,
): CharacterColorPalette | null => {
  if (!idOrUrl) return null;
  const cleanId = idOrUrl.replace(/^.*\/|\.[^.]+$/g, "").toLowerCase();
  return CHARACTER_COLOR_PALETTES[cleanId] ?? null;
};
```
- **Verifikasi**: Buat file dan pastikan impor TypeScript valid.

---

### Task 2 — TDD: Unit Test untuk Color Palettes
- **File path**: `tests/unit/colorPalettes.test.ts`
- **Kode**:
```ts
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
```
- **Perintah Verifikasi**:
```bash
cd ~/claw3d && npx vitest run tests/unit/colorPalettes.test.ts
```
- **Expected Output**: 2 passing tests.

---

### Task 3 — Update Integrasi Preset di `animePresets.ts`
- **File path**: `src/lib/avatars/animePresets.ts`
- **Tujuan**: Menambahkan metadata palette langsung pada tiap preset agar komponen React dan render pipeline dapat membaca palet tanpa query terpisah.
- **Perubahan**:
```ts
import {
  CHARACTER_COLOR_PALETTES,
  type CharacterColorPalette,
} from "@/lib/avatars/colorPalettes";

export type AnimeAvatarPreset = {
  id: string;
  label: string;
  url: string;
  modelUrl: string;
  palette: CharacterColorPalette;
  license: "CC0" | "CC-BY" | "CC-BY-SA";
  source: string;
  author?: string;
};

const make = (id: string, label: string): AnimeAvatarPreset => ({
  id,
  label,
  url: `/avatars/anime/${id}.svg`,
  modelUrl: `/office-assets/models/avatars/${id}.glb`,
  palette: CHARACTER_COLOR_PALETTES[id] ?? {
    id,
    name: label,
    skin: "#f8d5c2",
    hair: "#151515",
    top: "#2d3748",
    bottom: "#1e3a8a",
    accent: "#f59e0b",
    shoes: "#1a1a1a",
  },
  license: "CC0",
  source: `${PORTRAIT_SOURCE} + ${MODEL_SOURCE}`,
  author: `${PORTRAIT_AUTHOR}, ${MODEL_AUTHOR}`,
});
```
- **Perintah Verifikasi**:
```bash
cd ~/claw3d && npx tsc --noEmit
```
- **Expected Output**: Exit code 0, 0 errors.

---

### Task 4 — Perbaiki Skala 3D Preview di `AgentAvatarPreview3D.tsx`
- **File path**: `src/features/agents/components/AgentAvatarPreview3D.tsx`
- **Masalah**: `targetHeight={0.0042}` pada baris 53 membuat avatar GLB di layar preview menyusut ke ukuran mikroskopis.
- **Solusi**: Ganti `targetHeight={0.0042}` menjadi `targetHeight={1.4}` (sesuai ukuran bounding box preview procedural yang memiliki tinggi ~1.4).
- **Patch**:
```tsx
// Ganti baris 53:
<AgentAvatarGlbModel modelUrl={presetModelUrl} animationName="idle" targetHeight={1.4} />
```
- **Verifikasi**: Buka `/agents`, pastikan karakter anime 3D berdiri tegak dan mengisi container preview secara proporsional.

---

### Task 5 — Update Renderer 3D GLB dengan Palette Tinting & Tone Mapping
- **File path**: `src/features/agents/components/AgentAvatarGlbModel.tsx`
- **Tujuan**: Memastikan material GLB menerima palet warna karakter, tekstur sRGB tidak pudar, serta roughness/metalness dioptimalkan untuk pencahayaan scene kantor.
- **Implementasi**:
  1. Tambahkan prop opsional `palette?: CharacterColorPalette | null` pada `AgentAvatarGlbModel`.
  2. Saat traversing cloned scene, sesuaikan color tinting pada material dan pastikan `std.map.colorSpace = THREE.SRGBColorSpace`.
  3. Konfigurasi material: `roughness = 0.5`, `metalness = 0.05` agar warna cerah dan memantulkan pencahayaan ambient secara seimbang tanpa menjadi washed out.
- **Kode**:
```tsx
import { getCharacterColorPalette } from "@/lib/avatars/colorPalettes";

// di dalam component:
const resolvedPalette = useMemo(
  () => palette ?? getCharacterColorPalette(modelUrl),
  [palette, modelUrl],
);

useLayoutEffect(() => {
  clonedScene.traverse((obj) => {
    const mesh = obj as THREE.Mesh;
    if (!mesh.isMesh) return;
    const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    for (const m of mats) {
      const std = m as THREE.MeshStandardMaterial;
      if (std.map) {
        std.map.colorSpace = THREE.SRGBColorSpace;
        std.map.needsUpdate = true;
      }
      if ("roughness" in std) std.roughness = 0.5;
      if ("metalness" in std) std.metalness = 0.05;
      std.needsUpdate = true;
    }
  });
// ... bounding box auto-fit tetap berjalan
```

---

### Task 6 — Generate Berwarna untuk 2D Anime Avatar SVGs
- **File path**: `public/avatars/anime/{aiko,haruto,kenji,mina,ren,sakura,takeshi,yumi}.svg`
- **Tujuan**: Mengganti file SVG monokrom dengan SVG DiceBear Lorelei yang membawa parameter warna (`skinColor`, `hairColor`) sesuai palet referensi masing-masing karakter.
- **Skrip Eksekusi**:
```bash
python3 -c "
import urllib.request, json

characters = {
    'aiko': {'skin': 'f8d5c2', 'hair': '3a2018'},
    'haruto': {'skin': 'f4c58a', 'hair': '4a3728'},
    'yumi': {'skin': 'fde7da', 'hair': 'c26d38'},
    'kenji': {'skin': 'd8a06e', 'hair': '1e1b4b'},
    'sakura': {'skin': 'f3d7c5', 'hair': 'cbd5e1'},
    'ren': {'skin': 'd69a6e', 'hair': 'fef08a'},
    'mina': {'skin': 'f8dfcd', 'hair': 'a855f7'},
    'takeshi': {'skin': 'c28b5e', 'hair': '27272a'},
}

for slug, c in characters.items():
    url = f'https://api.dicebear.com/9.x/lorelei/svg?seed={slug}&size=512&skinColor={c[\"skin\"]}&hairColor={c[\"hair\"]}'
    dest = f'/home/harnet/claw3d/public/avatars/anime/{slug}.svg'
    urllib.request.urlretrieve(url, dest)
    print(f'Downloaded colored SVG for {slug}')
"
```
- **Verifikasi**: Cek fill warna pada salah satu file:
```bash
grep -oE 'fill="#[0-9a-fA-F]+"' /home/harnet/claw3d/public/avatars/anime/aiko.svg | sort -u
```
- **Expected Output**: Muncul kode warna `#f8d5c2`, `#3a2018`, dsb., bukan hanya hitam putih.

---

### Task 7 — Deploy & Smoke Test
- **File path**: `scripts/deploy-local.sh` & `scripts/verify-claw3d.sh`
- **Perintah Verifikasi**:
```bash
cd ~/claw3d
npx tsc --noEmit
npx vitest run tests/unit/colorPalettes.test.ts tests/unit/AnimePresetPicker.test.tsx
SKIP_INSTALL=1 ./scripts/deploy-local.sh
./scripts/verify-claw3d.sh
```
- **Expected Output**:
  - `npx tsc` 0 errors.
  - vitest PASS.
  - `verify-claw3d.sh`: 8 PASS.

---

## Tests / Validation
1. **Unit Testing**:
   - `tests/unit/colorPalettes.test.ts`: Memastikan seluruh 8 karakter memiliki pemetaan kode HEX valid.
   - `tests/unit/animePresets.test.ts`: Memastikan integrasi palet pada model katalog berfungsi tanpa regresi.
2. **Visual Inspection**:
   - Buka `/agents`: Karakter anime 3D di preview panel tampil penuh, proporsional, dan memiliki warna jelas (rambut, pakaian, kulit).
   - Buka `/office`: Karakter di retro office map tampil proporsional dengan furniture, terbayang di lantai, dan tidak washed-out.

## Risks, Tradeoffs, and Open Questions
- **Risk**: Gobkit GLB menggunakan 1 material dengan 1 tekstur atlas bersama. Jika mesh poligon memakai UV mapping pada area abu-abu di bawah atlas, poligon tersebut akan tetap abu-abu kecuali atlas dimodifikasi.
- **Tradeoff**: Menghasilkan tekstur canvas dinamis per karakter memberikan kontrol warna 100%, namun menambah overhead memori sebesar ~2-4MB canvas per agent yang aktif. Solusi terkurasi adalah memadukan atlas berwarna yang sudah di-bake per karakter atau memakai palet atlas beresolusi optimal.
- **Open Question**: Apakah user menginginkan kemampuan bagi pengguna untuk mengubah warna baju/rambut anime GLB melalui slider editor warna, ataukah cukup 8 karakter preset masing-masing memiliki identitas palet warna khas yang permanen dan kontras?
