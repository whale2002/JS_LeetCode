/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 1) return nums[0]
  const dp = [0, nums[0]]

  let length = nums.length
  for (let i = 2; i <= length; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i - 1], dp[i - 1])
  }

  return dp[length]
}
