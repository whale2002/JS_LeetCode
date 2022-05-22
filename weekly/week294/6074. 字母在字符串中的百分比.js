/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function (s, letter) {
  let counter = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] == letter) counter++
  }

  return Math.floor((100 * counter) / s.length)
}

console.log(percentageLetter('foobar', 'o'))
