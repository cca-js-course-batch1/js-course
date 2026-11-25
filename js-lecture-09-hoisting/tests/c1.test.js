const safeExecute = require("../challenges/c1");

test("calls and returns result of a function", () => {
  expect(safeExecute(() => 42)).toBe(42);
});

test("returns Not a function for non-function", () => {
  expect(safeExecute(42)).toBe("Not a function");
});
