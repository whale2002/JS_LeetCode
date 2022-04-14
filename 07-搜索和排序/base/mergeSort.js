// Time nlogn
// FireFox sort用的就是归并排序
const rec = function (arr) {
  if (arr.length === 1) return arr

  const mid = Math.floor(arr.length / 2)
  const left = arr.slice(0, mid)
  const right = arr.slice(mid, arr.length)

  const orderLeft = rec(left)
  const orderRight = rec(right)

  const res = []
  while (orderLeft.length || orderRight.length) {
    if (orderLeft.length && orderRight.length) {
      res.push(
        orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift()
      )
    } else if (orderLeft.length) {
      res.push(orderLeft.shift())
    } else if (orderRight.length) {
      res.push(orderRight.shift())
    }
  }
  return res
}
Array.prototype.mergeSort = function () {
  const res = rec(this)
  res.forEach((n, i) => {
    this[i] = n
  })

  return this
}

const arr = [2, 1, 6, 4, 9]
arr.mergeSort()
console.log(arr)
