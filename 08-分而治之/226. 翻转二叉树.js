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
 * @return {TreeNode}
 */
function invert(root) {
  let tmp = root.left
  root.left = root.right
  root.right = tmp
  root.left && invert(root.left)
  root.right && invert(root.right)
}
var invertTree = function (root) {
  invert(root)
  return root
}

// 反转二叉树
