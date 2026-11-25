const removeDuplicates = require("../challenges/c1");

test("removes duplicates", () => {
  expect(removeDuplicates([1, 2, 2, 3, 1, 4])).toEqual([1, 2, 3, 4]);
});

test("returns same array when no duplicates", () => {
  expect(removeDuplicates([1, 2, 3])).toEqual([1, 2, 3]);
});
