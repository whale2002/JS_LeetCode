/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (matrix.length === 0) return []
  let m = matrix.length,
    n = matrix[0].length
  let res = []

  let a = 0,
    b = matrix[0].length - 1,
    c = matrix.length - 1,
    d = 0

  while (true) {
    for (let i = d; i <= b; i++) {
      res.push(matrix[a][i])
      console.log(matrix[a][i])
    }
    a++
    if (a > c) break
    for (let i = a; i <= c; i++) {
      res.push(matrix[i][b])
      console.log(matrix[i][b])
    }
    b--
    if (b < d) break
    for (let i = b; i >= d; i--) {
      res.push(matrix[c][i])
      console.log(matrix[c][i])
    }
    c--
    if (c < a) break
    for (let i = c; i >= a; i--) {
      res.push(matrix[i][d])
      console.log(matrix[i][d])
    }
    d++
    if (d > b) break
  }

  return res
}

spiralOrder([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
])
