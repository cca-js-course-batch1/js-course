const calcTotal = require("../challenges/e4");

test("calculates total correctly", () => {
  expect(calcTotal(50, 3)).toBe(150);
});

test("works with different values", () => {
  expect(calcTotal(100, 5)).toBe(500);
});
