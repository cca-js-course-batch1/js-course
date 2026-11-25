const restSum = require("../challenges/e5");

test("sums any number of arguments", () => {
  expect(restSum(1, 2, 3, 4)).toBe(10);
});

test("works with single argument", () => {
  expect(restSum(5)).toBe(5);
});
