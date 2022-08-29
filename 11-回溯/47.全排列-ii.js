/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  let res = []
  let path = []
  let used = new Array(nums.length).fill(false)
  nums.sort((a, b) => a - b)

  backTrack(nums, path, used)

  return res

  function backTrack(nums, path, used) {
    if (path.length === nums.length) {
      // 到树底部
      res.push([...path])
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue
      if (i >= 1 && nums[i - 1] === nums[i] && used[i - 1] === false) continue
      used[i] = true
      path.push(nums[i])
      backTrack(nums, path, used)
      path.pop()
      used[i] = false
    }
  }
}

console.log(permuteUnique([1, 2, 1]))
// @lc code=end
