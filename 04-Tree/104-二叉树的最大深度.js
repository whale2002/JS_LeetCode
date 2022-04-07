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

const maxDepth = function (root) {
  if (!root) return 0

  const dfs = (root, dep) => {
    if(!root) return 
    if(!root.left && !root.right) {
      res = Math.max(res, dep)
    }
    dfs(root.left, dep+1)
    dfs(root.right, dep+1)
  }

  let res = 1
  dfs(root, 1)  // js 的闭包性质

  return res
}
