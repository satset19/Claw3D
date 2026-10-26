import { describe, expect, it } from "vitest";

import {
  astar,
  buildNavGrid,
  GRID_CELL,
  GRID_COLS,
  GRID_ROWS,
  isCellBlocked,
} from "@/features/retro-office/core/navigation";
import { CANVAS_H } from "@/features/retro-office/core/constants";
import type { FurnitureItem } from "@/features/retro-office/core/types";

describe("navigation – doors and collision prevention", () => {
  it("carves out door footprint plus 1 cell margin so wall padding does not block doors", () => {
    // Top wall ending at y=260, door from y=260 to 300, bottom wall starting at y=300
    const topWall: FurnitureItem = {
      _uid: "top_wall",
      type: "wall",
      x: 500,
      y: 100,
      w: 8,
      h: 160,
      facing: 0,
    };
    const door: FurnitureItem = {
      _uid: "door_1",
      type: "door",
      x: 500,
      y: 260,
      w: 40,
      h: 8,
      facing: 90,
    };
    const bottomWall: FurnitureItem = {
      _uid: "bottom_wall",
      type: "wall",
      x: 500,
      y: 300,
      w: 8,
      h: 160,
      facing: 0,
    };

    const grid = buildNavGrid([topWall, door, bottomWall]);

    // The door area around x=500, y=280 must NOT be blocked
    expect(isCellBlocked(500, 280, grid)).toBe(false);

    // But the walls well above and below the door margin must be blocked
    expect(isCellBlocked(500, 150, grid)).toBe(true);
    expect(isCellBlocked(500, 400, grid)).toBe(true);

    // A* route from one side of the wall to the other must pass through the door
    const path = astar(450, 280, 550, 280, grid);
    expect(path.length).toBeGreaterThan(0);
  });

  it("blocks pathfinding from penetrating a solid wall with no door", () => {
    const solidWall: FurnitureItem = {
      _uid: "wall_full",
      type: "wall",
      x: 400,
      y: 0,
      w: 8,
      h: CANVAS_H,
      facing: 0,
    };

    const grid = buildNavGrid([solidWall]);

    // The wall spans the whole canvas height, separating left and right sides
    const path = astar(200, 300, 600, 300, grid);
    expect(path).toEqual([]);
  });

  it("isCellBlocked returns true for out-of-bounds coordinates", () => {
    const grid = buildNavGrid([]);
    expect(isCellBlocked(-10, 100, grid)).toBe(true);
    expect(isCellBlocked(100, -10, grid)).toBe(true);
    expect(isCellBlocked(GRID_COLS * GRID_CELL + 10, 100, grid)).toBe(true);
    expect(isCellBlocked(100, GRID_ROWS * GRID_CELL + 10, grid)).toBe(true);
  });

  it("strictly prevents diagonal movement across blocked diagonal corners", () => {
    // Place a single blocked obstacle cell at (row 10, col 10)
    const obstacle: FurnitureItem = {
      _uid: "obstacle",
      type: "desk_cubicle",
      x: 10 * GRID_CELL,
      y: 10 * GRID_CELL,
      w: GRID_CELL,
      h: GRID_CELL,
    };
    const grid = buildNavGrid([obstacle]);

    // Start at (col 9, row 11) and try to go to (col 11, row 9)
    // Direct diagonal would cut corner at (col 10, row 10)
    const sx = 9 * GRID_CELL + GRID_CELL / 2;
    const sy = 11 * GRID_CELL + GRID_CELL / 2;
    const ex = 11 * GRID_CELL + GRID_CELL / 2;
    const ey = 9 * GRID_CELL + GRID_CELL / 2;

    const path = astar(sx, sy, ex, ey, grid);
    expect(path.length).toBeGreaterThan(0);

    // No waypoint should pass through the blocked obstacle cell
    for (const wp of path) {
      expect(isCellBlocked(wp.x, wp.y, grid)).toBe(false);
    }
  });
});
