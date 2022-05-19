/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if(!root) return []
  
  let res = [], que = []
  let direction = true
  que.push(root)

  while (que.length) {
    let length = que.length // star
    let curLayer = [],
      nextLayer = []

    for (let i = 0; i < length; i++) {
      //遍历当前层
      let front = que[i]

      if(front.left) nextLayer.push(front.left)
      if(front.right) nextLayer.push(front.right)

      if(direction) curLayer.push(front.val)
      else curLayer.unshift(front.val)
    }

    console.log('next', nextLayer, 'cur', curLayer)
    que = nextLayer
    res.push(curLayer)
    direction = !direction
  }

  return res
}
// @lc code=end

// TODO: 脑筋急转弯，层序遍历  前插和后插实现顺序
