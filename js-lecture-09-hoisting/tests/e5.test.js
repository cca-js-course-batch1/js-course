const isFunction = require("../challenges/e5");

test("returns true for a function", () => {
  expect(isFunction(() => {})).toBe(true);
});

test("returns false for a number", () => {
  expect(isFunction(42)).toBe(false);
});

test("returns false for a string", () => {
  expect(isFunction("hello")).toBe(false);
});
