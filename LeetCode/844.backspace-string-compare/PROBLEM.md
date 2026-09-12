# 844. Backspace String Compare

**Difficulty:** Easy
**Topics:** Two Pointers, String, Stack, Simulation

## Description

Given two strings `s` and `t`, return `true` if they are equal when both are typed into empty text editors. `#` means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

Implement the following function:

```ts
function backspaceCompare(s: string, t: string): boolean
```

## Examples

### Example 1

```text
Input: s = "ab#c", t = "ad#c"
Output: true
```

Explanation: Both `s` and `t` become `"ac"`.

### Example 2

```text
Input: s = "ab##", t = "c#d#"
Output: true
```

Explanation: Both `s` and `t` become `""`.

### Example 3

```text
Input: s = "a#c", t = "b"
Output: false
```

Explanation: `s` becomes `"c"` while `t` becomes `"b"`.

## Constraints

- `1 <= s.length, t.length <= 200`
- `s` and `t` only contain lowercase letters and `#` characters.

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

Complete `backspaceCompare` in `src/backspaceCompare.ts`. The suite in `tests/backspaceCompare.test.ts` contains several test cases. The starter implementation deliberately returns a constant value, so most tests will fail until your solution is correct.

<details>
<summary>Hint</summary>

You can build the final text for each string using a stack: push a letter, and pop the stack when you see `#` (if it isn't already empty). Then compare the two resulting stacks.

For the follow-up, try walking each string from the end with two pointers, skipping characters that get backspaced, without allocating an extra stack.

</details>

## Expected complexity

- Time: `O(n + m)`
- Auxiliary space: `O(1)` (two-pointer approach) or `O(n + m)` (stack approach)
