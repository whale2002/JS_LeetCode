/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function (s, distance) {
  // abaccb  [1,3,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

  let length = s.length
  let set = new Set()

  for (let i = 0; i < length; i++) {
    if (!set.has(s[i])) {
      set.add(s[i])
      let first = s.indexOf(s[i])
      let second = s.indexOf(s[i], first+1)
      let length = second - first - 1
      let index = s[i].charCodeAt() - 97
      console.log(first, second, length, index);
      if (distance[index] !== length) return false
    }
  }

  return true
}

console.log(checkDistances('aa', [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]))
