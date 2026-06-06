const buildProfile = require("../challenges/c1");

test("returns correct fullName", () => {
  const result = buildProfile("Ali", "Khan", 20, "India");
  expect(result.fullName).toBe("Ali Khan");
});

test("returns correct age and country", () => {
  const result = buildProfile("Ali", "Khan", 20, "India");
  expect(result.age).toBe(20);
  expect(result.country).toBe("India");
});

test("isAdult is true for age 18 or above", () => {
  expect(buildProfile("A", "B", 18, "X").isAdult).toBe(true);
  expect(buildProfile("A", "B", 25, "X").isAdult).toBe(true);
});

test("isAdult is false for age below 18", () => {
  expect(buildProfile("A", "B", 17, "X").isAdult).toBe(false);
});
