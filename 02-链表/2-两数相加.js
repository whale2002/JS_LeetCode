/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  let head = new ListNode()
  let p = head

  let up = 0,
    num = 0,
    sum = 0,
    num1 = 0,
    num2 = 0

  while (l1 || l2) {
    let node = new ListNode()

    num1 = l1 ? l1.val : 0
    num2 = l2 ? l2.val : 0

    sum = num1 + num2 + up
    num = sum % 10
    up = Math.floor(sum / 10) //向下取整

    node.val = num
    node.next = null
    p.next = node
    p = p.next

    l1 = l1?.next
    l2 = l2?.next
  }
  if (up) {
    //
    p.next = new ListNode(1)
  }

  return head.next
}
