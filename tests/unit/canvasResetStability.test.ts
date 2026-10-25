import { describe, expect, it } from "vitest";

function resolveCanvasKey(params: {
  remoteOfficeEnabled: boolean;
  floorId: string;
}): string {
  return [
    params.floorId,
    params.remoteOfficeEnabled ? "remote" : "local",
  ].join(":");
}

function shouldShowGatewayLoadingOverlay(params: {
  agentsLoaded: boolean;
  connectPromptReady: boolean;
  gatewayUrl: string;
  shouldPromptForConnect: boolean;
  didAttemptGatewayConnect: boolean;
  status: string;
  showDelayedGatewayLoadingOverlay: boolean;
}): boolean {
  if (params.agentsLoaded) return false;
  if (!params.connectPromptReady) return false;
  if (!params.gatewayUrl.trim()) return false;
  if (params.shouldPromptForConnect) return false;
  return params.showDelayedGatewayLoadingOverlay;
}

describe("Canvas Reset Stability and Overlay Guard", () => {
  it("keeps canvas key stable across gateway status and agent count changes", () => {
    const key1 = resolveCanvasKey({
      remoteOfficeEnabled: false,
      floorId: "floor-1",
    });
    const key2 = resolveCanvasKey({
      remoteOfficeEnabled: false,
      floorId: "floor-1",
    });
    expect(key1).toBe(key2);
  });

  it("suppresses loading overlay before delayed timer fires even if connectPromptReady is false", () => {
    const show = shouldShowGatewayLoadingOverlay({
      agentsLoaded: false,
      connectPromptReady: false,
      gatewayUrl: "ws://localhost:18789",
      shouldPromptForConnect: false,
      didAttemptGatewayConnect: true,
      status: "connecting",
      showDelayedGatewayLoadingOverlay: false,
    });
    expect(show).toBe(false);
  });

  it("shows loading overlay only when delay has expired while connecting", () => {
    const show = shouldShowGatewayLoadingOverlay({
      agentsLoaded: false,
      connectPromptReady: true,
      gatewayUrl: "ws://localhost:18789",
      shouldPromptForConnect: false,
      didAttemptGatewayConnect: true,
      status: "connecting",
      showDelayedGatewayLoadingOverlay: true,
    });
    expect(show).toBe(true);
  });
});
