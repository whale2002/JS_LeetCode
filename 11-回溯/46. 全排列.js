/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let res = []
  let path = []
  let used = new Array(nums.length).fill(false)

  backTrack(nums, path, used)

  return res

  function backTrack(nums, path, used) {
    if (path.length === nums.length) {
      res.push([...path])
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue
      used[i] = true
      path.push(nums[i])
      backTrack(nums, path, used)
      path.pop()
      used[i] = false
    }
  }
}

console.log(permute([1, 2, 3]))
