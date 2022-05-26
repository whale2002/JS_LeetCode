/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, t) {
  let left = 0,
    right = 0
  let valid = 0
  let res = []

  // 录入
  let needs = new Map(),
    win = new Map()
  for (let i = 0; i < t.length; i++) {
    if (needs.has(t[i])) needs.set(t[i], needs.get(t[i]) + 1)
    else needs.set(t[i], 1)
  }

  while (right < s.length) {
    // 扩大窗口
    let char = s[right++]
    if (needs.has(char)) {
      win.has(char) ? win.set(char, win.get(char) + 1) : win.set(char, 1)
      if (win.get(char) === needs.get(char)) {
        valid++
      }
    }

    // 收缩
    while (right - left >= t.length) {
      if (valid === needs.size) res.push(left)
      let char = s[left]
      left++
      if (win.has(char)) {
        if (win.get(char) === needs.get(char)) valid--
        win.set(char, win.get(char) - 1)
      }
    }
  }

  return res
}
// @lc code=end
