/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */

// key: 贪心
var maximumBags = function (capacity, rocks, additionalRocks) {
  let restCapacity = []

  let length = capacity.length

  for (let i = 0; i < length; i++) {
    restCapacity.push(capacity[i] - rocks[i])
  }

  restCapacity.sort((a, b) => a - b)

  let i
  for (i = 0; i < length; i++) {
    if (restCapacity[i] <= additionalRocks) {
      additionalRocks -= restCapacity[i]
      item = 0
    } else {
      break
    }
  }

  return i
}

console.log(maximumBags([2, 3, 4, 5], [1, 2, 4, 4], 2))
