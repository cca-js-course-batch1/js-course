const assertPositive = require("../challenges/e4");

test("returns number when positive", () => {
  expect(assertPositive(5)).toBe(5);
});

test("throws for zero", () => {
  expect(() => assertPositive(0)).toThrow("Value must be positive");
});

test("throws for negative", () => {
  expect(() => assertPositive(-1)).toThrow("Value must be positive");
});
