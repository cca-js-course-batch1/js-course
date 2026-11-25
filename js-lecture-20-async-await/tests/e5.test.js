const runSequential = require("../challenges/e5");

test("runs tasks one by one and returns results", async () => {
  const order = [];
  const tasks = [
    () => new Promise(res => { order.push(1); res(1); }),
    () => new Promise(res => { order.push(2); res(2); }),
    () => new Promise(res => { order.push(3); res(3); })
  ];
  const results = await runSequential(tasks);
  expect(results).toEqual([1, 2, 3]);
  expect(order).toEqual([1, 2, 3]);
});
