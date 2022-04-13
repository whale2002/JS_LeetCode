// 插入排序
Array.prototype.insertionSort = function() {
  let length = this.length
  for(let i = 1; i < length; i++) {
    let j, current = this[i]
    for(j = i-1; j >=0; j--) {
      if(this[j] > current) this[j+1] = this[j]
      else break
    }
    this[j+1] = current
  }
}

const arr = [2, 4, 5, 3, 1] 
arr.insertionSort()
console.log(arr)