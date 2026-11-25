const runWithMessage = require("../challenges/e1");

test("calls callback with correct message", () => {
  let received = "";
  runWithMessage("Ali", msg => { received = msg; });
  expect(received).toBe("Hello, Ali");
});
