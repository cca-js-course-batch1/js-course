const unique = require("../challenges/e3");

test("removes duplicates", () => {
  expect(unique([1, 2, 2, 3, 1, 4])).toEqual([1, 2, 3, 4]);
});

test("preserves order", () => {
  expect(unique([3, 1, 2, 1, 3])).toEqual([3, 1, 2]);
});
