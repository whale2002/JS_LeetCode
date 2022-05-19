/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// key: 破坏性解法，运用js字符串方法
// var isSubsequence = function (s, t) {
//   let index,
//     flag = true

//   for (let i = 0; i < s.length; i++) {
//     index = t.indexOf(s[i])

//     if (index === -1) {
//       flag = false
//       break
//     }
//     t = t.slice(index+1)
//   }

//   return flag
// }

// key: 双指针
// var isSubsequence = function (s, t) {
//   let i = 0, j = 0

//   while(i < s.length && j < t.length) {
//     if(s[i] === t[j]) i++
//     j++
//   }

//   return i === s.length
// }

// key: 终极解法: 二分 https://labuladong.github.io/algo/4/31/132/

console.log(isSubsequence('axc', 'baab'))
// @lc code=end
