import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { makeGood } from "../src/makeGood.js";

type TestCase = {
  s: string;
  expected: string;
  reason: string;
};

const testCases: TestCase[] = [
  { s: "leEeetcode", expected: "leetcode", reason: "removing either adjacent \"Ee\" pair reduces to \"leetcode\"" },
  { s: "abBAcC", expected: "", reason: "cascading removals of same-letter, opposite-case pairs empty the string" },
  { s: "s", expected: "s", reason: "a single character has no adjacent pair to remove" },
  { s: "abc", expected: "abc", reason: "no two adjacent letters are the same letter, so nothing is removed" },
  { s: "Aa", expected: "", reason: "the same letter in opposite cases cancels out" },
  { s: "aA", expected: "", reason: "order of the case pair does not matter, it still cancels" },
  { s: "aa", expected: "aa", reason: "same letter and same case is not a bad pair, so it stays" },
  { s: "AA", expected: "AA", reason: "same letter and same case is not a bad pair, even in upper case" },
  { s: "AbBa", expected: "", reason: "removing the inner \"bB\" pair exposes a new \"Aa\" pair that also cancels" },
  { s: "AaAa", expected: "", reason: "repeated opposite-case pairs cancel left to right until nothing remains" }
];

describe("makeGood", () => {
  for (const { s, expected, reason } of testCases) {
    it(`${reason}: s=${JSON.stringify(s)}`, () => {
      assert.equal(makeGood(s), expected);
    });
  }
});
