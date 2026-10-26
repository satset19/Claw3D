"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState, type MutableRefObject, type RefObject } from "react";
import * as THREE from "three";
import { WORLD_H, WORLD_W } from "@/features/retro-office/core/constants";
import {
  DISTRICT_CAMERA_POSITION,
  DISTRICT_CAMERA_TARGET,
  DISTRICT_CAMERA_ZOOM,
} from "@/features/retro-office/core/district";
import { toWorld } from "@/features/retro-office/core/geometry";
import type { RenderAgent } from "@/features/retro-office/core/types";

export type CameraPreset = {
  pos: [number, number, number];
  target: [number, number, number];
  zoom?: number;
};

export const CAMERA_PRESETS = {
  overview: {
    pos: DISTRICT_CAMERA_POSITION,
    target: DISTRICT_CAMERA_TARGET,
    zoom: DISTRICT_CAMERA_ZOOM,
  },
  frontDesk: {
    pos: [-2, 8, 4],
    target: [-3, 0, -2],
    zoom: 70,
  },
  lounge: {
    pos: [7, 7, -5],
    target: [5, 0, -3],
    zoom: 62,
  },
} satisfies Record<string, CameraPreset>;

type OrbitControllerLike = {
  target: THREE.Vector3;
  update: () => void;
};

export function CameraAnimator({
  presetRef,
  orbitRef,
}: {
  presetRef: MutableRefObject<CameraPreset | null>;
  orbitRef: RefObject<OrbitControllerLike | null>;
}) {
  const { camera } = useThree();
  const activePerspectiveCameraRef = useRef<THREE.PerspectiveCamera | null>(
    camera instanceof THREE.PerspectiveCamera ? camera : null,
  );
  const targetPositionRef = useRef(new THREE.Vector3());
  const targetLookAtRef = useRef(new THREE.Vector3());

  useEffect(() => {
    if (camera instanceof THREE.PerspectiveCamera) {
      activePerspectiveCameraRef.current = camera;
    }
  }, [camera]);

  useFrame(() => {
    const preset = presetRef.current;
    const orbit = orbitRef.current;
    if (!preset || !orbit) return;
    const activeCamera = activePerspectiveCameraRef.current;

    targetPositionRef.current.set(...preset.pos);
    targetLookAtRef.current.set(...preset.target);
    camera.position.lerp(targetPositionRef.current, 0.06);
    orbit.target.lerp(targetLookAtRef.current, 0.06);

    if (activeCamera && typeof preset.zoom === "number") {
      activeCamera.zoom += (preset.zoom - activeCamera.zoom) * 0.08;
      activeCamera.updateProjectionMatrix();
    }

    orbit.update();
    const zoomSettled =
      !activeCamera ||
      typeof preset.zoom !== "number" ||
      Math.abs(activeCamera.zoom - preset.zoom) < 0.5;

    if (camera.position.distanceTo(targetPositionRef.current) < 0.05 && zoomSettled) {
      presetRef.current = null;
    }
  });

  return null;
}

