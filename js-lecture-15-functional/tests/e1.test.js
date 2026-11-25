const factorial = require("../challenges/e1");

test("factorial of 4 is 24", () => {
  expect(factorial(4)).toBe(24);
});

test("factorial of 0 is 1", () => {
  expect(factorial(0)).toBe(1);
});
