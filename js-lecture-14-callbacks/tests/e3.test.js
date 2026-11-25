const filterWith = require("../challenges/e3");

test("filters items using predicate", () => {
  expect(filterWith([1, 2, 3, 4], n => n > 2)).toEqual([3, 4]);
});
