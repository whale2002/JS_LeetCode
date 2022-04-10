// 比较函数
const compare = (a, b) => {
  if(a > b) return 1
  else if(a === b) return -1
  else return -1
}
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
 var findContentChildren = function (g, s) {
   g.sort(compare)
   s.sort(compare)
   console.log(g, s)
   
   let start   // 最小供应饼干
   for(start = 0; start < s.length; start++) {
     if(s[start] >= g[0]) break
   }
   let i = 0
   for(; start < s.length; start++) {
     if(s[start] >= g[i]) i++
   }
   console.log(i);
 }

 findContentChildren([10,9,8,7], [5,6,7,8])

 