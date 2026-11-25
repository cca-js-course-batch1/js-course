const createTimer = require("../challenges/c3");

test("end returns elapsed time as a number", () => {
  const timer = createTimer();
  timer.start("test");
  const elapsed = timer.end("test");
  expect(typeof elapsed).toBe("number");
  expect(elapsed).toBeGreaterThanOrEqual(0);
});

test("getSummary returns all labels", () => {
  const timer = createTimer();
  timer.start("a");
  timer.end("a");
  timer.start("b");
  timer.end("b");
  const summary = timer.getSummary();
  expect(summary.a).toBeDefined();
  expect(summary.b).toBeDefined();
});
