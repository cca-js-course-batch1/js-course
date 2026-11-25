const getDefault = require("../challenges/e4");

test("returns fallback when value is undefined", () => {
  expect(getDefault(undefined, "hello")).toBe("hello");
});

test("returns value when it is defined", () => {
  expect(getDefault("world", "hello")).toBe("world");
});
