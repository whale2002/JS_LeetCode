// 二分搜索
Array.prototype.binarySearch = function (num) {
  let length = this.length
  let left = 0,
    right = length - 1,
    mid

  while (left <= right) {
    mid = Math.floor((left + right) / 2)
    if (this[mid] > num) right = mid - 1
    else if (this[mid] < num) left = mid + 1
    else return 1
  }

  return -1
}

const arr = [1, 2, 3, 4, 5]
console.log(arr.binarySearch(4))
