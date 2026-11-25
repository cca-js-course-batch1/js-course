const mergeObjects = require("../challenges/e5");

test("merges two objects", () => {
  expect(mergeObjects({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 });
});

test("second object wins on conflict", () => {
  expect(mergeObjects({ a: 1 }, { a: 2 })).toEqual({ a: 2 });
});
