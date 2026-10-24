"use client";

import Image from "next/image";
import { ANIME_AVATAR_PRESETS } from "@/lib/avatars/animePresets";

type Props = {
  selectedUrl: string | null;
  onSelect: (url: string | null) => void;
};

export const AnimePresetPicker = ({ selectedUrl, onSelect }: Props) => {
  const normalized = selectedUrl?.trim() ?? null;
  return (
    <div className="grid grid-cols-5 gap-3">
      <button
        type="button"
        aria-pressed={normalized === null}
        aria-label="Procedural"
        onClick={() => onSelect(null)}
        className={`flex flex-col items-center gap-1.5 rounded-xl border p-2 transition-colors ${
          normalized === null
            ? "border-primary ring-2 ring-primary/40"
            : "border-border/70 hover:border-border"
        }`}
      >
        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-border/60 bg-card text-[10px] uppercase tracking-wide text-muted-foreground">
          Procedural
        </div>
        <span className="text-[11px] text-muted-foreground">Procedural</span>
      </button>
      {ANIME_AVATAR_PRESETS.map((p) => {
        const selected = p.url === normalized;
        return (
          <button
            key={p.id}
            type="button"
            aria-pressed={selected}
            aria-label={p.label}
            onClick={() => onSelect(p.url)}
            className={`flex flex-col items-center gap-1.5 rounded-xl border p-2 transition-colors ${
              selected
                ? "border-primary ring-2 ring-primary/40"
                : "border-border/70 hover:border-border"
            }`}
          >
            <div className="h-20 w-20 overflow-hidden rounded-full border border-border/60 bg-card">
              <Image
                src={p.url}
                alt=""
                width={160}
                height={160}
                unoptimized
                className="h-full w-full object-cover"
              />
            </div>
            <span className="text-[11px] text-muted-foreground">{p.label}</span>
          </button>
        );
      })}
    </div>
  );
};
