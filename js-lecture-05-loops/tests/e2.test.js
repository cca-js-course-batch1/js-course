const sumTo = require("../challenges/e2");

test("sums 1 to 5 to get 15", () => {
  expect(sumTo(5)).toBe(15);
});

test("sums 1 to 10 to get 55", () => {
  expect(sumTo(10)).toBe(55);
});
