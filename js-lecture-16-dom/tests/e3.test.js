const formatStyle = require("../challenges/e3");

test("returns property and value", () => {
  expect(formatStyle("color", "red")).toEqual({ property: "color", value: "red" });
});
