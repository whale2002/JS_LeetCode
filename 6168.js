/**
 * @param {number} startPos
 * @param {number} endPos
 * @param {number} k
 * @return {number}
 */

var numberOfWays = function (startPos, endPos, k) {
  const mod = 1e9 + 7
  const memo = new Array(1000).fill(new Array(k).fill(0))

  return res1 + res2

  function getWays(startPos, endPos, k) {
    if (k === 1) {
      if (Math.abs(endPos - startPos) === 1) return 1
      else return 0
    }

    if (memo[startPos][k]) return memo[startPos][k]

    let leftPos = endPos - 1
    let rightPos = endPos + 1
    let dis = k - 1
    let res1 = numberOfWays(startPos, leftPos, dis) % mod
    let res2 = numberOfWays(startPos, rightPos, dis) % mod

    memo[startPos][dis] = res1
    memo['' + startPos + rightPos + dis] = res2
  }
}

console.log(numberOfWays(1, 50, 49))
