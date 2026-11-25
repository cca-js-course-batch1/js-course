const memoize = require("../challenges/c3");

test("returns correct result", () => {
  const memoSquare = memoize(n => n * n);
  expect(memoSquare(4)).toBe(16);
});

test("returns same result on second call", () => {
  const memoSquare = memoize(n => n * n);
  memoSquare(4);
  expect(memoSquare(4)).toBe(16);
});

test("fn is only called once for same argument", () => {
  let callCount = 0;
  const fn = memoize(n => { callCount++; return n * 2; });
  fn(5);
  fn(5);
  expect(callCount).toBe(1);
});
