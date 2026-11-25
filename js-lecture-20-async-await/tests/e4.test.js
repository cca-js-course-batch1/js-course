const parseJSON = require("../challenges/e4");

test("parses valid JSON", () => {
  expect(parseJSON('{"name":"Ali"}')).toEqual({ name: "Ali" });
});

test("returns null for invalid JSON", () => {
  expect(parseJSON("not json")).toBeNull();
});
