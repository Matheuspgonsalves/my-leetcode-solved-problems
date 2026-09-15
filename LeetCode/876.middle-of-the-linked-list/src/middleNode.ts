export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * Returns the middle node of the list, or the second middle node when the length is even.
 */
export function middleNode(head: ListNode | null): ListNode | null {
  let length: number = getListLength(head);
  let current = head;

  for(let i = 0; i !== Math.floor(length / 2); i++) {
    current = current!.next;
  }

  return current;
}

function getListLength(head: ListNode | null): number {
  let count: number = 0;
  let current = head;
 
  if(current !== null) {
    while(current.next !== null) {
      current = current.next;
      count++;
    }
    count++;
  }
 
  return count;
}
