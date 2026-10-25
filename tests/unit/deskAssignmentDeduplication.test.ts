import { describe, expect, it } from "vitest";
import { defaultStudioSettings, mergeStudioSettings, resolveDeskAssignments } from "@/lib/studio/settings";

describe("Desk Assignment Deduplication", () => {
  it("ensures an agent only occupies one desk per gateway when reassigned", () => {
    const base = mergeStudioSettings(defaultStudioSettings(), {
      deskAssignments: {
        "ws://localhost:18789": {
          office_27: "hermes",
        },
      },
    });

    const patched = mergeStudioSettings(base, {
      deskAssignments: {
        "ws://localhost:18789": {
          office_56: "hermes",
        },
      },
    });

    const assignments = resolveDeskAssignments(patched, "ws://localhost:18789");
    expect(assignments.office_56).toBe("hermes");
    expect(assignments.office_27).toBeUndefined();
  });
});
