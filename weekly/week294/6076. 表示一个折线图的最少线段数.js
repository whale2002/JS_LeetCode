/**
 * @param {number[][]} stockPrices
 * @return {number}
 */
var minimumLines = function (stockPrices) {
  let length = stockPrices.length

  if (length === 1) return 0
  if (length === 2) return 1

  let counter = 1
  stockPrices.sort((a, b) => a[0] - b[0])

  for (let i = 2; i < length; i++) {
    if (
      BigInt(stockPrices[i][1] - stockPrices[i - 1][1]) *
        BigInt(stockPrices[i - 1][0] - stockPrices[i - 2][0]) !==
      BigInt(stockPrices[i - 1][1] - stockPrices[i - 2][1]) *
        BigInt(stockPrices[i][0] - stockPrices[i - 1][0])
    ) {
      counter++
    }
  }

  return counter
}

console.log(
  minimumLines([
    [1, 1],
    [500000000, 499999999],
    [1000000000, 999999998]
  ])
)
