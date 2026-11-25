const createUser = require("../challenges/e4");

test("describe method returns correct string", () => {
  const user = createUser("Ali", "admin");
  expect(user.describe()).toBe("Ali is a admin");
});

test("has correct name and role", () => {
  const user = createUser("Sara", "editor");
  expect(user.name).toBe("Sara");
  expect(user.role).toBe("editor");
});
