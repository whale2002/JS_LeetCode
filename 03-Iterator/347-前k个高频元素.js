/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 const topKFrequent = function (nums, k) {
  let map = new Map()

  nums.forEach(num => {
    map.set(num, map.has(num) ? map.get(num) + 1 : 1)
  })

  return Array.from(map).sort((a, b) => b[1] - a[1]).slice(0, k)
  .map(item => item[0])
}
