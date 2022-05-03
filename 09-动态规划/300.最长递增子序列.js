/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let length = nums.length;
  let dp = new Array(length).fill(1); // dp数组表示以 nums[i]结尾的最长递增子序列之和

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }

  let res = 1;
  dp.forEach((num) => {
    res = Math.max(res, num);
  });

  return res;
};
// @lc code=end

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
