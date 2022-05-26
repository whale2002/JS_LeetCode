/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
// key: 滑动窗口
var minwin = function (s, t) {
  let left = 0,
    right = 0
  let valid = 0
  let len = Infinity,
    start = 0

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
    while (valid === needs.size) {
      if (right - left < len) {
        start = left
        len = right - left
      }
      let char = s[left]
      left++
      if (win.has(char)) {
        if (win.get(char) === needs.get(char)) valid--
        win.set(char, win.get(char) - 1)
      }
    }
  }

  return len === Infinity ? '' : s.slice(start, start + len)
}

console.log(minwin('a', 'aa'))
// @lc code=end
