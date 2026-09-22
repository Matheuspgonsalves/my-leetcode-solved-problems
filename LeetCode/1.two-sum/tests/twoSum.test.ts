import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { twoSum } from "../src/twoSum.js";

type TestCase = {
  nums: number[];
  target: number;
  expected: number[];
  reason: string;
};

const testCases: TestCase[] = [
  {
    nums: [2, 7, 11, 15],
    target: 9,
    expected: [0, 1],
    reason: "the official first example"
  },
  {
    nums: [3, 2, 4],
    target: 6,
    expected: [1, 2],
    reason: "the official second example"
  },
  {
    nums: [3, 3],
    target: 6,
    expected: [0, 1],
    reason: "the official third example, duplicate values summing to the target"
  },
  {
    nums: [1, 2, 3, 4, 5],
    target: 9,
    expected: [3, 4],
    reason: "the matching pair sits at the end of the array"
  },
  {
    nums: [1, 5, 3, 7, 9, 2],
    target: 11,
    expected: [4, 5],
    reason: "unsorted values where the pair is not adjacent in value order"
  },
  {
    nums: [-3, 4, 3, 90],
    target: 0,
    expected: [0, 2],
    reason: "a negative and a positive number summing to zero"
  },
  {
    nums: [-1, -2, -3, -4, -5],
    target: -8,
    expected: [2, 4],
    reason: "an all-negative array with a negative target"
  },
  {
    nums: [0, 4, 3, 0],
    target: 0,
    expected: [0, 3],
    reason: "two zeros summing to a zero target"
  },
  {
    nums: [1, 2],
    target: 3,
    expected: [0, 1],
    reason: "the minimum-length array allowed by the constraints"
  },
  {
    nums: [8, 2, 7, 11, 15],
    target: 9,
    expected: [1, 2],
    reason: "the matching pair sits in the middle of the array, not at the boundaries"
  },
  {
    nums: [10, 20, 30, 40, 50],
    target: 90,
    expected: [3, 4],
    reason: "larger values whose matching pair is the last two elements"
  },
  {
    nums: [-5, 5],
    target: 0,
    expected: [0, 1],
    reason: "a two-element array of opposite signs"
  },
  {
    nums: [4, 15, 7, 20, 1, 9],
    target: 21,
    expected: [3, 4],
    reason: "unsorted values with no arithmetic pattern to lean on"
  },
  {
    nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    target: 19,
    expected: [8, 9],
    reason: "sequential values where only the two largest numbers reach the target"
  },
  {
    nums: Array.from({ length: 100 }, (_, i) => i + 1),
    target: 199,
    expected: [98, 99],
    reason: "a large 100-element input still resolves correctly and efficiently"
  }
];

describe("twoSum", () => {
  for (const { nums, target, expected, reason } of testCases) {
    it(`${reason}: nums=${JSON.stringify(nums.length > 20 ? `[${nums.length} items]` : nums)}, target=${target}`, () => {
      const result = twoSum(nums, target);
      assert.deepEqual([...result].sort((a, b) => a - b), [...expected].sort((a, b) => a - b));
    });
  }
});
