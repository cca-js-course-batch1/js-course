const parseAndCalc = require("../challenges/c2");

test("adds two string numbers", () => {
  expect(parseAndCalc("5", "3", "+")).toBe(8);
});

test("returns Invalid input for non-numeric", () => {
  expect(parseAndCalc("abc", "3", "+")).toBe("Invalid input");
});

test("returns Cannot divide by zero", () => {
  expect(parseAndCalc("10", "0", "/")).toBe("Cannot divide by zero");
});

test("subtracts correctly", () => {
  expect(parseAndCalc("10", "3", "-")).toBe(7);
});
