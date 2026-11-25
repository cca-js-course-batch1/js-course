const fetchUserName = require("../challenges/e3");

test("returns the user name", async () => {
  const getUserById = async (id) => ({ id, name: "Ali" });
  expect(await fetchUserName(getUserById, 1)).toBe("Ali");
});
