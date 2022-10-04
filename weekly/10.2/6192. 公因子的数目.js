/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function (a, b) {
  let min = Math.min(a, b),
    max = Math.max(a, b)

  let res = 0

  for (let i = 1; i <= Math.sqrt(min); i++) {
    if (min % i === 0) {
      if (max % i === 0) res++
      if (max % (min / i) === 0 && min / i !== i) res++
    }
  }

  return res
}

let res = commonFactors(25, 30)
console.log(res)
