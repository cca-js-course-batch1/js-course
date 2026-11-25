const safeDivide = require("../challenges/e1");

test("divides correctly", () => {
  expect(safeDivide(10, 2)).toBe(5);
});

test("returns null when dividing by zero", () => {
  expect(safeDivide(10, 0)).toBeNull();
});
