let nums = [3, 2, 4]
let target = 5

let hashTable = {};
let key;

for (let i = 0; i < nums.length; i++) {
  key = target - nums[i];

  if (hashTable[key]) return [hashTable[key], i]
  hashTable[nums[i]] = i
} 

