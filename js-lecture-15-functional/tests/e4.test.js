const multiply = require("../challenges/e4");

test("multiplies two numbers", () => {
  expect(multiply(3, 4)).toBe(12);
});

test("same inputs always give same output", () => {
  expect(multiply(5, 6)).toBe(30);
  expect(multiply(5, 6)).toBe(30);
});
