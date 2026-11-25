const safeGet = require("../challenges/e3");

test("returns value when key exists", () => {
  expect(safeGet({ name: "Ali" }, "name")).toBe("Ali");
});

test("returns undefined when obj is null", () => {
  expect(safeGet(null, "name")).toBeUndefined();
});
