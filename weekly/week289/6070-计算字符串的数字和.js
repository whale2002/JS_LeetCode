/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function (s, k) {
  while(s.length > k) {
    let arr = [], arrLength = Math.ceil(s.length / k)
    for(let i = 0, j = 0; i < arrLength; i++, j+=k) {
      let sum = 0
      for(let m = j; m < j+k; m++) {
        if(!s[m]) break
        sum += parseInt(s[m])
      }
      arr.push(sum+'')
    }
    s = arr.join('')
  }
  return s
}

digitSum("00000000", 3)
