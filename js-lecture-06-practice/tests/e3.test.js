const countOccurrences = require("../challenges/e3");

test("counts how many times 2 appears", () => {
  expect(countOccurrences([1, 2, 2, 3, 2], 2)).toBe(3);
});

test("returns 0 when not found", () => {
  expect(countOccurrences([1, 3, 5], 2)).toBe(0);
});
