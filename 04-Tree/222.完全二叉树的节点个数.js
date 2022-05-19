/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
let count = 0
var countNodes = function (root) {
  count = 0
  return reverse(root)
}

function reverse(root) {
  if(!root) return 0

  count++
  reverse(root.left)
  reverse(root.right)

  return count
}
// @lc code=end
