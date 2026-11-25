const multiTable = require("../challenges/c2");

test("first item of table 3 is 3 x 1 = 3", () => {
  expect(multiTable(3)[0]).toBe("3 x 1 = 3");
});

test("last item of table 3 is 3 x 10 = 30", () => {
  expect(multiTable(3)[9]).toBe("3 x 10 = 30");
});

test("returns 10 items", () => {
  expect(multiTable(5).length).toBe(10);
});
