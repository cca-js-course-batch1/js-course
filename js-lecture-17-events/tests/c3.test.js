const createDebounceTracker = require("../challenges/c3");

test("getLastCall returns null before any call", () => {
  const tracker = createDebounceTracker();
  expect(tracker.getLastCall("btn")).toBeNull();
});

test("track records the call", () => {
  const tracker = createDebounceTracker();
  tracker.track("btn");
  expect(tracker.getLastCall("btn")).not.toBeNull();
});

test("hasCalledRecently returns true right after tracking", () => {
  const tracker = createDebounceTracker();
  tracker.track("btn");
  expect(tracker.hasCalledRecently("btn", 1000)).toBe(true);
});
