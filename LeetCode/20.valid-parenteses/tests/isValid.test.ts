import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { isValid } from "../src/isValid.js";

type TestCase = {
  input: string;
  expected: boolean;
  reason: string;
};

const testCases: TestCase[] = [
  { input: "()", expected: true, reason: "one pair of parentheses" },
  { input: "[]", expected: true, reason: "one pair of square brackets" },
  { input: "{}", expected: true, reason: "one pair of braces" },
  { input: "()[]{}", expected: true, reason: "consecutive pairs" },
  { input: "([{}])", expected: true, reason: "three nested bracket types" },
  { input: "{[]}", expected: true, reason: "square brackets inside braces" },
  { input: "(()())", expected: true, reason: "nested and consecutive parentheses" },
  { input: "((()))", expected: true, reason: "same-type nesting" },
  { input: "([]{})", expected: true, reason: "different pairs inside parentheses" },
  { input: "{}[()]", expected: true, reason: "consecutive and nested groups" },
  { input: "(]", expected: false, reason: "mismatched bracket types" },
  { input: "([)]", expected: false, reason: "incorrect closing order" },
  { input: "((", expected: false, reason: "openings without closings" },
  { input: "))", expected: false, reason: "closings without openings" },
  { input: "(", expected: false, reason: "odd length with an opening" },
  { input: "]", expected: false, reason: "odd length with a closing" },
  { input: "())", expected: false, reason: "extra closing at the end" },
  { input: "(()", expected: false, reason: "extra opening at the beginning" },
  { input: "}{", expected: false, reason: "pair in reverse order" },
  { input: "([{}]))", expected: false, reason: "extra closing after a valid segment" },
  { input: "(([]){})", expected: true, reason: "deeper mixed structure" },
  { input: "[({})](())", expected: true, reason: "multiple complex groups" },
  { input: "[({)]}", expected: false, reason: "crossed nesting" },
  { input: "(".repeat(50) + ")".repeat(50), expected: true, reason: "long valid nesting" },
  { input: "()".repeat(5000), expected: true, reason: "valid input at the length limit" }
];

describe("isValid", () => {
  for (const { input, expected, reason } of testCases) {
    it(`${reason}: ${formatInput(input)}`, () => {
      assert.equal(isValid(input), expected);
    });
  }
});

function formatInput(input: string): string {
  return input.length <= 30 ? JSON.stringify(input) : `string with ${input.length} characters`;
}
