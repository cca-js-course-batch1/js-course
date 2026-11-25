const createApiClient = require("../challenges/c1");

test("get returns correct url", () => {
  const client = createApiClient("https://api.example.com");
  expect(client.get("/users").url).toBe("https://api.example.com/users");
});

test("get returns GET method", () => {
  const client = createApiClient("https://api.example.com");
  expect(client.get("/users").method).toBe("GET");
});

test("post returns POST method with body", () => {
  const client = createApiClient("https://api.example.com");
  const options = client.post("/users", { name: "Ali" });
  expect(options.method).toBe("POST");
  expect(options.body).toBe(JSON.stringify({ name: "Ali" }));
});
