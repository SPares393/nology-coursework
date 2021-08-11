import { describe, expect, test } from "@jest/globals";
import { Triangle } from "./triangle.js";

describe("Tests to determine if a shape is a triangle", () => {
  describe("Equilateral triangle", () => {
    test("All sides are equal", () => {
      const triangle = new Triangle(2, 2, 2);
      expect(triangle.isEquilateral).toBe(true);
    });

    test("No sides are equal", () => {
      const triangle = new Triangle(2, 3, 4);
      expect(triangle.isEquilateral).toBe(false);
    });
  });

  describe("Isoseles triangle", () => {
    test("Two sides are equal", () => {
      const triangle = new Triangle(2, 5, 5);
      expect(triangle.isIsoseles).toBe(true);
    });

    test("No sides are equal", () => {
      const triangle = new Triangle(2, 3, 4);
      expect(triangle.isIsoseles).toBe(false);
    });
  });

  describe("Scalene triangle", () => {
    test("Sides should all be different", () => {
      const triangle = new Triangle(2, 3, 4);
      expect(triangle.isScalene).toBe(true);
    });
  });
});
