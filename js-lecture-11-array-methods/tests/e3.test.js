const totalSum = require("../challenges/e3");

test("sums all numbers", () => {
  expect(totalSum([1, 2, 3, 4])).toBe(10);
});

test("returns 0 for empty array", () => {
  expect(totalSum([])).toBe(0);
});
