import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { removeDuplicates } from "../src/removeDuplicates.js";

type TestCase = {
  s: string;
  expected: string;
  reason: string;
};

const testCases: TestCase[] = [
  { s: "abbaca", expected: "ca", reason: "removing \"bb\" then \"aa\" leaves \"ca\"" },
  { s: "azxxzy", expected: "ay", reason: "removing \"xx\" then \"zz\" leaves \"ay\"" },
  { s: "a", expected: "a", reason: "a single character has nothing to remove" },
  { s: "aa", expected: "", reason: "a single adjacent pair cancels out completely" },
  { s: "abccba", expected: "", reason: "nested pairs cancel from the inside out until nothing remains" },
  { s: "aabbcc", expected: "", reason: "every letter appears as its own adjacent pair" },
  { s: "abcabc", expected: "abcabc", reason: "no adjacent letters are equal, so nothing is removed" },
  { s: "aaaaaaaa", expected: "", reason: "an even run of the same letter fully cancels" },
  { s: "aaaaaaaaa", expected: "a", reason: "an odd run of the same letter leaves one letter behind" },
  { s: "abba", expected: "", reason: "removing the inner pair exposes a new pair that also cancels" }
];

describe("removeDuplicates", () => {
  for (const { s, expected, reason } of testCases) {
    it(`${reason}: s=${JSON.stringify(s)}`, () => {
      assert.equal(removeDuplicates(s), expected);
    });
  }
});
