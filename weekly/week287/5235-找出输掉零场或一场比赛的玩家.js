/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
const findWinners = function (matches) {
  let winners = new Set()
  let losers = new Set()
  let losersMost = new Set()

  matches.forEach((item) => {
    winners.add(item[0])

    if (!losers.has(item[1]) && !losersMost.has(item[1])) losers.add(item[1])
    else {
      losers.delete(item[1])
      losersMost.add(item[1])
    }
  })
  matches.forEach((item) => {
    if (winners.has(item[1])) winners.delete(item[1])
  })

  let res1 = [...winners].sort((a, b) => a - b)
  let res2 = [...losers].sort((a, b) => a - b)
  return [res1, res2]
}

let res = findWinners([
  [1, 5],
  [2, 5],
  [2, 8],
  [2, 9],
  [3, 8],
  [4, 7],
  [4, 9],
  [5, 7],
  [6, 8]
])
console.log(res)
