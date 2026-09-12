import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { backspaceCompare } from "../src/backspaceCompare.js";

type TestCase = {
  s: string;
  t: string;
  expected: boolean;
  reason: string;
};

const testCases: TestCase[] = [
  { s: "ab#c", t: "ad#c", expected: true, reason: "both strings simplify to \"ac\"" },
  { s: "ab##", t: "c#d#", expected: true, reason: "both strings simplify to an empty string" },
  { s: "a#c", t: "b", expected: false, reason: "different resulting text" },
  { s: "a##c", t: "#a#c", expected: true, reason: "leading and stacked backspaces still match" },
  { s: "a#c", t: "b#c", expected: true, reason: "different backspaced letters can still leave equal text" },
  { s: "bxj##tw", t: "bxo#j##tw", expected: true, reason: "extra backspaced letters do not change the outcome" },
  { s: "bxj##tw", t: "bxj###tw", expected: false, reason: "one extra backspace removes a needed letter" },
  { s: "xywrrmp", t: "xywrrmu#p", expected: true, reason: "a backspaced letter in the middle cancels out" },
  { s: "xywrrmp", t: "xywrrmp#", expected: false, reason: "a trailing backspace removes the last letter" },
  { s: "#", t: "#", expected: true, reason: "a lone backspace on an empty text stays empty on both sides" },
  { s: "####", t: "#", expected: true, reason: "extra backspaces on already-empty text are no-ops" },
  { s: "a", t: "a", expected: true, reason: "identical strings with no backspaces" },
  { s: "a", t: "a#", expected: false, reason: "a single trailing backspace clears the only letter" },
  {
    s: "a".repeat(100) + "#".repeat(100),
    t: "#",
    expected: true,
    reason: "a long sequence that fully backspaces itself matches an empty result"
  }
];

describe("backspaceCompare", () => {
  for (const { s, t, expected, reason } of testCases) {
    it(`${reason}: s=${JSON.stringify(truncate(s))}, t=${JSON.stringify(truncate(t))}`, () => {
      assert.equal(backspaceCompare(s, t), expected);
    });
  }
});

function truncate(value: string): string {
  return value.length <= 40 ? value : `${value.slice(0, 37)}...`;
}
