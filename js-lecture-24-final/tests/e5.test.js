const sortBy = require("../challenges/e5");

test("sorts objects by key ascending", () => {
  const data = [{ name: "Sara", age: 25 }, { name: "Ali", age: 20 }];
  const result = sortBy(data, "age");
  expect(result[0].name).toBe("Ali");
});
