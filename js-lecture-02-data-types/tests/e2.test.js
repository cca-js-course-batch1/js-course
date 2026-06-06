const buildGreeting = require("../challenges/e2");

test("returns correct greeting", () => {
  expect(buildGreeting("Ali", 22)).toBe("My name is Ali and I am 22 years old");
});

test("works with different values", () => {
  expect(buildGreeting("Sara", 25)).toBe("My name is Sara and I am 25 years old");
});
