# 141. Linked List Cycle

**Difficulty:** Easy
**Topics:** Linked List, Two Pointers, Hash Table

## Description

Given the `head` of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if some node in the list can be reached again by continuously following the `next` pointer. Internally, `pos` is used to denote the index of the node that the tail's `next` pointer is connected to. Note that `pos` is not passed as a parameter.

Return `true` if there is a cycle in the linked list. Otherwise, return `false`.

```ts
class ListNode {
  val: number;
  next: ListNode | null;
}

function hasCycle(head: ListNode | null): boolean
```

## Examples

### Example 1

```text
Input: head = [3,2,0,-4], pos = 1
Output: true
```

Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

### Example 2

```text
Input: head = [1,2], pos = 0
Output: true
```

Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

### Example 3

```text
Input: head = [1], pos = -1
Output: false
```

Explanation: There is no cycle in the linked list.

## Constraints

- The number of nodes in the list is in the range `[0, 10^4]`.
- `-10^5 <= Node.val <= 10^5`
- `pos` is `-1` or a valid index in the linked list.

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

Complete `hasCycle` in `src/hasCycle.ts`. The suite in `tests/hasCycle.test.ts` builds a linked list out of a plain array of values plus a `pos` index (wiring the tail back to that index to create a cycle, or `-1` for none), then calls `hasCycle` and compares the result against the expected boolean. The starter implementation deliberately throws, so every test will fail until your solution is in place.

<details>
<summary>Hint</summary>

Use Floyd's cycle detection (the "tortoise and hare" technique): advance a `slow` pointer by one node and a `fast` pointer by two nodes on each step. If the list has a cycle, `fast` will eventually lap `slow` and they will point to the same node. If `fast` (or `fast.next`) reaches `null`, the list has no cycle.

</details>

## Expected complexity

- Time: `O(n)`
- Auxiliary space: `O(1)`
