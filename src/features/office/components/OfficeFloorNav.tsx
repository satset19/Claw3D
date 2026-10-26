"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronRight, Pin, PinOff } from "lucide-react";

import {
  OFFICE_FLOORS,
  getAdjacentEnabledOfficeFloorId,
  listAvailableFloorsForAdapter,
  type FloorDefinition,
  type FloorId,
  type FloorProvider,
} from "@/lib/office/floors";
import type { FloorRosterState } from "@/lib/office/floorRoster";

const DIRECTORY_COLLAPSED_STORAGE_KEY = "claw3d.officeFloorNav.directoryCollapsed";
const AUTOHIDE_PIN_STORAGE_KEY = "claw3d.officeFloorNav.autohidePinned";
const AUTOHIDE_IDLE_MS = 3000;
const AUTOHIDE_EDGE_PX = 24;

type OfficeFloorNavProps = {
  activeFloorId: FloorId;
  floorRosterCache: Record<FloorId, FloorRosterState>;
  onSelectFloor: (floorId: FloorId) => void;
  /** The currently selected adapter — controls which runtime floors are shown */
  activeAdapterType?: FloorProvider | null;
};

const PROVIDER_LABEL: Record<FloorProvider, string> = {
  demo: "Demo",
  openclaw: "OpenClaw",
  hermes: "Hermes",
  paperclip: "Paperclip",
  custom: "Custom",
  local: "Local",
  claw3d: "Claw3D",
};

const renderFloorButton = (params: {
  floor: FloorDefinition;
  activeFloorId: FloorId;
  floorRosterCache: Record<FloorId, FloorRosterState>;
  onSelectFloor: (floorId: FloorId) => void;
}) => {
  const { floor, activeFloorId, floorRosterCache, onSelectFloor } = params;
  const active = floor.id === activeFloorId;
  const rosterState = floorRosterCache[floor.id];
  const rosterCount = rosterState?.entries.length ?? 0;
  const rosterStatus = rosterState?.status ?? "idle";

  return (
    <button
      key={floor.id}
      type="button"
      onClick={() => onSelectFloor(floor.id)}
      disabled={!floor.enabled}
      className={[
        "w-full rounded-xl border px-3 py-2 text-left transition-colors",
        active
          ? "border-cyan-400/45 bg-cyan-950/40 shadow-[0_0_0_1px_rgba(34,211,238,0.16)]"
          : "border-white/10 bg-black/45 hover:border-white/25 hover:bg-black/55",
        floor.enabled ? "cursor-pointer" : "cursor-not-allowed opacity-45",
      ].join(" ")}
      aria-pressed={active}
      aria-label={`Select ${floor.label}`}
    >
      <div className="flex items-center justify-between gap-2">
        <div className="min-w-0">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
            {floor.zone === "outside" ? "Destination" : "Floor"}
          </div>
          <div className="truncate text-sm font-semibold text-white">{floor.label}</div>
        </div>
        <span
          className={[
            "shrink-0 rounded border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.16em]",
            active
              ? "border-cyan-400/30 bg-cyan-950/35 text-cyan-100/85"
              : "border-white/10 bg-white/5 text-white/55",
          ].join(" ")}
        >
          {PROVIDER_LABEL[floor.provider]}
        </span>
      </div>
      <div className="mt-2 flex items-center justify-between gap-2 font-mono text-[10px] text-white/45">
        <span>{floor.shortLabel}</span>
        {floor.enabled ? (
          <span>
            roster {rosterCount} | {rosterStatus}
          </span>
        ) : (
          <span>Locked</span>
        )}
      </div>
    </button>
  );
};

