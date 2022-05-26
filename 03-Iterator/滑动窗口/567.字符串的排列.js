/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (t, s) {
  let left = 0,
    right = 0
  let valid = 0

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
      if(valid === needs.size) return true
      let char = s[left]
      left++
      if (win.has(char)) {
        if (win.get(char) === needs.get(char)) valid--
        win.set(char, win.get(char) - 1)
      }
    }
  }

  return false
}
// @lc code=end
