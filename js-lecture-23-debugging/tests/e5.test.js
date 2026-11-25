const validateObject = require("../challenges/e5");

test("returns true when all keys exist", () => {
  expect(validateObject({ name: "Ali", age: 22 }, ["name", "age"])).toBe(true);
});

test("returns false when a key is missing", () => {
  expect(validateObject({ name: "Ali" }, ["name", "age"])).toBe(false);
});
