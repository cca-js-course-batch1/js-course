const treeSum = require("../challenges/c3");

test("sums all values in tree", () => {
  const tree = {
    value: 1,
    children: [
      { value: 2, children: [] },
      { value: 3, children: [{ value: 4, children: [] }] }
    ]
  };
  expect(treeSum(tree)).toBe(10);
});

test("single node tree", () => {
  expect(treeSum({ value: 5, children: [] })).toBe(5);
});
