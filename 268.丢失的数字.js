// 1. 我的题解  或许可以称之为对象哈希？
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let obj = {}
    let n = nums.length

    for(let i = 0; i < n; i++) {
        obj[nums[i]] = 1
    }
    
    for(let i = 0; i <= n; i++) {
        if(!obj[i]) return i
    }
};

// 2.数组哈希
var missingNumber = function (nums) {
  // [0, 2, 4, 5, 3]
  let n = nums.length; //4
  let arr = new Array(n + 1);
  arr.fill(false); //填充

  for (let i = 0; i < n; i++) {
    arr[nums[i]] = true;
  }

  for (let i = 0; i <= n; i++) {
    if (!arr[i]) return i;
  }
};

// 3. 作差法 脑筋急转弯？！
var missingNumber = function (nums) {
  // 0 2 3 4 5
  let n = nums.length;
  let sum = (n * (n + 1)) / 2;
  for (let i = 0; i < n; i++) sum -= nums[i];

  return sum;
};

// 4. 异或   get新方法
var missingNumber = function (nums) {
  let ans = 0;
  let n = nums.length;
  for (let i = 0; i <= n; i++) ans ^= i;
  for (let i = 0; i < n; i++) ans ^= nums[i];

  return ans;
};
