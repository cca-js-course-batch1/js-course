const greetUser = require("../challenges/e2");

test("greets Sara", () => {
  expect(greetUser("Sara")).toBe("Welcome, Sara!");
});

test("greets Ali", () => {
  expect(greetUser("Ali")).toBe("Welcome, Ali!");
});
