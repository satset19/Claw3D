"use client";

import { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useState } from "react";
import { RefreshCcw, Shuffle } from "lucide-react";
import {
  AGENT_AVATAR_BOTTOM_STYLE_OPTIONS,
  AGENT_AVATAR_CLOTHING_COLOR_OPTIONS,
  AGENT_AVATAR_GENDER_OPTIONS,
  AGENT_AVATAR_HAIR_COLOR_OPTIONS,
  AGENT_AVATAR_HAIR_STYLE_OPTIONS,
  AGENT_AVATAR_HAT_STYLE_OPTIONS,
  AGENT_AVATAR_SHOE_COLOR_OPTIONS,
  AGENT_AVATAR_SKIN_TONE_OPTIONS,
  AGENT_AVATAR_TOP_STYLE_OPTIONS,
  type AgentAvatarProfile,
  createDefaultAgentAvatarProfile,
} from "@/lib/avatars/profile";
import { AgentAvatarPreview3D } from "@/features/agents/components/AgentAvatarPreview3D";
import { AnimePresetPicker } from "@/features/agents/components/AnimePresetPicker";
import { CHARACTER_COLOR_PALETTES } from "@/lib/avatars/colorPalettes";
import { randomUUID } from "@/lib/uuid";

export type AgentAvatarEditorPanelProps = {
  agentId: string;
  agentName: string;
  initialProfile: AgentAvatarProfile | null | undefined;
  onSave: (profile: AgentAvatarProfile) => Promise<void> | void;
  onDraftChange?: (profile: AgentAvatarProfile) => void;
  onCancel?: () => void;
  onSaved?: () => void;
  cancelLabel?: string;
  saveLabel?: string;
  showActions?: boolean;
};

export type AgentAvatarEditorPanelHandle = {
  save: () => Promise<void>;
};

const pillClassName =
  "rounded-full border px-3 py-1.5 text-[11px] transition-colors";

const colorSwatchClassName =
  "h-7 w-7 rounded-full border-2 transition-transform hover:scale-105";

export const AgentAvatarEditorPanel = forwardRef<
  AgentAvatarEditorPanelHandle,
  AgentAvatarEditorPanelProps
