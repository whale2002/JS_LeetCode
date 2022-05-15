/*
 * @lc app=leetcode.cn id=812 lang=javascript
 *
 * [812] 最大三角形面积
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function (points) {
  let length = points.length
  let res = 0

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      for (let k = j + 1; k < length; k++) {
        // 海伦公式
        let x1 = points[i][0] - points[j][0],
          y1 = points[i][1] - points[j][1]
        let x2 = points[i][0] - points[k][0],
          y2 = points[i][1] - points[k][1]
        let x3 = points[j][0] - points[k][0],
          y3 = points[j][1] - points[k][1]

        let a = Math.sqrt(x1 * x1 + y1 * y1)
        let b = Math.sqrt(x2 * x2 + y2 * y2)
        let c = Math.sqrt(x3 * x3 + y3 * y3)
        let p = (a + b + c) / 2 // this is not average

        res = Math.max(res, p * (p - a) * (p - b) * (p - c))
        console.log(a, b, c, p, res)
      }
    }
  }
  return Math.sqrt(res)
}
// @lc code=end

largestTriangleArea([
  [35, -23],
  [-12, -48],
  [-34, -40],
  [21, -25],
  [-35, -44],
  [24, 1],
  [16, -9],
  [41, 4],
  [-36, -49],
  [42, -49],
  [-37, -20],
  [-35, 11],
  [-2, -36],
  [18, 21],
  [18, 8],
  [-24, 14],
  [-23, -11],
  [-8, 44],
  [-19, -3],
  [0, -10],
  [-21, -4],
  [23, 18],
  [20, 11],
  [-42, 24],
  [6, -19]
])
