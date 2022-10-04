/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxSum = function (grid) {
  let m = grid.length,
    n = grid[0].length

  let res = 0,
    sum = 0
  for (let i = 0; i <= m - 3; i++) {
    for (let j = 0; j <= n - 3; j++) {
      sum =
        grid[i][j] +
        grid[i][j + 1] +
        grid[i][j + 2] +
        grid[i + 1][j + 1] +
        grid[i + 2][j] +
        grid[i + 2][j + 1] +
        grid[i + 2][j + 2]

      res = Math.max(res, sum)
    }
  }

  return res
}

console.log(
  maxSum([
    [520626, 685427, 788912, 800638, 717251, 683428],
    [23602, 608915, 697585, 957500, 154778, 209236],
    [287585, 588801, 818234, 73530, 939116, 252369]
  ])
)
