/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if(!head.next) return true

  let flag = true

  let pre = head, post = head.next
  while(post.next) {
    post.last = pre
    pre = pre.next
    post = post.next
  }
  post.last = pre

  while(head) {
    if(head.val !== post.val) {
      flag = false
      break
    }
    head = head.next
    post = post.last
  }

  return flag
};
// @lc code=end

