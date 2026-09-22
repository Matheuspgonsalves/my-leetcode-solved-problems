export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * Returns true if the linked list has a cycle, false otherwise.
 */
export function hasCycle(head: ListNode | null): boolean {
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while(fast?.next != null) {
    slow = slow!.next;
    fast = fast!.next!.next;
    if(slow == fast) return true;
  }

  return false;
}
