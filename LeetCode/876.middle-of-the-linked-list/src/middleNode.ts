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
  let length: number = getHeadLength(head);

  for(let i = 0; i !== Math.floor(length / 2); i++) {
    head = head?.next!;
  }


  return head;
}

function getHeadLength(head: ListNode | null): number {
  let count: number = 0;
 
  if(head !== null) {
    while(head.next !== null) {
      head = head.next;
      count++
    }
    count++
  }
 
  return count;
}
