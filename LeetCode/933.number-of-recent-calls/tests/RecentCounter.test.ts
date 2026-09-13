import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { RecentCounter } from "../src/RecentCounter.js";

type TestCase = {
  pings: number[];
  expected: number[];
  reason: string;
};

const testCases: TestCase[] = [
  {
    pings: [1, 100, 3001, 3002],
    expected: [1, 2, 3, 3],
    reason: "the official example, where the first ping falls out of range once t reaches 3002"
  },
  {
    pings: [1, 2, 3],
    expected: [1, 2, 3],
    reason: "every ping so far is within the first 3000ms window, so nothing expires yet"
  },
  {
    pings: [1, 5000, 10000],
    expected: [1, 1, 1],
    reason: "each ping arrives more than 3000ms after the previous one, so only itself counts"
  },
  {
    pings: [1, 3001],
    expected: [1, 2],
    reason: "a ping exactly 3000ms after a previous one still counts, since the window is inclusive"
  },
  {
    pings: [1, 3002],
    expected: [1, 1],
    reason: "a ping 3001ms after a previous one pushes it just outside the inclusive window"
  },
  {
    pings: [1, 2, 3, 3000, 3001, 3002, 6002],
    expected: [1, 2, 3, 4, 5, 5, 2],
    reason: "a longer sequence where the window grows and then sheds old requests as time moves on"
  }
];

describe("RecentCounter", () => {
  for (const { pings, expected, reason } of testCases) {
    it(`${reason}: pings=${JSON.stringify(pings)}`, () => {
      const recentCounter = new RecentCounter();
      const actual = pings.map((t) => recentCounter.ping(t));
      assert.deepEqual(actual, expected);
    });
  }
});
