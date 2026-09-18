# 704. Binary Search

**Difficulty:** Easy
**Topics:** Array, Binary Search

## Description

Given an array of integers `nums` which is sorted in ascending order, and an integer `target`, write a function to search `target` in `nums`. If `target` exists, then return its index. Otherwise, return `-1`.

You must write an algorithm with `O(log n)` runtime complexity.

```ts
function search(nums: number[], target: number): number
```

## Examples

### Example 1

```text
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
```

Explanation: 9 exists in `nums` and its index is 4.

### Example 2

```text
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
```

Explanation: 2 does not exist in `nums`, so `-1` is returned.

## Constraints

- `1 <= nums.length <= 10^4`
- `-10^4 < nums[i], target < 10^4`
- All the integers in `nums` are unique.
- `nums` is sorted in ascending order.

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

Complete `search` in `src/search.ts`. The suite in `tests/search.test.ts` contains several test cases, starting with the two official LeetCode examples. The starter implementation deliberately always returns `-1`, so most tests will fail until your solution is correct.

<details>
<summary>Hint</summary>

Keep two pointers, `left` and `right`, spanning the whole array. While `left <= right`, look at the middle index between them. If `nums[mid]` equals the target, return `mid`. If it's smaller than the target, discard the left half by moving `left` past `mid`; otherwise discard the right half by moving `right` before `mid`. If the pointers cross without a match, the target isn't in the array.

</details>

## Expected complexity

- Time: `O(log n)`
- Auxiliary space: `O(1)`
