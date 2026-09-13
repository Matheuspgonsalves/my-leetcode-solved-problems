/**
 * A first-in-first-out queue built out of stack operations only.
 */
export class MyQueue {
  private items: number[] = [];

  push(x: number): void {
    this.items.push(x);
  }

  pop(): number {
    return this.items.pop() as number;
  }

  peek(): number {
    return this.items[this.items.length - 1] as number;
  }

  empty(): boolean {
    return this.items.length === 0;
  }
}
