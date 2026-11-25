const buildNestedData = require("../challenges/c3");

test("transforms category to label and children", () => {
  const result = buildNestedData([{ name: "Tech", subcategories: [] }]);
  expect(result).toEqual([{ label: "Tech", children: [] }]);
});

test("handles nested subcategories", () => {
  const input = [{ name: "Tech", subcategories: [{ name: "JS", subcategories: [] }] }];
  const result = buildNestedData(input);
  expect(result[0].children[0].label).toBe("JS");
});
