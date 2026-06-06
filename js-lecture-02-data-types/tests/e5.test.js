const getRemainder = require("../challenges/e5");

test("returns remainder of 10 divided by 3", () => {
  expect(getRemainder(10, 3)).toBe(1);
});

test("returns 0 when divisible evenly", () => {
  expect(getRemainder(10, 5)).toBe(0);
});
