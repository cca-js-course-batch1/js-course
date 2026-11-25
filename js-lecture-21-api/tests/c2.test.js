const handleResponse = require("../challenges/c2");

test("returns parsed data when ok", async () => {
  const fetchFn = async () => ({ ok: true, status: 200, json: async () => ({ name: "Ali" }) });
  const result = await handleResponse(fetchFn);
  expect(result).toEqual({ name: "Ali" });
});

test("throws HTTP Error when not ok", async () => {
  const fetchFn = async () => ({ ok: false, status: 404, json: async () => ({}) });
  await expect(handleResponse(fetchFn)).rejects.toThrow("HTTP Error: 404");
});
