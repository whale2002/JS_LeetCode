/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  if(n === 1) return 1
  let left = 1, right = n, mid
  while(left <= right) {
    mid = Math.floor((left+right) / 2)
    if(guess(mid) === -1) {
      right = mid - 1
    } else if(guess(mid) === 1) {
      left = mid + 1
    } else return mid
  }
}

// Time O(logn）
