const addTask = require("../challenges/e3");

test("adds task with correct text", () => {
  const result = addTask([], "Buy milk");
  expect(result[0].text).toBe("Buy milk");
});

test("new task starts as not completed", () => {
  const result = addTask([], "Buy milk");
  expect(result[0].completed).toBe(false);
});

test("id is length + 1", () => {
  const existing = [{ id: 1, text: "Task 1", completed: false }];
  const result = addTask(existing, "Task 2");
  expect(result[1].id).toBe(2);
});
