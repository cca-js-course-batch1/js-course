const groupBy = require("../challenges/e2");

test("groups objects by key", () => {
  const data = [{ role: "admin", name: "Ali" }, { role: "user", name: "Sara" }, { role: "admin", name: "Raj" }];
  const result = groupBy(data, "role");
  expect(result.admin.length).toBe(2);
  expect(result.user.length).toBe(1);
});
