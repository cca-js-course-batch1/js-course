const compose = require("../challenges/c2");

test("applies g then f", () => {
  const add1 = n => n + 1;
  const double = n => n * 2;
  const doubleThenAdd1 = compose(add1, double);
  expect(doubleThenAdd1(5)).toBe(11);
});
