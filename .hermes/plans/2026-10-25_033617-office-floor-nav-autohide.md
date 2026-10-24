# Plan: Auto-hide `BUILDING DIRECTORY` & `CURRENT FLOOR` panels

## Goal
Make the `<OfficeFloorNav>` aside (containing the "Building Directory" and "Current Floor" sections) auto-hide to a thin edge tab after a few seconds of inactivity, and reappear when the user hovers / moves the cursor near the left edge or focuses it with keyboard, so it stops covering the 3D view.

## Current context / assumptions
- Component lives in a single file: `src/features/office/components/OfficeFloorNav.tsx` (226 lines).
- The outer container is already a `pointer-events-none fixed left-4 top-24 z-40 w-[240px]` `<aside>` with two `pointer-events-auto` `<section>` children (Building Directory, Current Floor).
- There is already a persisted `directoryCollapsed` state (localStorage key `claw3d.officeFloorNav.directoryCollapsed`). Auto-hide is orthogonal to it — collapsed only controls directory body; auto-hide hides the whole aside.
- Project is Next.js + React + Tailwind. `"use client"` already set. Icons from `lucide-react` already imported.
- Tests: unit tests use Vitest and only match `*.test.ts(x)`. 6 unit tests already fail on main (pre-existing, unrelated). This file has no existing test.
- Node 26 on host; use `docker run --rm -v $PWD:/app -w /app node:20-slim ...` for npm/vitest.

## Proposed approach
Add an internal `hidden` state driven by an inactivity timer (default 3000 ms). While `hidden`, the two sections are hidden (via `translate-x` offscreen + `opacity-0 pointer-events-none`) and a slim always-visible "handle" (left edge tab labeled `FLOORS`) replaces them. Hover/focus on the aside or its handle, or `mousemove` within a 24 px strip of the left viewport edge, cancels the timer and reveals the panels; leaving them restarts the timer. User can opt out via a toggle (pinned open) persisted in localStorage.

## Step-by-step tasks

Each task is small; code snippets are copy-pasteable. All paths relative to `/home/harnet/claw3d`.

### 1. Pre-flight: confirm graphify + current state (read-only)
```bash
cd ~/claw3d
grep -n "OfficeFloorNav" -r src --include="*.tsx" --include="*.ts"
```
Expected: one definition in `src/features/office/components/OfficeFloorNav.tsx` and at least one import site (e.g. in the office page).

### 2. Write failing unit test
Create `src/features/office/components/OfficeFloorNav.autohide.test.tsx`:

```tsx
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, act, fireEvent } from "@testing-library/react";
import { OfficeFloorNav } from "./OfficeFloorNav";

const baseProps = {
  activeFloorId: "lobby" as const,
  floorRosterCache: {} as Record<string, { entries: []; status: "idle" }>,
  onSelectFloor: () => {},
  activeAdapterType: null,
};

describe("OfficeFloorNav auto-hide", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    window.localStorage.clear();
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  it("hides the panels after 3s of inactivity and shows an edge handle", () => {
    render(<OfficeFloorNav {...baseProps} />);
    expect(screen.getByText("Building Directory")).toBeVisible();
    act(() => {
      vi.advanceTimersByTime(3100);
    });
    expect(screen.getByRole("button", { name: /show floor nav/i })).toBeVisible();
    expect(screen.queryByText("Building Directory")).not.toBeVisible();
  });

  it("re-reveals when the edge handle is hovered", () => {
    render(<OfficeFloorNav {...baseProps} />);
    act(() => {
      vi.advanceTimersByTime(3100);
    });
    fireEvent.mouseEnter(screen.getByRole("button", { name: /show floor nav/i }));
    expect(screen.getByText("Building Directory")).toBeVisible();
  });

  it("stays open when pinned, even after idle timeout", () => {
    render(<OfficeFloorNav {...baseProps} />);
    const pin = screen.getByRole("button", { name: /pin floor nav open/i });
    fireEvent.click(pin);
    act(() => {
      vi.advanceTimersByTime(5000);
    });
    expect(screen.getByText("Building Directory")).toBeVisible();
  });
});
```

Run and confirm failure:
```bash
docker run --rm -v $PWD:/app -w /app node:20-slim \
  npx vitest run src/features/office/components/OfficeFloorNav.autohide.test.tsx
```
Expected: 3 failing tests (text/pin/handle not found).

