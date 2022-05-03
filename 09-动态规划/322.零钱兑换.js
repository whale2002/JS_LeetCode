/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  if (amount === 0) return 0
  // 自底向上
  // 状态转移方程: dp[i] = 1 + min(dp[i-coin[0]], dp[i-coin[1]], dp[i-coin[2]], ...)
  let dp = new Array(amount+1).fill(Infinity)
  dp[0] = 0

  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (coin > i) continue
      dp[i] = Math.min(dp[i], 1 + dp[i - coin])
    }
  }

  return dp[amount] == Infinity ? -1 : dp[amount]
}

console.log(coinChange([1, 2, 5], 11))
