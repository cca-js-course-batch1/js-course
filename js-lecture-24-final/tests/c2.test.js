const createStore = require("../challenges/c2");

test("get returns initial value", () => {
  const store = createStore({ count: 0 });
  expect(store.get("count")).toBe(0);
});

test("set updates the value", () => {
  const store = createStore({ count: 0 });
  store.set("count", 5);
  expect(store.get("count")).toBe(5);
});

test("subscriber is called when value changes", () => {
  const store = createStore({ count: 0 });
  let received = null;
  store.subscribe("count", val => { received = val; });
  store.set("count", 10);
  expect(received).toBe(10);
});
