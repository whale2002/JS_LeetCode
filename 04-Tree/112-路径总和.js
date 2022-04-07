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
 * @param {number} targetSum
 * @return {boolean}
 */
const hasPathSum = function (root, targetSum) {
  let flag = false

  const dfs = (node, sum) => {
    if (!node) return
    sum += node.val

    if (!node.left && !node.right && sum === targetSum) {
      flag = true
      return
    } else {
      dfs(node.left, sum)
      dfs(node.right, sum)
    }
  }

  dfs(root, 0)

  return flag
}
