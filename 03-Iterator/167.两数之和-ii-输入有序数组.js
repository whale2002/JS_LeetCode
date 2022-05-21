/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let left = 1, right = numbers.length
  numbers.unshift(0)

  while(left < right) {
    if(numbers[left] + numbers[right] === target) {
      return [left, right]
    } else if(numbers[left] + numbers[right] > target) {
      right--
    } else if(numbers[left] + numbers[right] < target) {
      left++
    }
  }
  
  console.log(left, right);
};

twoSum([2,7,11,15], 9)
// @lc code=end

