/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let left = 0,
    right = 0, res = 0
  // 录入
  let win = new Map()

  while (right < s.length) {
    // 扩大窗口
    let char = s[right++]

    win.has(char) ? win.set(char, win.get(char) + 1) : win.set(char, 1)
    
    while(win.get(char) > 1) {
      let char = s[left++]
      win.set(char, win.get(char)-1)
    }

    res = Math.max(res, right - left)
  }

  return res
}

console.log(lengthOfLongestSubstring('dvdf'))
// @lc code=end
