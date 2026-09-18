# 278. First Bad Version

**Difficulty:** Easy
**Topics:** Binary Search, Interactive

## Description

You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have `n` versions `[1, 2, ..., n]` and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API `isBadVersion(version)` which returns whether `version` is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

```ts
function solution(isBadVersion: (version: number) => boolean) {
  return function (n: number): number {
    // returns the first bad version
  };
}
```

## Examples

### Example 1

```text
Input: n = 5, bad = 4
Output: 4
```

Explanation:

```text
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.
```

### Example 2

```text
Input: n = 1, bad = 1
Output: 1
```

## Constraints

- `1 <= bad <= n <= 2^31 - 1`

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

Complete the inner function returned by `solution` in `src/solution.ts`. The suite in `tests/solution.test.ts` builds a fake `isBadVersion` for a chosen `bad` version and checks that your implementation finds it, starting with the two official LeetCode examples. Some tests also count how many times `isBadVersion` gets called and fail if that count is too high, since a linear scan would technically find the right answer but defeats the point of the exercise. The starter implementation deliberately always returns `1`, so most tests will fail until your solution is correct.

<details>
<summary>Hint</summary>

Binary search over the version range `[1, n]`. Keep `left = 1` and `right = n`. While `left < right`, check the midpoint: if `isBadVersion(mid)` is true, the first bad version is `mid` or something before it, so move `right = mid`; otherwise it's after `mid`, so move `left = mid + 1`. When `left === right`, that's the first bad version. Avoid `Math.floor((left + right) / 2)` for very large `n` — prefer `left + Math.floor((right - left) / 2)` to sidestep overflow-style bugs.

</details>

## Expected complexity

- Time: `O(log n)` calls to `isBadVersion`
- Auxiliary space: `O(1)`
