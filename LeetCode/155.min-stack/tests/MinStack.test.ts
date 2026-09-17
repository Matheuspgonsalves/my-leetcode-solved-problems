import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { MinStack } from "../src/MinStack.js";

type Operation =
  | { op: "push"; arg: number }
  | { op: "pop" }
  | { op: "top"; expected: number }
  | { op: "getMin"; expected: number };

type TestCase = {
  operations: Operation[];
  reason: string;
};

const testCases: TestCase[] = [
  {
    reason: "the official LeetCode example",
    operations: [
      { op: "push", arg: -2 },
      { op: "push", arg: 0 },
      { op: "push", arg: -3 },
      { op: "getMin", expected: -3 },
      { op: "pop" },
      { op: "top", expected: 0 },
      { op: "getMin", expected: -2 }
    ]
  },
  {
    reason: "a single element round-trips through top, getMin and pop",
    operations: [
      { op: "push", arg: 1 },
      { op: "top", expected: 1 },
      { op: "getMin", expected: 1 },
      { op: "pop" }
    ]
  },
  {
    reason: "duplicate values equal to the minimum survive pops until every copy is removed",
    operations: [
      { op: "push", arg: 5 },
      { op: "push", arg: 5 },
      { op: "push", arg: 5 },
      { op: "getMin", expected: 5 },
      { op: "pop" },
      { op: "getMin", expected: 5 },
      { op: "pop" },
      { op: "getMin", expected: 5 }
    ]
  },
  {
    reason: "an increasing sequence keeps the first element as the minimum throughout",
    operations: [
      { op: "push", arg: 1 },
      { op: "push", arg: 2 },
      { op: "push", arg: 3 },
      { op: "getMin", expected: 1 },
      { op: "pop" },
      { op: "pop" },
      { op: "getMin", expected: 1 }
    ]
  },
  {
    reason: "a decreasing sequence updates the minimum as each smaller value is popped off",
    operations: [
      { op: "push", arg: 5 },
      { op: "push", arg: 4 },
      { op: "push", arg: 3 },
      { op: "push", arg: 2 },
      { op: "push", arg: 1 },
      { op: "getMin", expected: 1 },
      { op: "pop" },
      { op: "getMin", expected: 2 },
      { op: "pop" },
      { op: "getMin", expected: 3 }
    ]
  },
  {
    reason: "popping the current minimum reveals the next-lowest value underneath it",
    operations: [
      { op: "push", arg: 3 },
      { op: "push", arg: 1 },
      { op: "push", arg: 2 },
      { op: "getMin", expected: 1 },
      { op: "pop" },
      { op: "getMin", expected: 1 },
      { op: "pop" },
      { op: "getMin", expected: 3 }
    ]
  },
  {
    reason: "negative and positive values mix, and repeated getMin calls do not mutate state",
    operations: [
      { op: "push", arg: -1 },
      { op: "push", arg: 0 },
      { op: "push", arg: -2 },
      { op: "getMin", expected: -2 },
      { op: "getMin", expected: -2 }
    ]
  },
  {
    reason: "extreme 32-bit boundary values are handled like any other number",
    operations: [
      { op: "push", arg: 2147483647 },
      { op: "push", arg: -2147483648 },
      { op: "getMin", expected: -2147483648 },
      { op: "top", expected: -2147483648 },
      { op: "pop" },
      { op: "top", expected: 2147483647 },
      { op: "getMin", expected: 2147483647 }
    ]
  },
  {
    reason: "pushing again after the stack empties out establishes a fresh minimum",
    operations: [
      { op: "push", arg: 5 },
      { op: "pop" },
      { op: "push", arg: 1 },
      { op: "push", arg: 10 },
      { op: "getMin", expected: 1 },
      { op: "top", expected: 10 }
    ]
  },
  {
    reason: "a long alternating sequence recovers the correct minimum at every step",
    operations: [
      { op: "push", arg: 1 },
      { op: "push", arg: 2 },
      { op: "push", arg: 0 },
      { op: "push", arg: 3 },
      { op: "push", arg: -1 },
      { op: "getMin", expected: -1 },
      { op: "pop" },
      { op: "getMin", expected: 0 },
      { op: "pop" },
      { op: "getMin", expected: 0 },
      { op: "pop" },
      { op: "getMin", expected: 1 },
      { op: "pop" },
      { op: "top", expected: 1 }
    ]
  },
  {
    reason: "two equal-to-minimum pushes followed by a single pop still report the correct minimum",
    operations: [
      { op: "push", arg: 1 },
      { op: "push", arg: 1 },
      { op: "getMin", expected: 1 },
      { op: "pop" },
      { op: "getMin", expected: 1 },
      { op: "top", expected: 1 }
    ]
  },
  {
    reason: "top reflects the latest push after an interleaved pop and push",
    operations: [
      { op: "push", arg: 10 },
      { op: "push", arg: 20 },
      { op: "pop" },
      { op: "push", arg: 5 },
      { op: "top", expected: 5 },
      { op: "getMin", expected: 5 }
    ]
  },
  {
    reason: "all-zero values are still tracked correctly as both the top and the minimum",
    operations: [
      { op: "push", arg: 0 },
      { op: "push", arg: 0 },
      { op: "push", arg: 0 },
      { op: "getMin", expected: 0 },
      { op: "pop" },
      { op: "pop" },
      { op: "getMin", expected: 0 },
      { op: "top", expected: 0 }
    ]
  },
  {
    reason: "several consecutive getMin calls with no other operations in between stay stable",
    operations: [
      { op: "push", arg: 7 },
      { op: "push", arg: 3 },
      { op: "push", arg: 9 },
      { op: "getMin", expected: 3 },
      { op: "getMin", expected: 3 },
      { op: "getMin", expected: 3 },
      { op: "top", expected: 9 }
    ]
  },
  {
    reason: "the minimum only changes once the last copy of it has been popped off",
    operations: [
      { op: "push", arg: 2 },
      { op: "push", arg: 0 },
      { op: "push", arg: 0 },
      { op: "push", arg: 3 },
      { op: "getMin", expected: 0 },
      { op: "pop" },
      { op: "getMin", expected: 0 },
      { op: "pop" },
      { op: "getMin", expected: 0 },
      { op: "pop" },
      { op: "getMin", expected: 2 }
    ]
  }
];

describe("MinStack", () => {
  for (const { operations, reason } of testCases) {
    it(reason, () => {
      const minStack = new MinStack();

      for (const operation of operations) {
        switch (operation.op) {
          case "push":
            minStack.push(operation.arg);
            break;
          case "pop":
            minStack.pop();
            break;
          case "top":
            assert.equal(minStack.top(), operation.expected);
            break;
          case "getMin":
            assert.equal(minStack.getMin(), operation.expected);
            break;
        }
      }
    });
  }
});
