const createTodoList = require("../challenges/c3");

test("add and getAll work", () => {
  const list = createTodoList();
  list.add("Buy milk");
  expect(list.getAll()).toEqual(["Buy milk"]);
});

test("remove works by index", () => {
  const list = createTodoList();
  list.add("Task 1");
  list.add("Task 2");
  list.remove(0);
  expect(list.getAll()).toEqual(["Task 2"]);
});

test("getAll returns a copy not the original", () => {
  const list = createTodoList();
  list.add("Task 1");
  const all = list.getAll();
  all.push("injected");
  expect(list.getAll().length).toBe(1);
});
