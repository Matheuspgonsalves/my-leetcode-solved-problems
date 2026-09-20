import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { maxProfit } from "../src/maxProfit.js";

type TestCase = {
  prices: number[];
  expected: number;
  reason: string;
};

const testCases: TestCase[] = [
  {
    prices: [7, 1, 5, 3, 6, 4],
    expected: 5,
    reason: "the first official example: buy at 1, sell at 6"
  },
  {
    prices: [7, 6, 4, 3, 1],
    expected: 0,
    reason: "the second official example: prices only fall, so no transaction is profitable"
  },
  {
    prices: [5],
    expected: 0,
    reason: "a single day gives no later day to sell on"
  },
  {
    prices: [1, 2],
    expected: 1,
    reason: "two days, price rises, so the only possible transaction is the best one"
  },
  {
    prices: [2, 1],
    expected: 0,
    reason: "two days, price falls, so no transaction is profitable"
  },
  {
    prices: [3, 3, 3, 3],
    expected: 0,
    reason: "a flat price line yields zero profit no matter which days are chosen"
  },
  {
    prices: [9, 1, 2, 3, 4, 90],
    expected: 89,
    reason: "an early dip followed by a late spike gives the largest possible spread"
  },
  {
    prices: [1, 10, 2, 9],
    expected: 9,
    reason: "an earlier low paired with an earlier high beats a later, smaller rebound"
  },
  {
    prices: [5, 4, 3, 2, 1, 2, 3, 4, 5, 100],
    expected: 99,
    reason: "a V-shaped dip followed by a big spike at the very end"
  },
  {
    prices: [0, 0, 0, 5],
    expected: 5,
    reason: "zero prices are allowed by the constraints and still count as a valid buy day"
  },
  {
    prices: [10, 9, 8, 1, 2],
    expected: 1,
    reason: "a long decline followed by only a tiny recovery still counts as profit"
  },
  {
    prices: [3, 8, 1, 9],
    expected: 8,
    reason: "a lower low that appears later in the array beats an earlier, smaller dip"
  },
  {
    prices: [1, 2, 3, 4, 5],
    expected: 4,
    reason: "a strictly increasing price line: buy on the first day, sell on the last"
  },
  {
    prices: [9, 8, 7, 6, 5, 4, 3, 2, 1],
    expected: 0,
    reason: "a longer strictly decreasing price line still yields zero profit"
  }
];

describe("maxProfit", () => {
  for (const { prices, expected, reason } of testCases) {
    it(`${reason}: prices=${JSON.stringify(prices)}`, () => {
      assert.equal(maxProfit(prices), expected);
    });
  }
});
