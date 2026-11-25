const formatPhone = require("../challenges/e4");

test("formats 10-digit string correctly", () => {
  expect(formatPhone("9876543210")).toBe("(987) 654-3210");
});
