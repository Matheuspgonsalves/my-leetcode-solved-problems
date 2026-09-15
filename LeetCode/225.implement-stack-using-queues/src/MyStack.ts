/**
 * A last-in-first-out stack built out of queue operations only.
 */
export class MyStack {
  private queueStack: number[];

  constructor(){
    this.queueStack = [];
  }

  push(x: number): void {
    this.queueStack.push(x);

    for(let i = 0; i < this.queueStack.length - 1; i++) {
      this.queueStack.push(this.queueStack.shift()!);
    }
  }

  pop(): number {
    return this.queueStack.shift()!;
  }

  top(): number {
    return this.queueStack[0]!;
  }

  empty(): boolean {
    return this.queueStack.length === 0;
  }
}
