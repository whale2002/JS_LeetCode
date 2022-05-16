/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */

// 虚拟头结点yyds
var removeNthFromEnd = function (head, n) {
  let vnode = new ListNode(-1)
  vnode.next = head

  let end = vnode,
    start = vnode

  for (let i = 0; i < n; i++) {
    end = end.next
  }

  while (end && end.next) {
    start = start.next
    end = end.next
  }

  start.next = start.next.next

  return vnode.next
}
// @lc code=end
