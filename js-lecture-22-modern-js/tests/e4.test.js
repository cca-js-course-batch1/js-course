const withDefault = require("../challenges/e4");

test("returns fallback for null", () => {
  expect(withDefault(null, "Guest")).toBe("Guest");
});

test("returns value for 0 (not null or undefined)", () => {
  expect(withDefault(0, "Guest")).toBe(0);
});

test("returns value for empty string", () => {
  expect(withDefault("", "Guest")).toBe("");
});
