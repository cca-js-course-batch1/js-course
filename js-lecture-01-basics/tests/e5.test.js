const fullName = require("../challenges/e5");

test("joins first and last name", () => {
  expect(fullName("Ali", "Khan")).toBe("Ali Khan");
});

test("works with different names", () => {
  expect(fullName("Sara", "Ahmed")).toBe("Sara Ahmed");
});
