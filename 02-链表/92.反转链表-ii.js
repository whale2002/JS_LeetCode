/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
let node = null // 第n+1个节点
const reverseN = (head, n) => {
  if (n === 1) {
    node = head.next
    return head
  }
  let last = reverseN(head.next, n - 1)
  head.next.next = head
  head.next = node

  return last
}
var reverseBetween = function (head, left, right) {
  if (left === 1) {
    return reverseN(head, right) //反转前n个
  }

  head.next = reverseBetween(head.next, left - 1, right - 1)

  return head
}

// TODO: 本质是反转前n个元素
// @lc code=end
