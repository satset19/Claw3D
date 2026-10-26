"use client";

import { memo, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { SCALE } from "@/features/retro-office/core/constants";
import { toWorld } from "@/features/retro-office/core/geometry";

/**
 * Preload the existing furniture models used in the garden workspace.
 * Draco/Meshopt disabled for strict CSP compatibility.
 */
const GARDEN_MODELS = [
  "/office-assets/models/furniture/tableRound.glb",
  "/office-assets/models/furniture/table.glb",
  "/office-assets/models/furniture/chairModernCushion.glb",
  "/office-assets/models/furniture/chairDesk.glb",
  "/office-assets/models/furniture/pottedPlant.glb",
  "/office-assets/models/furniture/plantSmall1.glb",
  "/office-assets/models/furniture/lampRoundFloor.glb",
] as const;

GARDEN_MODELS.forEach((url) => useGLTF.preload(url, false, false));

type PatioModelProps = {
  url: string;
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: number | [number, number, number];
  castShadow?: boolean;
  receiveShadow?: boolean;
};

/**
 * Centered and ground-aligned GLB model instance.
 * Normalizes pivot offsets so bottom rests exactly at Y = 0 of the container.
 */
const PatioModel = memo(function PatioModel({
  url,
  position,
  rotation = [0, 0, 0],
  scale = 1,
  castShadow = true,
  receiveShadow = true,
}: PatioModelProps) {
  const { scene } = useGLTF(url, false, false);

  const { cloned, offset } = useMemo(() => {
    const c = scene.clone(true);
    c.traverse((node) => {
      if ((node as THREE.Mesh).isMesh) {
        node.castShadow = castShadow;
        node.receiveShadow = receiveShadow;
      }
    });

    const box = new THREE.Box3().setFromObject(c);
    const centerX = (box.min.x + box.max.x) / 2;
    const centerZ = (box.min.z + box.max.z) / 2;
    const bottomY = box.min.y;

    return {
      cloned: c,
      offset: [-centerX, -bottomY, -centerZ] as [number, number, number],
    };
  }, [scene, castShadow, receiveShadow]);

  const s: [number, number, number] | number | undefined =
    typeof scale === "number"
      ? [scale, scale, scale]
      : Array.isArray(scale) && scale.length === 3
        ? [scale[0], scale[1], scale[2]]
        : undefined;

  return (
    <group position={position} rotation={rotation}>
      <group scale={s}>
        <primitive object={cloned} position={offset} />
      </group>
    </group>
  );
});

/** Compact stylized laptop accessory */
function LaptopProp({
  position,
  rotation = [0, 0, 0],
}: {
  position: [number, number, number];
  rotation?: [number, number, number];
}) {
  return (
    <group position={position} rotation={rotation}>
      {/* Base chassis */}
      <mesh position={[0, 0.005, 0]} castShadow>
        <boxGeometry args={[0.22, 0.008, 0.15]} />
        <meshStandardMaterial color="#2d3748" metalness={0.7} roughness={0.3} />
      </mesh>
      {/* Keyboard deck */}
      <mesh position={[0, 0.01, 0.01]}>
        <boxGeometry args={[0.19, 0.002, 0.09]} />
        <meshStandardMaterial color="#1a202c" roughness={0.8} />
      </mesh>
      {/* Trackpad */}
      <mesh position={[0, 0.01, -0.05]}>
        <boxGeometry args={[0.08, 0.001, 0.04]} />
        <meshStandardMaterial color="#475569" roughness={0.4} />
      </mesh>
      {/* Tilted display */}
      <group position={[0, 0.01, 0.075]} rotation={[-Math.PI * 0.6, 0, 0]}>
        <mesh position={[0, 0.07, 0]} castShadow>
          <boxGeometry args={[0.22, 0.14, 0.006]} />
          <meshStandardMaterial color="#2d3748" metalness={0.7} roughness={0.3} />
        </mesh>
        <mesh position={[0, 0.07, 0.004]}>
          <planeGeometry args={[0.2, 0.12]} />
          <meshStandardMaterial
            color="#38bdf8"
            emissive="#38bdf8"
            emissiveIntensity={0.65}
            roughness={0.2}
          />
        </mesh>
      </group>
    </group>
  );
}

/** Stylized coffee mug accessory */
function CoffeeMugProp({
  position,
  color = "#ffffff",
}: {
  position: [number, number, number];
  color?: string;
}) {
  return (
    <group position={position}>
      <mesh position={[0, 0.035, 0]} castShadow>
        <cylinderGeometry args={[0.032, 0.026, 0.07, 12]} />
        <meshStandardMaterial color={color} roughness={0.3} />
      </mesh>
      <mesh position={[0, 0.065, 0]}>
        <circleGeometry args={[0.027, 12]} />
        <meshStandardMaterial color="#3e2723" roughness={0.15} />
      </mesh>
    </group>
  );
}

/**
 * Pergola shade structure with sturdy vertical posts, support girders,
 * transverse louvers/slats, decorative vines, and glowing Edison fairy string lights.
 */
function PergolaShade({
  xMin,
  xMax,
  yMin,
  yMax,
  deckElevation,
}: {
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
  deckElevation: number;
}) {
  const [p0x, , p0z] = toWorld(xMin, yMin);
  const [p1x, , p1z] = toWorld(xMax, yMax);
  const centerX = (p0x + p1x) / 2;
  const centerZ = (p0z + p1z) / 2;
  const spanX = Math.abs(p1x - p0x);
  const spanZ = Math.abs(p1z - p0z);

  const postHeight = 1.85;
  const postThickness = 0.09;
  const plinthHeight = 0.08;
  const girderY = deckElevation + postHeight;
  const slatY = girderY + 0.08;

  // Posts at the four corners of the pergola
  const cornerPosts = useMemo(
    () => [
      [p0x + 0.08, p0z + 0.08],
      [p0x + 0.08, p1z - 0.08],
      [p1x - 0.08, p0z + 0.08],
      [p1x - 0.08, p1z - 0.08],
    ],
    [p0x, p0z, p1x, p1z],
  );

  return (
    <group>
      {/* 4 Timber Posts with stone plinth bases */}
      {cornerPosts.map(([px, pz], index) => (
        <group key={`pergola-post-${index}`} position={[px, deckElevation, pz]}>
          {/* Stone Plinth */}
          <mesh position={[0, plinthHeight / 2, 0]} castShadow receiveShadow>
            <boxGeometry args={[0.15, plinthHeight, 0.15]} />
            <meshStandardMaterial color="#475569" roughness={0.9} metalness={0.1} />
          </mesh>
          {/* Timber Column */}
          <mesh
            position={[0, plinthHeight + (postHeight - plinthHeight) / 2, 0]}
            castShadow
            receiveShadow
          >
            <boxGeometry
              args={[postThickness, postHeight - plinthHeight, postThickness]}
            />
            <meshStandardMaterial color="#4a2e1b" roughness={0.78} metalness={0.06} />
          </mesh>
          {/* Top Post Capital */}
          <mesh position={[0, postHeight - 0.02, 0]} castShadow>
            <boxGeometry args={[0.14, 0.04, 0.14]} />
            <meshStandardMaterial color="#382213" roughness={0.8} />
          </mesh>
        </group>
      ))}

      {/* 2 Main Longitudinal Timber Girders */}
      <mesh
        position={[p0x + 0.08, girderY, centerZ]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[0.08, 0.12, spanZ + 0.35]} />
        <meshStandardMaterial color="#4a2e1b" roughness={0.78} metalness={0.06} />
      </mesh>
      <mesh
        position={[p1x - 0.08, girderY, centerZ]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[0.08, 0.12, spanZ + 0.35]} />
        <meshStandardMaterial color="#4a2e1b" roughness={0.78} metalness={0.06} />
      </mesh>

      {/* Transverse Shade Rafters / Slats */}
      {Array.from({ length: 9 }).map((_, i) => {
        const offsetRatio = i / 8;
        const slatZ = p0z + 0.08 + offsetRatio * (p1z - p0z - 0.16);
        return (
          <mesh
            key={`pergola-slat-${i}`}
            position={[centerX, slatY, slatZ]}
            castShadow
            receiveShadow
          >
            <boxGeometry args={[spanX + 0.45, 0.06, 0.045]} />
            <meshStandardMaterial color="#5a3821" roughness={0.75} metalness={0.06} />
          </mesh>
        );
      })}

      {/* Decorative climbing ivy leaves on rear corner posts */}
      {[cornerPosts[0], cornerPosts[2]].map(([px, pz], postIndex) => (
        <group key={`ivy-${postIndex}`} position={[px, deckElevation + 0.2, pz]}>
          {Array.from({ length: 6 }).map((_, leafIndex) => (
            <mesh
              key={`ivy-leaf-${leafIndex}`}
              position={[
                (leafIndex % 2 === 0 ? 0.05 : -0.05) * (leafIndex * 0.15 + 0.8),
                leafIndex * 0.22,
                (leafIndex % 3 === 0 ? 0.05 : -0.05),
              ]}
              rotation={[0.2, leafIndex * 0.8, 0.3]}
              castShadow
            >
              <sphereGeometry args={[0.045 + (leafIndex % 2) * 0.015, 6, 6]} />
              <meshStandardMaterial color="#2d6a2f" roughness={0.9} />
            </mesh>
          ))}
        </group>
      ))}

      {/* Hanging Edison Fairy String Lights */}
      {Array.from({ length: 8 }).map((_, lightIndex) => {
        const ratio = (lightIndex + 0.5) / 8;
        const bulbX = p0x + 0.2 + ratio * (p1x - p0x - 0.4);
        const sag = Math.sin(ratio * Math.PI) * 0.12;
        const bulbZ = centerZ + (lightIndex % 2 === 0 ? -0.25 : 0.25);
        const bulbY = girderY - 0.08 - sag;
        return (
          <group key={`fairy-light-${lightIndex}`} position={[bulbX, bulbY, bulbZ]}>
            {/* Hanging cord */}
            <mesh position={[0, sag / 2 + 0.04, 0]}>
              <cylinderGeometry args={[0.003, 0.003, sag + 0.08, 6]} />
              <meshBasicMaterial color="#1f2937" />
            </mesh>
            {/* Glowing Edison Bulb */}
            <mesh position={[0, 0, 0]}>
              <sphereGeometry args={[0.035, 10, 10]} />
              <meshStandardMaterial
                color="#fffbeb"
                emissive="#ffb300"
                emissiveIntensity={1.8}
                roughness={0.2}
              />
            </mesh>
          </group>
        );
      })}

      {/* Subtle warm atmospheric glow beneath the pergola */}
      <pointLight
        position={[centerX, girderY - 0.3, centerZ]}
        color="#ffda79"
        intensity={0.7}
        distance={3.5}
        decay={2}
      />
    </group>
  );
}

/**
 * Parasol / Outdoor Umbrella with weighted stand, upright pole,
 * fabric canopy, finial, and under-canopy ribs.
 */
function ParasolUmbrella({
  position,
  scale = 1,
}: {
  position: [number, number, number];
  scale?: number;
}) {
  const [posX, posY, posZ] = position;
  const poleHeight = 2.15 * scale;
  const canopyRadius = 1.25 * scale;
  const canopyHeight = 0.38 * scale;
  const canopyY = posY + poleHeight - canopyHeight / 2;

  return (
    <group position={[posX, posY, posZ]}>
      {/* Heavy round parasol base plate */}
      <mesh position={[0, 0.02 * scale, 0]} castShadow receiveShadow>
        <cylinderGeometry
          args={[0.26 * scale, 0.28 * scale, 0.04 * scale, 18]}
        />
        <meshStandardMaterial color="#1e293b" roughness={0.7} metalness={0.6} />
      </mesh>

      {/* Center Mast / Pole */}
      <mesh position={[0, poleHeight / 2, 0]} castShadow>
        <cylinderGeometry
          args={[0.026 * scale, 0.026 * scale, poleHeight, 14]}
        />
        <meshStandardMaterial color="#3e2723" roughness={0.7} metalness={0.2} />
      </mesh>

      {/* Fabric Canopy (octagonal faceted cone) */}
      <mesh position={[0, canopyY, 0]} castShadow receiveShadow>
        <cylinderGeometry
          args={[0.06 * scale, canopyRadius, canopyHeight, 8, 1, false]}
        />
        <meshStandardMaterial
          color="#fdfcf7"
          roughness={0.88}
          metalness={0.02}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Top Finial */}
      <mesh position={[0, canopyY + canopyHeight / 2 + 0.04 * scale, 0]} castShadow>
        <sphereGeometry args={[0.05 * scale, 10, 10]} />
        <meshStandardMaterial color="#d97706" roughness={0.4} metalness={0.5} />
      </mesh>

      {/* Umbrella Rib Spokes under canopy */}
      {Array.from({ length: 8 }).map((_, ribIndex) => {
        const angle = (ribIndex * Math.PI) / 4;
        return (
          <mesh
            key={`rib-${ribIndex}`}
            position={[
              (Math.cos(angle) * canopyRadius) / 2,
              canopyY - canopyHeight / 4,
              (Math.sin(angle) * canopyRadius) / 2,
            ]}
            rotation={[0, -angle, 0.3]}
            castShadow
          >
            <boxGeometry args={[canopyRadius, 0.015 * scale, 0.015 * scale]} />
            <meshStandardMaterial color="#475569" roughness={0.6} metalness={0.4} />
          </mesh>
        );
      })}
    </group>
  );
}

