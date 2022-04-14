// 冒泡排序
Array.prototype.bubbleSort = function () {
  let length = this.length
  for (let i = 0; i < length - 1; i++) {
    // 控制比较几轮
    for (let j = 0; j < length - 1 - i; j++) {
      //每一轮
      if (this[j] > this[j + 1]) {
        let tmp = this[j]
        this[j] = this[j + 1]
        this[j + 1] = tmp
      }
    }
  }
}

let arr = [3, 1, 2, 5, 10, 6]
arr.bubbleSort()

console.log(arr)

// Time o(n2)
