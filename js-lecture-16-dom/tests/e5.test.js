const buildAttributes = require("../challenges/e5");

test("returns array of key=value strings", () => {
  const result = buildAttributes({ id: "title", class: "header" });
  expect(result).toContain("id=title");
  expect(result).toContain("class=header");
});
