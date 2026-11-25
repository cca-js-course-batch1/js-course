const groupEvenOdd = require("../challenges/c1");

test("groups even and odd numbers", () => {
  expect(groupEvenOdd([1, 2, 3, 4, 5])).toEqual({ even: [2, 4], odd: [1, 3, 5] });
});

test("returns empty arrays when no matches", () => {
  expect(groupEvenOdd([1, 3])).toEqual({ even: [], odd: [1, 3] });
});
