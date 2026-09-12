# 71. Simplify Path

**Difficulty:** Medium  
**Topics:** String, Stack

## Description

Given an absolute path for a Unix-style file system, which begins with a slash `/`, transform it into its simplified canonical path.

In a Unix-style file system:

- A single period `.` refers to the current directory.
- A double period `..` refers to the directory up a level from the current directory.
- Multiple consecutive slashes such as `//` are treated as a single slash `/`.

The simplified canonical path should follow these rules:

1. The path must start with a single slash `/`.
2. Directories within the path must be separated by exactly one slash `/`.
3. The path must not end with a trailing slash `/`, unless it is the root directory.
4. The path must not have any single or double periods used to denote current or parent directories.

Implement the following function:

```ts
function simplifyPath(path: string): string
```

## Examples

### Example 1

```text
Input: path = "/home/"
Output: "/home"
```

Explanation: The trailing slash should be removed.

### Example 2

```text
Input: path = "/home//foo/"
Output: "/home/foo"
```

Explanation: Multiple consecutive slashes are replaced by a single one.

### Example 3

```text
Input: path = "/home/user/Documents/../Pictures"
Output: "/home/user/Pictures"
```

Explanation: A double period `..` moves up one directory level (from `Documents` to `user`).

### Example 4

```text
Input: path = "/../"
Output: "/"
```

Explanation: Going up one level from the root directory is a no-op.

### Example 5

```text
Input: path = "/.../a/../b/c/../d/./"
Output: "/.../b/d"
```

Explanation: `"..."` is a valid name for a directory, distinct from the special `".."` token.

## Constraints

- `1 <= path.length <= 3000`
- `path` consists of English letters, digits, `.`, `/` or `_`.
- `path` is a valid absolute Unix path.

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

Complete `simplifyPath` in `src/simplifyPath.ts`. The suite in `tests/simplifyPath.test.ts` contains several test cases. The starter implementation deliberately returns the input unchanged, so most tests will fail until your solution is correct.

<details>
<summary>Hint</summary>

Split the path by `/` into tokens. Ignore empty tokens and `.` tokens. Use a stack: push a real directory name, and pop the stack when you see `..` (if it isn't already empty). Join whatever remains on the stack with `/`, prefixed by a leading `/`.

</details>

## Expected complexity

- Time: `O(n)`
- Auxiliary space: `O(n)` in the worst case
