/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === target) return true
    }
  }

  return false
}

const findNumberIn2DArray = (matrix, target) => {
  if (matrix.length === 0) return false
  let m = matrix.length - 1,
    n = matrix[0].length - 1
  let x = 0,
    y = n

  while (x <= m && y >= 0) {
    if (matrix[x][y] === target) return true
    else if (matrix[x][y] > target) {
      y--
    } else if (matrix[x][y] < target) {
      x++
    }
  }
  return false
}

console.log(
  findNumberIn2DArray(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30]
    ],
    5
  )
)
