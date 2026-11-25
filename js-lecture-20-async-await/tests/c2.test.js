const asyncMap = require("../challenges/c2");

test("maps array with async callback", async () => {
  const result = await asyncMap([1, 2, 3], async n => n * 2);
  expect(result).toEqual([2, 4, 6]);
});
