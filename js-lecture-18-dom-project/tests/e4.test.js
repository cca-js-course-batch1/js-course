const removeTask = require("../challenges/e4");

test("removes task with matching id", () => {
  const tasks = [{ id: 1, text: "A" }, { id: 2, text: "B" }];
  const result = removeTask(tasks, 1);
  expect(result.length).toBe(1);
  expect(result[0].id).toBe(2);
});
