const isEven = require("../challenges/e4");

test("4 is even", () => {
  expect(isEven(4)).toBe(true);
});

test("7 is not even", () => {
  expect(isEven(7)).toBe(false);
});

test("0 is even", () => {
  expect(isEven(0)).toBe(true);
});
