const pipeline = require("../challenges/c3");

test("applies functions in order", () => {
  expect(pipeline(5, [n => n + 1, n => n * 2, n => n - 3])).toBe(9);
});

test("works with single function", () => {
  expect(pipeline(5, [n => n * 2])).toBe(10);
});
