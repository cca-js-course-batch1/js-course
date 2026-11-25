const getFunctionType = require("../challenges/c2");

test("detects arrow function", () => {
  expect(getFunctionType(() => {})).toBe("arrow");
});

test("detects regular function", () => {
  expect(getFunctionType(function() {})).toBe("declaration-style");
});

test("returns not a function for a string", () => {
  expect(getFunctionType("hello")).toBe("not a function");
});
