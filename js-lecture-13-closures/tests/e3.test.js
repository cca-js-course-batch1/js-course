const makeGreeter = require("../challenges/e3");

test("creates greeter with given greeting", () => {
  const sayHi = makeGreeter("Hi");
  expect(sayHi("Ali")).toBe("Hi, Ali!");
});
