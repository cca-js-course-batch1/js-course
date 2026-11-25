const topN = require("../challenges/c2");

test("returns top 3 numbers", () => {
  expect(topN([3, 1, 7, 4, 9, 2], 3)).toEqual([9, 7, 4]);
});

test("returns top 1", () => {
  expect(topN([5, 2, 8], 1)).toEqual([8]);
});
