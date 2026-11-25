const paginate = require("../challenges/c2");

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

test("returns correct page data", () => {
  expect(paginate(arr, 1, 3).data).toEqual([1, 2, 3]);
});

test("returns correct totalPages", () => {
  expect(paginate(arr, 1, 3).totalPages).toBe(4);
});

test("hasNext is true on page 1", () => {
  expect(paginate(arr, 1, 3).hasNext).toBe(true);
});

test("hasPrev is false on page 1", () => {
  expect(paginate(arr, 1, 3).hasPrev).toBe(false);
});
