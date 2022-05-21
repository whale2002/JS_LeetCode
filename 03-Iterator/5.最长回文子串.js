/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let res = ''

  for(let i = 0; i < s.length; i++) {
    let res1 = getPalindrome(s, i, i)
    let res2 = getPalindrome(s, i, i+1)
    
    res = res.length > res1.length ? res : res1
    res = res.length > res2.length ? res : res2
  }

  return res
};

function getPalindrome(s, l, r) {
  while(l >= 0 && r < s.length && s[l] === s[r]) {
    l--, r++
  }
  return s.slice(l+1, r)
}

console.log(longestPalindrome('cbaabd'))
// @lc code=end

