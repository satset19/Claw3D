# Claw3D — Ganti geometri male procedural dengan model GLB dari Drive

## Goal
Download `male1.blend` dari Google Drive, convert ke GLB web-ready, host di `/public/office-assets/models/avatars/male.glb`, dan render model itu di `AgentModel` (world) + `AgentAvatarPreview3D` (editor) saat `profile.body.gender === "male"`, menggantikan geometri procedural male.

## Current context / assumptions
- Repo: `~/claw3d` (Next.js + React Three Fiber, `@react-three/drei ^10.7.7`, `three`).
- Avatar sekarang murni procedural (box geometry) di dua tempat:
  - `src/features/retro-office/objects/agents.tsx` — `AgentModel` dipakai di scene.
  - `src/features/agents/components/AgentAvatarPreview3D.tsx` — preview editor.
  - Keduanya memakai `getAvatarBodyShape(profile.body.gender)` dari `src/lib/avatars/bodyShape.ts`.
  - Female-specific hair sudah dipecah ke `src/features/agents/components/avatar3d/AvatarGenderParts.tsx` (`AvatarFeminineHair`). Male memakai hair/body procedural inline.
- Pattern loader sudah ada: `useGLTF` dari `@react-three/drei` dipakai `src/features/retro-office/objects/furniture.tsx` dengan path `/office-assets/models/...`.
- Drive source: file `male1.blend` ID `1uZyQGQqsJeYvuaj_-FB9YynXl29ueUEC`, 51 MB (`.blend`, bukan `.glb`), berada di folder Drive `1iEvSUuszrWBycKK5G5cpoU9sA-n7_NTY` (hanya 1 file di folder saat ini).
- Download via skill `google-workspace`:
  `python ~/.hermes/skills/productivity/google-workspace/scripts/google_api.py drive download 1uZyQGQqsJeYvuaj_-FB9YynXl29ueUEC --output ~/claw3d/.hermes/plans/assets/male1.blend`
- Conversion `.blend` -> `.glb` perlu Blender CLI (headless). `blender` tidak terinstall di host. Snap install `sudo snap install blender --classic` atau apt `sudo apt-get install -y blender` (user harus approve sudo).
- Target GLB web ringan (<5 MB) — Draco compression via `gltf-pipeline` (npx, no global install).
- Model avatar diasumsikan: humanoid berdiri menghadap +Z, tinggi "satuan Blender" default (~1.8). Scaling & Y-offset dikalibrasi via konstanta di komponen baru, bukan di-rebake.
- Procedural female path tetap tidak berubah; hanya cabang male yang di-swap ke GLB.
- Follow AGENTS.md: `graphify query` dulu sebelum eksplorasi, `graphify update .` setelah implementasi.
- TDD: komponen 3D sulit di-unit-test visual. Yang bisa dites unit: pure logic (resolver path GLB per gender, preload registration). Rendering diverifikasi manual via dev server + screenshot/dogfood.

## Architecture / proposed approach
Tambahkan satu komponen baru `AvatarMaleModel` yang load `/office-assets/models/avatars/male.glb` via `useGLTF`, apply tint untuk skin/clothing bila materi mesh namanya cocok (`skin`, `top`, `bottom`, `hair`, `shoes`), dan expose scale/offset props. Kedua call-site (`AgentModel`, `AgentAvatarPreview3D`) di-branch: `gender === "male"` → render `<AvatarMaleModel .../>` dan skip emisi procedural head/torso/legs/arms male; `gender === "female"` → kode lama tak berubah. `getAvatarBodyShape("male")` tetap dipakai untuk arm attachment points saat tool pakai lengan procedural (atau di-noop jika GLB sudah membawa arms).

## Step-by-step tasks

Setiap task kecil, path eksplisit, perintah copy-paste dan expected output disertakan. Commit setelah tiap task yang berhasil ("`git -C ~/claw3d add -A && git -C ~/claw3d commit -m "<msg>"`").

### Task 0 — Graphify preflight (read-only)
```bash
cd ~/claw3d
graphify query "AgentModel AgentAvatarPreview3D AvatarFeminineHair getAvatarBodyShape useGLTF" --budget 6000 | tee /tmp/graphify-male.txt
```
Expected: node list yang mencakup `AgentModel`, `AgentAvatarPreview3D`, `AvatarFeminineHair`, `getAvatarBodyShape`, `furniture.tsx` (contoh `useGLTF`). Jika tidak muncul, re-run dengan `--budget 20000`. Tidak ada commit.

