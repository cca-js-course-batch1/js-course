const cleanInput = require("../challenges/c3");

test("trims name", () => {
  const result = cleanInput({ name: "  Ali  ", age: "22", active: "true" });
  expect(result.name).toBe("Ali");
});

test("converts age to number", () => {
  const result = cleanInput({ name: "Ali", age: "22", active: "true" });
  expect(result.age).toBe(22);
});

test("converts active string to boolean", () => {
  const result = cleanInput({ name: "Ali", age: "22", active: "true" });
  expect(result.active).toBe(true);
});

test("active false string becomes false", () => {
  const result = cleanInput({ name: "Ali", age: "22", active: "false" });
  expect(result.active).toBe(false);
});
