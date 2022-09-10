/**
 * @param {number[]} chargeTimes
 * @param {number[]} runningCosts
 * @param {number} budget
 * @return {number}
 */
var maximumRobots = function (chargeTimes, runningCosts, budget) {
  let n = chargeTimes.length
  let res = 0

  for (let i = 0, j = 0; i < n, j < n; ) {
    let length = j - i + 1
    let sum = getMax(i, j) + length * getSum(i, j)

    if (sum <= budget) {
      // 继续滑动
      res = Math.max(res, length)
      j++
    } else {
      if(i===j) i++, j++
      else i++
    }
  }

  return res

  function getMax(i, j) {
    let max = chargeTimes[i]
    i++

    for (; i <= j; i++) {
      max = Math.max(max, chargeTimes[i])
    }

    return max
  }

  function getSum(i, j) {
    let res = 0

    for (; i <= j; i++) {
      res += runningCosts[i]
    }

    return res
  }
}

// chargeTimes = [3,6,1,3,4], runningCosts = [2,1,3,4,5], budget = 25
console.log(maximumRobots([11, 12, 19], [10, 8, 7], 19))
