const rejectWith = require("../challenges/e2");

test("rejects with given message", async () => {
  await expect(rejectWith("error msg")).rejects.toBe("error msg");
});
