/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function (nums) {
  let set = new Set(nums)
  let max = 0
  for (let num of set) {
    let length = 0
    if (!set.has(num - 1)) {
      // 说明这个数是第一个数
      while (set.has(num)) {
        length++
        num++
      }
      max = length > max ? length : max
    }
  }
  return max
}

let arr = [5, 4, 1, 1, 2,  4, 5, 5]

console.log(longestConsecutive(arr))
