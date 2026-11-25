const deepMerge = require("../challenges/c1");

test("merges top level keys", () => {
  const result = deepMerge({ a: 1 }, { b: 2 });
  expect(result).toEqual({ a: 1, b: 2 });
});

test("deep merges nested objects", () => {
  const result = deepMerge({ b: { x: 1, y: 2 } }, { b: { y: 10, z: 3 } });
  expect(result.b).toEqual({ x: 1, y: 10, z: 3 });
});
