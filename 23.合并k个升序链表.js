/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  const arr = []

  lists.forEach((list) => {
    while (list) {
      arr.push(list.val)
      list = list.next
    }
  })

  arr.sort((a, b) => a - b)

  let head = new ListNode(-1),
    vnode = head
  arr.forEach((item) => {
    let node = new ListNode(item)
    vnode.next = node
    vnode = vnode.next
  })

  return head.next
}
// @lc code=end
