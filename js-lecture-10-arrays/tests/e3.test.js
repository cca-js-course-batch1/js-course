const removeLast = require("../challenges/e3");

test("removes last element", () => {
  expect(removeLast([1, 2, 3])).toEqual([1, 2]);
});

test("returns empty for single element array", () => {
  expect(removeLast([1])).toEqual([]);
});
