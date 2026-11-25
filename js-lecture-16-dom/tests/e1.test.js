const buildElement = require("../challenges/e1");

test("returns correct element data", () => {
  expect(buildElement("h1", "Welcome")).toEqual({ tag: "h1", text: "Welcome" });
});
