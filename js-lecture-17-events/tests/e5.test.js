const buildFormData = require("../challenges/e5");

test("returns object with correct fields", () => {
  const result = buildFormData("Ali", "ali@test.com", "Hello");
  expect(result.name).toBe("Ali");
  expect(result.email).toBe("ali@test.com");
  expect(result.message).toBe("Hello");
});

test("includes timestamp", () => {
  const result = buildFormData("Ali", "ali@test.com", "Hello");
  expect(result.timestamp).toBeDefined();
});
