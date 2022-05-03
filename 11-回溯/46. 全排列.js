/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let res = []

  function backTrack(path) {
    if(path.length === nums.length) res.push(path)
    nums.forEach(num => {
      if(path.includes(num)) return 
      backTrack(path.concat(num))   // path.contact 返回值是数组
    })
  }

  backTrack([])
  return res
}

console.log(permute([1,2,3]))