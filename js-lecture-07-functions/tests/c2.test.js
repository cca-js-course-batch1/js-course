const createGreeter = require("../challenges/c2");

test("creates a greeter function", () => {
  const hello = createGreeter("Hello", "!");
  expect(hello("Ali")).toBe("Hello, Ali!");
});

test("works with different greeting", () => {
  const hey = createGreeter("Hey", ".");
  expect(hey("Sara")).toBe("Hey, Sara.");
});
