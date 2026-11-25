const deepGet = require("../challenges/c1");

test("gets nested property", () => {
  const obj = { user: { address: { city: "Mumbai" } } };
  expect(deepGet(obj, "user.address.city")).toBe("Mumbai");
});

test("returns undefined for missing path", () => {
  const obj = { user: { name: "Ali" } };
  expect(deepGet(obj, "user.address.city")).toBeUndefined();
});
