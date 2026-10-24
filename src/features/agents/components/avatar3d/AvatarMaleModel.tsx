"use client";

import { useGLTF } from "@react-three/drei";
import { useLayoutEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { getAvatarModelUrl } from "@/lib/avatars/avatarModel";

const MALE_URL = getAvatarModelUrl("male")!;

type Props = {
  /** Target height in local units (before any parent scale). Default 0.6. */
  targetHeight?: number;
  /** Extra Y offset after auto-fit. Default 0. */
  yOffset?: number;
  /** Y rotation in radians. Default 0 (model faces +Z by default). */
  rotationY?: number;
};

/**
 * Loads the male avatar GLB and auto-fits it to `targetHeight` using its
 * bounding box so the geometry sits with feet at y=0 regardless of the
 * source model's native scale/pivot.
 *
 * The source model (Reallusion CC_Base) ships with a single PBR material and
 * baked textures, so per-slot color tinting (skin/hair/clothing) is intentionally
 * NOT applied — doing so would destroy the authored texturing.
 */
export const AvatarMaleModel = ({
  targetHeight = 0.6,
  yOffset = 0,
  rotationY = 0,
}: Props) => {
  const { scene } = useGLTF(MALE_URL);
  const cloned = useMemo(() => scene.clone(true), [scene]);
  const groupRef = useRef<THREE.Group>(null);

  const { scale, originY } = useMemo(() => {
    const box = new THREE.Box3().setFromObject(cloned);
    const size = new THREE.Vector3();
    box.getSize(size);
    const height = size.y || 1;
    const s = targetHeight / height;
    // Lift so that min.y * s + originY = 0  =>  originY = -min.y * s
    return { scale: s, originY: -box.min.y * s };
  }, [cloned, targetHeight]);

  useLayoutEffect(() => {
    cloned.traverse((obj) => {
      obj.castShadow = true;
      obj.receiveShadow = true;
    });
  }, [cloned]);

  return (
    <group
      ref={groupRef}
      position={[0, originY + yOffset, 0]}
      scale={[scale, scale, scale]}
      rotation={[0, rotationY, 0]}
    >
      <primitive object={cloned} />
    </group>
  );
};

useGLTF.preload(MALE_URL);
