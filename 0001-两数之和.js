/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 1. 暴力解法
var twoSum = function (nums, target) {
  let ret = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        ret.push(i);
        ret.push(j);
      }
    }
  }

  return ret;
};

// 2. 哈希表：js内置数据结构 Map
// 跟我一样不了解 Map 的小伙伴记住这三个 API：
// - get()
// - has()
// - set()
var twoSum = function (nums, target) {
  let map = new Map();
  let tmp;

  for (let i = 0; i < nums.length; i++) {
    tmp = target - nums[i];

    if (map.has(tmp)) return [i, map.get(tmp)];
    map.set(nums[i], i);
  }
};

// 3. 用对象表示哈希表
var twoSum = function (nums, target) {
  let hashTable = {};
  let key;

  for (let i = 0; i < nums.length; i++) {
    key = target - nums[i];

    // 防御 0 和 Null
    if (hashTable[key] !== undefined) return [hashTable[key], i];
    hashTable[nums[i]] = i;
  }
};