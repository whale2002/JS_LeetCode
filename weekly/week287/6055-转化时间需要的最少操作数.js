/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
const convertTime = function (current, correct) {
  const curArr = current.split(':')
  const corArr = correct.split(':')

  let curTime = parseInt(curArr[0] * 60) + parseInt(curArr[1])
  let corTime = parseInt(corArr[0] * 60) + parseInt(corArr[1])
  
  let space = corTime - curTime

  let sixty = Math.floor(space / 60)
  space = space % 60

  let quarter = Math.floor(space / 15)
  space = space % 15

  let five = Math.floor(space / 5)
  space = space % 5

  let one = space

  console.log(sixty + quarter + five + one)
}

convertTime('02:30', '04:35')
