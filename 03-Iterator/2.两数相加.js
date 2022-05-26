/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 为什么效率这么低
var addTwoNumbers = function (l1, l2) {
  // 链表
  let p1 = l1,
    p2 = l2
  let add = 0
  let res = new ListNode(),
    p = res

  while (p1 || p2) {
    let val1 = p1 ? p1.val : 0
    let val2 = p2 ? p2.val : 0

    if (p1) p1 = p1.next
    if (p2) p2 = p2.next

    console.log(val1, val2)
    let sum = val1 + val2 + add
    let c = sum % 10
    add = Math.floor(sum / 10)

    p.next = new ListNode(c)
    p = p.next
  }

  if (add) p.next = new ListNode(add)

  return res.next
}
// @lc code=end
