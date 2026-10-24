"use client";

import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { clone as cloneSkeleton } from "three/examples/jsm/utils/SkeletonUtils.js";
import { ANIME_AVATAR_PRESETS } from "@/lib/avatars/animePresets";

type Props = {
  modelUrl: string;
  animationName?: "idle" | "attack" | "dead";
};

export const AgentAvatarGlbModel = ({ modelUrl, animationName = "idle" }: Props) => {
  const groupRef = useRef<THREE.Group>(null);
  const gltf = useGLTF(modelUrl);
  const clonedScene = useMemo(
    () => cloneSkeleton(gltf.scene) as THREE.Group,
    [gltf.scene],
  );
  const { actions, mixer } = useAnimations(gltf.animations, clonedScene);

  useEffect(() => {
    const clip =
      actions[animationName] ??
      actions.idle ??
      Object.values(actions).find((a) => a !== null) ??
      null;
    if (!clip) return;
    clip.reset().fadeIn(0.15).play();
    return () => {
      clip.fadeOut(0.15);
    };
  }, [actions, animationName]);

  useEffect(() => {
    return () => {
      mixer.stopAllAction();
    };
  }, [mixer]);

  return (
    <group ref={groupRef}>
      <primitive object={clonedScene} />
    </group>
  );
};

for (const preset of ANIME_AVATAR_PRESETS) {
  useGLTF.preload(preset.modelUrl);
}
