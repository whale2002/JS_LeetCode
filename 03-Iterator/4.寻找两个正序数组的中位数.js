/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let len1 = nums1.length, len2 = nums2.length, i = 0, j = 0
  let joinNums = []

  while(i < len1 && j < len2) {
    if(nums1[i] <= nums2[j]) {
      joinNums.push(nums1[i++])
    } else if(nums1[i] > nums2[j]) {
      joinNums.push(nums2[j++])
    }
  }

  joinNums = joinNums.concat(i < len1 ? nums1.slice(i) : nums2.slice(j))

  let newLen = joinNums.length
  console.log(newLen)
  if(newLen % 2 === 0) {
    return (joinNums[newLen/2] + joinNums[newLen/2-1])/2
  }
  return joinNums[Math.floor(newLen/2)]
};

console.log(findMedianSortedArrays([1, 3], [2,4]))
// @lc code=end

