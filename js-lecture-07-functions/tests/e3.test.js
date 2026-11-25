const multiply = require("../challenges/e3");

test("multiplies 3 and 4", () => {
  expect(multiply(3, 4)).toBe(12);
});

test("multiplies by 0", () => {
  expect(multiply(5, 0)).toBe(0);
});