export function FollowCamController({
  followRef,
  agentsRef,
  agentLookupRef,
}: {
  followRef: MutableRefObject<string | null>;
  agentsRef: RefObject<RenderAgent[]>;
  agentLookupRef?: RefObject<Map<string, RenderAgent>>;
}) {
  const { camera, set, size, gl } = useThree();
  const perspectiveCameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const originalCameraRef = useRef<THREE.PerspectiveCamera | null>(
    camera instanceof THREE.PerspectiveCamera ? camera : null,
  );
  const wasFollowingRef = useRef(false);
  const lastAgentIdRef = useRef<string | null>(null);
  const thetaRef = useRef(0);
  const phiRef = useRef(Math.PI / 6);
  const radiusRef = useRef(2.0);
  const isDraggingRef = useRef(false);
  const lastMouseRef = useRef({ x: 0, y: 0 });
  const cameraPositionRef = useRef(new THREE.Vector3());
  const lookAtRef = useRef(new THREE.Vector3());

  useEffect(() => {
    if (camera instanceof THREE.PerspectiveCamera) {
      originalCameraRef.current = camera;
    }
  }, [camera]);

  useEffect(() => {
    const element = gl.domElement;

    const handleMouseDown = (event: MouseEvent) => {
      if (!followRef.current || event.button !== 0) return;
      isDraggingRef.current = true;
      lastMouseRef.current = { x: event.clientX, y: event.clientY };
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!isDraggingRef.current) return;
      const dx = event.clientX - lastMouseRef.current.x;
      const dy = event.clientY - lastMouseRef.current.y;
      lastMouseRef.current = { x: event.clientX, y: event.clientY };
      thetaRef.current -= dx * 0.006;
      phiRef.current = Math.max(
        0.05,
        Math.min(Math.PI / 2.2, phiRef.current + dy * 0.006),
      );
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    const handleWheel = (event: WheelEvent) => {
      if (!followRef.current) return;
      radiusRef.current = Math.max(
        0.8,
        Math.min(10, radiusRef.current + event.deltaY * 0.005),
      );
    };

    element.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    element.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      element.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      element.removeEventListener("wheel", handleWheel);
    };
  }, [gl, followRef]);

  useFrame(() => {
    const agentId = followRef.current;
    const isFollowing = agentId !== null;

    if (isFollowing && !wasFollowingRef.current) {
      const agent =
        (agentId ? agentLookupRef?.current?.get(agentId) : undefined) ??
        agentsRef.current?.find((candidate) => candidate.id === agentId);
      if (!agent) return;

      if (!perspectiveCameraRef.current) {
        perspectiveCameraRef.current = new THREE.PerspectiveCamera(
          65,
          size.width / size.height,
          0.1,
          100,
        );
      }

      thetaRef.current = agent.facing + Math.PI;
      lastAgentIdRef.current = agentId;
      set({ camera: perspectiveCameraRef.current });
      wasFollowingRef.current = true;
    }

    if (!isFollowing && wasFollowingRef.current) {
      if (originalCameraRef.current) {
        set({ camera: originalCameraRef.current });
      }
      wasFollowingRef.current = false;
      return;
    }

    if (!isFollowing || !perspectiveCameraRef.current) return;

    const agent =
      (agentId ? agentLookupRef?.current?.get(agentId) : undefined) ??
      agentsRef.current?.find((candidate) => candidate.id === agentId);
    if (!agent) return;

    if (agentId !== lastAgentIdRef.current) {
      thetaRef.current = agent.facing + Math.PI;
      lastAgentIdRef.current = agentId;
    }

    const [wx, , wz] = toWorld(agent.x, agent.y);
    const radius = radiusRef.current;
    const theta = thetaRef.current;
    const phi = phiRef.current;

    cameraPositionRef.current.set(
      wx + radius * Math.sin(phi) * Math.sin(theta),
      0.4 + radius * Math.cos(phi),
      wz + radius * Math.sin(phi) * Math.cos(theta),
    );
    perspectiveCameraRef.current.position.copy(cameraPositionRef.current);

    lookAtRef.current.set(wx, 0.5, wz);
    perspectiveCameraRef.current.lookAt(lookAtRef.current);
    perspectiveCameraRef.current.aspect = size.width / size.height;
    perspectiveCameraRef.current.updateProjectionMatrix();
  });

  return null;
}

const DAY_NIGHT_PERIOD = 300;

const DAY_NIGHT_POSITIONS = [0, 0.2, 0.45, 0.65, 0.8, 0.95];

const DAY_NIGHT_KEYFRAMES = [
  {
    ambient: "#c8a870",
    sun: "#ffe8b0",
    sunIntensity: 0.95,
    ambientIntensity: 0.65,
  },
  {
    ambient: "#c8d0e0",
    sun: "#f0f4ff",
    sunIntensity: 1.3,
    ambientIntensity: 0.75,
  },
  {
    ambient: "#c8d0e0",
    sun: "#f0f4ff",
    sunIntensity: 1.3,
    ambientIntensity: 0.75,
  },
  {
    ambient: "#c87840",
    sun: "#ff9050",
    sunIntensity: 1.0,
    ambientIntensity: 0.6,
  },
  {
    ambient: "#2a3654",
    sun: "#3d5898",
    sunIntensity: 0.65,
    ambientIntensity: 0.52,
  },
  {
    ambient: "#222c44",
    sun: "#32487a",
    sunIntensity: 0.55,
    ambientIntensity: 0.48,
  },
];

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

