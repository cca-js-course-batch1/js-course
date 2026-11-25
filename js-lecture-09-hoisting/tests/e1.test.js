const doubleIt = require("../challenges/e1");

test("doubles 5 to get 10", () => {
  expect(doubleIt(5)).toBe(10);
});

test("doubles 0 to get 0", () => {
  expect(doubleIt(0)).toBe(0);
});
