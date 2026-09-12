import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { simplifyPath } from "../src/simplifyPath.js";

type TestCase = {
  input: string;
  expected: string;
  reason: string;
};

const testCases: TestCase[] = [
  { input: "/", expected: "/", reason: "root path stays the root" },
  { input: "/home/", expected: "/home", reason: "trailing slash is removed" },
  { input: "/home//foo/", expected: "/home/foo", reason: "consecutive slashes collapse into one" },
  { input: "/a/b/c", expected: "/a/b/c", reason: "already-canonical path is unchanged" },
  { input: "/./", expected: "/", reason: "a lone current-directory token resolves to root" },
  {
    input: "/home/user/Documents/../Pictures",
    expected: "/home/user/Pictures",
    reason: "double period moves up one directory"
  },
  { input: "/../", expected: "/", reason: "going up from the root is a no-op" },
  { input: "/../../..", expected: "/", reason: "repeated no-op ups from the root stay at the root" },
  {
    input: "/a/./b/../../c/",
    expected: "/c",
    reason: "mix of current- and parent-directory tokens"
  },
  {
    input: "/a//b////c/d//././/..",
    expected: "/a/b/c",
    reason: "many consecutive slashes and dots alongside a parent-directory token"
  },
  { input: "/...", expected: "/...", reason: "three dots is a literal directory name, not special" },
  { input: "/...a/", expected: "/...a", reason: "a dot-like name is kept as-is" },
  {
    input: "/.../a/../b/c/../d/./",
    expected: "/.../b/d",
    reason: "a directory literally named with dots is preserved among real navigation tokens"
  },
  {
    input: "/a1_b2/./c_3/../d4",
    expected: "/a1_b2/d4",
    reason: "digits and underscores are valid characters in directory names"
  },
  { input: "/x", expected: "/x", reason: "single top-level directory" },
  {
    input: "/" + "a/".repeat(1000) + "../".repeat(999),
    expected: "/a",
    reason: "long alternating push/pop sequence at the length limit leaves a single directory"
  }
];

describe("simplifyPath", () => {
  for (const { input, expected, reason } of testCases) {
    it(`${reason}: ${formatInput(input)}`, () => {
      assert.equal(simplifyPath(input), expected);
    });
  }
});

function formatInput(input: string): string {
  return input.length <= 40 ? JSON.stringify(input) : `path with ${input.length} characters`;
}
