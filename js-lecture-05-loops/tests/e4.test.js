const countDown = require("../challenges/e4");

test("counts down from 4", () => {
  expect(countDown(4)).toEqual([4, 3, 2, 1]);
});

test("returns [1] for 1", () => {
  expect(countDown(1)).toEqual([1]);
});
