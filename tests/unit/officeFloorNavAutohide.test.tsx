import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";

import { OfficeFloorNav } from "@/features/office/components/OfficeFloorNav";
import type { FloorRosterState } from "@/lib/office/floorRoster";
import type { FloorId } from "@/lib/office/floors";

const baseProps = {
  activeFloorId: "lobby" as FloorId,
  floorRosterCache: {} as Record<FloorId, FloorRosterState>,
  onSelectFloor: () => {},
  activeAdapterType: null,
};

describe("OfficeFloorNav auto-hide", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    try {
      window.localStorage.clear();
    } catch {
      // ignore
    }
  });

  afterEach(() => {
    cleanup();
    vi.useRealTimers();
  });

  it("hides the panels after the idle timeout and shows an edge handle", () => {
    render(<OfficeFloorNav {...baseProps} />);
    expect(screen.getByText("Building Directory")).toBeVisible();

    act(() => {
      vi.advanceTimersByTime(3500);
    });

    const handle = screen.getByRole("button", { name: /show floor nav/i });
    expect(handle).toBeInTheDocument();
    const panels = screen.getByTestId("office-floor-nav-panels");
    expect(panels).toHaveAttribute("aria-hidden", "true");
  });

  it("re-reveals when the edge handle receives mouse enter", () => {
    render(<OfficeFloorNav {...baseProps} />);
    act(() => {
      vi.advanceTimersByTime(3500);
    });
    const handle = screen.getByRole("button", { name: /show floor nav/i });
    fireEvent.mouseEnter(handle);

    const panels = screen.getByTestId("office-floor-nav-panels");
    expect(panels).toHaveAttribute("aria-hidden", "false");
  });

  it("stays visible when pinned, even past the idle timeout", () => {
    render(<OfficeFloorNav {...baseProps} />);
    const pinButton = screen.getByRole("button", { name: /pin floor nav open/i });
    fireEvent.click(pinButton);

    act(() => {
      vi.advanceTimersByTime(6000);
    });

    const panels = screen.getByTestId("office-floor-nav-panels");
    expect(panels).toHaveAttribute("aria-hidden", "false");
  });
});