### Task 1 — Ambil file `.blend` dari Drive
```bash
mkdir -p ~/claw3d/.hermes/plans/assets
python ~/.hermes/skills/productivity/google-workspace/scripts/google_api.py \
  drive download 1uZyQGQqsJeYvuaj_-FB9YynXl29ueUEC \
  --output ~/claw3d/.hermes/plans/assets/male1.blend
ls -lh ~/claw3d/.hermes/plans/assets/male1.blend
```
Expected: file ~51 MB, output JSON `{"status":"downloaded", ...}`. File ini TIDAK di-commit (lihat Task 3 soal `.gitignore`).

### Task 2 — Install Blender headless (one-time)
Minta user approval sudo lebih dulu. Pilih SATU:
```bash
# Opsi A — snap (lebih baru, 4.x)
sudo snap install blender --classic
# Opsi B — apt
sudo apt-get update && sudo apt-get install -y blender
blender --version
```
Expected: `Blender 3.x` atau `4.x` terdeteksi. Kalau snap tidak tersedia, pakai apt. Kalau keduanya gagal, STOP dan laporkan ke user — jangan fabricate GLB.

### Task 3 — Export `.blend` → `.glb` (Draco-compressed, web)
Buat script Python helper agar reproducible. Path file:
`~/claw3d/scripts/avatars/export_blend_to_glb.py`
```python
# Blender headless export: .blend -> .glb (Draco), YUP, +Z forward.
# Usage: blender -b -P scripts/avatars/export_blend_to_glb.py -- <in.blend> <out.glb>
import bpy, sys, os
argv = sys.argv[sys.argv.index("--") + 1 :]
in_path, out_path = argv[0], argv[1]
bpy.ops.wm.open_mainfile(filepath=in_path)
# Pastikan semua object visible di export
for o in bpy.data.objects:
    o.hide_viewport = False
    o.hide_render = False
os.makedirs(os.path.dirname(out_path), exist_ok=True)
bpy.ops.export_scene.gltf(
    filepath=out_path,
    export_format="GLB",
    export_apply=True,              # apply modifiers
    export_yup=True,                # three.js convention
    export_draco_mesh_compression_enable=True,
    export_draco_mesh_compression_level=6,
    export_animations=True,
    export_skins=True,
    export_morph=False,
    export_cameras=False,
    export_lights=False,
)
print("OK", out_path, os.path.getsize(out_path))
```
Jalankan:
```bash
mkdir -p ~/claw3d/public/office-assets/models/avatars
blender -b -P ~/claw3d/scripts/avatars/export_blend_to_glb.py -- \
  ~/claw3d/.hermes/plans/assets/male1.blend \
  ~/claw3d/public/office-assets/models/avatars/male.glb
ls -lh ~/claw3d/public/office-assets/models/avatars/male.glb
```
Expected: `OK /home/harnet/claw3d/public/office-assets/models/avatars/male.glb <bytes>`; file size ideally < 6 MB (dari 51 MB `.blend`). Kalau > 10 MB, jalankan tambahan:
```bash
npx -y gltf-pipeline@4 -i ~/claw3d/public/office-assets/models/avatars/male.glb \
  -o ~/claw3d/public/office-assets/models/avatars/male.glb -d
```
Ignore sumber `.blend` dari git:
Append ke `~/claw3d/.gitignore`:
```
# Large avatar source blends (kept in Drive)
.hermes/plans/assets/*.blend
```
Commit: `chore(avatars): add male.glb export script and compiled GLB`.

### Task 4 — Smoke-check GLB struktur (opsional tapi cepat)
```bash
node -e "const{NodeIO}=require('@gltf-transform/core');(async()=>{const d=await new NodeIO().read('public/office-assets/models/avatars/male.glb');const s=d.getRoot().listScenes()[0];console.log('nodes',s.listChildren().length,'meshes',d.getRoot().listMeshes().length,'materials',d.getRoot().listMaterials().map(m=>m.getName()));})();" || true
```
(Jika `@gltf-transform/core` tidak ada di `node_modules`, lewati — hanya diagnostic.) Expected: cetak jumlah node/mesh/materials sehingga kita tahu nama material (dipakai Task 7 untuk tinting).

