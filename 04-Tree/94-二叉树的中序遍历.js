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
 * @return {number[]}
 */
let res = []

const travel = (root) => {
  if(!root) return 

  travel(root.left)
  res.push(root.val)
  travel(root.right)
}

const inorderTraversal = function(root) {
  res = []
  travel(root)

  return res
};