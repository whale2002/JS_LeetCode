/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0,
    right = nums.length-1,
    mid

  while (left <= right) {
    mid = Math.floor(left + (right - left) / 2)

    if (nums[mid] === target) {
      return mid  //while里面可以直接return
    } else if (nums[mid] > target) {
      right = mid - 1
    } else if (nums[mid] < target) {
      left = mid + 1
    }
  }

  return -1
}

console.log(search([-1, 0, 3, 5, 9, 12], 13))
// @lc code=end
