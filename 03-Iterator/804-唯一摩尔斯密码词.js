/**
 * @param {string[]} words
 * @return {number}
 */
const map = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
function diff(code) {
  return code.charCodeAt() - 97
}

const uniqueMorseRepresentations = function(words) {
  let set = new Set()
 
  words.forEach(word => {
    let ms = ''
    for(let i = 0; i < word.length; i++) {
      ms += map[diff(word[i])]
    }
    set.add(ms)
  })

  return set.size  // 竟然是一个属性
}

uniqueMorseRepresentations(["gin", "zen", "gig", "msg"])