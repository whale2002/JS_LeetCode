/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function (words) {
  let length = words.length
  if(length === 1) return words

  function isEqual(left, right) {
    let str1 = words[left].split('').sort().join('')
    let str2 = words[right].split('').sort().join('')

    return str1 === str2 ? true : false
  }
  
  let res = []
  let left = 0, right = 1
  while(right < length) {
    if(isEqual(left, right)) {
      right++
    } else {
      res.push(words[left])
      left = right
      right++
    }
  }

  if(!isEqual(left, right-1)) {
    res.push(words[left])
    res.push(words[right-1])
  }
  if(isEqual(left, right-1)) {
    res.push(words[left])
  }
  
  return res
}

// removeAnagrams(["abba","baba","bbaa","cd","cd"])
removeAnagrams(["yjonq","yqnoj","oyqjn","nqoyj","onjqy","joqyn","qynjo","jynoq"])
// removeAnagrams(['a', 'b', 'a'])

// 双指针