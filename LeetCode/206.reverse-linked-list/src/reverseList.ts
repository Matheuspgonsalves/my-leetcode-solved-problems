export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * Reverses a singly linked list in place and returns the new head.
 */
export function reverseList(head: ListNode | null): ListNode | null {
  let aux: ListNode | null = null;
  let current = head;

  while (current !== null) {
    let next = current.next;
    current.next = aux;
    aux = current;
    current = next;
  }

  return aux;
}
