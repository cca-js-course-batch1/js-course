const createTestRunner = require("../challenges/c3");

test("passing test is recorded", () => {
  const runner = createTestRunner();
  runner.test("adds correctly", () => {
    runner.expect(1 + 1).toBe(2);
  });
  expect(runner.getSummary().passed).toBe(1);
});

test("failing test is recorded", () => {
  const runner = createTestRunner();
  runner.test("wrong assertion", () => {
    runner.expect(1 + 1).toBe(99);
  });
  expect(runner.getSummary().failed).toBe(1);
});

test("total reflects both", () => {
  const runner = createTestRunner();
  runner.test("pass", () => { runner.expect(1).toBe(1); });
  runner.test("fail", () => { runner.expect(1).toBe(2); });
  expect(runner.getSummary().total).toBe(2);
});
