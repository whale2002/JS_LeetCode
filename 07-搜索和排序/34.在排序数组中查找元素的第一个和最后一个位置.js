/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  if(nums.length === 0) return [-1, -1]
  let left = leftSearch(nums, target)

  if (left === -1) return [-1, -1]

  let right = rightSearch(nums, target)

  return [left, right]
}

function leftSearch(nums, target) {
  let left = 0,
    right = nums.length - 1,
    mid

  while (left <= right) {
    mid = Math.floor(left + (right - left) / 2)
    if (nums[mid] === target) {
      right = mid - 1
    } else if (nums[mid] > target) {
      right = mid - 1
    } else if (nums[mid] < target) {
      left = mid + 1
    }
  }

  if (left >= nums.length || nums[left] !== target) return -1
  return left
}
function rightSearch(nums, target) {
  let left = 0,
    right = nums.length - 1,
    mid

  while (left <= right) {
    mid = Math.floor(left + (right - left) / 2)
    if (nums[mid] === target) {
      left = mid + 1
    } else if (nums[mid] > target) {
      right = mid - 1
    } else if (nums[mid] < target) {
      left = mid + 1
    }
  }

  if (right < 0 || nums[right] !== target) return -1
  return right
}
// @lc code=end
