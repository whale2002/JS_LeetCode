/*
 * @lc app=leetcode.cn id=1302 lang=javascript
 *
 * [1302] 层数最深叶子节点的和
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
var deepestLeavesSum = function (root) {
  let queue = [],
    nextQueue = []
  queue.push(root)
  let res = 0

  while (queue.length) {
    res = 0
    while (queue.length) {
      let node = queue.shift()
      res += node.val
      if (node.left) {
        nextQueue.push(node.left)
      }
      if (node.right) {
        nextQueue.push(node.right)
      }
    }
    queue = nextQueue
    nextQueue = []
  }

  return res
}

var deepestLeavesSum = function (root) {
  let queue = []
  queue.push(root)
  let depth = 0
  let map = new Map()

  while (queue.length) {
    let size = queue.length
    map.set(depth, 0)
    // 该层有几个元素
    for (let i = 0; i < size; i++) {
      let node = queue.shift()
      map.set(depth, map.get(depth) + node.val)
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
    depth++
  }

  return map.get(depth - 1)
}

// @lc code=end
