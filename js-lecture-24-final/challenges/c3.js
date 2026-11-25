/*
C3 - Mini Test Runner

Instructions:
- Create a function called createTestRunner
- It takes no parameters
- Return an object with:
  - test(description, fn): runs fn inside a try/catch
    If fn does not throw, mark as passed
    If fn throws, mark as failed with the error message
  - expect(actual).toBe(expected): throws an Error if actual !== expected
  - getSummary(): returns { passed, failed, total, results: [{description, status, error}] }
*/

function createTestRunner() {
  // write your code here
}

module.exports = createTestRunner;
