import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { search } from "../src/search.js";

type TestCase = {
  nums: number[];
  target: number;
  expected: number;
  reason: string;
};

const testCases: TestCase[] = [
  {
    nums: [-1, 0, 3, 5, 9, 12],
    target: 9,
    expected: 4,
    reason: "the first official example, where the target is present"
  },
  {
    nums: [-1, 0, 3, 5, 9, 12],
    target: 2,
    expected: -1,
    reason: "the second official example, where the target is absent"
  },
  {
    nums: [5],
    target: 5,
    expected: 0,
    reason: "a single-element array where the target is the only element"
  },
  {
    nums: [5],
    target: -5,
    expected: -1,
    reason: "a single-element array where the target is not present"
  },
  {
    nums: [-1, 0, 3, 5, 9, 12],
    target: -1,
    expected: 0,
    reason: "the target sits at the very first index"
  },
  {
    nums: [-1, 0, 3, 5, 9, 12],
    target: 12,
    expected: 5,
    reason: "the target sits at the very last index"
  },
  {
    nums: [-1, 0, 3, 5, 9, 12],
    target: -2,
    expected: -1,
    reason: "the target is smaller than every element in the array"
  },
  {
    nums: [-1, 0, 3, 5, 9, 12],
    target: 13,
    expected: -1,
    reason: "the target is larger than every element in the array"
  },
  {
    nums: [2, 5],
    target: 5,
    expected: 1,
    reason: "a two-element array where the target is the second element"
  },
  {
    nums: [2, 5],
    target: 3,
    expected: -1,
    reason: "a two-element array where the target falls between the two values"
  },
  {
    nums: [-9999, -50, 0, 50, 9999],
    target: -50,
    expected: 1,
    reason: "negative and positive values are mixed, and the target is negative"
  },
  {
    nums: Array.from({ length: 100 }, (_, i) => i * 2),
    target: 150,
    expected: 75,
    reason: "a larger sorted array exercises several rounds of halving before landing on the target"
  },
  {
    nums: Array.from({ length: 100 }, (_, i) => i * 2),
    target: 151,
    expected: -1,
    reason: "a larger sorted array where the target falls between two consecutive even values"
  }
];

describe("search", () => {
  for (const { nums, target, expected, reason } of testCases) {
    it(`${reason}: nums=${JSON.stringify(nums.length <= 10 ? nums : `[${nums.length} items]`)}, target=${target}`, () => {
      assert.equal(search(nums, target), expected);
    });
  }
});
