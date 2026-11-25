const countUp = require("../challenges/e1");

test("returns [1,2,3,4,5] for 5", () => {
  expect(countUp(5)).toEqual([1, 2, 3, 4, 5]);
});

test("returns [1] for 1", () => {
  expect(countUp(1)).toEqual([1]);
});
