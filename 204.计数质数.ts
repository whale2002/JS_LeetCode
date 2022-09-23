/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n: number): number {
  // let res = 0

  // for (let i = 2; i < n; i++) {
  //   if (isPrime(i)) res++
  // }

  // function isPrime(number: number): boolean {
  //   let res: boolean = true

  //   for (let i = 2; i < Math.sqrt(number); i++) {
  //     if (number % i === 0) {
  //       res = false
  //       break
  //     }
  //   }

  //   return res
  // }

  // return res

  let res = 0
  let _isPrime = new Array(n).fill(true)

  for (let i = 2; i < n; i++) {
    if (_isPrime[i]) {
      for (let j = 2 * i; j < n; j += i) {
        _isPrime[j] = false
      }
    }
  }

  for (let i = 2; i < n; i++) {
    if (_isPrime[i]) res++
  }

  return res
}
// @lc code=end
