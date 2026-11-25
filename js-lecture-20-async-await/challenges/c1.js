/*
C1 - Async Retry with Backoff

Instructions:
- Create an async function called retryWithBackoff
- It takes fn (a function returning a promise) and maxRetries (number) as parameters
- On each failure, wait longer before retrying: 100ms, 200ms, 400ms (doubling each time)
- If all retries fail, throw the last error
- Use setTimeout wrapped in a promise for the delay
*/

async function retryWithBackoff(fn, maxRetries) {
  // write your code here
}

module.exports = retryWithBackoff;
