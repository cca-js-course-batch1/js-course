const describeTypes = require("../challenges/c3");

test("describes a number", () => {
  expect(describeTypes([42])).toEqual(["42 is a number"]);
});

test("describes multiple types", () => {
  expect(describeTypes([42, "hi", true])).toEqual([
    "42 is a number",
    "hi is a string",
    "true is a boolean"
  ]);
});
