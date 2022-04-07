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
 * @return {number[][]}
 */

// 曾经的面试题
const levelOrder = function(root) {
  if(!root) return []

  let queue = [], res = []
  queue.push(root)

  while(queue.length) {
    let tmp = []
    queue.forEach(item => {
      tmp.push(item.val)
    })
    res.push(tmp)

    let newQueue = queue
    queue = []
    while(newQueue.length) {
      let front = newQueue.shift()
      if(front.left) queue.push(front.left)
      if(front.right) queue.push(front.right)
    }
  }

  return res
};