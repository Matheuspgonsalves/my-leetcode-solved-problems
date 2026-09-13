import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { MyQueue } from "../src/MyQueue.js";

type Operation =
  | { op: "push"; arg: number }
  | { op: "pop"; expected: number }
  | { op: "peek"; expected: number }
  | { op: "empty"; expected: boolean };

type TestCase = {
  operations: Operation[];
  reason: string;
};

const testCases: TestCase[] = [
  {
    reason: "the official example: push 1 and 2, then peek and pop return the front element",
    operations: [
      { op: "push", arg: 1 },
      { op: "push", arg: 2 },
      { op: "peek", expected: 1 },
      { op: "pop", expected: 1 },
      { op: "empty", expected: false }
    ]
  },
  {
    reason: "a single element round-trips through push, peek, pop and leaves the queue empty",
    operations: [
      { op: "push", arg: 5 },
      { op: "peek", expected: 5 },
      { op: "pop", expected: 5 },
      { op: "empty", expected: true }
    ]
  },
  {
    reason: "multiple pushes are popped back out in the same order they were pushed",
    operations: [
      { op: "push", arg: 1 },
      { op: "push", arg: 2 },
      { op: "push", arg: 3 },
      { op: "pop", expected: 1 },
      { op: "pop", expected: 2 },
      { op: "pop", expected: 3 },
      { op: "empty", expected: true }
    ]
  },
  {
    reason: "pushing more elements after the internal stacks have already been drained keeps FIFO order",
    operations: [
      { op: "push", arg: 1 },
      { op: "pop", expected: 1 },
      { op: "push", arg: 2 },
      { op: "push", arg: 3 },
      { op: "pop", expected: 2 },
      { op: "pop", expected: 3 },
      { op: "empty", expected: true }
    ]
  },
  {
    reason: "a freshly created queue reports itself as empty",
    operations: [{ op: "empty", expected: true }]
  }
];

describe("MyQueue", () => {
  for (const { operations, reason } of testCases) {
    it(reason, () => {
      const queue = new MyQueue();

      for (const operation of operations) {
        switch (operation.op) {
          case "push":
            queue.push(operation.arg);
            break;
          case "pop":
            assert.equal(queue.pop(), operation.expected);
            break;
          case "peek":
            assert.equal(queue.peek(), operation.expected);
            break;
          case "empty":
            assert.equal(queue.empty(), operation.expected);
            break;
        }
      }
    });
  }
});
