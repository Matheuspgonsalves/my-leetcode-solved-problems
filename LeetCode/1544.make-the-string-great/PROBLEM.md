# 1544. Make The String Great

**Difficulty:** Easy
**Topics:** String, Stack

## Description

Given a string `s` of lower and upper case English letters.

A good string is a string which doesn't have two adjacent characters `s[i]` and `s[i + 1]` where:

- `0 <= i <= s.length - 2`
- `s[i]` is a lower-case letter and `s[i + 1]` is the same letter but in upper-case or vice-versa.

To make the string good, you can choose two adjacent characters that make the string bad and remove them. You can keep doing this until the string becomes good.

Return the string after making it good. The answer is guaranteed to be unique under the given constraints.

Notice that an empty string is also good.

Implement the following function:

```ts
function makeGood(s: string): string
```

## Examples

### Example 1

```text
Input: s = "leEeetcode"
Output: "leetcode"
```

Explanation: In the first step, either you choose i = 1 or i = 2, both will result "leEeetcode" to be reduced to "leetcode".

### Example 2

```text
Input: s = "abBAcC"
Output: ""
```

Explanation: We have many possible scenarios, and all lead to the same answer. For example:
`"abBAcC" -> "aAcC" -> "cC" -> ""`
`"abBAcC" -> "abBA" -> "aA" -> ""`

### Example 3

```text
Input: s = "s"
Output: "s"
```

## Constraints

- `1 <= s.length <= 100`
- `s` contains only lower and upper case English letters.

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

Complete `makeGood` in `src/makeGood.ts`. The suite in `tests/makeGood.test.ts` contains several test cases. The starter implementation deliberately returns the input unchanged, so most tests will fail until your solution is correct.

<details>
<summary>Hint</summary>

Use a stack: walk the string left to right, and for each character, check it against the character on top of the stack. If they are the same letter but opposite case (compare using `toLowerCase()` and check the characters actually differ), pop the stack; otherwise push the new character. Join whatever remains on the stack to get the final string.

</details>

## Expected complexity

- Time: `O(n)`
- Auxiliary space: `O(n)`