const lerpColor = (fromColor: string, toColor: string, t: number) => {
  const parse = (color: string) => {
    const value = parseInt(color.slice(1), 16);
    return [(value >> 16) & 0xff, (value >> 8) & 0xff, value & 0xff];
  };

  const [fromR, fromG, fromB] = parse(fromColor);
  const [toR, toG, toB] = parse(toColor);
  const red = Math.round(lerp(fromR, toR, t));
  const green = Math.round(lerp(fromG, toG, t));
  const blue = Math.round(lerp(fromB, toB, t));

  return `rgb(${red},${green},${blue})`;
};

export function DayNightCycle({
  externalTimeRef,
  theme,
}: {
  externalTimeRef?: MutableRefObject<number>;
  theme?: "light" | "dark";
}) {
  const ambientRef = useRef<THREE.AmbientLight>(null);
  const sunRef = useRef<THREE.DirectionalLight>(null);
  const timeRef = useRef(0.25);
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    if (theme) return theme === "dark";
    if (typeof document === "undefined") return false;
    return document.documentElement.classList.contains("dark");
  });

  useEffect(() => {
    if (theme) {
      setIsDarkTheme(theme === "dark");
      return;
    }
    if (typeof document === "undefined") return;
    const observer = new MutationObserver(() => {
      setIsDarkTheme(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, [theme]);

  useFrame((_, delta) => {
    timeRef.current = (timeRef.current + delta / DAY_NIGHT_PERIOD) % 1;
    if (externalTimeRef) externalTimeRef.current = timeRef.current;
    const time = timeRef.current;

    let indexA = 0;
    for (let index = 0; index < DAY_NIGHT_POSITIONS.length - 1; index += 1) {
      if (time >= DAY_NIGHT_POSITIONS[index] && time < DAY_NIGHT_POSITIONS[index + 1]) {
        indexA = index;
        break;
      }
      if (time >= DAY_NIGHT_POSITIONS[DAY_NIGHT_POSITIONS.length - 1]) {
        indexA = DAY_NIGHT_POSITIONS.length - 1;
      }
    }

    const indexB = (indexA + 1) % DAY_NIGHT_KEYFRAMES.length;
    const positionA = DAY_NIGHT_POSITIONS[indexA];
    const positionB = indexB === 0 ? 1 : DAY_NIGHT_POSITIONS[indexB];
    const span = positionB - positionA;
    const localT = span > 0 ? (time - positionA) / span : 0;
    const keyframeA = DAY_NIGHT_KEYFRAMES[indexA];
    const keyframeB = DAY_NIGHT_KEYFRAMES[indexB];

    // Smoothly adapt intensities for both light and dark themes with minimum visibility floors
    const ambientMultiplier = isDarkTheme ? 0.95 : 1.0;
    const sunMultiplier = isDarkTheme ? 0.95 : 1.0;

    const targetAmbient = Math.max(
      0.45,
      lerp(keyframeA.ambientIntensity, keyframeB.ambientIntensity, localT) * ambientMultiplier,
    );
    const targetSun = Math.max(
      0.5,
      lerp(keyframeA.sunIntensity, keyframeB.sunIntensity, localT) * sunMultiplier,
    );

    if (ambientRef.current) {
      ambientRef.current.color.set(
        lerpColor(keyframeA.ambient, keyframeB.ambient, localT),
      );
      ambientRef.current.intensity = THREE.MathUtils.lerp(
        ambientRef.current.intensity,
        targetAmbient,
        0.05,
      );
    }

    if (sunRef.current) {
      sunRef.current.color.set(lerpColor(keyframeA.sun, keyframeB.sun, localT));
      sunRef.current.intensity = THREE.MathUtils.lerp(
        sunRef.current.intensity,
        targetSun,
        0.05,
      );
    }
  });

  return (
    <>
      <ambientLight ref={ambientRef} intensity={0.75} color="#c8d0e0" />
      <directionalLight
        ref={sunRef}
        position={[8, 14, 6]}
        intensity={1.3}
        color="#f0f4ff"
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-bias={-0.0002}
        shadow-normalBias={0.02}
        shadow-camera-left={-WORLD_W * 0.7}
        shadow-camera-right={WORLD_W * 0.7}
        shadow-camera-top={WORLD_H * 0.7}
        shadow-camera-bottom={-WORLD_H * 0.7}
      />
    </>
  );
}

export function OfficeLighting({ theme }: { theme?: "light" | "dark" } = {}) {
  const [activeTheme, setActiveTheme] = useState<"cyberpunk" | "lofi" | "nordic" | "dark">(() => {
    if (typeof document === "undefined") return "cyberpunk";
    if (document.documentElement.classList.contains("theme-cyberpunk")) return "cyberpunk";
    if (document.documentElement.classList.contains("theme-lofi")) return "lofi";
    if (document.documentElement.classList.contains("theme-nordic")) return "nordic";
    if (document.documentElement.classList.contains("dark")) return "dark";
    return "cyberpunk";
  });

  useEffect(() => {
    if (typeof document === "undefined") return;
    const detect = () => {
      const root = document.documentElement;
      if (root.classList.contains("theme-cyberpunk")) {
        setActiveTheme("cyberpunk");
      } else if (root.classList.contains("theme-lofi")) {
        setActiveTheme("lofi");
      } else if (root.classList.contains("theme-nordic")) {
        setActiveTheme("nordic");
      } else if (root.classList.contains("dark")) {
        setActiveTheme("dark");
      } else {
        setActiveTheme("cyberpunk");
      }
    };
    detect();
    const observer = new MutationObserver(detect);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, [theme]);

  // Cyberpunk Neon Lighting (Cyan key + Magenta rim)
  if (activeTheme === "cyberpunk") {
    return (
      <>
        <ambientLight intensity={0.58} color="#152030" />
        <directionalLight
          position={[8, 14, 6]}
          intensity={1.2}
          color="#a5f3fc"
          castShadow
          shadow-mapSize={[1024, 1024]}
          shadow-bias={-0.0002}
          shadow-normalBias={0.02}
          shadow-camera-left={-WORLD_W * 0.7}
          shadow-camera-right={WORLD_W * 0.7}
          shadow-camera-top={WORLD_H * 0.7}
          shadow-camera-bottom={-WORLD_H * 0.7}
        />
        <directionalLight
          position={[-6, 7, -5]}
          intensity={0.65}
          color="#f43f5e"
        />
      </>
    );
  }

  // Cozy Lo-Fi Lighting (Warm amber key + evening fill)
  if (activeTheme === "lofi") {
    return (
      <>
        <ambientLight intensity={0.68} color="#362f28" />
        <directionalLight
          position={[8, 14, 6]}
          intensity={1.25}
          color="#fed7aa"
          castShadow
          shadow-mapSize={[1024, 1024]}
          shadow-bias={-0.0002}
          shadow-normalBias={0.02}
          shadow-camera-left={-WORLD_W * 0.7}
          shadow-camera-right={WORLD_W * 0.7}
          shadow-camera-top={WORLD_H * 0.7}
          shadow-camera-bottom={-WORLD_H * 0.7}
        />
        <directionalLight
          position={[-6, 7, -5]}
          intensity={0.35}
          color="#9bb4d6"
        />
      </>
    );
  }

  // Nordic Clean Lighting (Daylight crisp white)
  if (activeTheme === "nordic") {
    return (
      <>
        <ambientLight intensity={0.88} color="#f8fafc" />
        <directionalLight
          position={[8, 15, 6]}
          intensity={1.1}
          color="#ffffff"
          castShadow
          shadow-mapSize={[1024, 1024]}
          shadow-bias={-0.0002}
          shadow-normalBias={0.02}
          shadow-camera-left={-WORLD_W * 0.7}
          shadow-camera-right={WORLD_W * 0.7}
          shadow-camera-top={WORLD_H * 0.7}
          shadow-camera-bottom={-WORLD_H * 0.7}
        />
        <directionalLight
          position={[-6, 7, -5]}
          intensity={0.25}
          color="#cbd5e1"
        />
      </>
    );
  }

  // Midnight Slate (Default balanced dark studio)
  return (
    <>
      <ambientLight intensity={0.74} color="#ccd4e2" />
      <directionalLight
        position={[8, 14, 6]}
        intensity={1.15}
        color="#eaf0ff"
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-bias={-0.0002}
        shadow-normalBias={0.02}
        shadow-camera-left={-WORLD_W * 0.7}
        shadow-camera-right={WORLD_W * 0.7}
        shadow-camera-top={WORLD_H * 0.7}
        shadow-camera-bottom={-WORLD_H * 0.7}
      />
      <directionalLight
        position={[-5, 8, -4]}
        intensity={0.45}
        color="#7090ff"
      />
    </>
  );
}