### Task 5 — RED test: resolver GLB path per gender
Buat file baru `~/claw3d/src/lib/avatars/__tests__/avatarModel.test.ts`:
```ts
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
```
Run (test wajib FAIL karena modul belum ada):
```bash
docker run --rm -v ~/claw3d:/app -w /app node:20-slim \
  sh -lc "npx vitest run src/lib/avatars/__tests__/avatarModel.test.ts"
```
Expected: `Error: Cannot find module '@/lib/avatars/avatarModel'` atau test fail.

### Task 6 — GREEN: implement resolver
Buat `~/claw3d/src/lib/avatars/avatarModel.ts`:
```ts
import type { AgentAvatarGender } from "@/lib/avatars/profile";

export const AVATAR_MODEL_URLS: Partial<Record<AgentAvatarGender, string>> = {
  male: "/office-assets/models/avatars/male.glb",
};

export const getAvatarModelUrl = (gender: AgentAvatarGender): string | null =>
  AVATAR_MODEL_URLS[gender] ?? null;

export const hasAvatarModel = (gender: AgentAvatarGender): boolean =>
  getAvatarModelUrl(gender) !== null;
```
Re-run vitest command dari Task 5. Expected: 2 passed. Commit: `feat(avatars): add gender→GLB url resolver`.

### Task 7 — Komponen `AvatarMaleModel`
Buat `~/claw3d/src/features/agents/components/avatar3d/AvatarMaleModel.tsx`:
```tsx
"use client";

import { useGLTF } from "@react-three/drei";
import { useLayoutEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { getAvatarModelUrl } from "@/lib/avatars/avatarModel";

const MALE_URL = getAvatarModelUrl("male")!;

type Props = {
  skin: string;
  topColor: string;
  bottomColor: string;
  shoeColor: string;
  hairColor: string;
  /** Uniform scale applied on top of base. Default 1. */
  scale?: number;
  /** Y offset to align feet with scene floor. Tuned to match procedural height. */
  yOffset?: number;
};

// Material-name convention expected in male.glb: "skin" | "top" | "bottom" | "shoes" | "hair".
// Any other material is left alone. Clone to avoid mutating cached GLTF.
const MATERIAL_TINT_KEYS: Record<string, keyof TintPalette> = {
  skin: "skin",
  top: "topColor",
  shirt: "topColor",
  bottom: "bottomColor",
  pants: "bottomColor",
  shoes: "shoeColor",
  shoe: "shoeColor",
  hair: "hairColor",
};

type TintPalette = {
  skin: string;
  topColor: string;
  bottomColor: string;
  shoeColor: string;
  hairColor: string;
};

export const AvatarMaleModel = ({
  skin,
  topColor,
  bottomColor,
  shoeColor,
  hairColor,
  scale = 1,
  yOffset = 0,
}: Props) => {
  const { scene } = useGLTF(MALE_URL);
  const cloned = useMemo(() => scene.clone(true), [scene]);
  const palette: TintPalette = { skin, topColor, bottomColor, shoeColor, hairColor };
  const groupRef = useRef<THREE.Group>(null);

  useLayoutEffect(() => {
    cloned.traverse((obj) => {
      const mesh = obj as THREE.Mesh;
      if (!mesh.isMesh || !mesh.material) return;
      const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
      mesh.material = mats.map((m) => {
        const name = (m.name || "").toLowerCase();
        const key = MATERIAL_TINT_KEYS[name];
        if (!key) return m;
        const next = (m as THREE.MeshStandardMaterial).clone();
        next.color = new THREE.Color(palette[key]);
        return next;
      }) as THREE.Material | THREE.Material[] as THREE.Material;
    });
  }, [cloned, skin, topColor, bottomColor, shoeColor, hairColor]);

  return (
    <group ref={groupRef} position={[0, yOffset, 0]} scale={[scale, scale, scale]}>
      <primitive object={cloned} />
    </group>
  );
};

useGLTF.preload(MALE_URL);
```
TypeScript lint:
```bash
docker run --rm -v ~/claw3d:/app -w /app node:20-slim sh -lc "npx tsc --noEmit"
```
Expected: no new errors in file. Commit: `feat(avatars): add AvatarMaleModel GLB loader with material tinting`.

