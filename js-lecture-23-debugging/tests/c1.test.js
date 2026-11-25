const validateSchema = require("../challenges/c1");

test("returns isValid true for correct types", () => {
  const result = validateSchema({ name: "string", age: "number" }, { name: "Ali", age: 22 });
  expect(result.isValid).toBe(true);
});

test("returns error for wrong type", () => {
  const result = validateSchema({ age: "number" }, { age: "twenty" });
  expect(result.isValid).toBe(false);
  expect(result.errors.length).toBeGreaterThan(0);
});
