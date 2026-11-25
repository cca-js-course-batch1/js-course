/*
C2 - Retry Promise

Instructions:
- Create a function called retryPromise
- It takes a function fn (returns a promise) and a number times as parameters
- Try calling fn() up to times attempts
- If it resolves, return the value
- If it rejects every time, reject with the last error
- Use async/await and a loop
*/

async function retryPromise(fn, times) {
  // write your code here
}

module.exports = retryPromise;
