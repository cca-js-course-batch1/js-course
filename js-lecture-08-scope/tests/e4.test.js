const getInitials = require("../challenges/e4");

test("returns initials in uppercase", () => {
  expect(getInitials("ali", "khan")).toBe("A.K");
});

test("works with uppercase input", () => {
  expect(getInitials("Sara", "Ahmed")).toBe("S.A");
});
