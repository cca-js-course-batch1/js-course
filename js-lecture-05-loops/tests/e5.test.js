const sumEvens = require("../challenges/e5");

test("sums even numbers", () => {
  expect(sumEvens([1, 2, 3, 4, 5, 6])).toBe(12);
});

test("returns 0 for no evens", () => {
  expect(sumEvens([1, 3, 5])).toBe(0);
});
