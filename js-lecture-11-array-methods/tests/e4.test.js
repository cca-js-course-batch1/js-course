const findFirstOver = require("../challenges/e4");

test("finds first number over threshold", () => {
  expect(findFirstOver([1, 5, 3, 8], 4)).toBe(5);
});

test("returns undefined when none found", () => {
  expect(findFirstOver([1, 2, 3], 10)).toBeUndefined();
});
