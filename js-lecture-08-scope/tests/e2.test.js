const power = require("../challenges/e2");

test("2 to the power 3 is 8", () => {
  expect(power(2, 3)).toBe(8);
});

test("5 to the power 2 is 25", () => {
  expect(power(5, 2)).toBe(25);
});
