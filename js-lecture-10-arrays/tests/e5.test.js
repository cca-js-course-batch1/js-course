const reverseArr = require("../challenges/e5");

test("reverses the array", () => {
  expect(reverseArr([1, 2, 3])).toEqual([3, 2, 1]);
});

test("does not modify original array", () => {
  const original = [1, 2, 3];
  reverseArr(original);
  expect(original).toEqual([1, 2, 3]);
});
