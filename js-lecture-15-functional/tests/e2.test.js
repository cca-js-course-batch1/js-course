const sumRecursive = require("../challenges/e2");

test("sums array recursively", () => {
  expect(sumRecursive([1, 2, 3, 4])).toBe(10);
});

test("returns 0 for empty array", () => {
  expect(sumRecursive([])).toBe(0);
});
