/*
C1 - Promise Race with Timeout

Instructions:
- Create a function called withTimeout
- It takes a promise and a number ms as parameters
- Return a new promise that:
  - Resolves with the original promise's value if it finishes before ms milliseconds
  - Rejects with the message "Timed out" if ms milliseconds pass first
- Use Promise.race
*/

function withTimeout(promise, ms) {
  // write your code here
}

module.exports = withTimeout;
