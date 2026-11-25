const flattenObject = require("../challenges/c3");

test("flattens nested object with dot notation", () => {
  const result = flattenObject({ user: { name: "Ali" } });
  expect(result["user.name"]).toBe("Ali");
});

test("handles deeply nested object", () => {
  const result = flattenObject({ a: { b: { c: 1 } } });
  expect(result["a.b.c"]).toBe(1);
});
