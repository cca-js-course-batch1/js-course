const errorBoundary = require("../challenges/c2");

test("returns result of first successful function", () => {
  const fns = [() => { throw new Error("fail"); }, () => 42];
  expect(errorBoundary(fns, null)).toBe(42);
});

test("returns fallback when all functions throw", () => {
  const fns = [() => { throw new Error("fail"); }];
  expect(errorBoundary(fns, "fallback")).toBe("fallback");
});
