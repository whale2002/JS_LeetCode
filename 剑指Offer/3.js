/**
 * @param {number[]} nums
 * @return {number}
 */

// var findRepeatNumber = function (nums) {
//   let set = new Set()

//   for (let i = 0; i < nums.length; i++) {
//     if (!set.has(nums[i])) set.add(nums[i])

//     else {
//       return nums[i]
//     }
//   }
// }

// var findRepeatNumber = function (nums) {
//   nums.sort((a, b) => a - b)

//   for (let i = 0; i < nums.length; i++) {
//     if(nums[i] === nums[i+1]) return nums[i]
//   }
// }

// 下标法，通过不停交换元素，是的元素和它所对应的下标相等
var findRepeatNumber = function (nums) {
  let i = 0,
    length = nums.length

  while (i < length) {
    if (nums[i] === i) {
      i++
      continue
    }

    if (nums[i] === nums[nums[i]]) {
      return nums[i]
    }

    let tmp = nums[nums[i]]
    nums[nums[i]] = nums[i]
    nums[i] = tmp
  }
}

console.log(findRepeatNumber([3, 4, 2, 1, 1, 0]))
