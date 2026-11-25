const containsItem = require("../challenges/e4");

test("returns true when item exists", () => {
  expect(containsItem([1, 2, 3], 2)).toBe(true);
});

test("returns false when item does not exist", () => {
  expect(containsItem([1, 2, 3], 5)).toBe(false);
});
