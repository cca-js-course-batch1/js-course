const addTwo = require("../challenges/e3");

test("adds 3 and 4", () => {
  expect(addTwo(3, 4)).toBe(7);
});

test("adds 10 and 20", () => {
  expect(addTwo(10, 20)).toBe(30);
});

test("adds negative numbers", () => {
  expect(addTwo(-5, 5)).toBe(0);
});
