# 167. Two Sum II - Input Array Is Sorted

**Difficulty:** Medium
**Topics:** Array, Two Pointers, Binary Search

## Description

Given a **1-indexed** array of integers `numbers` that is already sorted in non-decreasing order, find two numbers such that they add up to a specific `target` number. Let these two numbers be `numbers[index1]` and `numbers[index2]` where `1 <= index1 < index2 <= numbers.length`.

Return the indices of the two numbers, `index1` and `index2`, **added by one** as an integer array `[index1, index2]` of length 2.

The tests are generated such that there is **exactly one solution**. You may not use the same element twice.

Your solution must use only constant extra space.

```ts
function twoSum(numbers: number[], target: number): number[]
```

## Examples

### Example 1

```text
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
```

Explanation: `numbers[0] + numbers[1] == 9`, so `index1 = 1, index2 = 2`.

### Example 2

```text
Input: numbers = [2,3,4], target = 6
Output: [1,3]
```

### Example 3

```text
Input: numbers = [-1,0], target = -1
Output: [1,2]
```

## Constraints

- `2 <= numbers.length <= 3 * 10^4`
- `-1000 <= numbers[i] <= 1000`
- `numbers` is sorted in **non-decreasing order**.
- `-1000 <= target <= 1000`
- The tests are generated such that there is **exactly one solution**.

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

Complete `twoSum` in `src/twoSum.ts`. The suite in `tests/twoSum.test.ts` calls `twoSum` with different sorted arrays and targets and compares the returned 1-indexed pair against the expected pair. The starter implementation deliberately throws, so every test will fail until your solution is in place.

<details>
<summary>Hint</summary>

Since the array is already sorted, a hash map isn't necessary and would violate the constant-space requirement anyway. Use two pointers, one starting at the beginning and one at the end. If the sum of the two pointed-at values is too small, move the left pointer right; if it's too large, move the right pointer left; if it matches, you're done. Don't forget to add 1 to each 0-indexed position before returning.

</details>

## Expected complexity

- Time: `O(n)`
- Auxiliary space: `O(1)`
