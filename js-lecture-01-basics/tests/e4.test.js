const isTeen = require("../challenges/e4");

test("returns true for age 13", () => {
  expect(isTeen(13)).toBe(true);
});

test("returns true for age 17", () => {
  expect(isTeen(17)).toBe(true);
});

test("returns false for age 12", () => {
  expect(isTeen(12)).toBe(false);
});

test("returns false for age 18", () => {
  expect(isTeen(18)).toBe(false);
});
