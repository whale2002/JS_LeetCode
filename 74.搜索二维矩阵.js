/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

// 错误
// var searchMatrix = function (matrix, target) {
//   let m = matrix.length - 1,
//     n = matrix[0].length - 1

//   let i = Math.floor(m / 2),
//     j = Math.floor(n / 2)

//   while (i >= 0 && i <= m && j >= 0 && j <= n) {
//     if (matrix[i][j] === target) return true
//     else if (matrix[i][j] > target) {
//       if (j === 0) {
//         ;(j = n), (i = i - 1)
//       } else j = j - 1
//     } else if (matrix[i][j] < target) {
//       if (j === n) {
//         j === 0, i++
//       } else j++
//     }
//   }

//   return false
// }

var searchMatrix = function (matrix, target) {
  let m = matrix.length,
    n = matrix[0].length

  let left = 0,
    right = m * n - 1

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2)
    let x = Math.floor(mid / n),
      y = mid % n
    if (matrix[x][y] === target) return true
    else if (matrix[x][y] > target) right = mid - 1
    else if (matrix[x][y] < target) left = mid + 1
  }

  return false
}

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60]
    ],
    13
  )
)
// @lc code=end
