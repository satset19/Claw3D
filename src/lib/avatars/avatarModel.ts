import type { AgentAvatarGender } from "@/lib/avatars/profile";

export const AVATAR_MODEL_URLS: Partial<Record<AgentAvatarGender, string>> = {
  male: "/office-assets/models/avatars/male.glb",
};

export const getAvatarModelUrl = (gender: AgentAvatarGender): string | null =>
  AVATAR_MODEL_URLS[gender] ?? null;

export const hasAvatarModel = (gender: AgentAvatarGender): boolean =>
  getAvatarModelUrl(gender) !== null;
