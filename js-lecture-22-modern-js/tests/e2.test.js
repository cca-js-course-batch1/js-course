const mergeWithSpread = require("../challenges/e2");

test("merges two objects", () => {
  expect(mergeWithSpread({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 });
});

test("second object wins on conflict", () => {
  expect(mergeWithSpread({ a: 1 }, { a: 99 })).toEqual({ a: 99 });
});
