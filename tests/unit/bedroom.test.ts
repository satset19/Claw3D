import { describe, expect, it } from "vitest";
import { ITEM_FOOTPRINT, ITEM_METADATA } from "@/features/retro-office/core/geometry";
import {
  DEFAULT_BEDROOM_ITEMS,
  ensureOfficeBedroom,
  materializeDefaults,
} from "@/features/retro-office/core/furnitureDefaults";
import { astar, buildNavGrid } from "@/features/retro-office/core/navigation";
import { BedModel } from "@/features/retro-office/objects/primitives";
import type { FurnitureItem, FurnitureItemType } from "@/features/retro-office/core/types";

describe("Bedroom room and Bed furniture", () => {
  it("includes 'bed' in FurnitureItemType", () => {
    const itemType: FurnitureItemType = "bed";
    expect(itemType).toBe("bed");
  });

  it("registers bed footprint and nav metadata", () => {
    expect(ITEM_FOOTPRINT.bed).toEqual([46, 76]);
    expect(ITEM_METADATA.bed).toEqual({ blocksNavigation: true, navPadding: 4 });
  });

  it("BedModel is a defined component", () => {
    expect(BedModel).toBeDefined();
    expect(typeof BedModel).toBe("function");
  });

  it("defines bedroom with 4 walls, exactly 1 door at (620, 250, 40, 8), and exactly 9 beds in 3 rows of 3", () => {
    const walls = DEFAULT_BEDROOM_ITEMS.filter((item) => item.type === "wall");
    const doors = DEFAULT_BEDROOM_ITEMS.filter((item) => item.type === "door");
    const beds = DEFAULT_BEDROOM_ITEMS.filter((item) => item.type === "bed");

    expect(walls).toHaveLength(4);
    expect(doors).toHaveLength(1);
    expect(beds).toHaveLength(9);

    const door = doors[0];
    expect(door.x).toBe(620);
    expect(door.y).toBe(250);
    expect(door.w).toBe(40);
    expect(door.h).toBe(8);

    // All beds are within bedroom bounds (x: 480 to 780, y: 30 to 250)
    for (const bed of beds) {
      expect(bed.x).toBeGreaterThanOrEqual(480);
      expect(bed.x).toBeLessThanOrEqual(780);
      expect(bed.y).toBeGreaterThanOrEqual(30);
      expect(bed.y).toBeLessThanOrEqual(250);
    }

    // Group beds into 3 distinct rows of 3 beds
    const rowMap = new Map<number, typeof beds>();
    for (const bed of beds) {
      const list = rowMap.get(bed.y) ?? [];
      list.push(bed);
      rowMap.set(bed.y, list);
    }
    expect(rowMap.size).toBe(3);
    for (const rowBeds of rowMap.values()) {
      expect(rowBeds).toHaveLength(3);
    }
  });

  it("materializeDefaults('office') includes the 9 bedroom beds and connects via door", () => {
    const officeItems = materializeDefaults("office");
    const beds = officeItems.filter((item) => item.type === "bed");
    expect(beds).toHaveLength(9);

    const bedroomDoor = officeItems.find(
      (item) => item.type === "door" && item.x === 620 && item.y === 250,
    );
    expect(bedroomDoor).toBeDefined();

    // Verify navigation grid allows path from office into bedroom through the door
    const grid = buildNavGrid(officeItems);
    const outsideDoorX = 640;
    const outsideDoorY = 270;
    const insideBedroomX = 640;
    const insideBedroomY = 230;

    const path = astar(outsideDoorX, outsideDoorY, insideBedroomX, insideBedroomY, grid);
    expect(path.length).toBeGreaterThan(0);
  });

  it("ensureOfficeBedroom migrates bedroom items if missing", () => {
    const emptyItems: FurnitureItem[] = [];
    const migrated = ensureOfficeBedroom(emptyItems);
    expect(migrated.filter((item) => item.type === "bed")).toHaveLength(9);
  });
});
