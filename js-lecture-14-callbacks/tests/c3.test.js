const createEmitter = require("../challenges/c3");

test("on and emit work together", () => {
  const emitter = createEmitter();
  let received = null;
  emitter.on("data", d => { received = d; });
  emitter.emit("data", 42);
  expect(received).toBe(42);
});

test("off removes listeners", () => {
  const emitter = createEmitter();
  let count = 0;
  emitter.on("click", () => count++);
  emitter.off("click");
  emitter.emit("click");
  expect(count).toBe(0);
});
