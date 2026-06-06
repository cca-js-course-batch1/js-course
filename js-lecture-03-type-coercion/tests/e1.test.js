const toNumber = require("../challenges/e1");

test("converts string to number", () => {
  expect(toNumber("42")).toBe(42);
});

test("returns NaN for non-numeric string", () => {
  expect(toNumber("hello")).toBeNaN();
});
