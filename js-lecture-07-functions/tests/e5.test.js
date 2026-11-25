const describePerson = require("../challenges/e5");

test("returns correct description", () => {
  expect(describePerson("Ali", 22, "Mumbai")).toBe("Ali is 22 years old and lives in Mumbai");
});
