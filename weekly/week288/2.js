/**
 * @param {string} expression
 * @return {string}
 */
// 6038 暴力
const minimizeResult = function (expression) {
  let arr = expression.split('+') // 左边和右边
  let left = arr[0].split(''),
    right = arr[1].split('')

  let min = Infinity,
    mul = 0,
    minIndex = [0, 0]

  for (let i = 0; i < left.length; i++) {
    for (let j = 1; j <= right.length; j++) {
      mul =
        (+left.slice(0, i).join('') || 1) *
        (+right.slice(j).join('') || 1) *
        ((+left.slice(i).join('') || 0) + (+right.slice(0, j).join('') || 0))
      if (mul < min) {
        min = mul
        minIndex = [i, j]
      }
    }
  }
  left.splice(minIndex[0], 0, '(')
  right.splice(minIndex[1], 0, ')')

  return left.join('') + '+' + right.join('')
}

console.log(minimizeResult('999+999'))
