/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if(n == 1) return 1
  const dp = [1, 1]   // 0-> 1  1->1  2->2

  for(let i = 2; i <= n; i++) {
    dp[i] = dp[i-1] + dp[i-2]
  }

  return dp[n]
}

climbStairs(2)
