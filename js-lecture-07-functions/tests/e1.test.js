const square = require("../challenges/e1");

test("squares 4 to get 16", () => {
  expect(square(4)).toBe(16);
});

test("squares 0 to get 0", () => {
  expect(square(0)).toBe(0);
});
