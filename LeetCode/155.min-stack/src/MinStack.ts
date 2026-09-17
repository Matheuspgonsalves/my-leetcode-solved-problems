export class MinStack {
    private stack: number[] = [];
    private minStack: number[] = [Infinity];

    push(value: number): void {
        this.minStack.push(Math.min(value, this.getMin()));
        this.stack.push(value);
    }

    pop(): void {
        this.stack.pop();
        this.minStack.pop();
    }

    top(): number {
        return this.stack[this.stack.length - 1];
    }

    getMin(): number {
        return this.minStack[this.minStack.length - 1];
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