### 3. Implement auto-hide state in `OfficeFloorNav.tsx`

Edit `src/features/office/components/OfficeFloorNav.tsx`.

**3a. Add storage key constant** (after existing `DIRECTORY_COLLAPSED_STORAGE_KEY` on line 16):
```ts
const AUTOHIDE_PIN_STORAGE_KEY = "claw3d.officeFloorNav.autohidePinned";
const AUTOHIDE_IDLE_MS = 3000;
const AUTOHIDE_EDGE_PX = 24;
```

**3b. Import `useRef`** on line 3:
```ts
import { useEffect, useRef, useState } from "react";
```

Also add the `Pin, PinOff` icons from lucide:
```ts
import { ChevronDown, ChevronRight, Pin, PinOff } from "lucide-react";
```

**3c. Add state + idle timer inside `OfficeFloorNav`**, immediately after `const [directoryCollapsed, setDirectoryCollapsed] = useState(false);` (line 114):

```tsx
const [hidden, setHidden] = useState(false);
const [pinned, setPinned] = useState(false);
const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

useEffect(() => {
  if (typeof window === "undefined") return;
  try {
    if (window.localStorage.getItem(AUTOHIDE_PIN_STORAGE_KEY) === "true") {
      setPinned(true);
    }
  } catch {
    // ignore
  }
}, []);

const clearIdleTimer = () => {
  if (idleTimerRef.current) {
    clearTimeout(idleTimerRef.current);
    idleTimerRef.current = null;
  }
};

const scheduleHide = () => {
  clearIdleTimer();
  if (pinned) return;
  idleTimerRef.current = setTimeout(() => setHidden(true), AUTOHIDE_IDLE_MS);
};

const reveal = () => {
  setHidden(false);
  scheduleHide();
};

useEffect(() => {
  scheduleHide();
  return clearIdleTimer;
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [pinned]);

useEffect(() => {
  if (typeof window === "undefined") return;
  const onMove = (e: MouseEvent) => {
    if (e.clientX <= AUTOHIDE_EDGE_PX) reveal();
  };
  window.addEventListener("mousemove", onMove);
  return () => window.removeEventListener("mousemove", onMove);
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [pinned]);

const togglePinned = () => {
  setPinned((cur) => {
    const next = !cur;
    try {
      window.localStorage.setItem(AUTOHIDE_PIN_STORAGE_KEY, String(next));
    } catch {
      // best-effort
    }
    if (next) setHidden(false);
    return next;
  });
};
```

**3d. Wrap the aside** so panels fade/slide out while an edge handle stays visible. Replace the current `return ( <aside …> … </aside> );` block (lines 140–224) with:

```tsx
return (
  <aside
    className="pointer-events-none fixed left-0 top-24 z-40 flex max-w-[calc(100vw-2rem)] items-start gap-2"
    onMouseEnter={reveal}
    onMouseLeave={scheduleHide}
    onFocus={reveal}
    onBlur={scheduleHide}
  >
    <button
      type="button"
      onClick={reveal}
      onMouseEnter={reveal}
      aria-label={hidden ? "Show floor nav" : "Hide floor nav"}
      className="pointer-events-auto ml-0 mt-0 flex h-16 w-3 items-center justify-center rounded-r-md border border-l-0 border-amber-400/25 bg-black/70 font-mono text-[9px] uppercase tracking-[0.2em] text-amber-200/70 shadow-xl backdrop-blur transition-colors hover:text-amber-100"
    >
      <span className="rotate-180 [writing-mode:vertical-rl]">FLOORS</span>
    </button>

    <div
      className={[
        "flex w-[240px] flex-col gap-3 pl-2 pt-0 transition-all duration-200 ease-out",
        hidden
          ? "pointer-events-none -translate-x-3 opacity-0"
          : "pointer-events-auto translate-x-0 opacity-100",
      ].join(" ")}
      aria-hidden={hidden}
    >
      <section className="pointer-events-auto rounded-2xl border border-amber-400/20 bg-black/78 p-3 shadow-2xl backdrop-blur">
        <div className="flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={toggleDirectoryCollapsed}
            className="flex flex-1 items-center justify-between gap-2 rounded font-mono text-[10px] uppercase tracking-[0.18em] text-amber-200/70 transition-colors hover:text-amber-100"
            aria-expanded={!directoryCollapsed}
            aria-controls="office-floor-directory-body"
            aria-label={
              directoryCollapsed ? "Expand building directory" : "Collapse building directory"
            }
          >
            <span>Building Directory</span>
            {directoryCollapsed ? (
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            ) : (
              <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
            )}
          </button>
          <button
            type="button"
            onClick={togglePinned}
            aria-label={pinned ? "Unpin floor nav (auto-hide)" : "Pin floor nav open"}
            className="rounded p-1 text-amber-200/60 transition-colors hover:text-amber-100"
          >
            {pinned ? (
              <Pin className="h-3.5 w-3.5" aria-hidden="true" />
            ) : (
              <PinOff className="h-3.5 w-3.5" aria-hidden="true" />
            )}
          </button>
        </div>
        {!directoryCollapsed ? (
          <div id="office-floor-directory-body">
            {/* UNCHANGED body — Prev/Next, Building list, Outside list (lines 162-207 of the original) */}
          </div>
        ) : null}
      </section>

      <section className="pointer-events-auto rounded-2xl border border-white/10 bg-black/68 px-3 py-2 shadow-xl backdrop-blur">
        <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/45">
          Current Floor
        </div>
        <div className="mt-1 text-sm font-semibold text-white">{activeFloor.label}</div>
        <div className="mt-1 flex items-center justify-between gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white/45">
          <span>{PROVIDER_LABEL[activeFloor.provider]}</span>
          <span>
            roster {activeRoster?.entries.length ?? 0} | {activeRoster?.status ?? "idle"}
          </span>
        </div>
      </section>
    </div>
  </aside>
);
```

