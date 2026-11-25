const searchItems = require("../challenges/c1");

const items = [
  { title: "JavaScript Guide", tags: ["js", "beginner"] },
  { title: "Python Basics", tags: ["python"] },
  { title: "Advanced JS", tags: ["js", "advanced"] }
];

test("finds by title", () => {
  expect(searchItems(items, "python").length).toBe(1);
});

test("finds by tag", () => {
  expect(searchItems(items, "js").length).toBe(2);
});

test("search is case-insensitive", () => {
  expect(searchItems(items, "PYTHON").length).toBe(1);
});
