# 20. Valid Parentheses

**Difficulty:** Easy  
**Topics:** String, Stack

## Description

Given a string `s` containing only the characters `(`, `)`, `{`, `}`, `[` and `]`, determine whether it is valid.

A string is valid when:

1. Every opening bracket is closed by a bracket of the same type.
2. Brackets are closed in the correct order.
3. Every closing bracket has a corresponding opening bracket.

Implement the following function:

```ts
function isValid(s: string): boolean
```

## Examples

### Example 1

```text
Input: s = "()"
Output: true
```

### Example 2

```text
Input: s = "()[]{}"
Output: true
```

### Example 3

```text
Input: s = "(]"
Output: false
```

### Example 4

```text
Input: s = "([])"
Output: true
```

### Example 5

```text
Input: s = "([)]"
Output: false
```

## Constraints

- `1 <= s.length <= 10⁴`
- `s` contains only `()[]{}`.

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

Complete `isValid` in `src/isValid.ts`. The suite in `tests/isValid.test.ts` contains 25 test cases. The starter implementation deliberately returns `false`, so some tests will fail until your solution is correct.

<details>
<summary>Hint</summary>

Consider a data structure that lets you inspect and remove the most recently opened bracket first.

</details>

## Expected complexity

- Time: `O(n)`
- Auxiliary space: `O(n)` in the worst case
