const validateForm = require("../challenges/c1");

test("valid form returns isValid true", () => {
  const result = validateForm({ name: "Ali", email: "ali@test.com", password: "secret123" });
  expect(result.isValid).toBe(true);
});

test("empty name returns error", () => {
  const result = validateForm({ name: "", email: "ali@test.com", password: "secret123" });
  expect(result.isValid).toBe(false);
  expect(result.errors.name).toBeDefined();
});

test("short password returns error", () => {
  const result = validateForm({ name: "Ali", email: "ali@test.com", password: "abc" });
  expect(result.isValid).toBe(false);
  expect(result.errors.password).toBeDefined();
});
