const omit = require("../challenges/c2");

test("removes specified keys", () => {
  expect(omit({ name: "Ali", age: 22, password: "123" }, ["password"])).toEqual({ name: "Ali", age: 22 });
});

test("returns same object if keys not present", () => {
  expect(omit({ name: "Ali" }, ["missing"])).toEqual({ name: "Ali" });
});
