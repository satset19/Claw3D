import { afterEach, describe, it, expect, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { AnimePresetPicker } from "@/features/agents/components/AnimePresetPicker";
import { ANIME_AVATAR_PRESETS } from "@/lib/avatars/animePresets";

afterEach(cleanup);

describe("AnimePresetPicker", () => {
  it("renders a tile per preset plus a Procedural tile", () => {
    render(<AnimePresetPicker selectedUrl={null} onSelect={() => {}} />);
    for (const p of ANIME_AVATAR_PRESETS) {
      expect(screen.getByRole("button", { name: p.label })).toBeInTheDocument();
    }
    expect(screen.getByRole("button", { name: "Procedural" })).toBeInTheDocument();
  });

  it("emits the selected url on click and null for Procedural", () => {
    const onSelect = vi.fn();
    render(<AnimePresetPicker selectedUrl={null} onSelect={onSelect} />);
    fireEvent.click(screen.getByRole("button", { name: ANIME_AVATAR_PRESETS[0].label }));
    expect(onSelect).toHaveBeenLastCalledWith(ANIME_AVATAR_PRESETS[0].url);
    fireEvent.click(screen.getByRole("button", { name: "Procedural" }));
    expect(onSelect).toHaveBeenLastCalledWith(null);
  });

  it("marks the selected tile with aria-pressed=true", () => {
    const target = ANIME_AVATAR_PRESETS[1];
    render(<AnimePresetPicker selectedUrl={target.url} onSelect={() => {}} />);
    expect(screen.getByRole("button", { name: target.label })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    expect(screen.getByRole("button", { name: "Procedural" })).toHaveAttribute(
      "aria-pressed",
      "false",
    );
  });
});
