const passOrFail = require("../challenges/e1");

test("returns Pass for 50", () => {
  expect(passOrFail(50)).toBe("Pass");
});

test("returns Pass for 90", () => {
  expect(passOrFail(90)).toBe("Pass");
});

test("returns Fail for 49", () => {
  expect(passOrFail(49)).toBe("Fail");
});
