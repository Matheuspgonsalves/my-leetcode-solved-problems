# 232. Implement Queue using Stacks

**Difficulty:** Easy
**Topics:** Stack, Design, Queue

## Description

Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (`push`, `peek`, `pop`, and `empty`).

Implement the `MyQueue` class:

- `void push(int x)` Pushes element `x` to the back of the queue.
- `int pop()` Removes the element from the front of the queue and returns it.
- `int peek()` Returns the element at the front of the queue.
- `boolean empty()` Returns `true` if the queue is empty, `false` otherwise.

Notes:

- You must use only standard operations of a stack, which means only `push to top`, `peek/pop from top`, `size`, and `is empty` operations are valid.
- Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque, as long as you use only a stack's standard operations.

```ts
class MyQueue {
  push(x: number): void;
  pop(): number;
  peek(): number;
  empty(): boolean;
}
```

## Examples

### Example 1

```text
Input
["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]

Output
[null, null, null, 1, 1, false]
```

Explanation:

```text
MyQueue myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek();  // return 1
myQueue.pop();   // return 1, queue is [2]
myQueue.empty(); // return false
```

## Constraints

- `1 <= x <= 9`
- At most `100` calls will be made to `push`, `pop`, `peek`, and `empty`.
- All the calls to `pop` and `peek` are valid (i.e., the queue will not be empty).

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

Complete `MyQueue` in `src/MyQueue.ts`. The suite in `tests/MyQueue.test.ts` contains several test cases. The starter implementation deliberately behaves like a plain stack (last in, first out), so most tests will fail until your solution produces first-in-first-out order using only stack operations.

<details>
<summary>Hint</summary>

Keep two stacks: an "in" stack for pushes and an "out" stack for pops/peeks. Always push new elements onto the "in" stack. When `pop` or `peek` is called and the "out" stack is empty, move every element from "in" to "out" (which reverses their order), then operate on the top of "out".

</details>

## Expected complexity

- Time: `O(1)` amortized per operation
- Auxiliary space: `O(n)`, where `n` is the number of elements currently in the queue
