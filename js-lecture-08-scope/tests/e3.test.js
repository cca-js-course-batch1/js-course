const toFahrenheit = require("../challenges/e3");

test("0C is 32F", () => {
  expect(toFahrenheit(0)).toBe(32);
});

test("100C is 212F", () => {
  expect(toFahrenheit(100)).toBe(212);
});
