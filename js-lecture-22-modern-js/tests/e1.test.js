const describeUser = require("../challenges/e1");

test("returns correct description", () => {
  expect(describeUser({ name: "Ali", age: 22, city: "Mumbai" })).toBe("Ali is 22 and lives in Mumbai");
});
