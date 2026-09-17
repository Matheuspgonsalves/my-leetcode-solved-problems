# 155. Min Stack

**Difficulty:** Medium
**Topics:** Stack, Design

## Description

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the `MinStack` class:

- `MinStack()` initializes the stack object.
- `void push(int val)` pushes the element `val` onto the stack.
- `void pop()` removes the element on the top of the stack.
- `int top()` gets the top element of the stack.
- `int getMin()` retrieves the minimum element in the stack.

You must implement a solution with `O(1)` time complexity for each function.

```ts
class MinStack {
  push(value: number): void;
  pop(): void;
  top(): number;
  getMin(): number;
}
```

## Examples

### Example 1

```text
Input
["MinStack", "push", "push", "push", "getMin", "pop", "top", "getMin"]
[[], [-2], [0], [-3], [], [], [], []]

Output
[null, null, null, null, -3, null, 0, -2]
```

Explanation:

```text
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
```

## Constraints

- `-2^31 <= val <= 2^31 - 1`
- Methods `pop`, `top` and `getMin` operations will always be called on non-empty stacks.
- At most `3 * 10^4` calls will be made to `push`, `pop`, `top`, and `getMin`.

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

Complete `MinStack` in `src/MinStack.ts`. The suite in `tests/MinStack.test.ts` contains fifteen test cases, starting with the exact sequence from the official LeetCode example. The starter implementation is intentionally blank (no state, no return values), so every test will fail — and `npm run typecheck` will flag `top()` and `getMin()` as not returning a value — until you implement the class yourself.

<details>
<summary>Hint</summary>

Keep two stacks in parallel: one with the actual values, and a second one that tracks the minimum seen so far at each depth. On `push`, also push the smaller of the new value and the current minimum onto the min-stack. On `pop`, pop both stacks together. `getMin` then just reads the top of the min-stack in O(1).

</details>

## Expected complexity

- Time: `O(1)` for every operation
- Auxiliary space: `O(n)`
