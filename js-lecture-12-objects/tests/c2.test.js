const pick = require("../challenges/c2");

test("picks specified keys", () => {
  expect(pick({ name: "Ali", age: 22, city: "Mumbai" }, ["name", "age"])).toEqual({ name: "Ali", age: 22 });
});

test("skips keys that do not exist", () => {
  expect(pick({ name: "Ali" }, ["name", "missing"])).toEqual({ name: "Ali" });
});
