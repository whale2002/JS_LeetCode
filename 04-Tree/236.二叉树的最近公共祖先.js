/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  return find(root, p.val, q.val)
}
// @lc code=end

function find(root, p, q) {
  if (!root) return null

  if (root.val === p || root.val === q) return root

  const left = find(root.left, p, q)
  const right = find(root.right, p, q)

  if (left && right) return root

  return left ? left : right
}
