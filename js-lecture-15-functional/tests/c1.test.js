const deepFlatten = require("../challenges/c1");

test("flattens deeply nested array", () => {
  expect(deepFlatten([1, [2, [3, [4]]]])).toEqual([1, 2, 3, 4]);
});

test("handles already flat array", () => {
  expect(deepFlatten([1, 2, 3])).toEqual([1, 2, 3]);
});
