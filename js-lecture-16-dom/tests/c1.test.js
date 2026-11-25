const buildTableData = require("../challenges/c1");

test("extracts headers from first object", () => {
  const result = buildTableData([{ name: "Ali", age: 22 }]);
  expect(result.headers).toEqual(["name", "age"]);
});

test("builds rows correctly", () => {
  const result = buildTableData([{ name: "Ali", age: 22 }, { name: "Sara", age: 25 }]);
  expect(result.rows).toEqual([["Ali", 22], ["Sara", 25]]);
});
