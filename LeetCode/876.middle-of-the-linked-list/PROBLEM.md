# 876. Middle of the Linked List

**Difficulty:** Easy
**Topics:** Linked List, Two Pointers

## Description

Given the `head` of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

```ts
class ListNode {
  val: number;
  next: ListNode | null;
}

function middleNode(head: ListNode | null): ListNode | null
```

## Examples

### Example 1

```text
Input: head = [1,2,3,4,5]
Output: [3,4,5]
```

Explanation: The middle node of the list is node 3.

### Example 2

```text
Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
```

Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

## Constraints

- The number of nodes in the list is in the range `[1, 100]`.
- `1 <= Node.val <= 100`

## Running locally

Install the dependencies once:

```bash
npm install
```

Run the tests:

```bash
npm test
```

Keep the tests running while you work:

```bash
npm run test:watch
```

Check the TypeScript types:

```bash
npm run typecheck
```

## Your challenge

Complete `middleNode` in `src/middleNode.ts`. The suite in `tests/middleNode.test.ts` builds a linked list out of a plain array of values, calls `middleNode`, and compares the remainder of the list (from the returned node to the end) against the expected values. The starter implementation deliberately returns `head` unchanged, so every test with more than one node will fail until your solution is correct.

<details>
<summary>Hint</summary>

Use the slow/fast pointer technique: advance `slow` by one node and `fast` by two nodes on each step. When `fast` reaches the end of the list (or has no next node), `slow` is sitting on the middle node — and on the second middle node when the list has an even length, since `fast` runs out one step earlier in that case.

</details>

## Expected complexity

- Time: `O(n)`
- Auxiliary space: `O(1)`
