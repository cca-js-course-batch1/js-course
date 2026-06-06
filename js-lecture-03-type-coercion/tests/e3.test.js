const isValidNumber = require("../challenges/e3");

test("returns true for a number", () => {
  expect(isValidNumber(42)).toBe(true);
});

test("returns false for NaN", () => {
  expect(isValidNumber(NaN)).toBe(false);
});

test("returns false for a string", () => {
  expect(isValidNumber("hello")).toBe(false);
});
