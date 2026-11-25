const getNames = require("../challenges/e5");

test("extracts names from user objects", () => {
  expect(getNames([{ name: "Ali" }, { name: "Sara" }])).toEqual(["Ali", "Sara"]);
});
