const getProp = require("../challenges/e2");

test("returns value by key", () => {
  expect(getProp({ name: "Ali" }, "name")).toBe("Ali");
});

test("returns undefined for missing key", () => {
  expect(getProp({ name: "Ali" }, "age")).toBeUndefined();
});
