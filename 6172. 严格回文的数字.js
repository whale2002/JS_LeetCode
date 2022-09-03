/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function (n) {
  let b = n - 2 // 2-b进制

  for (let i = 2; i <= b; i++) {
    let _n = n
    let res = ''

    while (_n) {
      res = (_n % i) + res
      _n = (_n - (_n % i)) / i
    }

    if (res === res.split('').reverse().join()) return true
  }

  return false
}

console.log(isStrictlyPalindromic(9))
