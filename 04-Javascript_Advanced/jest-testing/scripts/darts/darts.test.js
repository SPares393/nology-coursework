import { expect, test } from "@jest/globals";
import { findScore } from "./darts.js";

describe("Darts", () => {
  test("missed the target", () => {
    expect(findScore(-9, 9)).toEqual(0);
  });

  test("hit outer circle", () => {
    expect(findScore(0, 10)).toEqual(1);
  });

  test("hit inner circle", () => {
    expect(findScore(0, 5)).toEqual(5);
  });

  test("hit bull", () => {
    expect(findScore(0, 1)).toEqual(10);
  });

  test("centre", () => {
    expect(findScore(0, 0)).toEqual(10);
  });

  test("invalid input", () => {
    expect(findScore("a", 0)).toEqual(null);
  });
});
