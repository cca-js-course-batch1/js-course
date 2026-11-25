const runQueue = require("../challenges/c3");

test("runs tasks in order and collects results", async () => {
  const tasks = [
    () => Promise.resolve(1),
    () => Promise.resolve(2),
    () => Promise.resolve(3)
  ];
  const results = await runQueue(tasks);
  expect(results).toEqual([1, 2, 3]);
});
