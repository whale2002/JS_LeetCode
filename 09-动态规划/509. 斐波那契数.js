/**
 * @param {number} n
 * @return {number}
 */
// 递归
// var fib = function (n) {
//   if(n==0 || n==1) return n
//   return fib(n-1) + fib(n-2)
// }

var fib = function(n) {
  if(n==1 || n==0) return n
  const dp = new Array(2, 0)
  dp[0] = 0, dp[1] = 1

  let sum
  for(let i = 2; i <= n; i++) {
    sum = dp[0] + dp[1]
    dp[0] = dp[1]
    dp[1] = sum    
  }

  return dp[1]
};

console.log(fib(4));
