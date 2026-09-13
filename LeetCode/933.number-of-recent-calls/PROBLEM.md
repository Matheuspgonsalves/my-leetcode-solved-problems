# 933. Number of Recent Calls

**Difficulty:** Easy
**Topics:** Design, Queue, Data Stream

## Description

You have a `RecentCounter` class which counts the number of recent requests within a certain time frame.

Implement the `RecentCounter` class:

- `RecentCounter()` Initializes the counter with zero recent requests.
- `int ping(int t)` Adds a new request at time `t`, where `t` represents some time in milliseconds, and returns the number of requests that has happened in the past `3000` milliseconds (including the new request). Specifically, return the number of requests that have happened in the inclusive range `[t - 3000, t]`.

It is guaranteed that every call to `ping` uses a strictly larger value of `t` than the previous call.

```ts
class RecentCounter {
  ping(t: number): number;
}
```

## Examples

### Example 1

```text
Input
["RecentCounter", "ping", "ping", "ping", "ping"]
[[], [1], [100], [3001], [3002]]

Output
[null, 1, 2, 3, 3]
```

Explanation:

```text
RecentCounter recentCounter = new RecentCounter();
recentCounter.ping(1);    // requests = [1], range is [-2999,1], return 1
recentCounter.ping(100);  // requests = [1, 100], range is [-2900,100], return 2
recentCounter.ping(3001); // requests = [1, 100, 3001], range is [1,3001], return 3
recentCounter.ping(3002); // requests = [1, 100, 3001, 3002], range is [2,3002], return 3
```

## Constraints

- `1 <= t <= 10^9`
- Each test case will call `ping` with strictly increasing values of `t`.
- At most `10^4` calls will be made to `ping`.

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

Complete `RecentCounter` in `src/RecentCounter.ts`. The suite in `tests/RecentCounter.test.ts` contains several test cases. The starter implementation deliberately counts every request ever made instead of only the ones inside the sliding window, so most tests will fail until your solution is correct.

<details>
<summary>Hint</summary>

Keep a queue of the request timestamps in the order they arrive. On each `ping(t)`, push `t` onto the back of the queue, then pop timestamps off the front while they are smaller than `t - 3000`. The queue's length after that cleanup is the answer.

</details>

## Expected complexity

- Time: `O(1)` amortized per call to `ping`
- Auxiliary space: `O(n)`, where `n` is the number of requests currently inside the 3000ms window
