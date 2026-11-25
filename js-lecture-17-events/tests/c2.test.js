const parseQueryString = require("../challenges/c2");

test("parses query string correctly", () => {
  expect(parseQueryString("?city=Mumbai&units=metric")).toEqual({ city: "Mumbai", units: "metric" });
});

test("works without leading ?", () => {
  expect(parseQueryString("name=Ali&age=22")).toEqual({ name: "Ali", age: "22" });
});
