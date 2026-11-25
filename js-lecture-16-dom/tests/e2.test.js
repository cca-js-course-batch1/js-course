const buildListData = require("../challenges/e2");

test("converts strings to objects with text property", () => {
  expect(buildListData(["milk", "eggs"])).toEqual([{ text: "milk" }, { text: "eggs" }]);
});
