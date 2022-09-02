/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
  if (n === 1 || n === 1) return 1
  let preMemo = 1,
    lastMemo = 1

  for (let i = 2; i <= n; i++) {
    const tmp = lastMemo
    lastMemo = (preMemo + lastMemo) % (1e9 + 7)
    preMemo = tmp
  }

  return lastMemo
}
