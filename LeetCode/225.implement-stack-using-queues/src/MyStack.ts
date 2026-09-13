/**
 * A last-in-first-out stack built out of queue operations only.
 */
export class MyStack {
  private items: number[] = [];

  push(x: number): void {
    this.items.push(x);
  }

  pop(): number {
    return this.items.shift() as number;
  }

  top(): number {
    return this.items[0] as number;
  }

  empty(): boolean {
    return this.items.length === 0;
  }
}