### Task 8 — Hook ke `AgentAvatarPreview3D` (editor preview)
Edit `~/claw3d/src/features/agents/components/AgentAvatarPreview3D.tsx`:
1. Import baru di dekat import `AvatarFeminineHair`:
   ```ts
   import { AvatarMaleModel } from "@/features/agents/components/avatar3d/AvatarMaleModel";
   import { hasAvatarModel } from "@/lib/avatars/avatarModel";
   ```
2. Setelah block yang menghitung `shape` / `bottomStyle` dan sebelum `return (...)`, tambahkan early-return male:
   ```tsx
   if (hasAvatarModel(profile.body.gender)) {
     return (
       <group ref={groupRef} position={[0, -0.72, 0]} scale={[1.45, 1.45, 1.45]}>
         <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
           <circleGeometry args={[0.22, 24]} />
           <meshBasicMaterial color="#000000" transparent opacity={0.16} />
         </mesh>
         <AvatarMaleModel
           skin={skin}
           topColor={topColor}
           bottomColor={bottomColor}
           shoeColor={shoeColor}
           hairColor={hairColor}
           scale={0.5}
           yOffset={0}
         />
       </group>
     );
   }
   ```
   (Nilai `scale`/`yOffset` dikalibrasi di Task 10 visual check.)
3. `npx tsc --noEmit` tetap bersih.
Commit: `feat(avatars): render male GLB in AgentAvatarPreview3D`.

### Task 9 — Hook ke `AgentModel` di scene (`agents.tsx`)
Edit `~/claw3d/src/features/retro-office/objects/agents.tsx`:
1. Tambah import di dekat `AvatarFeminineHair`:
   ```ts
   import { AvatarMaleModel } from "@/features/agents/components/avatar3d/AvatarMaleModel";
   import { hasAvatarModel } from "@/lib/avatars/avatarModel";
   ```
2. Di dalam `AgentModel`, setelah `const shape = getAvatarBodyShape(...)` (sekitar line 591), tambahkan short-circuit sebelum JSX besar yang mengemit head/torso/legs/arms male. Taruh render path baru di dalam JSX output `return (...)`-nya: cari node pembungkus terluar `<group ...>` tempat body procedural dirender dan di dalamnya, bungkus body procedural dengan ternary:
   ```tsx
   {hasAvatarModel(resolvedAppearance.body.gender) ? (
     <AvatarMaleModel
       skin={skin}
       topColor={topColor}
       bottomColor={bottomColor}
       shoeColor={shoeColor}
       hairColor={hairColor}
       scale={0.5}
       yOffset={0}
     />
   ) : (
     <>
       {/* existing procedural body: head, torso, arms, legs, hair blocks */}
     </>
   )}
   ```
   JANGAN hapus procedural blocks; biarkan sebagai fallback female. Pindahkan accessories (headset, glasses, hat, backpack, speech bubble) KE LUAR ternary agar tetap bekerja untuk kedua gender.
3. `AvatarFeminineHair` call di line ~950 tetap, hanya ternary male-nya yang mengambil alih seluruh render body saat male.
4. Lint:
   ```bash
   docker run --rm -v ~/claw3d:/app -w /app node:20-slim sh -lc "npx tsc --noEmit && npx eslint src/features/retro-office/objects/agents.tsx src/features/agents/components/AgentAvatarPreview3D.tsx src/features/agents/components/avatar3d/AvatarMaleModel.tsx"
   ```
   Expected: 0 errors.
Commit: `feat(avatars): render male GLB inside AgentModel scene`.

### Task 10 — Visual calibration (manual, 1 iterasi)
```bash
cd ~/claw3d && npm run dev >/tmp/claw3d-dev.log 2>&1 &
sleep 8 && curl -sSf http://localhost:3000 >/dev/null && echo UP
```
Expected: `UP`. Buka UI (via kerja.besoksenin.web.id atau localhost) → avatar editor set gender=male → preview harus menampilkan model GLB berdiri di tengah lingkaran bayangan, kepala di sekitar `y≈0.4..0.5` relatif group preview (scale `1.45` outer). Jika terlalu besar/kecil atau melayang, sesuaikan `scale` dan `yOffset` di call-site Task 8 & Task 9 (keduanya harus sama). Verifikasi juga di scene retro-office: agent male baru punya model GLB, agent female tetap procedural, tidak ada clipping ke lantai.
Hentikan dev: `pkill -f "next dev" || true`.
Commit (bila perlu): `fix(avatars): calibrate male GLB scale/offset`.

