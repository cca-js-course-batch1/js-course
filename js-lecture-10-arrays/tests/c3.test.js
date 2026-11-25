const rotateArray = require("../challenges/c3");

test("rotates array by 2", () => {
  expect(rotateArray([1, 2, 3, 4, 5], 2)).toEqual([4, 5, 1, 2, 3]);
});

test("rotates by 1", () => {
  expect(rotateArray([1, 2, 3], 1)).toEqual([3, 1, 2]);
});
