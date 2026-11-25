const getSeason = require("../challenges/c3");

test("January is Winter", () => {
  expect(getSeason(1)).toBe("Winter");
});

test("July is Monsoon", () => {
  expect(getSeason(7)).toBe("Monsoon");
});

test("April is Summer", () => {
  expect(getSeason(4)).toBe("Summer");
});

test("November is Autumn", () => {
  expect(getSeason(11)).toBe("Autumn");
});

test("returns Invalid month for 13", () => {
  expect(getSeason(13)).toBe("Invalid month");
});
