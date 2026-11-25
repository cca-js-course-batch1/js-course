const checkResponse = require("../challenges/e4");

test("returns response when ok is true", () => {
  const res = { ok: true, status: 200 };
  expect(checkResponse(res)).toBe(res);
});

test("throws when ok is false", () => {
  const res = { ok: false, status: 404 };
  expect(() => checkResponse(res)).toThrow("Request failed with status 404");
});
