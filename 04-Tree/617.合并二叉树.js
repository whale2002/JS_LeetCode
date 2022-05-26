/*
 * @lc app=leetcode.cn id=617 lang=javascript
 *
 * [617] 合并二叉树
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  if (!root1 && !root2) return null

  let root = new TreeNode(),
    tmp = root
  travel(root1, root2, tmp)

  return root
}

function travel(root1, root2, root) {
  if (!root1 && !root2) return
  if (root1 && root2) {
    root.val = root1.val + root2.val
  } else if (root1 && !root2) {
    root.val = root1.val
  } else if (!root1 && root2) {
    root.val = root2.val
  }

  if((root1 && root1.left) || (root2 && root2.left)) {
    let leftNode = new TreeNode()
    root.left = leftNode
    travel(root1.left, root2.left, root.left)
  }

  if((root1 && root1.right) || (root2 && root2.right)) {
    let rightNode = new TreeNode()
    root.right = rightNode
    travel(root1.right, root2.right, root.right)
  }
}

var mergeTrees = function (root1, root2) {
  if(!root1) return root2
  if(!root2) return root1
  
  root1.val += root2.val

  root1.left = mergeTrees(root1.left, root2.left)
  root1.right = mergeTrees(root1.right, root2.right)

  return root1
}
// @lc code=end
