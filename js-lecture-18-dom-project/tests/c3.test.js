const createStateManager = require("../challenges/c3");

test("getState returns initial state", () => {
  const sm = createStateManager({ count: 0 });
  expect(sm.getState().count).toBe(0);
});

test("setState updates state", () => {
  const sm = createStateManager({ count: 0 });
  sm.setState({ count: 5 });
  expect(sm.getState().count).toBe(5);
});

test("subscriber is called on state change", () => {
  const sm = createStateManager({ count: 0 });
  let called = false;
  sm.subscribe((newState) => { called = true; });
  sm.setState({ count: 1 });
  expect(called).toBe(true);
});
