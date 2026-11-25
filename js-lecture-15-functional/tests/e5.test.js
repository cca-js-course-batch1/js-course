const fibonacci = require("../challenges/e5");

test("fibonacci of 6 is 8", () => {
  expect(fibonacci(6)).toBe(8);
});

test("fibonacci of 0 is 0", () => {
  expect(fibonacci(0)).toBe(0);
});

test("fibonacci of 1 is 1", () => {
  expect(fibonacci(1)).toBe(1);
});
