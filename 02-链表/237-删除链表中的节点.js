/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
const deleteNode = function (node) {
  // let p = node.next //用let  const不能改变对象指向

  // while (p.next) {
  //   node.val = p.val
  //   node = node.next
  //   p = p.next
  // }
  // node.val = p.val
  // node.next = null

  node.val = node.next.val
  node.next = node.next.next
}
