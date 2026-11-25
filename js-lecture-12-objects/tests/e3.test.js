const hasProp = require("../challenges/e3");

test("returns true when key exists", () => {
  expect(hasProp({ name: "Ali" }, "name")).toBe(true);
});

test("returns false when key does not exist", () => {
  expect(hasProp({ name: "Ali" }, "age")).toBe(false);
});
