const deepEqual = require("../challenges/c1");

test("returns true for deeply equal objects", () => {
  expect(deepEqual({ a: 1, b: [2, 3] }, { a: 1, b: [2, 3] })).toBe(true);
});

test("returns false for different values", () => {
  expect(deepEqual({ a: 1 }, { a: 2 })).toBe(false);
});

test("returns true for equal primitives", () => {
  expect(deepEqual(5, 5)).toBe(true);
});

test("returns false for different arrays", () => {
  expect(deepEqual([1, 2], [1, 3])).toBe(false);
});
