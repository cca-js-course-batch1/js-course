const ticketPrice = require("../challenges/c1");

test("under 5 is free", () => {
  expect(ticketPrice(3, false)).toBe(0);
});

test("age 10 costs Rs.50", () => {
  expect(ticketPrice(10, false)).toBe(50);
});

test("student discount applies for teen", () => {
  expect(ticketPrice(15, true)).toBe(70);
});

test("senior price applies at 60", () => {
  expect(ticketPrice(60, false)).toBe(80);
});