Note: the `{/* UNCHANGED body … */}` placeholder in the snippet is literal — when editing, keep the existing JSX from the original lines 162-207 (Prev/Next row, Building section + map, Outside section + map) verbatim inside the `office-floor-directory-body` wrapper.

### 4. Re-run the test
```bash
docker run --rm -v $PWD:/app -w /app node:20-slim \
  npx vitest run src/features/office/components/OfficeFloorNav.autohide.test.tsx
```
Expected: `3 passed`.

### 5. Full test suite — confirm no regressions
```bash
docker run --rm -v $PWD:/app -w /app node:20-slim npx vitest run
```
Expected: same pre-existing 6 failures as baseline on main; no new failures introduced by this change.

### 6. Typecheck + lint
```bash
docker run --rm -v $PWD:/app -w /app node:20-slim npx tsc --noEmit
docker run --rm -v $PWD:/app -w /app node:20-slim npx eslint src/features/office/components/OfficeFloorNav.tsx
```
Expected: both exit 0 (or baseline warnings only).

### 7. Manual sanity (dev server)
Start the running stack if not already (do NOT in plan mode — this is the implementer's step):
```bash
docker compose up -d claw3d
```
Open https://kerja.besoksenin.web.id (login via `?studio_access=...`), navigate to the Office view. Verify:
- Panels visible on load.
- After ~3 s of no interaction they slide out to the left, leaving a thin `FLOORS` edge tab.
- Moving cursor to the left edge or hovering the tab reveals them again.
- Clicking the pin icon keeps them visible; icon reflects pinned/unpinned state; reload persists the pin.

### 8. Update graphify + commit
```bash
graphify update .
git add src/features/office/components/OfficeFloorNav.tsx \
        src/features/office/components/OfficeFloorNav.autohide.test.tsx \
        graphify-out
git commit -m "office: auto-hide floor nav panels after idle, edge tab + pin"
```

## Tests / validation
Covered by task 2 (RED) and task 4 (GREEN). Task 5 guards against collateral damage. Task 7 is the human-eye check for the "doesn't cover the view" acceptance criterion.

## Risks, tradeoffs, open questions
- **Discoverability**: a hidden panel can confuse first-time users. Mitigation: the always-visible `FLOORS` edge tab + persisted `pinned` default is unpinned (auto-hide on). If the user prefers default pinned, flip the initial `pinned` state.
- **Mouse-only reveal**: touch devices have no `mousemove`. The edge tab is tap-targetable, which covers that case; still, the strip is only 12 px wide — may need bumping to 24 px for comfortable touch. Open question for the user.
- **Idle timeout value** (3 s) is a guess — may be too aggressive. Easy knob: `AUTOHIDE_IDLE_MS`.
- **Scope**: this plan only auto-hides `OfficeFloorNav`. Other overlay panels (chat, roster drawer, etc.) are unchanged. Confirm the user only meant these two panels before implementing.
