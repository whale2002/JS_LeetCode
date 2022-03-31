/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
  let slow = 0, fast = 0
  let length = nums.length

  while(fast < length) {
    if(nums[slow] === nums[fast]) fast++
    else {
      slow++
      nums[slow] = nums[fast]
      fast++
    }
  }

  return slow + 1
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))
