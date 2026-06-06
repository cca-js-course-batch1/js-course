const toBool = require("../challenges/e4");

test("returns false for 0", () => {
  expect(toBool(0)).toBe(false);
});

test("returns true for a non-empty string", () => {
  expect(toBool("hello")).toBe(true);
});

test("returns false for empty string", () => {
  expect(toBool("")).toBe(false);
});
