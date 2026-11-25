const filterTasks = require("../challenges/e1");

const tasks = [
  { text: "Task 1", completed: true },
  { text: "Task 2", completed: false },
  { text: "Task 3", completed: true }
];

test("filters completed tasks", () => {
  expect(filterTasks(tasks, "completed").length).toBe(2);
});

test("filters active tasks", () => {
  expect(filterTasks(tasks, "active").length).toBe(1);
});

test("returns all tasks", () => {
  expect(filterTasks(tasks, "all").length).toBe(3);
});
