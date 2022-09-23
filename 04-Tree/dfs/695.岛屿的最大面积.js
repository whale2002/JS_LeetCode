/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let m = grid.length,
    n = grid[0].length

  let max = 0

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      max = Math.max(max, dfs(grid, i, j))
    }
  }

  function dfs(grid, i, j) {
    let m = grid.length,
      n = grid[0].length
    if (i < 0 || j < 0 || i >= m || j >= n) return 0
    if (grid[i][j] === 0) return 0

    grid[i][j] = 0

    return (
      1 +
      dfs(grid, i - 1, j) +
      dfs(grid, i + 1, j) +
      dfs(grid, i, j - 1) +
      dfs(grid, i, j + 1)
    )
  }

  return max
}
