const doubleAll = require("../challenges/e1");

test("doubles all values", () => {
  expect(doubleAll([1, 2, 3])).toEqual([2, 4, 6]);
});

test("returns empty array for empty input", () => {
  expect(doubleAll([])).toEqual([]);
});
