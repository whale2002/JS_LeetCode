/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (!root) return null

  if (root.val === key) {
    if (!root.left) return root.right //该节点是根结点或者只含有一个节点
    if (!root.right) return root.left
    let maxNode = getMax(root.left) //否则，获取左子树的最大节点或右子树的最小值
    root.val = maxNode.val
    root.left = deleteNode(root.left, maxNode.val)
  } else if (root.val > key) {
    root.left = deleteNode(root.left, key)
  } else {
    root.right = deleteNode(root.right, key)
  }

  return root
}

function getMax(node) {
  while (node.right) node = node.right
  return node
}
// @lc code=end

// TODO: 数据结构，二叉搜索树 BST
