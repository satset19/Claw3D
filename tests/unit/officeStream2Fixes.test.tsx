import { createElement } from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";

import { HQSidebar } from "@/features/office/components/HQSidebar";
import { KanbanImmersiveScreen } from "@/features/office/screens/KanbanImmersiveScreen";

describe("Stream 2: Office Panels & RetroOffice Scene fixes", () => {
  afterEach(() => {
    cleanup();
  });

  it("HQSidebar: renders with w-72 width and semantic bg-background token on toggle button", () => {
    const { container } = render(
      createElement(HQSidebar, {
        open: true,
        activeTab: "inbox",
        inboxCount: 2,
        onToggle: vi.fn(),
        onTabChange: vi.fn(),
        onOpenMarketplace: vi.fn(),
        inboxPanel: createElement("div", null, "Inbox Content"),
        historyPanel: createElement("div", null, "History Content"),
        kanbanPanel: createElement("div", null, "Kanban Content"),
        playbooksPanel: createElement("div", null, "Playbooks Content"),
        analyticsPanel: createElement("div", null, "Analytics Content"),
      }),
    );

    // Toggle button uses semantic token bg-background/90 instead of hardcoded #06090d
    const toggleButton = screen.getByRole("button", { name: /collapse headquarters sidebar/i });
    expect(toggleButton.className).toContain("bg-background/90");
    expect(toggleButton.className).not.toContain("#06090d");

    // Default sidebar panel width is w-72
    const panel = container.querySelector(".w-72");
    expect(panel).not.toBeNull();
  });

  it("KanbanImmersiveScreen: Close button is contained within dialogRef to prevent focus trap lock-out", () => {
    const handleClose = vi.fn();
    const { container } = render(
      createElement(KanbanImmersiveScreen, {
        agents: [],
        cardsByStatus: {
          todo: [],
          in_progress: [],
          blocked: [],
          review: [],
          done: [],
        },
        selectedCard: null,
        activeRuns: [],
        cronJobs: [],
        cronLoading: false,
        cronError: null,
        onCreateCard: vi.fn(),
        onMoveCard: vi.fn(),
        onSelectCard: vi.fn(),
        onUpdateCard: vi.fn(),
        onDeleteCard: vi.fn(),
        onRefreshCronJobs: vi.fn(),
        onClose: handleClose,
      }),
    );

    const closeButton = screen.getByRole("button", { name: "Close Kanban Board" });
    expect(closeButton).toBeDefined();

    // The focused element on mount is the dialog container (tabIndex = -1)
    const dialogElement = document.activeElement;
    expect(dialogElement).not.toBeNull();
    // The close button MUST be inside the focused dialog element so focus trap allows focusing it
    expect(dialogElement?.contains(closeButton)).toBe(true);
  });
});
