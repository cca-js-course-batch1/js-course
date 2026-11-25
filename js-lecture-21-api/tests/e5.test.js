const buildPostOptions = require("../challenges/e5");

test("returns correct method", () => {
  expect(buildPostOptions({}).method).toBe("POST");
});

test("includes JSON content type header", () => {
  expect(buildPostOptions({}).headers["Content-Type"]).toBe("application/json");
});

test("body is stringified data", () => {
  const data = { name: "Ali" };
  expect(buildPostOptions(data).body).toBe(JSON.stringify(data));
});
