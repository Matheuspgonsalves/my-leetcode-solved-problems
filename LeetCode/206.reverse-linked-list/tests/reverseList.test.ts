import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { ListNode, reverseList } from "../src/reverseList.js";

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
    expected: [5, 4, 3, 2, 1],
    reason: "the official five-node example"
  },
  {
    values: [1, 2],
    expected: [2, 1],
    reason: "the official two-node example"
  },
  {
    values: [],
    expected: [],
    reason: "the official empty-list example"
  },
  {
    values: [1],
    expected: [1],
    reason: "a single-node list is its own reverse"
  },
  {
    values: [7, 3, 9, 2, 8],
    expected: [8, 2, 9, 3, 7],
    reason: "unsorted, non-sequential values still reverse purely by position"
  },
  {
    values: [4, 4, 4],
    expected: [4, 4, 4],
    reason: "duplicate values throughout the list still reverse correctly"
  },
  {
    values: Array.from({ length: 100 }, (_, i) => i + 1),
    expected: Array.from({ length: 100 }, (_, i) => i + 1).reverse(),
    reason: "a large list still reverses fully without stack overflow or dropped nodes"
  }
];

describe("reverseList", () => {
  for (const { values, expected, reason } of testCases) {
    it(`${reason}: head=${JSON.stringify(values)}`, () => {
      const head = buildList(values);
      const result = reverseList(head);
      assert.deepEqual(listToArray(result), expected);
    });
  }
});
