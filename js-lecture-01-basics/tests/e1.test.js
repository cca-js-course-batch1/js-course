const sayHello = require("../challenges/e1");

test("returns Hello, Ali", () => {
  expect(sayHello("Ali")).toBe("Hello, Ali");
});

test("returns Hello, Sara", () => {
  expect(sayHello("Sara")).toBe("Hello, Sara");
});