>(function AgentAvatarEditorPanel(
  {
    agentId,
    agentName,
    initialProfile,
    onSave,
    onDraftChange,
    onCancel,
    onSaved,
    cancelLabel = "Cancel",
    saveLabel = "Save avatar",
    showActions = true,
  }: AgentAvatarEditorPanelProps,
  ref
) {
  const fallbackProfile = useMemo(
    () => createDefaultAgentAvatarProfile(agentId),
    [agentId]
  );
  const resolvedInitialProfile = initialProfile ?? fallbackProfile;
  const [draft, setDraft] = useState<AgentAvatarProfile>(resolvedInitialProfile);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    setDraft(resolvedInitialProfile);
  }, [resolvedInitialProfile]);

  useEffect(() => {
    onDraftChange?.(draft);
  }, [draft, onDraftChange]);

  const save = useCallback(async () => {
    if (saving) return;
    setSaving(true);
    try {
      await onSave(draft);
      onSaved?.();
    } finally {
      setSaving(false);
    }
  }, [draft, onSave, onSaved, saving]);

  useImperativeHandle(
    ref,
    () => ({
      save,
    }),
    [save]
  );

  return (
    <div className="grid h-full min-h-0 gap-0 xl:grid-cols-[360px_minmax(0,1fr)]">
      <div className="border-b border-border/45 p-5 xl:border-b-0 xl:border-r">
        <div className="font-mono text-[11px] font-semibold tracking-[0.06em] text-muted-foreground">
          Avatar creator
        </div>
        <div className="mt-1 text-lg font-semibold text-foreground">{agentName}</div>
        <div className="mt-1 text-xs text-muted-foreground">
          Personalize this office avatar locally on this machine.
        </div>
        <div className="mt-4 overflow-hidden rounded-xl border border-border/45 bg-muted/30">
          <AgentAvatarPreview3D profile={draft} className="h-[360px] w-full" />
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <button
            type="button"
            className="ui-btn-secondary inline-flex items-center gap-2 px-3 py-2 text-xs"
            onClick={() => setDraft(createDefaultAgentAvatarProfile(agentId))}
            disabled={saving}
          >
            <RefreshCcw className="h-3.5 w-3.5" />
            Reset
          </button>
          <button
            type="button"
            className="ui-btn-secondary inline-flex items-center gap-2 px-3 py-2 text-xs"
            onClick={() => setDraft(createDefaultAgentAvatarProfile(randomUUID()))}
            disabled={saving}
          >
            <Shuffle className="h-3.5 w-3.5" />
            Randomize
          </button>
        </div>
      </div>

      <div className="min-h-0 overflow-y-auto p-5">
        {showActions ? (
          <div className="mb-6 flex items-center justify-end gap-2 border-b border-border/40 pb-4">
            <button
              type="button"
              className="ui-btn-ghost px-3 py-2 text-xs"
              onClick={onCancel}
              disabled={saving}
            >
              {cancelLabel}
            </button>
            <button
              type="button"
              className="ui-btn-primary px-3 py-2 text-xs"
              onClick={() => {
                void save();
              }}
              disabled={saving}
            >
              {saving ? "Saving..." : saveLabel}
            </button>
          </div>
        ) : null}
        <div className="grid gap-6 xl:grid-cols-2">
          <section className="space-y-3 xl:col-span-2">
            <h3 className="font-mono text-[11px] font-semibold tracking-[0.06em] text-muted-foreground">
              Preset Characters
            </h3>
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
            <p className="text-[10px] text-muted-foreground/80">
              Anime presets by Lisa Wischofsky (DiceBear lorelei, CC0). Pick a preset or keep Procedural to use the sliders below.
            </p>
          </section>
          <section className="space-y-3 xl:col-span-2">
            <h3 className="font-mono text-[11px] font-semibold tracking-[0.06em] text-muted-foreground">
              Gender
            </h3>
            <div className="flex flex-wrap gap-2">
              {AGENT_AVATAR_GENDER_OPTIONS.map((option) => {
                const selected = draft.body.gender === option.id;
                return (
                  <button
                    key={option.id}
                    type="button"
                    aria-pressed={selected}
                    className={`${pillClassName} ${
                      selected
                        ? "border-primary bg-primary/15 text-foreground"
                        : "border-border/50 bg-muted/30 text-muted-foreground"
                    }`}
                    onClick={() =>
                      setDraft((current) => ({
                        ...current,
                        imageUrl: null,
                        body: { ...current.body, gender: option.id },
                      }))
                    }
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </section>

          <section className="space-y-3">
            <h3 className="font-mono text-[11px] font-semibold tracking-[0.06em] text-muted-foreground">
              Skin tone
            </h3>
            <div className="flex flex-wrap items-center gap-2">
              {AGENT_AVATAR_SKIN_TONE_OPTIONS.map((option) => {
                const selected = draft.body.skinTone === option.color;
                return (
                  <button
                    key={option.id}
                    type="button"
                    aria-label={option.label}
                    className={`${colorSwatchClassName} ${
                      selected
                        ? "ring-2 ring-primary ring-offset-2 ring-offset-background scale-110"
                        : "border-border/60 hover:scale-105"
                    }`}
                    style={{ backgroundColor: option.color }}
                    onClick={() =>
                      setDraft((current) => ({
                        ...current,
                        body: { ...current.body, skinTone: option.color },
                      }))
                    }
                  />
                );
              })}
              {(() => {
                const isCustom = !AGENT_AVATAR_SKIN_TONE_OPTIONS.some(
                  (option) => option.color.toLowerCase() === draft.body.skinTone.toLowerCase()
                );
                return (
                  <label
                    aria-label="Choose custom skin tone"
                    title="Choose custom skin tone"
                    className={`relative flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border-2 transition-transform ${
                      isCustom
                        ? "ring-2 ring-primary ring-offset-2 ring-offset-background scale-110 border-border/60"
                        : "border-border/60 hover:scale-105 bg-muted/50"
                    }`}
                    style={isCustom ? { backgroundColor: draft.body.skinTone } : undefined}
                  >
                    <input
                      type="color"
                      aria-label="Choose custom skin tone"
                      value={draft.body.skinTone.startsWith("#") ? draft.body.skinTone : "#f7d7c2"}
                      onChange={(e) =>
                        setDraft((current) => ({
                          ...current,
                          body: { ...current.body, skinTone: e.target.value },
                        }))
                      }
                      className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                    />
                    <span
                      className={`text-[10px] font-bold ${
                        isCustom ? "mix-blend-difference text-white" : "text-muted-foreground"
                      }`}
                    >
                      +
                    </span>
                  </label>
                );
              })()}
            </div>
          </section>

          <section className="space-y-3">
            <h3 className="font-mono text-[11px] font-semibold tracking-[0.06em] text-muted-foreground">
              Hair style
            </h3>
            <div className="flex flex-wrap gap-2">
              {AGENT_AVATAR_HAIR_STYLE_OPTIONS.map((option) => {
                const selected = draft.hair.style === option.id;
                return (
                  <button
                    key={option.id}
                    type="button"
                    className={`${pillClassName} ${
                      selected
                        ? "border-primary bg-primary/15 text-foreground"
                        : "border-border/50 bg-muted/30 text-muted-foreground"
                    }`}
                    onClick={() =>
                      setDraft((current) => ({
                        ...current,
                        imageUrl: null,
                        hair: { ...current.hair, style: option.id },
                      }))
                    }
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </section>

          <section className="space-y-3">
            <h3 className="font-mono text-[11px] font-semibold tracking-[0.06em] text-muted-foreground">
              Hair color
            </h3>
            <div className="flex flex-wrap items-center gap-2">
              {AGENT_AVATAR_HAIR_COLOR_OPTIONS.map((option) => {
                const selected = draft.hair.color === option.color;
                return (
                  <button
                    key={option.id}
                    type="button"
                    aria-label={option.label}
                    className={`${colorSwatchClassName} ${
                      selected
                        ? "ring-2 ring-primary ring-offset-2 ring-offset-background scale-110"
                        : "border-border/60 hover:scale-105"
                    }`}
                    style={{ backgroundColor: option.color }}
                    onClick={() =>
                      setDraft((current) => ({
                        ...current,
                        hair: { ...current.hair, color: option.color },
                      }))
                    }
                  />
                );
              })}
              {(() => {
                const isCustom = !AGENT_AVATAR_HAIR_COLOR_OPTIONS.some(
                  (option) => option.color.toLowerCase() === draft.hair.color.toLowerCase()
                );
                return (
                  <label
                    aria-label="Choose custom hair color"
                    title="Choose custom hair color"
                    className={`relative flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border-2 transition-transform ${
                      isCustom
                        ? "ring-2 ring-primary ring-offset-2 ring-offset-background scale-110 border-border/60"
                        : "border-border/60 hover:scale-105 bg-muted/50"
                    }`}
                    style={isCustom ? { backgroundColor: draft.hair.color } : undefined}
                  >
                    <input
                      type="color"
                      aria-label="Choose custom hair color"
                      value={draft.hair.color.startsWith("#") ? draft.hair.color : "#151515"}
                      onChange={(e) =>
                        setDraft((current) => ({
                          ...current,
                          hair: { ...current.hair, color: e.target.value },
                        }))
                      }
                      className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                    />
                    <span
                      className={`text-[10px] font-bold ${
                        isCustom ? "mix-blend-difference text-white" : "text-muted-foreground"
                      }`}
                    >
                      +
                    </span>
                  </label>
                );
              })()}
            </div>
          </section>

          <section className="space-y-3">
            <h3 className="font-mono text-[11px] font-semibold tracking-[0.06em] text-muted-foreground">
              Top style
            </h3>
            <div className="flex flex-wrap gap-2">
              {AGENT_AVATAR_TOP_STYLE_OPTIONS.map((option) => {
                const selected = draft.clothing.topStyle === option.id;
                return (
                  <button
                    key={option.id}
                    type="button"
                    className={`${pillClassName} ${
                      selected
                        ? "border-primary bg-primary/15 text-foreground"
                        : "border-border/50 bg-muted/30 text-muted-foreground"
                    }`}
                    onClick={() =>
                      setDraft((current) => ({
                        ...current,
                        imageUrl: null,
                        clothing: { ...current.clothing, topStyle: option.id },
                      }))
                    }
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </section>

          <section className="space-y-3">
            <h3 className="font-mono text-[11px] font-semibold tracking-[0.06em] text-muted-foreground">
              Top color
            </h3>
            <div className="flex flex-wrap items-center gap-2">
              {AGENT_AVATAR_CLOTHING_COLOR_OPTIONS.map((option) => {
                const selected = draft.clothing.topColor === option.color;
                return (
                  <button
                    key={`top-${option.id}`}
                    type="button"
                    aria-label={option.label}
                    className={`${colorSwatchClassName} ${
                      selected
                        ? "ring-2 ring-primary ring-offset-2 ring-offset-background scale-110"
                        : "border-border/60 hover:scale-105"
                    }`}
                    style={{ backgroundColor: option.color }}
                    onClick={() =>
                      setDraft((current) => ({
                        ...current,
                        clothing: { ...current.clothing, topColor: option.color },
                      }))
                    }
                  />
                );
              })}
              {(() => {
                const isCustom = !AGENT_AVATAR_CLOTHING_COLOR_OPTIONS.some(
                  (option) => option.color.toLowerCase() === draft.clothing.topColor.toLowerCase()
                );
                return (
                  <label
                    aria-label="Choose custom top color"
                    title="Choose custom top color"
                    className={`relative flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border-2 transition-transform ${
                      isCustom
                        ? "ring-2 ring-primary ring-offset-2 ring-offset-background scale-110 border-border/60"
                        : "border-border/60 hover:scale-105 bg-muted/50"
                    }`}
                    style={isCustom ? { backgroundColor: draft.clothing.topColor } : undefined}
                  >
                    <input
                      type="color"
                      aria-label="Choose custom top color"
                      value={draft.clothing.topColor.startsWith("#") ? draft.clothing.topColor : "#2d3748"}
                      onChange={(e) =>
                        setDraft((current) => ({
                          ...current,
                          clothing: { ...current.clothing, topColor: e.target.value },
                        }))
                      }
                      className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                    />
                    <span
                      className={`text-[10px] font-bold ${
                        isCustom ? "mix-blend-difference text-white" : "text-muted-foreground"
                      }`}
                    >
                      +
                    </span>
                  </label>
                );
              })()}
            </div>
          </section>

          <section className="space-y-3">
            <h3 className="font-mono text-[11px] font-semibold tracking-[0.06em] text-muted-foreground">
              Bottom style
            </h3>
            <div className="flex flex-wrap gap-2">
              {AGENT_AVATAR_BOTTOM_STYLE_OPTIONS.map((option) => {
                const selected = draft.clothing.bottomStyle === option.id;
                return (
                  <button
                    key={option.id}
                    type="button"
                    className={`${pillClassName} ${
                      selected
                        ? "border-primary bg-primary/15 text-foreground"
                        : "border-border/50 bg-muted/30 text-muted-foreground"
                    }`}
                    onClick={() =>
                      setDraft((current) => ({
                        ...current,
                        imageUrl: null,
                        clothing: { ...current.clothing, bottomStyle: option.id },
                      }))
                    }
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </section>

          <section className="space-y-3">
            <h3 className="font-mono text-[11px] font-semibold tracking-[0.06em] text-muted-foreground">
              Bottom color
            </h3>
            <div className="flex flex-wrap items-center gap-2">
              {AGENT_AVATAR_CLOTHING_COLOR_OPTIONS.map((option) => {
                const selected = draft.clothing.bottomColor === option.color;
                return (
                  <button
                    key={`bottom-${option.id}`}
                    type="button"
                    aria-label={option.label}
                    className={`${colorSwatchClassName} ${
                      selected
                        ? "ring-2 ring-primary ring-offset-2 ring-offset-background scale-110"
                        : "border-border/60 hover:scale-105"
                    }`}
                    style={{ backgroundColor: option.color }}
                    onClick={() =>
                      setDraft((current) => ({
                        ...current,
                        clothing: { ...current.clothing, bottomColor: option.color },
                      }))
                    }
                  />
                );
              })}
              {(() => {
                const isCustom = !AGENT_AVATAR_CLOTHING_COLOR_OPTIONS.some(
                  (option) => option.color.toLowerCase() === draft.clothing.bottomColor.toLowerCase()
                );
                return (
                  <label
                    aria-label="Choose custom bottom color"
                    title="Choose custom bottom color"
                    className={`relative flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border-2 transition-transform ${
                      isCustom
                        ? "ring-2 ring-primary ring-offset-2 ring-offset-background scale-110 border-border/60"
                        : "border-border/60 hover:scale-105 bg-muted/50"
                    }`}
                    style={isCustom ? { backgroundColor: draft.clothing.bottomColor } : undefined}
                  >
                    <input
                      type="color"
                      aria-label="Choose custom bottom color"
                      value={draft.clothing.bottomColor.startsWith("#") ? draft.clothing.bottomColor : "#2d3748"}
                      onChange={(e) =>
                        setDraft((current) => ({
                          ...current,
                          clothing: { ...current.clothing, bottomColor: e.target.value },
                        }))
                      }
                      className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                    />
                    <span
                      className={`text-[10px] font-bold ${
                        isCustom ? "mix-blend-difference text-white" : "text-muted-foreground"
                      }`}
                    >
                      +
                    </span>
                  </label>
                );
              })()}
            </div>
          </section>

          <section className="space-y-3">
            <h3 className="font-mono text-[11px] font-semibold tracking-[0.06em] text-muted-foreground">
              Shoe color
            </h3>
            <div className="flex flex-wrap items-center gap-2">
              {AGENT_AVATAR_SHOE_COLOR_OPTIONS.map((option) => {
                const selected = draft.clothing.shoesColor === option.color;
                return (
                  <button
                    key={`shoes-${option.id}`}
                    type="button"
                    aria-label={option.label}
                    className={`${colorSwatchClassName} ${
                      selected
                        ? "ring-2 ring-primary ring-offset-2 ring-offset-background scale-110"
                        : "border-border/60 hover:scale-105"
                    }`}
                    style={{ backgroundColor: option.color }}
                    onClick={() =>
                      setDraft((current) => ({
                        ...current,
                        clothing: { ...current.clothing, shoesColor: option.color },
                      }))
                    }
                  />
                );
              })}
              {(() => {
                const isCustom = !AGENT_AVATAR_SHOE_COLOR_OPTIONS.some(
                  (option) => option.color.toLowerCase() === draft.clothing.shoesColor.toLowerCase()
                );
                return (
                  <label
                    aria-label="Choose custom shoe color"
                    title="Choose custom shoe color"
                    className={`relative flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border-2 transition-transform ${
                      isCustom
                        ? "ring-2 ring-primary ring-offset-2 ring-offset-background scale-110 border-border/60"
                        : "border-border/60 hover:scale-105 bg-muted/50"
                    }`}
                    style={isCustom ? { backgroundColor: draft.clothing.shoesColor } : undefined}
                  >
                    <input
                      type="color"
                      aria-label="Choose custom shoe color"
                      value={draft.clothing.shoesColor.startsWith("#") ? draft.clothing.shoesColor : "#1a1a1a"}
                      onChange={(e) =>
                        setDraft((current) => ({
                          ...current,
                          clothing: { ...current.clothing, shoesColor: e.target.value },
                        }))
                      }
                      className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                    />
                    <span
                      className={`text-[10px] font-bold ${
                        isCustom ? "mix-blend-difference text-white" : "text-muted-foreground"
                      }`}
                    >
                      +
                    </span>
                  </label>
                );
              })()}
            </div>
          </section>

          <section className="space-y-3">
            <h3 className="font-mono text-[11px] font-semibold tracking-[0.06em] text-muted-foreground">
              Hat
            </h3>
            <div className="flex flex-wrap gap-2">
              {AGENT_AVATAR_HAT_STYLE_OPTIONS.map((option) => {
                const selected = draft.accessories.hatStyle === option.id;
                return (
                  <button
                    key={option.id}
                    type="button"
                    className={`${pillClassName} ${
                      selected
                        ? "border-primary bg-primary/15 text-foreground"
                        : "border-border/50 bg-muted/30 text-muted-foreground"
                    }`}
                    onClick={() =>
                      setDraft((current) => ({
                        ...current,
                        imageUrl: null,
                        accessories: { ...current.accessories, hatStyle: option.id },
                      }))
                    }
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </section>

          <section className="space-y-3 xl:col-span-2">
            <h3 className="font-mono text-[11px] font-semibold tracking-[0.06em] text-muted-foreground">
              Accessories
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                {
                  key: "glasses" as const,
                  label: "Glasses",
                  enabled: draft.accessories.glasses,
                },
                {
                  key: "headset" as const,
                  label: "Headset",
                  enabled: draft.accessories.headset,
                },
                {
                  key: "backpack" as const,
                  label: "Backpack",
                  enabled: draft.accessories.backpack,
                },
              ].map((option) => (
                <button
                  key={option.key}
                  type="button"
                  className={`${pillClassName} ${
                    option.enabled
                      ? "border-primary bg-primary/15 text-foreground"
                      : "border-border/50 bg-muted/30 text-muted-foreground"
                  }`}
                  onClick={() =>
                    setDraft((current) => ({
                      ...current,
                      imageUrl: null,
                      accessories: {
                        ...current.accessories,
                        [option.key]: !current.accessories[option.key],
                      },
                    }))
                  }
                >
                  {option.label}
                </button>
              ))}
            </div>
          </section>
        </div>

      </div>
    </div>
  );
});
