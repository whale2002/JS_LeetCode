var maxConsecutive = function (bottom, top, special) {
  // [2, 3, 4|, 5, 6|, 7, 8, 9]

  let res = 0
  special.sort((a, b) => a - b)

  let length = special.length
  for (let i = 0; i < length; i++) {
    if (special[i] === bottom) {
      bottom++
      continue
    }
    res = Math.max(res, special[i] - bottom)
    bottom = special[i] + 1
  }

  res = Math.max(res, top - bottom + 1)
  return res
}
//  此题数据量较大，不适合双指针遍历