const makeMultiplier = require("../challenges/e2");

test("double multiplies by 2", () => {
  const double = makeMultiplier(2);
  expect(double(5)).toBe(10);
});

test("triple multiplies by 3", () => {
  const triple = makeMultiplier(3);
  expect(triple(4)).toBe(12);
});
