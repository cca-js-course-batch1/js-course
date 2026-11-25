const getFirstAndLast = require("../challenges/e1");

test("returns correct first and last", () => {
  expect(getFirstAndLast([1, 2, 3])).toEqual({ first: 1, last: 3 });
});

test("works with two elements", () => {
  expect(getFirstAndLast([5, 10])).toEqual({ first: 5, last: 10 });
});
