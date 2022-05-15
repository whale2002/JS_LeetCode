/**
 * @param {number[]} candidates
 * @return {number}
 */
var largestCombination = function (candidates) {
  let length = candidates.length
  let counter = new Array(24).fill(0)

  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < length; j++) {
      if ((candidates[j] & 1) === 1) counter[i]++
      candidates[j] >>>= 1
    }
  }

  return counter.sort((a, b) => a - b)[counter.length - 1]
}

console.log(largestCombination([16, 17, 71, 62, 12, 24, 14]))
