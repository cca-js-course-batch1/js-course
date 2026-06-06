const createUser = require("../challenges/e2");

test("returns an object", () => {
  const result = createUser();
  expect(typeof result).toBe("object");
});

test("has a name property that is a string", () => {
  const result = createUser();
  expect(typeof result.name).toBe("string");
});

test("has an age property that is a number", () => {
  const result = createUser();
  expect(typeof result.age).toBe("number");
});

test("has an isStudent property that is a boolean", () => {
  const result = createUser();
  expect(typeof result.isStudent).toBe("boolean");
});
