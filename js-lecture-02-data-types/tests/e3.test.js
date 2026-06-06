const isMissing = require("../challenges/e3");

test("returns true for null", () => {
  expect(isMissing(null)).toBe(true);
});

test("returns true for undefined", () => {
  expect(isMissing(undefined)).toBe(true);
});

test("returns false for 0", () => {
  expect(isMissing(0)).toBe(false);
});

test("returns false for empty string", () => {
  expect(isMissing("")).toBe(false);
});
