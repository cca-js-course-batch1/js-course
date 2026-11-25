const validateRequired = require("../challenges/e1");

test("returns false for empty string", () => {
  expect(validateRequired("")).toBe(false);
});

test("returns false for spaces only", () => {
  expect(validateRequired("   ")).toBe(false);
});

test("returns true for non-empty string", () => {
  expect(validateRequired("Ali")).toBe(true);
});
