const makeBank = require("../challenges/c1");

test("deposit increases balance", () => {
  const bank = makeBank(100);
  expect(bank.deposit(50)).toBe(150);
});

test("withdraw decreases balance", () => {
  const bank = makeBank(100);
  expect(bank.withdraw(30)).toBe(70);
});

test("withdraw returns Insufficient funds when not enough", () => {
  const bank = makeBank(50);
  expect(bank.withdraw(100)).toBe("Insufficient funds");
});

test("getBalance returns current balance", () => {
  const bank = makeBank(200);
  bank.deposit(50);
  expect(bank.getBalance()).toBe(250);
});
