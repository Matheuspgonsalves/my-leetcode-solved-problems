import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { solution } from "../src/solution.js";

function makeCountingIsBadVersion(bad: number): {
  isBadVersion: (version: number) => boolean;
  getCallCount: () => number;
} {
  let calls = 0;

  return {
    isBadVersion: (version: number) => {
      calls++;
      return version >= bad;
    },
    getCallCount: () => calls
  };
}

type TestCase = {
  n: number;
  bad: number;
  reason: string;
  maxCalls?: number;
};

const testCases: TestCase[] = [
  {
    n: 5,
    bad: 4,
    reason: "the first official example"
  },
  {
    n: 1,
    bad: 1,
    reason: "the second official example: a single version, and it is bad"
  },
  {
    n: 10,
    bad: 1,
    reason: "the very first version is already bad, so every version is bad"
  },
  {
    n: 10,
    bad: 10,
    reason: "only the very last version is bad"
  },
  {
    n: 10,
    bad: 5,
    reason: "the bad version sits right in the middle of the range"
  },
  {
    n: 2,
    bad: 1,
    reason: "the smallest range with more than one version, bad is the first one"
  },
  {
    n: 2,
    bad: 2,
    reason: "the smallest range with more than one version, bad is the last one"
  },
  {
    n: 1000,
    bad: 3,
    reason: "a large range where the bad version is near the start",
    maxCalls: 12
  },
  {
    n: 1000,
    bad: 997,
    reason: "a large range where the bad version is near the end",
    maxCalls: 12
  },
  {
    n: 1000,
    bad: 500,
    reason: "a large range where the bad version sits near the middle",
    maxCalls: 12
  },
  {
    n: 100000,
    bad: 42,
    reason: "a very large range, where a linear scan would take tens of thousands of calls",
    maxCalls: 19
  }
];

describe("solution", () => {
  for (const { n, bad, reason, maxCalls } of testCases) {
    it(`${reason}: n=${n}, bad=${bad}`, () => {
      const { isBadVersion, getCallCount } = makeCountingIsBadVersion(bad);
      const firstBadVersion = solution(isBadVersion);

      const result = firstBadVersion(n);

      assert.equal(result, bad);

      if (maxCalls !== undefined) {
        assert.ok(
          getCallCount() <= maxCalls,
          `expected at most ${maxCalls} calls to isBadVersion, but got ${getCallCount()} — a linear scan is too slow here`
        );
      }
    });
  }
});