export function OfficeFloorNav({
  activeFloorId,
  floorRosterCache,
  onSelectFloor,
  activeAdapterType,
}: OfficeFloorNavProps) {
  const availableFloors = listAvailableFloorsForAdapter(activeAdapterType ?? null);
  const buildingFloors = availableFloors.filter((f) => f.zone === "building");
  const outsideFloors = availableFloors.filter((f) => f.zone === "outside");

  // Active floor — fall back to hermes-first if current floor is no longer available
  const activeIsAvailable = availableFloors.some((f) => f.id === activeFloorId);
  const displayActiveFloorId = activeIsAvailable ? activeFloorId : "hermes-first";

  const activeFloor =
    OFFICE_FLOORS.find((floor) => floor.id === displayActiveFloorId) ?? OFFICE_FLOORS[0];
  const activeRoster = floorRosterCache[activeFloor.id];

  const [directoryCollapsed, setDirectoryCollapsed] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [pinned, setPinned] = useState(false);
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pinnedRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const stored = window.localStorage.getItem(DIRECTORY_COLLAPSED_STORAGE_KEY);
      if (stored === "true") setDirectoryCollapsed(true);
    } catch {
      // localStorage may be unavailable (private mode, SSR, etc.); ignore.
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (window.localStorage.getItem(AUTOHIDE_PIN_STORAGE_KEY) === "true") {
        setPinned(true);
        pinnedRef.current = true;
      }
    } catch {
      // ignore
    }
  }, []);

  const toggleDirectoryCollapsed = () => {
    setDirectoryCollapsed((current) => {
      const next = !current;
      if (typeof window !== "undefined") {
        try {
          window.localStorage.setItem(DIRECTORY_COLLAPSED_STORAGE_KEY, String(next));
        } catch {
          // Persist is best-effort; collapsed state still works for the session.
        }
      }
      return next;
    });
  };

  const clearIdleTimer = () => {
    if (idleTimerRef.current) {
      clearTimeout(idleTimerRef.current);
      idleTimerRef.current = null;
    }
  };

  const scheduleHide = () => {
    clearIdleTimer();
    if (pinnedRef.current) return;
    idleTimerRef.current = setTimeout(() => setHidden(true), AUTOHIDE_IDLE_MS);
  };

  const reveal = () => {
    setHidden(false);
    scheduleHide();
  };

  useEffect(() => {
    pinnedRef.current = pinned;
    if (pinned) {
      clearIdleTimer();
      setHidden(false);
    } else {
      scheduleHide();
    }
    return clearIdleTimer;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pinned]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onMove = (e: MouseEvent) => {
      if (e.clientX <= AUTOHIDE_EDGE_PX) {
        setHidden(false);
        scheduleHide();
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const togglePinned = () => {
    setPinned((cur) => {
      const next = !cur;
      if (typeof window !== "undefined") {
        try {
          window.localStorage.setItem(AUTOHIDE_PIN_STORAGE_KEY, String(next));
        } catch {
          // best-effort
        }
      }
      return next;
    });
  };

  return (
    <aside
      className="pointer-events-none fixed left-0 top-24 z-40 flex max-w-[calc(100vw-1rem)] items-start gap-2"
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
        className="pointer-events-auto mt-0 flex h-16 w-4 items-center justify-center rounded-r-md border border-l-0 border-amber-400/25 bg-black/70 font-mono text-[9px] uppercase tracking-[0.2em] text-amber-200/70 shadow-xl backdrop-blur transition-colors hover:text-amber-100"
      >
        <span className="rotate-180 [writing-mode:vertical-rl]">FLOORS</span>
      </button>

      <div
        data-testid="office-floor-nav-panels"
        aria-hidden={hidden}
        className={[
          "flex w-[240px] max-w-[calc(100vw-3rem)] flex-col gap-3 pl-2 transition-all duration-200 ease-out",
          hidden
            ? "pointer-events-none -translate-x-4 opacity-0"
            : "pointer-events-auto translate-x-0 opacity-100",
        ].join(" ")}
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
              <div className="mt-3 flex items-center gap-2">
                <button
                  type="button"
                  className="rounded border border-amber-500/20 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-amber-100/80 transition-colors hover:border-amber-400/45 hover:text-amber-50"
                  onClick={() => onSelectFloor(getAdjacentEnabledOfficeFloorId(activeFloor.id, -1))}
                  aria-label="Switch to previous enabled floor"
                >
                  Prev
                </button>
                <button
                  type="button"
                  className="rounded border border-amber-500/20 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-amber-100/80 transition-colors hover:border-amber-400/45 hover:text-amber-50"
                  onClick={() => onSelectFloor(getAdjacentEnabledOfficeFloorId(activeFloor.id, 1))}
                  aria-label="Switch to next enabled floor"
                >
                  Next
                </button>
              </div>
              <div className="mt-3 flex flex-col gap-2">
                <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/35">
                  Building
                </div>
                {buildingFloors.map((floor) =>
                  renderFloorButton({
                    floor,
                    activeFloorId: displayActiveFloorId,
                    floorRosterCache,
                    onSelectFloor,
                  }),
                )}
              </div>
              {outsideFloors.length > 0 ? (
                <div className="mt-4 flex flex-col gap-2">
                  <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/35">
                    Outside
                  </div>
                  {outsideFloors.map((floor) =>
                    renderFloorButton({
                      floor,
                      activeFloorId: displayActiveFloorId,
                      floorRosterCache,
                      onSelectFloor,
                    }),
                  )}
                </div>
              ) : null}
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
}
