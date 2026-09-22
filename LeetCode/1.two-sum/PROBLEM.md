# 1. Two Sum

**Difficulty:** Easy
**Topics:** Array, Hash Table

## Description

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

You may assume that each input would have **exactly one solution**, and you may not use the same element twice.

You can return the answer in any order.

```ts
function twoSum(nums: number[], target: number): number[]
```

## Examples

### Example 1

```text
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
```

Explanation: Because `nums[0] + nums[1] == 9`, we return `[0, 1]`.

### Example 2

```text
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

### Example 3

```text
Input: nums = [3,3], target = 6
Output: [0,1]
```

## Constraints

- `2 <= nums.length <= 10^4`
- `-10^9 <= nums[i] <= 10^9`
- `-10^9 <= target <= 10^9`
- Only one valid answer exists.

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

Complete `twoSum` in `src/twoSum.ts`. The suite in `tests/twoSum.test.ts` calls `twoSum` with different arrays and targets and compares the returned pair of indices (sorted, since the answer may come back in any order) against the expected pair. The starter implementation deliberately throws, so every test will fail until your solution is in place.

<details>
<summary>Hint</summary>

A brute-force check of every pair is `O(n^2)`. To do better, walk the array once while keeping a hash map from value seen so far to its index. At each element, check whether `target - nums[i]` is already a key in the map before adding the current value — if it is, you've found your pair.

</details>

## Expected complexity

- Time: `O(n)`
- Auxiliary space: `O(n)`
