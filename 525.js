var findMaxLength = function(nums) {
  let n = nums.length
  let sum = 0  //前缀和
  let ret = 0  //长度

  let map = new Map()
  map.set(0, -1) // [1, 0]

  for(let i = 0; i < n; i++) {
    sum += (nums[i] ? 1 : -1)
    
    if(map.has(sum)) {
      // 更新长度
      ret = ret > i - map.get(sum) ? ret : i - map.get(sum)
    } else {
      // 当没有键为0， -1， 1 的时候
      map.set(sum, i)
    }
  }
  
  return ret
}