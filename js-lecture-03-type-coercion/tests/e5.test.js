const safeAdd = require("../challenges/e5");

test("adds two string numbers", () => {
  expect(safeAdd("5", "3")).toBe(8);
});

test("adds a string and a number", () => {
  expect(safeAdd("10", 5)).toBe(15);
});
