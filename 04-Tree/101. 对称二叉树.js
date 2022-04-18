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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  function travel(left, right) {
    if (!left && !right) return true
    else if ((left && !right) || (!left && right)) return false
    else if (left.val !== right.val) return false

    return travel(left.left, right.right) && travel(left.right, right.left) //只要有一个false全体 GG
  }

  return travel(root.left, root.right)
}
