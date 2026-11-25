const findLargest = require("../challenges/e5");

test("finds largest in array", () => {
  expect(findLargest([3, 7, 1, 9, 4])).toBe(9);
});

test("works with negative numbers", () => {
  expect(findLargest([-3, -1, -7])).toBe(-1);
});
