const typeCheck = require("../challenges/e2");

test("returns true for correct type", () => {
  expect(typeCheck(42, "number")).toBe(true);
});

test("returns false for wrong type", () => {
  expect(typeCheck("hello", "number")).toBe(false);
});
