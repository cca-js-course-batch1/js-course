const findChanges = require("../challenges/c2");

test("detects text change", () => {
  const result = findChanges({ text: "old", classes: [] }, { text: "new", classes: [] });
  expect(result.textChanged).toBe(true);
});

test("detects no text change", () => {
  const result = findChanges({ text: "same", classes: [] }, { text: "same", classes: [] });
  expect(result.textChanged).toBe(false);
});

test("detects added classes", () => {
  const result = findChanges({ text: "", classes: ["a"] }, { text: "", classes: ["a", "b"] });
  expect(result.addedClasses).toEqual(["b"]);
});

test("detects removed classes", () => {
  const result = findChanges({ text: "", classes: ["a", "b"] }, { text: "", classes: ["a"] });
  expect(result.removedClasses).toEqual(["b"]);
});