/**
 * Built-in planter box with lush botanical foliage and flower accents.
 */
function GardenPlanterBox({
  position,
  size,
  flowerColor = "#f472b6",
}: {
  position: [number, number, number];
  size: [number, number, number];
  flowerColor?: string;
}) {
  const [width, height, depth] = size;
  const [posX, posY, posZ] = position;

  return (
    <group position={[posX, posY, posZ]}>
      {/* Wooden planter frame */}
      <mesh position={[0, height / 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[width, height, depth]} />
        <meshStandardMaterial color="#452a16" roughness={0.85} metalness={0.05} />
      </mesh>
      {/* Potting soil */}
      <mesh position={[0, height + 0.01, 0]}>
        <boxGeometry args={[width - 0.06, 0.02, depth - 0.06]} />
        <meshStandardMaterial color="#2d1c0f" roughness={0.98} />
      </mesh>
      {/* Dense botanical hedge fill */}
      <mesh position={[0, height + 0.12, 0]} castShadow>
        <boxGeometry args={[width - 0.08, 0.22, depth - 0.08]} />
        <meshStandardMaterial color="#2e7d32" roughness={0.92} />
      </mesh>
      {/* Decorative blossom clusters */}
      {Array.from({ length: Math.max(3, Math.floor(width / 0.35)) }).map(
        (_, flowerIndex) => (
          <mesh
            key={`flower-${flowerIndex}`}
            position={[
              -width / 2 + 0.2 + flowerIndex * 0.32,
              height + 0.24,
              (flowerIndex % 2 === 0 ? 0.04 : -0.04),
            ]}
          >
            <sphereGeometry args={[0.035, 8, 8]} />
            <meshStandardMaterial
              color={flowerColor}
              roughness={0.6}
              emissive={flowerColor}
              emissiveIntensity={0.2}
            />
          </mesh>
        ),
      )}
    </group>
  );
}

/**
 * GardenWorkspace component rendering a complete outdoor patio working space
 * outside the south wall of the headquarter room (x: 400 to 900, y: 760 to 920).
 *
 * Features:
 * - Wooden deck & stone paver patio floor with perimeter edging and stepping stones
 * - Outdoor work tables & chairs (team workstation, round meeting hub, solo pod, bistro nook)
 * - Potted plants around the working deck (corners, tables, borders, planters)
 * - Outdoor floor lamps with warm atmospheric illumination
 * - Parasol umbrella & wooden pergola beam shade with Edison string lights
 */
export const GardenWorkspace = memo(function GardenWorkspace() {
  const deckElevation = 0.06;

  // Deck boundary coordinates
  const [deckCenterX, , deckCenterZ] = toWorld(520, 840);
  const [stoneCenterX, , stoneCenterZ] = toWorld(770, 840);
  const [groundCenterX, , groundCenterZ] = toWorld(650, 840);

  // Deck dimensions in world meters
  const woodenDeckWidth = 240 * SCALE; // ~4.32m
  const stonePatioWidth = 260 * SCALE; // ~4.68m
  const patioDepth = 160 * SCALE; // ~2.88m

  // Extended lawn apron dimensions
  const lawnWidth = 540 * SCALE; // ~9.72m
  const lawnDepth = 200 * SCALE; // ~3.60m

  return (
    <group>
      {/* 1. Ground Apron & Lawnbank */}
      <mesh
        position={[groundCenterX, 0.003, groundCenterZ]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
      >
        <planeGeometry args={[lawnWidth, lawnDepth]} />
        <meshStandardMaterial color="#4a7337" roughness={0.96} metalness={0.02} />
      </mesh>

      {/* Decorative gravel perimeter strip around patio */}
      <mesh
        position={[groundCenterX, 0.006, groundCenterZ]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
      >
        <planeGeometry args={[woodenDeckWidth + stonePatioWidth + 0.35, patioDepth + 0.35]} />
        <meshStandardMaterial color="#78716c" roughness={0.98} metalness={0.02} />
      </mesh>

      {/* Stepping stone pathway connecting HQ south wall to patio */}
      {Array.from({ length: 4 }).map((_, stepIdx) => {
        const [sx, , sz] = toWorld(645 + (stepIdx % 2 === 0 ? -6 : 6), 726 + stepIdx * 9);
        return (
          <mesh
            key={`stepping-stone-${stepIdx}`}
            position={[sx, 0.018, sz]}
            rotation={[-Math.PI / 2, 0, 0.15 * (stepIdx % 2 === 0 ? 1 : -1)]}
            receiveShadow
          >
            <circleGeometry args={[0.22, 12]} />
            <meshStandardMaterial color="#a8a29e" roughness={0.92} metalness={0.04} />
          </mesh>
        );
      })}

      {/* 2. Wooden Deck Platform (West Zone: x: 400 to 640) */}
      <group position={[deckCenterX, 0, deckCenterZ]}>
        {/* Solid wood deck foundation */}
        <mesh
          position={[0, deckElevation / 2, 0]}
          castShadow
          receiveShadow
        >
          <boxGeometry args={[woodenDeckWidth, deckElevation, patioDepth]} />
          <meshStandardMaterial color="#3b2111" roughness={0.88} />
        </mesh>
        {/* Cedar deck surface planks */}
        <mesh
          position={[0, deckElevation + 0.002, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          receiveShadow
        >
          <planeGeometry args={[woodenDeckWidth - 0.04, patioDepth - 0.04]} />
          <meshStandardMaterial color="#8a532d" roughness={0.76} metalness={0.04} />
        </mesh>
        {/* Individual wooden plank groove highlights */}
        {Array.from({ length: 15 }).map((_, plankIdx) => {
          const plankZ = -patioDepth / 2 + 0.1 + plankIdx * (patioDepth / 15);
          return (
            <mesh
              key={`deck-plank-joint-${plankIdx}`}
              position={[0, deckElevation + 0.004, plankZ]}
              receiveShadow
            >
              <boxGeometry args={[woodenDeckWidth - 0.05, 0.003, 0.025]} />
              <meshStandardMaterial color="#683d1e" roughness={0.82} />
            </mesh>
          );
        })}
        {/* Dark wooden border fascia framing */}
        <mesh
          position={[-woodenDeckWidth / 2 + 0.04, deckElevation + 0.008, 0]}
          castShadow
        >
          <boxGeometry args={[0.08, 0.016, patioDepth]} />
          <meshStandardMaterial color="#502c14" roughness={0.8} />
        </mesh>
        <mesh
          position={[0, deckElevation + 0.008, -patioDepth / 2 + 0.04]}
          castShadow
        >
          <boxGeometry args={[woodenDeckWidth, 0.016, 0.08]} />
          <meshStandardMaterial color="#502c14" roughness={0.8} />
        </mesh>
        <mesh
          position={[0, deckElevation + 0.008, patioDepth / 2 - 0.04]}
          castShadow
        >
          <boxGeometry args={[woodenDeckWidth, 0.016, 0.08]} />
          <meshStandardMaterial color="#502c14" roughness={0.8} />
        </mesh>
      </group>

      {/* 3. Stone Paver Patio Floor (East Zone: x: 640 to 900) */}
      <group position={[stoneCenterX, 0, stoneCenterZ]}>
        {/* Stone foundation slab */}
        <mesh
          position={[0, (deckElevation - 0.005) / 2, 0]}
          castShadow
          receiveShadow
        >
          <boxGeometry args={[stonePatioWidth, deckElevation - 0.005, patioDepth]} />
          <meshStandardMaterial color="#57534e" roughness={0.92} />
        </mesh>
        {/* Stone paver surface */}
        <mesh
          position={[0, deckElevation - 0.001, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          receiveShadow
        >
          <planeGeometry args={[stonePatioWidth - 0.04, patioDepth - 0.04]} />
          <meshStandardMaterial color="#b7ada3" roughness={0.9} metalness={0.02} />
        </mesh>
        {/* Stone paver tile grid seams */}
        {Array.from({ length: 7 }).map((_, col) => {
          const tileX = -stonePatioWidth / 2 + 0.35 + col * ((stonePatioWidth - 0.7) / 6);
          return (
            <mesh
              key={`stone-col-${col}`}
              position={[tileX, deckElevation + 0.001, 0]}
              receiveShadow
            >
              <boxGeometry args={[0.018, 0.003, patioDepth - 0.06]} />
              <meshStandardMaterial color="#78716c" roughness={0.95} />
            </mesh>
          );
        })}
        {Array.from({ length: 5 }).map((_, row) => {
          const tileZ = -patioDepth / 2 + 0.3 + row * ((patioDepth - 0.6) / 4);
          return (
            <mesh
              key={`stone-row-${row}`}
              position={[0, deckElevation + 0.001, tileZ]}
              receiveShadow
            >
              <boxGeometry args={[stonePatioWidth - 0.06, 0.003, 0.018]} />
              <meshStandardMaterial color="#78716c" roughness={0.95} />
            </mesh>
          );
        })}
        {/* Stone curb edge */}
        <mesh
          position={[stonePatioWidth / 2 - 0.035, deckElevation + 0.006, 0]}
          castShadow
        >
          <boxGeometry args={[0.07, 0.012, patioDepth]} />
          <meshStandardMaterial color="#44403c" roughness={0.88} />
        </mesh>
      </group>

      {/* Threshold divider between wooden deck and stone pavers */}
      {(() => {
        const [divX, , divZ] = toWorld(640, 840);
        return (
          <mesh position={[divX, deckElevation + 0.008, divZ]} castShadow>
            <boxGeometry args={[0.09, 0.016, patioDepth]} />
            <meshStandardMaterial color="#2d2217" roughness={0.7} metalness={0.2} />
          </mesh>
        );
      })()}

      {/* 4. Pergola Wooden Beam Shade over the wooden deck */}
      <PergolaShade
        xMin={440}
        xMax={620}
        yMin={780}
        yMax={900}
        deckElevation={deckElevation}
      />

      {/* 5. Parasol Umbrella over the stone paver meeting hub */}
      {(() => {
        const [umbrellaX, , umbrellaZ] = toWorld(750, 840);
        return (
          <ParasolUmbrella
            position={[umbrellaX, deckElevation, umbrellaZ]}
            scale={1.05}
          />
        );
      })()}

      {/* 6. Built-in Perimeter Planter Boxes */}
      {/* South edge planter along wooden deck */}
      {(() => {
        const [px, , pz] = toWorld(520, 916);
        return (
          <GardenPlanterBox
            position={[px, deckElevation, pz]}
            size={[110 * SCALE, 0.26, 16 * SCALE]}
            flowerColor="#f472b6"
          />
        );
      })()}
      {/* East edge planter along stone paver patio */}
      {(() => {
        const [px, , pz] = toWorld(895, 840);
        return (
          <GardenPlanterBox
            position={[px, deckElevation, pz]}
            size={[14 * SCALE, 0.26, 90 * SCALE]}
            flowerColor="#a78bfa"
          />
        );
      })()}

      {/* 7. Outdoor Work Tables & Chairs */}

      {/* Station A: Pergola Team Desk (under pergola shade) */}
      {(() => {
        const [tx, , tz] = toWorld(530, 840);
        const [c1x, , c1z] = toWorld(510, 818);
        const [c2x, , c2z] = toWorld(550, 818);
        const [c3x, , c3z] = toWorld(510, 862);
        const [c4x, , c4z] = toWorld(550, 862);

        return (
          <group>
            {/* Rectangular work table */}
            <PatioModel
              url="/office-assets/models/furniture/table.glb"
              position={[tx, deckElevation, tz]}
              scale={1.55}
            />
            {/* Chairs North (facing south) */}
            <PatioModel
              url="/office-assets/models/furniture/chairModernCushion.glb"
              position={[c1x, deckElevation, c1z]}
              rotation={[0, 0, 0]}
              scale={1.45}
            />
            <PatioModel
              url="/office-assets/models/furniture/chairModernCushion.glb"
              position={[c2x, deckElevation, c2z]}
              rotation={[0, 0, 0]}
              scale={1.45}
            />
            {/* Chairs South (facing north) */}
            <PatioModel
              url="/office-assets/models/furniture/chairModernCushion.glb"
              position={[c3x, deckElevation, c3z]}
              rotation={[0, Math.PI, 0]}
              scale={1.45}
            />
            <PatioModel
              url="/office-assets/models/furniture/chairModernCushion.glb"
              position={[c4x, deckElevation, c4z]}
              rotation={[0, Math.PI, 0]}
              scale={1.45}
            />
            {/* Tabletop Work Items */}
            <LaptopProp
              position={[tx - 0.28, deckElevation + 0.51, tz - 0.08]}
              rotation={[0, 0.1, 0]}
            />
            <LaptopProp
              position={[tx + 0.28, deckElevation + 0.51, tz + 0.08]}
              rotation={[0, Math.PI - 0.1, 0]}
            />
            <CoffeeMugProp
              position={[tx - 0.1, deckElevation + 0.51, tz - 0.12]}
              color="#ffffff"
            />
            <CoffeeMugProp
              position={[tx + 0.12, deckElevation + 0.51, tz + 0.12]}
              color="#38bdf8"
            />
            {/* Small succulent centerpiece on table */}
            <PatioModel
              url="/office-assets/models/furniture/plantSmall1.glb"
              position={[tx, deckElevation + 0.51, tz]}
              scale={0.9}
            />
          </group>
        );
      })()}

      {/* Station B: Round Table Garden Meeting Hub (under parasol umbrella) */}
      {(() => {
        const [tx, , tz] = toWorld(750, 840);
        const [cNx, , cNz] = toWorld(750, 814);
        const [cSx, , cSz] = toWorld(750, 866);
        const [cWx, , cWz] = toWorld(724, 840);
        const [cEx, , cEz] = toWorld(776, 840);

        return (
          <group>
            {/* Round meeting table */}
            <PatioModel
              url="/office-assets/models/furniture/tableRound.glb"
              position={[tx, deckElevation, tz]}
              scale={1.8}
            />
            {/* 4 Modern Cushion Chairs arranged radially around round table */}
            <PatioModel
              url="/office-assets/models/furniture/chairModernCushion.glb"
              position={[cNx, deckElevation, cNz]}
              rotation={[0, 0, 0]}
              scale={1.45}
            />
            <PatioModel
              url="/office-assets/models/furniture/chairModernCushion.glb"
              position={[cSx, deckElevation, cSz]}
              rotation={[0, Math.PI, 0]}
              scale={1.45}
            />
            <PatioModel
              url="/office-assets/models/furniture/chairModernCushion.glb"
              position={[cWx, deckElevation, cWz]}
              rotation={[0, Math.PI / 2, 0]}
              scale={1.45}
            />
            <PatioModel
              url="/office-assets/models/furniture/chairModernCushion.glb"
              position={[cEx, deckElevation, cEz]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={1.45}
            />
            {/* Coffee mugs & tablet on round table */}
            <CoffeeMugProp
              position={[tx + 0.15, deckElevation + 0.62, tz - 0.12]}
              color="#fbbf24"
            />
            <CoffeeMugProp
              position={[tx - 0.18, deckElevation + 0.62, tz + 0.1]}
              color="#ffffff"
            />
          </group>
        );
      })()}

      {/* Station C: Focus Garden Work Nook (East patio corner) */}
      {(() => {
        const [tx, , tz] = toWorld(845, 805);
        const [cx, , cz] = toWorld(845, 825);

        return (
          <group>
            <PatioModel
              url="/office-assets/models/furniture/table.glb"
              position={[tx, deckElevation, tz]}
              scale={1.35}
            />
            <PatioModel
              url="/office-assets/models/furniture/chairDesk.glb"
              position={[cx, deckElevation, cz]}
              rotation={[0, 0, 0]}
              scale={1.25}
            />
            <LaptopProp
              position={[tx, deckElevation + 0.44, tz]}
              rotation={[0, 0, 0]}
            />
            <PatioModel
              url="/office-assets/models/furniture/plantSmall1.glb"
              position={[tx + 0.28, deckElevation + 0.44, tz - 0.06]}
              scale={0.8}
            />
          </group>
        );
      })()}

      {/* Station D: Bistro / 1-on-1 Coffee Nook (West deck corner) */}
      {(() => {
        const [tx, , tz] = toWorld(450, 795);
        const [c1x, , c1z] = toWorld(440, 778);
        const [c2x, , c2z] = toWorld(460, 812);

        return (
          <group>
            <PatioModel
              url="/office-assets/models/furniture/tableRound.glb"
              position={[tx, deckElevation, tz]}
              scale={1.35}
            />
            <PatioModel
              url="/office-assets/models/furniture/chairModernCushion.glb"
              position={[c1x, deckElevation, c1z]}
              rotation={[0, 0.4, 0]}
              scale={1.35}
            />
            <PatioModel
              url="/office-assets/models/furniture/chairModernCushion.glb"
              position={[c2x, deckElevation, c2z]}
              rotation={[0, Math.PI + 0.4, 0]}
              scale={1.35}
            />
            <CoffeeMugProp
              position={[tx - 0.08, deckElevation + 0.46, tz + 0.05]}
              color="#e0e7ff"
            />
          </group>
        );
      })()}

      {/* 8. Potted Plants around the Working Deck */}
      {/* Tall Potted Plants at Deck & Patio Corners */}
      {(() => {
        const corners = [
          { x: 412, y: 772, scale: 1.65 },
          { x: 412, y: 908, scale: 1.65 },
          { x: 888, y: 772, scale: 1.65 },
          { x: 888, y: 908, scale: 1.65 },
          { x: 635, y: 770, scale: 1.55 },
          { x: 635, y: 910, scale: 1.55 },
          { x: 615, y: 748, scale: 1.4 },
          { x: 675, y: 748, scale: 1.4 },
        ];
        return (
          <>
            {corners.map((plant, idx) => {
              const [px, , pz] = toWorld(plant.x, plant.y);
              return (
                <PatioModel
                  key={`large-pot-${idx}`}
                  url="/office-assets/models/furniture/pottedPlant.glb"
                  position={[px, deckElevation, pz]}
                  scale={plant.scale}
                />
              );
            })}
          </>
        );
      })()}

      {/* Small accent plants along borders */}
      {(() => {
        const smallPlants = [
          { x: 412, y: 840, scale: 1.35 },
          { x: 888, y: 845, scale: 1.35 },
          { x: 700, y: 775, scale: 1.25 },
          { x: 795, y: 775, scale: 1.25 },
          { x: 470, y: 768, scale: 1.2 },
          { x: 580, y: 768, scale: 1.2 },
        ];
        return (
          <>
            {smallPlants.map((plant, idx) => {
              const [px, , pz] = toWorld(plant.x, plant.y);
              return (
                <PatioModel
                  key={`small-plant-${idx}`}
                  url="/office-assets/models/furniture/plantSmall1.glb"
                  position={[px, deckElevation, pz]}
                  scale={plant.scale}
                />
              );
            })}
          </>
        );
      })()}

      {/* 9. Outdoor Floor Lamps with Warm Lighting */}
      {(() => {
        const lamps = [
          { x: 465, y: 882 }, // Near pergola work table
          { x: 805, y: 882 }, // Near meeting cluster
          { x: 675, y: 785 }, // Near patio entrance
        ];
        return (
          <>
            {lamps.map((lamp, idx) => {
              const [lx, , lz] = toWorld(lamp.x, lamp.y);
              return (
                <group key={`garden-lamp-${idx}`}>
                  <PatioModel
                    url="/office-assets/models/furniture/lampRoundFloor.glb"
                    position={[lx, deckElevation, lz]}
                    scale={1.25}
                  />
                  {/* Warm evening point light at lamp shade height */}
                  <pointLight
                    position={[lx, deckElevation + 1.08, lz]}
                    color="#ffecb3"
                    intensity={0.65}
                    distance={3.2}
                    decay={2}
                  />
                </group>
              );
            })}
          </>
        );
      })()}
    </group>
  );
});
