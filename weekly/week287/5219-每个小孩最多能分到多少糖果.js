/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
const maximumCandies = function (candies, k) {
  const length = candies.length
  candies.sort((a, b) => a - b)

  let min = 1,
    sum = 0
  for(let item of candies) sum += item
  if(sum < k) return 0

  let max = Math.floor(sum / k)
  let left = min, right = max, mid

  const check = (t) => {
    let cnt = 0
    for(let item of candies) {
      cnt += Math.floor(item/t)
      if(cnt > k) return true  // 可以保证分给每一个人 t 个
    }
    if(cnt > k) return true
    return false
  }

  while(left < right) {
    mid = Math.floor((left + right) / 2)
    if(check(mid)) left = mid + 1
    else r = mid
  }

  return left - 1
}

console.log(maximumCandies([1, 2, 3], 2))
