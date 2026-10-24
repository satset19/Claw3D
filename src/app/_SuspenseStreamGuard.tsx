"use client";

import { useEffect } from "react";

/**
 * Next.js (React 18 streaming) flushes Suspense boundaries by stashing pending
 * reveal nodes in `window.$RB` and calling `requestAnimationFrame($RV)` from
 * the `$RC` bootstrap script. Chromium and Firefox pause rAF while the tab is
 * hidden, so a user who opens /office and immediately switches tab comes back
 * to a page that is permanently stuck on the "Loading office" Suspense
 * fallback. Secondary failures (OrbitControls never mounting, the GPU driver
 * reclaiming the idle WebGL context, webglcontextlost firing on the next
 * reload) all cascade from this one stall.
 *
 * Guard: on visibilitychange -> visible and once on mount, if `$RB` still has
 * pending work, call `$RV` directly to flush the Suspense reveal instead of
 * waiting for the next animation frame that may never arrive. A 4 s safety
 * timer catches the edge where hydration finished while hidden and no
 * visibility event ever fires because the tab was already backgrounded on
 * first paint.
 *
 * No-op when the globals are absent (SSR, non-streaming builds, future React
 * runtimes that drop these symbols).
 */
export function SuspenseStreamGuard() {
  useEffect(() => {
    type StreamGlobals = {
      $RB?: unknown[];
      $RV?: (queue: unknown[]) => void;
      __suspenseGuardInstalled?: boolean;
    };
    const w = window as unknown as StreamGlobals;
    if (w.__suspenseGuardInstalled) return;
    w.__suspenseGuardInstalled = true;

    const flush = () => {
      const rv = w.$RV;
      const rb = w.$RB;
      if (typeof rv === "function" && Array.isArray(rb) && rb.length) {
        try {
          rv(rb);
        } catch {
          // React will retry on its next scheduler tick; swallow to avoid
          // crashing the guard itself.
        }
      }
    };

    const onVisibility = () => {
      if (document.visibilityState === "visible") flush();
    };
    document.addEventListener("visibilitychange", onVisibility);
    flush();
    const safetyTimer = window.setTimeout(flush, 4000);

    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      window.clearTimeout(safetyTimer);
    };
  }, []);

  return null;
}
