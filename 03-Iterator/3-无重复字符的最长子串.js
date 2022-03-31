/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (str) {
  let left = 0,
    right = 0
  let res = 0,
    length = str.length
  let map = new Map()

  for (; right < length; right++) {
    if (map.has(str[right]) && map.get(str[right]) >= left)
      left = map.get(str[right]) + 1 //left只能向右走，避免 [abba]的情况
    console.log(left, right)
    res = Math.max(right - left + 1, res) // 每次移动都算一遍
    console.log(res)
    map.set(str[right], right)
  }

  return res
}

lengthOfLongestSubstring('abcabcbb')
