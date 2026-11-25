const flattenOne = require("../challenges/c2");

test("flattens one level", () => {
  expect(flattenOne([[1, 2], [3, 4], [5]])).toEqual([1, 2, 3, 4, 5]);
});
