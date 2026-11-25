/*
C3 - Configurable Discount

Instructions:
- Create a function called makeDiscountCalc
- It takes a discountPercent (number) as a parameter
- Return a function that takes a price and returns the discounted price
- Also allow an optional extra reduction when calling the returned function
- The returned function takes price and extraReduction (default 0)
- Formula: price - (price * discountPercent / 100) - extraReduction
- Example:
    const tenOff = makeDiscountCalc(10)
    tenOff(200)      // 180
    tenOff(200, 20)  // 160
*/

function makeDiscountCalc(discountPercent) {
  // write your code here
}

module.exports = makeDiscountCalc;
