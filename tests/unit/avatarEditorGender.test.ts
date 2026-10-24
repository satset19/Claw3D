import { createElement } from "react";
import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { AgentAvatarCreatorModal } from "@/features/agents/components/AgentAvatarCreatorModal";
import { createDefaultAgentAvatarProfile } from "@/lib/avatars/profile";

vi.mock("@/features/agents/components/AgentAvatarPreview3D", () => ({
  AgentAvatarPreview3D: () => null,
}));

describe("avatar editor gender", () => {
  it("saves the selected gender and offers new styles", async () => {
    const initial = createDefaultAgentAvatarProfile("seed-a");
    initial.body.gender = "male";
    const onSave = vi.fn(async () => {});
    render(
      createElement(AgentAvatarCreatorModal, {
        open: true,
        agentId: "agent-1",
        agentName: "Agent One",
        initialProfile: initial,
        onClose: () => {},
        onSave,
      }),
    );

    expect(screen.getByRole("button", { name: "Ponytail" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Skirt" })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Female" }));
    fireEvent.click(screen.getByRole("button", { name: "Save avatar" }));

    await vi.waitFor(() =>
      expect(onSave).toHaveBeenCalledWith(
        expect.objectContaining({ body: expect.objectContaining({ gender: "female" }) }),
      ),
    );
  });
});
