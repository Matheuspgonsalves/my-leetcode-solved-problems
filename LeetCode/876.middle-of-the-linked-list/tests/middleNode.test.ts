import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { ListNode, middleNode } from "../src/middleNode.js";

function buildList(values: number[]): ListNode | null {
  let head: ListNode | null = null;
  let tail: ListNode | null = null;

  for (const value of values) {
    const node = new ListNode(value);
    if (head === null || tail === null) {
      head = node;
    } else {
      tail.next = node;
    }
    tail = node;
  }

  return head;
}

function listToArray(node: ListNode | null): number[] {
  const values: number[] = [];
  let current = node;

  while (current !== null) {
    values.push(current.val);
    current = current.next;
  }

  return values;
}

type TestCase = {
  values: number[];
  expected: number[];
  reason: string;
};

const testCases: TestCase[] = [
  {
    values: [1, 2, 3, 4, 5],
    expected: [3, 4, 5],
    reason: "the official five-node example"
  },
  {
    values: [1],
    expected: [1],
    reason: "a single-node list has no other node to compete for the middle"
  },
  {
    values: [1, 2],
    expected: [2],
    reason: "a two-node list returns the second node as the middle"
  },
  {
    values: [1, 2, 3],
    expected: [2, 3],
    reason: "an odd-length list of three nodes returns the single true middle node"
  },
  {
    values: [1, 2, 3, 4],
    expected: [3, 4],
    reason: "an even-length list of four nodes returns the second of the two middle nodes"
  },
  {
    values: [1, 2, 3, 4, 5, 6],
    expected: [4, 5, 6],
    reason: "the official six-node example, where node 4 is the second middle"
  },
  {
    values: [1, 2, 3, 4, 5, 6, 7],
    expected: [4, 5, 6, 7],
    reason: "an odd-length list of seven nodes returns the fourth node as the middle"
  },
  {
    values: [1, 2, 3, 4, 5, 6, 7, 8],
    expected: [5, 6, 7, 8],
    reason: "an even-length list of eight nodes returns the fifth node as the second middle"
  },
  {
    values: [7, 3, 9, 2, 8],
    expected: [9, 2, 8],
    reason: "unsorted, non-sequential values still resolve to the middle by position, not by value"
  },
  {
    values: [5, 5, 5, 5],
    expected: [5, 5],
    reason: "duplicate values throughout the list do not affect which node is structurally the middle"
  },
  {
    values: [4, 4],
    expected: [4],
    reason: "a two-node list with equal values still returns the second node"
  },
  {
    values: Array.from({ length: 100 }, (_, i) => i + 1),
    expected: Array.from({ length: 100 }, (_, i) => i + 1).slice(50),
    reason: "a full 100-node list (the maximum allowed length) still lands on the correct second-middle node"
  }
];

describe("middleNode", () => {
  for (const { values, expected, reason } of testCases) {
    it(`${reason}: head=${JSON.stringify(values)}`, () => {
      const head = buildList(values);
      const result = middleNode(head);
      assert.deepEqual(listToArray(result), expected);
    });
  }
});
