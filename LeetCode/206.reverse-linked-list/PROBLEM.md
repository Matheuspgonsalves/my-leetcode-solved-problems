# 206. Reverse Linked List

**Difficulty:** Easy
**Topics:** Linked List, Recursion

## Description

Given the `head` of a singly linked list, reverse the list, and return the reversed list.

```ts
class ListNode {
  val: number;
  next: ListNode | null;
}

function reverseList(head: ListNode | null): ListNode | null
```

## Examples

### Example 1

```text
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
```

### Example 2

```text
Input: head = [1,2]
Output: [2,1]
```

### Example 3

```text
Input: head = []
Output: []
```

## Constraints

- The number of nodes in the list is in the range `[0, 5000]`.
- `-5000 <= Node.val <= 5000`

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

Complete `reverseList` in `src/reverseList.ts`. The suite in `tests/reverseList.test.ts` builds a linked list out of a plain array of values, calls `reverseList`, and compares the resulting list against the expected reversed values.

<details>
<summary>Hint</summary>

Walk the list once while keeping track of the previously visited node. At each step, point the current node's `next` at `previous` before moving both pointers forward. When `current` runs out, `previous` is the new head.

</details>

## Expected complexity

- Time: `O(n)`
- Auxiliary space: `O(1)`
