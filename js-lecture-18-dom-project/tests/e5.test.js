const countTasks = require("../challenges/e5");

test("counts total tasks", () => {
  const tasks = [
    { completed: true },
    { completed: false },
    { completed: true }
  ];
  expect(countTasks(tasks).total).toBe(3);
  expect(countTasks(tasks).completed).toBe(2);
  expect(countTasks(tasks).active).toBe(1);
});
