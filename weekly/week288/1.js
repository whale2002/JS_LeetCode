/**
 * @param {number} num
 * @return {number}
 */
// 6037
// 方法：暴力
function getType(num) {
  return (num % 2) ? 1 : 0
}
let largestInteger = function (num) {
  num = (num + '').split('')   //不能直接修改字符串
  let length = num.length
  let currentNumber, type, postNumber, postType, tmp, index

  for (let i = 0; i < length - 1; i++) {
    currentNumber = num[i]
    tmp = currentNumber
    type = getType(currentNumber)
    index = i
    // console.log('cur', type)
    for (let j = i + 1; j < length; j++) {
      postNumber = num[j]
      postType = getType(postNumber)
      // console.log('type', postType)
      // console.log(postNumber, tmp)
      if(type === postType && postNumber > tmp) {
        tmp = postNumber
        index = j
        // console.log('交换')
      }
    }
    let t = num[i]
    num[i] = num[index]
    num[index] = t
    // console.log(i, index)
    // console.log(num[i], num[index])
  }

  return parseInt(num.join(''))
}

console.log(largestInteger(65875));
