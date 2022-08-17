/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  let res = []
  const reverse = (head) => {
    if (head.next) {
      reverse(head.next)
    }
    res.push(head.val)
  }

  if (head) reverse(head)
  return res
}
