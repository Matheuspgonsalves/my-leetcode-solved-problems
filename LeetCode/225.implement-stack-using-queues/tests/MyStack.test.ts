import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { MyStack } from "../src/MyStack.js";

type Operation =
  | { op: "push"; arg: number }
  | { op: "pop"; expected: number }
  | { op: "top"; expected: number }
  | { op: "empty"; expected: boolean };

type TestCase = {
  operations: Operation[];
  reason: string;
};

const testCases: TestCase[] = [
  {
    reason: "the official example: push 1 and 2, then top and pop return the most recently pushed element",
    operations: [
      { op: "push", arg: 1 },
      { op: "push", arg: 2 },
      { op: "top", expected: 2 },
      { op: "pop", expected: 2 },
      { op: "empty", expected: false }
    ]
  },
  {
    reason: "a single element round-trips through push, top, pop and leaves the stack empty",
    operations: [
      { op: "push", arg: 5 },
      { op: "top", expected: 5 },
      { op: "pop", expected: 5 },
      { op: "empty", expected: true }
    ]
  },
  {
    reason: "multiple pushes are popped back out in reverse order (last in, first out)",
    operations: [
      { op: "push", arg: 1 },
      { op: "push", arg: 2 },
      { op: "push", arg: 3 },
      { op: "pop", expected: 3 },
      { op: "pop", expected: 2 },
      { op: "pop", expected: 1 },
      { op: "empty", expected: true }
    ]
  },
  {
    reason: "pushing more elements after the stack has been drained keeps LIFO order",
    operations: [
      { op: "push", arg: 1 },
      { op: "pop", expected: 1 },
      { op: "push", arg: 2 },
      { op: "push", arg: 3 },
      { op: "pop", expected: 3 },
      { op: "pop", expected: 2 },
      { op: "empty", expected: true }
    ]
  },
  {
    reason: "a freshly created stack reports itself as empty",
    operations: [{ op: "empty", expected: true }]
  }
];

describe("MyStack", () => {
  for (const { operations, reason } of testCases) {
    it(reason, () => {
      const stack = new MyStack();

      for (const operation of operations) {
        switch (operation.op) {
          case "push":
            stack.push(operation.arg);
            break;
          case "pop":
            assert.equal(stack.pop(), operation.expected);
            break;
          case "top":
            assert.equal(stack.top(), operation.expected);
            break;
          case "empty":
            assert.equal(stack.empty(), operation.expected);
            break;
        }
      }
    });
  }
});
