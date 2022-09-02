/*
 * @lc app=leetcode.cn id=1030 lang=javascript
 *
 * [1030] 距离顺序排列矩阵单元格
 */

// @lc code=start
/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
var allCellsDistOrder = function (rows, cols, rCenter, cCenter) {
  let res = []

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const dis = Math.abs(i-rCenter) + Math.abs(j-cCenter)
      res.push([i, j, dis])
    }
  }

  res.sort((a, b) => {
    return a[2] - b[2]
  })

  res.forEach((item) => {
    item.pop()
  })

  return res
}

console.log(allCellsDistOrder(2, 2, 0, 1))
// @lc code=end
