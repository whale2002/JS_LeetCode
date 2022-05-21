/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// key: 双指针
var addStrings = function (num1, num2) {
  let i = num1.length - 1,
    j = num2.length - 1
  let res = '',
    add = 0

  while (i >= 0 || j >= 0) {
    let a = parseInt(num1[i] ?? 0),
      b = parseInt(num2[j] ?? 0)
      
    let c = (a + b + add) % 10
    add = Math.floor((a + b + add) / 10)
    res = c + res
    i--, j--
  }

  return add ? add + res : res
}

console.log(addStrings('456', '77'))
// @lc code=end
