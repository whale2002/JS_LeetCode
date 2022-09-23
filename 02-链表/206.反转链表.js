/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head || !head.next) return head

  let last = reverseList(head.next)
  head.next.next = head
  head.next = null

  return last
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let p1 = null,
    p2 = head

  while (p2) {
    let tmp = p1
    p1 = p2
    p2 = p2.next
    p1.next = tmp
  }

  return p1
}
