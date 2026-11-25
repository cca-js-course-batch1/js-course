const toggleClass = require("../challenges/e4");

test("removes class if present", () => {
  expect(toggleClass(["active", "visible"], "active")).toEqual(["visible"]);
});

test("adds class if not present", () => {
  expect(toggleClass(["visible"], "active")).toEqual(["visible", "active"]);
});
