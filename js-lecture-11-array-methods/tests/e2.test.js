const onlyEvens = require("../challenges/e2");

test("filters only even numbers", () => {
  expect(onlyEvens([1, 2, 3, 4, 5])).toEqual([2, 4]);
});

test("returns empty when no evens", () => {
  expect(onlyEvens([1, 3, 5])).toEqual([]);
});
