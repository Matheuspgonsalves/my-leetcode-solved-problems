# Exercicios-leetcode-like

A personal, growing collection of coding-interview practice problems, solved and organized by topic.

This repository is the **parent workspace** for all the exercises. Each problem lives in its own self-contained folder with its own `README.md`, problem statement, solution and tests, so it can be opened, run and tested independently — while this top-level `README.md` keeps the map of everything that has been solved so far.

## Why this repository exists

Technical interviews at most tech companies — from global players (Google, Amazon, Meta, Microsoft, ...) to Brazilian tech companies with strong engineering bars (Nubank, iFood, Mercado Livre, Stone, PicPay, QuintoAndar, ...) — lean heavily on data-structure-and-algorithm questions in the LeetCode style. The goal of this repository is to:

- Build and keep sharp the muscle memory for the patterns that show up over and over in these interviews (two pointers, sliding window, BFS/DFS, dynamic programming, etc).
- Keep a **single source of truth** of every problem practiced, categorized by topic, so progress is easy to track and gaps are easy to spot.
- Practice writing clean, typed, tested solutions — not just "make it pass" code.

## Repository structure

```
Exercicios-leetcode-like/
├── README.md              <- you are here (index of everything solved)
└── LeetCode/
    └── <number>.<problem-slug>/
        ├── README.md       <- how to run this specific exercise
        ├── PROBLEM.md      <- problem statement, examples, constraints, hints
        ├── src/            <- solution implementation
        ├── tests/          <- test suite for the solution
        ├── package.json
        └── tsconfig.json
```

Every exercise folder is numbered and named after its LeetCode problem (e.g. `20.valid-parenteses` for [LeetCode #20 - Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)), and is a standalone TypeScript + Node.js project.

## Tech stack

- **TypeScript** for the solutions (typed, closer to production code).
- **Node.js** + [`tsx`](https://github.com/privatenumber/tsx) to run TypeScript directly, no build step needed while iterating.
- **`node:test`** (Node's built-in test runner) for the test suites.

## Running an exercise

Every exercise is independent. Enter its folder, install its dependencies and run its tests:

```bash
cd LeetCode/20.valid-parenteses
npm install
npm test
```

Each exercise folder documents any extra scripts (`npm run test:watch`, `npm run typecheck`, ...) in its own `README.md`.

## Solved problems by topic

The categories below follow the topic breakdown most commonly used to structure interview prep (in the spirit of NeetCode's roadmap), since it maps closely to what shows up in real interview loops, both abroad and at Brazilian companies like Nubank, iFood and Mercado Livre. Categories are listed even before they have solved problems, so new solutions just get slotted into the right place as they're done.

### Arrays & Hashing
_No problems solved yet._

### Two Pointers
_No problems solved yet._

### Sliding Window
_No problems solved yet._

### Stack

| # | Problem | Difficulty | Solution |
|---|---------|------------|----------|
| 20 | Valid Parentheses | Easy | [`LeetCode/20.valid-parenteses`](./LeetCode/20.valid-parenteses) |

### Binary Search
_No problems solved yet._

### Linked List
_No problems solved yet._

### Trees
_No problems solved yet._

### Tries
_No problems solved yet._

### Heap / Priority Queue
_No problems solved yet._

### Backtracking
_No problems solved yet._

### Graphs
_No problems solved yet._

### Advanced Graphs
_No problems solved yet._

### 1-D Dynamic Programming
_No problems solved yet._

### 2-D Dynamic Programming
_No problems solved yet._

### Greedy
_No problems solved yet._

### Intervals
_No problems solved yet._

### Math & Geometry
_No problems solved yet._

### Bit Manipulation
_No problems solved yet._

## Progress

- **Total solved:** 1
- **Topics covered:** 1 / 18

---

This list is updated as new exercises are solved — each new problem gets added to its topic section above, with a link to its folder.
