const buildQueryString = require("../challenges/e1");

test("builds query string from object", () => {
  const result = buildQueryString({ city: "Mumbai", units: "metric" });
  expect(result).toContain("city=Mumbai");
  expect(result).toContain("units=metric");
  expect(result.startsWith("?")).toBe(true);
});
