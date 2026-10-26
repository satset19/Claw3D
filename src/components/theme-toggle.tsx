"use client";

import { useEffect, useRef, useState } from "react";
import { Flame, Moon, Sparkles, Sun } from "lucide-react";

export const THEME_STORAGE_KEY = "theme";
export const THEME_PRESET_STORAGE_KEY = "claw3d_theme_preset";

export type ThemePreset = "cyberpunk" | "lofi" | "nordic" | "dark";
export type ThemeMode = "light" | "dark";

export interface ThemeOption {
  id: ThemePreset;
  label: string;
  tagline: string;
  dotColor: string;
}

export const THEME_OPTIONS: readonly ThemeOption[] = [
  {
    id: "cyberpunk",
    label: "Cyberpunk",
    tagline: "Midnight Cyan & Neon",
    dotColor: "#06b6d4",
  },
  {
    id: "lofi",
    label: "Cozy Lo-Fi",
    tagline: "Warm Amber & Wood",
    dotColor: "#f59e0b",
  },
  {
    id: "nordic",
    label: "Nordic Clean",
    tagline: "Daylight Paper White",
    dotColor: "#2563eb",
  },
  {
    id: "dark",
    label: "Midnight Slate",
    tagline: "Standard Dark Studio",
    dotColor: "#22a8cc",
  },
] as const;

export const getPreferredThemePreset = (): ThemePreset => {
  if (typeof window === "undefined") return "cyberpunk";
  try {
    const storedPreset = window.localStorage.getItem(THEME_PRESET_STORAGE_KEY) as ThemePreset | null;
    if (storedPreset && THEME_OPTIONS.some((o) => o.id === storedPreset)) {
      return storedPreset;
    }
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (storedTheme === "light") return "nordic";
  } catch {}
  return "cyberpunk";
};

export const applyThemePreset = (preset: ThemePreset) => {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.classList.remove("theme-cyberpunk", "theme-lofi", "theme-nordic");

  if (preset === "nordic") {
    root.classList.remove("dark");
    root.classList.add("theme-nordic");
  } else {
    root.classList.add("dark");
    if (preset === "cyberpunk") {
      root.classList.add("theme-cyberpunk");
    } else if (preset === "lofi") {
      root.classList.add("theme-lofi");
    }
  }

  try {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(THEME_PRESET_STORAGE_KEY, preset);
      window.localStorage.setItem(THEME_STORAGE_KEY, preset === "nordic" ? "light" : "dark");
    }
  } catch {}
};

export const ThemeToggle = () => {
  const [activePreset, setActivePreset] = useState<ThemePreset>("cyberpunk");
  const [menuOpen, setMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const preset = getPreferredThemePreset();
    setActivePreset(preset);
    applyThemePreset(preset);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handleOutsideClick = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const selectPreset = (preset: ThemePreset) => {
    setActivePreset(preset);
    applyThemePreset(preset);
    setMenuOpen(false);
  };

  const activeOption = THEME_OPTIONS.find((o) => o.id === activePreset) ?? THEME_OPTIONS[0];

  const renderIcon = () => {
    if (activePreset === "cyberpunk") return <Sparkles className="h-3.5 w-3.5 text-cyan-400" />;
    if (activePreset === "lofi") return <Flame className="h-3.5 w-3.5 text-amber-400" />;
    if (activePreset === "nordic") return <Sun className="h-3.5 w-3.5 text-blue-500" />;
    return <Moon className="h-3.5 w-3.5 text-sky-400" />;
  };

  return (
    <div ref={containerRef} className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label={`Current theme: ${activeOption.label}. Click to change theme.`}
        aria-expanded={menuOpen}
        aria-haspopup="true"
        className="flex items-center gap-1.5 rounded-md border border-border/60 bg-card/90 px-2 py-1 text-xs font-mono font-medium text-foreground shadow-sm backdrop-blur transition-colors hover:border-primary/50 hover:bg-surface-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        {renderIcon()}
        <span className="hidden sm:inline font-sans text-[11px]">{activeOption.label}</span>
        <span
          className="h-2 w-2 rounded-full"
          style={{ backgroundColor: activeOption.dotColor }}
          aria-hidden="true"
        />
      </button>

      {menuOpen ? (
        <div
          role="menu"
          aria-orientation="vertical"
          className="absolute right-0 mt-1.5 w-52 origin-top-right rounded-xl border border-border/70 bg-card/98 p-1.5 shadow-2xl backdrop-blur-md z-50 animate-in fade-in zoom-in-95 duration-100"
        >
          <div className="px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-muted-foreground border-b border-border/40 mb-1">
            Visual Theme
          </div>
          {THEME_OPTIONS.map((option) => {
            const isSelected = option.id === activePreset;
            return (
              <button
                key={option.id}
                type="button"
                role="menuitem"
                onClick={() => selectPreset(option.id)}
                className={`flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-left text-xs transition-colors ${
                  isSelected
                    ? "bg-primary/15 text-primary font-medium ring-1 ring-primary/30"
                    : "text-foreground/90 hover:bg-surface-2 hover:text-foreground"
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span
                      className="h-2 w-2 rounded-full shrink-0"
                      style={{ backgroundColor: option.dotColor }}
                    />
                    <span className="font-medium">{option.label}</span>
                  </div>
                  <div className="text-[10px] text-muted-foreground pl-4">{option.tagline}</div>
                </div>
                {isSelected ? (
                  <span className="font-mono text-[10px] font-bold text-primary">✓</span>
                ) : null}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};
