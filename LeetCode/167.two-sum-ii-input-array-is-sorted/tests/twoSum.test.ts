import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { twoSum } from "../src/twoSum.js";

type TestCase = {
  numbers: number[];
  target: number;
  expected: number[];
  reason: string;
};

const testCases: TestCase[] = [
  {
    numbers: [2, 7, 11, 15],
    target: 9,
    expected: [1, 2],
    reason: "the official first example"
  },
  {
    numbers: [2, 3, 4],
    target: 6,
    expected: [1, 3],
    reason: "the official second example"
  },
  {
    numbers: [-1, 0],
    target: -1,
    expected: [1, 2],
    reason: "the official third example, the minimum-length array with negative numbers"
  },
  {
    numbers: [1, 2, 3, 4, 4, 9, 56, 90],
    target: 8,
    expected: [4, 5],
    reason: "duplicate values are the only pair that reaches the target"
  },
  {
    numbers: [-5, -2, 0, 3, 8],
    target: 1,
    expected: [2, 4],
    reason: "a negative and a positive number summing to a small positive target"
  },
  {
    numbers: [-10, -3, 2, 8, 15, 25],
    target: -2,
    expected: [1, 4],
    reason: "the matching pair sits in the middle of the array, not at either end"
  },
  {
    numbers: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29],
    target: 48,
    expected: [8, 10],
    reason: "a larger sorted array where only the two largest matching values work"
  },
  {
    numbers: [-4, -1, 0, 3, 10],
    target: -5,
    expected: [1, 2],
    reason: "the two smallest, most-negative numbers are the matching pair"
  },
  {
    numbers: [1, 4],
    target: 5,
    expected: [1, 2],
    reason: "the minimum-length array allowed by the constraints"
  },
  {
    numbers: [-9, -1],
    target: -10,
    expected: [1, 2],
    reason: "a minimum-length array of all-negative numbers"
  },
  {
    numbers: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512],
    target: 513,
    expected: [1, 10],
    reason: "the matching pair spans the full width of the array"
  },
  {
    numbers: [-1000, -999, 500, 999, 1000],
    target: -1999,
    expected: [1, 2],
    reason: "values at the extreme edges of the allowed constraint range"
  },
  {
    numbers: [1, 2, 3],
    target: 4,
    expected: [1, 3],
    reason: "a minimal three-element array where the pair is not adjacent"
  },
  {
    numbers: Array.from({ length: 30000 }, (_, i) => i + 1),
    target: 59999,
    expected: [29999, 30000],
    reason: "the maximum array length allowed by the constraints still resolves correctly"
  },
  {
    numbers: [-6, -4, -1, 2, 5, 9, 13],
    target: -2,
    expected: [2, 4],
    reason: "the two-pointer walk must converge past several non-matching pairs first"
  }
];

describe("twoSum", () => {
  for (const { numbers, target, expected, reason } of testCases) {
    it(`${reason}: numbers=${JSON.stringify(numbers.length > 20 ? `[${numbers.length} items]` : numbers)}, target=${target}`, () => {
      const result = twoSum(numbers, target);
      assert.deepEqual(result, expected);
    });
  }
});
