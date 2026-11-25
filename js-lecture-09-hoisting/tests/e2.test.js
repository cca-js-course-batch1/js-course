const safeCall = require("../challenges/e2");

test("calls the function and returns result", () => {
  expect(safeCall(n => n * 2, 5)).toBe(10);
});

test("returns null when fn is not a function", () => {
  expect(safeCall("not a function", 5)).toBeNull();
});
