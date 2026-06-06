const convertTemp = require("../challenges/c3");

test("converts 0C to 32F", () => {
  expect(convertTemp(0, "C").result).toBe(32);
});

test("converts 32F to 0C", () => {
  expect(convertTemp(32, "F").result).toBe(0);
});

test("returns correct from and to", () => {
  const result = convertTemp(0, "C");
  expect(result.from).toBe("C");
  expect(result.to).toBe("F");
});
