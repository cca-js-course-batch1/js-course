const invertObject = require("../challenges/c3");

test("inverts keys and values", () => {
  expect(invertObject({ a: 1, b: 2 })).toEqual({ 1: "a", 2: "b" });
});
