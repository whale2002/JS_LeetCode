/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function (tasks) {
  let map = new Map(),
    res = 0,
    flag = true
  tasks.forEach((num) => {
    if (map.has(num)) {
      let val = map.get(num) + 1
      map.set(num, val)
    } else map.set(num, 1)
  })

  map.forEach((val) => {
    if(val === 1) flag = false
    else {
      let a = val % 3
      let b = Math.floor(val / 3)  //除数
      if(a === 0) res = res + b
      else res = res + b + 1
    }
  })

  return !flag ? -1 : res
}

console.log(minimumRounds([2,2,3,3,2,4,4,4,4,4]))
