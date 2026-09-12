# 1047. Remove All Adjacent Duplicates In String

**Difficulty:** Easy
**Topics:** String, Stack

## Description

You are given a string `s` consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.

We repeatedly make duplicate removals on `s` until we no longer can.

Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.

Implement the following function:

```ts
function removeDuplicates(s: string): string
```

## Examples

### Example 1

```text
Input: s = "abbaca"
Output: "ca"
```

Explanation: For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move. The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".

### Example 2

```text
Input: s = "azxxzy"
Output: "ay"
```

## Constraints

- `1 <= s.length <= 10^5`
- `s` consists of lowercase English letters.

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

Complete `removeDuplicates` in `src/removeDuplicates.ts`. The suite in `tests/removeDuplicates.test.ts` contains several test cases. The starter implementation deliberately returns the input unchanged, so most tests will fail until your solution is correct.

<details>
<summary>Hint</summary>

Use a stack: walk the string left to right, and for each character, if it equals the character on top of the stack, pop the stack (they cancel out); otherwise push the new character. Join whatever remains on the stack to get the final string.

</details>

## Expected complexity

- Time: `O(n)`
- Auxiliary space: `O(n)`
