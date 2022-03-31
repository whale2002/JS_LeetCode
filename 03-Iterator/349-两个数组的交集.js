/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
let intersection = function (nums1, nums2) {
  // 集合写法
  // let set1 = new Set(nums1)
  // let set2 = new Set(nums2)

  // return [...set1].filter((item) => set2.has(item))

  // 字典写法
  let map = new Map()
  nums1.forEach(item => {
    map.set(item, true)
  })

  let res = []
  nums2.forEach(item => {
    if(map.get(item)) {
      res.push(item)
      map.delete(item)
    }
  })

  return res
}
