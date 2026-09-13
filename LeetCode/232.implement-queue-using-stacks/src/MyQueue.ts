/**
 * A first-in-first-out queue built out of stack operations only.
 */
export class MyQueue {
  private inStack: number[];
  private outStack: number[];

  constructor(){
    this.inStack = []
    this.outStack = []
  }

  push(x: number): void {
    this.inStack.push(x);
  }

  pop(): number {
    this.moveInStackToOutStack();
    return this.outStack.pop()!;
  }

  peek(): number {
    this.moveInStackToOutStack();
    return this.outStack[this.outStack.length - 1]!;
  }

  empty(): boolean {
    return this.inStack.length === 0 && this.outStack.length === 0;
  }

  moveInStackToOutStack(): void{
    if(this.outStack.length === 0) {
      while(this.inStack.length > 0) {
        this.outStack.push(this.inStack.pop()!);
      }
    }
  }
}
