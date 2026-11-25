const defaultGreet = require("../challenges/e1");

test("greets with name", () => {
  expect(defaultGreet("Ali")).toBe("Hey, Ali");
});

test("uses default when no name given", () => {
  expect(defaultGreet()).toBe("Hey, there");
});
