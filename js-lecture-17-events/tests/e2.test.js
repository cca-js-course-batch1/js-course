const validateEmail = require("../challenges/e2");

test("valid email returns true", () => {
  expect(validateEmail("ali@gmail.com")).toBe(true);
});

test("no @ returns false", () => {
  expect(validateEmail("notanemail")).toBe(false);
});

test("no dot after @ returns false", () => {
  expect(validateEmail("ali@domain")).toBe(false);
});
