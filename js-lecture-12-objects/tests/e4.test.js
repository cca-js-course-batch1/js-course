const countKeys = require("../challenges/e4");

test("counts 3 keys", () => {
  expect(countKeys({ a: 1, b: 2, c: 3 })).toBe(3);
});

test("returns 0 for empty object", () => {
  expect(countKeys({})).toBe(0);
});
