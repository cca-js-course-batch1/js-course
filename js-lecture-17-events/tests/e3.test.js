const sanitizeInput = require("../challenges/e3");

test("trims and lowercases input", () => {
  expect(sanitizeInput("  ALI  ")).toBe("ali");
});
