# 121. Best Time to Buy and Sell Stock

**Difficulty:** Easy
**Topics:** Array, Dynamic Programming

## Description

You are given an array `prices` where `prices[i]` is the price of a given stock on the `i`th day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return `0`.

```ts
function maxProfit(prices: number[]): number
```

## Examples

### Example 1

```text
Input: prices = [7,1,5,3,6,4]
Output: 5
```

Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 - 1 = 5. Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

### Example 2

```text
Input: prices = [7,6,4,3,1]
Output: 0
```

Explanation: In this case, no transactions are done and the max profit is 0.

## Constraints

- `1 <= prices.length <= 10^5`
- `0 <= prices[i] <= 10^4`

## Running locally

Install the dependencies once:

```bash
npm install
```

Run the tests:

```bash
npm test
```

Keep the tests running while you work:

```bash
npm run test:watch
```

Check the TypeScript types:

```bash
npm run typecheck
```

## Your challenge

Complete `maxProfit` in `src/maxProfit.ts`. The suite in `tests/maxProfit.test.ts` contains several test cases, starting with the two official LeetCode examples. The starter implementation deliberately always returns `0`, so most tests will fail until your solution is correct.

<details>
<summary>Hint</summary>

Walk the array once while tracking the lowest price seen so far. At each day, compute the profit you would make by selling today (`price - lowestSoFar`) and keep the best one seen. Update the lowest price whenever today's price is smaller than it. No need to look ahead or try every pair of days.

</details>

## Expected complexity

- Time: `O(n)`
- Auxiliary space: `O(1)`
