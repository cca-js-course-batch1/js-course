const loginAccess = require("../challenges/c2");

test("returns Invalid credentials for empty username", () => {
  expect(loginAccess("", "pass", false)).toBe("Invalid credentials");
});

test("returns Admin access granted for admin", () => {
  expect(loginAccess("admin", "pass", true)).toBe("Admin access granted");
});

test("returns User access granted for regular user", () => {
  expect(loginAccess("user", "pass", false)).toBe("User access granted");
});
