/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  let res = true
  if (!p && !q) return true
  if ((q && !p) || (!q && p) || (!q && !p)) return false

  const travel = (p, q) => {
    if (!p && !q) return
    if ((q && !p) || (p && !q) || p.val !== q.val) {
      res = false
      return
    }

    travel(p.left, q.left)
    travel(p.right, q.right)
  }

  travel(p, q)

  return res
}
