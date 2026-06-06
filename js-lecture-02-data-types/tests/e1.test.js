const getType = require("../challenges/e1");

test("returns number for 42", () => {
  expect(getType(42)).toBe("number");
});

test("returns string for hello", () => {
  expect(getType("hello")).toBe("string");
});

test("returns boolean for true", () => {
  expect(getType(true)).toBe("boolean");
});
