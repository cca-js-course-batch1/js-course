const toggleTask = require("../challenges/e2");

test("flips completed status", () => {
  const tasks = [{ id: 1, completed: false }, { id: 2, completed: true }];
  const result = toggleTask(tasks, 1);
  expect(result[0].completed).toBe(true);
});

test("does not modify other tasks", () => {
  const tasks = [{ id: 1, completed: false }, { id: 2, completed: true }];
  const result = toggleTask(tasks, 1);
  expect(result[1].completed).toBe(true);
});
