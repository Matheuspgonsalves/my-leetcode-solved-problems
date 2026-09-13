# 225. Implement Stack using Queues

**Difficulty:** Easy
**Topics:** Stack, Design, Queue

## Description

Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (`push`, `top`, `pop`, and `empty`).

Implement the `MyStack` class:

- `void push(int x)` Pushes element `x` to the top of the stack.
- `int pop()` Removes the element on the top of the stack and returns it.
- `int top()` Returns the element on the top of the stack.
- `boolean empty()` Returns `true` if the stack is empty, `false` otherwise.

Notes:

- You must use only standard operations of a queue, which means only `push to back`, `peek/pop from front`, `size`, and `is empty` operations are valid.
- Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque, as long as you use only a queue's standard operations.

```ts
class MyStack {
  push(x: number): void;
  pop(): number;
  top(): number;
  empty(): boolean;
}
```

## Examples

### Example 1

```text
Input
["MyStack", "push", "push", "top", "pop", "empty"]
[[], [1], [2], [], [], []]

Output
[null, null, null, 2, 2, false]
```

Explanation:

```text
MyStack myStack = new MyStack();
myStack.push(1);
myStack.push(2);
myStack.top();   // return 2
myStack.pop();   // return 2
myStack.empty(); // return false
```

## Constraints

- `1 <= x <= 9`
- At most `100` calls will be made to `push`, `pop`, `top`, and `empty`.
- All the calls to `pop` and `top` are valid (i.e., the stack will not be empty).

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

Complete `MyStack` in `src/MyStack.ts`. The suite in `tests/MyStack.test.ts` contains several test cases. The starter implementation deliberately behaves like a plain queue (first in, first out), so most tests will fail until your solution produces last-in-first-out order using only queue operations.

<details>
<summary>Hint</summary>

Use a single queue. After pushing a new element to the back, rotate the queue by dequeuing and re-enqueuing every element that was in front of it. This moves the newest element to the front, so the front of the queue always mirrors the top of the stack.

</details>

## Expected complexity

- Time: `O(n)` for `push`, `O(1)` for `pop`, `top` and `empty`
- Auxiliary space: `O(n)`, where `n` is the number of elements currently in the stack
