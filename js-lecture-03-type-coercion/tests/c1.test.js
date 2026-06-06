const compareValues = require("../challenges/c1");

test("loose is true for 1 and '1'", () => {
  expect(compareValues(1, "1").loose).toBe(true);
});

test("strict is false for 1 and '1'", () => {
  expect(compareValues(1, "1").strict).toBe(false);
});

test("sameType is false for 1 and '1'", () => {
  expect(compareValues(1, "1").sameType).toBe(false);
});

test("all true for same values and types", () => {
  const result = compareValues(5, 5);
  expect(result.loose).toBe(true);
  expect(result.strict).toBe(true);
  expect(result.sameType).toBe(true);
});
