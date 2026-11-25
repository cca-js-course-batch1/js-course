const applyToAll = require("../challenges/e2");

test("applies callback to all items", () => {
  expect(applyToAll([1, 2, 3], n => n * 2)).toEqual([2, 4, 6]);
});
