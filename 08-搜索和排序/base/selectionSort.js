// 选择排序
Array.prototype.selectionSort = function() {
  let length = this.length, minIndex = 0

  for(let i = 0; i < length-1; i++) {
    minIndex = i
    for(let j = i+1; j < length; j++) {
      if(this[j] < this[minIndex]) minIndex = j
    }
    if(minIndex !== i) {
      let tmp = this[minIndex]
      this[i] = this[minIndex]
      this[minIndex] = tmp
    }
  }
}

let arr = [3, 1, 2, 5, 10, 6]
arr.selectionSort()

console.log(arr)