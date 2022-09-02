/**
 * @param {string} s
 * @return {character}
 */
// var firstUniqChar = function (s) {
//   let length = s.length
//   if (length === 0) return ' '

//   let map = {}

//   for (let i = 0; i < length; i++) {
//     if (map[s[i]]) map[s[i]] += 1
//     else map[s[i]] = 1
//   }

//   for (let key in map) {
//     if (map[key] === 1) return key
//   }

//   return ' '
// }
var firstUniqChar = function (s) {
  let map = new Map()

  for (let char of s) {
    if (map.has(char)) map.set(char, map.get(char) + 1)
    else map.set(char, 1)
  }

  for (let num of map) {
    if (num[1] === 1) return num[0]
  }

  return ' '
}

console.log(firstUniqChar('abaccdeff'))
