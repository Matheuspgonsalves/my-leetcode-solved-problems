import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { ListNode, hasCycle } from "../src/hasCycle.js";

/**
 * Builds a linked list from `values`. When `pos` is a valid index into
 * `values`, the last node's `next` is wired back to the node at that
 * index, creating a cycle. Pass `pos = -1` for a list with no cycle.
 */
function buildList(values: number[], pos: number): ListNode | null {
  if (values.length === 0) return null;

  const nodes = values.map((value) => new ListNode(value));

  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i]!.next = nodes[i + 1]!;
  }

  if (pos >= 0 && pos < nodes.length) {
    nodes[nodes.length - 1]!.next = nodes[pos]!;
  }

  return nodes[0]!;
}

type TestCase = {
  values: number[];
  pos: number;
  expected: boolean;
  reason: string;
};

const testCases: TestCase[] = [
  {
    values: [3, 2, 0, -4],
    pos: 1,
    expected: true,
    reason: "the official four-node example, tail links back to the second node"
  },
  {
    values: [3, 2, 0, -4],
    pos: -1,
    expected: false,
    reason: "the same four values with no cycle at all"
  },
  {
    values: [1, 2],
    pos: 0,
    expected: true,
    reason: "the official two-node example, tail links back to the head"
  },
  {
    values: [1, 2],
    pos: -1,
    expected: false,
    reason: "a two-node list with no cycle"
  },
  {
    values: [1],
    pos: -1,
    expected: false,
    reason: "the official single-node example with no cycle"
  },
  {
    values: [1],
    pos: 0,
    expected: true,
    reason: "a single node whose next points back to itself"
  },
  {
    values: [],
    pos: -1,
    expected: false,
    reason: "an empty list has no nodes to cycle through"
  },
  {
    values: [1, 2, 3],
    pos: 2,
    expected: true,
    reason: "the tail node points back to itself"
  },
  {
    values: [1, 2, 3, 4, 5],
    pos: 0,
    expected: true,
    reason: "a longer list where the tail links all the way back to the head"
  },
  {
    values: [1, 2, 3, 4, 5],
    pos: -1,
    expected: false,
    reason: "a longer list with no cycle"
  },
  {
    values: [1, 2, 3, 4, 5, 6, 7],
    pos: 3,
    expected: true,
    reason: "the cycle starts in the middle of the list, not at the head or tail"
  },
  {
    values: [5, 5, 5, 5],
    pos: 2,
    expected: true,
    reason: "duplicate values throughout the list do not affect cycle detection"
  },
  {
    values: [5, 5, 5, 5],
    pos: -1,
    expected: false,
    reason: "duplicate values with no cycle should not be mistaken for one"
  },
  {
    values: Array.from({ length: 100 }, (_, i) => i + 1),
    pos: -1,
    expected: false,
    reason: "a large 100-node list with no cycle should terminate without a false positive"
  },
  {
    values: Array.from({ length: 100 }, (_, i) => i + 1),
    pos: 98,
    expected: true,
    reason: "a large 100-node list with a cycle near the end must still be detected"
  }
];

describe("hasCycle", () => {
  for (const { values, pos, expected, reason } of testCases) {
    it(`${reason}: head=${JSON.stringify(values)}, pos=${pos}`, () => {
      const head = buildList(values, pos);
      assert.equal(hasCycle(head), expected);
    });
  }
});
