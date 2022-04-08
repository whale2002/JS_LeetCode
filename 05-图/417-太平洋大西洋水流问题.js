/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
 var pacificAtlantic = function(heights) {
  const m = heights.length
  const n = heights[0].length

  const flow1 = Array.from({length: m}, () => new Array(n).fill(false))
  const flow2 = Array.from({length: m}, () => new Array(n).fill(false))

  const dfs = (r, c, flow) => {
    flow[r][c] = true;
    [[r-1, c], [r+1, c], [r, c-1], [r, c+1]].forEach(([nr, nc]) => {
      if(
        nr >=0 && nr < m &&
        nc >=0 && nc < n &&
        !flow[nr][nc] &&
        heights[r][c] <= heights[nr][nc]
      ) {
        dfs(nr, nc, flow)
      }
    })
  }

  for(let r = 0; r < m; r++) {
    dfs(r, 0, flow1)
    dfs(r, n-1, flow2)
  }
  for(let c = 0; c < n; c++) {
    dfs(0, c, flow1)
    dfs(m-1, c, flow2)
  }

  const res = []
  for(let r = 0; r < m; r++) {
    for(let c = 0; c < n; c++) {
      console.log(flow1[r][c], flow2[r][c], r, c)
      if(flow1[r][c] && flow2[r][c]) res.push([r, c])
    }
  }

  return res
};