### Task 11 — Regression: existing unit tests
```bash
docker run --rm -v ~/claw3d:/app -w /app node:20-slim sh -lc "npx vitest run"
```
Expected: tidak ada test baru yang gagal dibanding baseline (6 pre-existing failures di upstream main, per memory). Jika ada regresi baru, revert / fix sebelum lanjut.

### Task 12 — Graphify refresh (WAJIB per AGENTS.md)
```bash
cd ~/claw3d && graphify update .
```
Expected: incremental update log; file-file di `graphify-out/` berubah. Commit: `chore(graphify): update graph after male avatar GLB`.

### Task 13 — Dokumentasi singkat
Append section ke `~/claw3d/ARCHITECTURE.md` di bawah heading avatar (atau buat baru):
```
### Male avatar
Male avatars render a GLB loaded from `/public/office-assets/models/avatars/male.glb`
via `AvatarMaleModel` (`src/features/agents/components/avatar3d/AvatarMaleModel.tsx`).
The source `.blend` lives in Google Drive; re-export with
`blender -b -P scripts/avatars/export_blend_to_glb.py -- <in.blend> <out.glb>`.
Female avatars remain fully procedural.
```
Commit: `docs: male avatar GLB pipeline`.

## Tests / validation
- Unit: `src/lib/avatars/__tests__/avatarModel.test.ts` (Task 5/6) — RED → GREEN.
- Type check: `npx tsc --noEmit` setelah Task 7, 8, 9 — 0 new errors.
- Lint: eslint pada 3 file yang diedit (Task 9).
- Regresi: `npx vitest run` baseline-stable (Task 11).
- Visual manual: dev server, dua call-site male/female (Task 10).
- Graph sync: `graphify update .` (Task 12).

## Risks, tradeoffs, open questions
- **Material names tak terstandar di `.blend`**: tinting di `AvatarMaleModel` bergantung pada nama material (`skin`, `top`, `bottom`, `shoes`, `hair`). Jika nama di file berbeda, model tetap tampil tapi warna hair/clothing dari profile tidak diterapkan. Perlu lihat output Task 4 lalu adjust `MATERIAL_TINT_KEYS` di Task 7.
- **Ukuran GLB**: `.blend` 51 MB; GLB web idealnya <5 MB. Draco mungkin tidak cukup kalau mesh high-poly. Fallback: edit script Task 3 tambah decimate modifier, atau minta model LOD rendah.
- **Satu posisi material shared**: beberapa mesh male akan share material "top" (jaket + sleeves). Variasi `topStyle` (tee/hoodie/jacket) jadi tidak terbedakan di model. Diterima sebagai YAGNI (geometri male procedural lama juga tidak secanggih itu untuk semua combo). Jika user menolak, tambahkan 3 material slot top-tee/top-hoodie/top-jacket di `.blend` dulu.
- **Accessories di scene (headset/glasses/hat/backpack)**: dirender terpisah di procedural coord. Setelah swap male ke GLB, offset accessory mungkin tidak nempel di kepala GLB. Mitigasi: kalibrasi `scale/yOffset` agar kepala GLB berada di koordinat yang sama dengan `headY` procedural (sekitar `y=0.47`). Kalau masih meleset, buat `AVATAR_MALE_ACCESSORY_OFFSETS` konstanta dan geser Y+Z aksesori di cabang male.
- **`sudo` untuk install Blender**: butuh approval user; tidak boleh dijalankan diam-diam. Alternatif tanpa sudo: `flatpak install flathub org.blender.Blender` kalau flatpak tersedia, atau user melakukan export `.glb` manual di mesin lain lalu drop ke `public/office-assets/models/avatars/male.glb`.
- **Open question**: apakah female juga akan di-GLB-kan nanti? Kalau ya, generalisasi `AvatarMaleModel` → `AvatarGLBModel` dengan `gender` prop (sudah disiapkan jalurnya lewat `AVATAR_MODEL_URLS` map).
