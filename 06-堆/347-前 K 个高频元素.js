class MinHeap {
  constructor() {
    this.heap = []
  }
  getParentIndex(index) {
    return (index - 1) >> 1 //表示右移1位，二进制中就是初2
  }
  getLeftIndex(index) {
    return 2 * index + 1
  }
  getRightIndex(index) {
    return 2 * index + 2
  }
  swap(parentIndex, currentIndex) {
    let tmp = this.heap[parentIndex]
    this.heap[parentIndex] = this.heap[currentIndex]
    this.heap[currentIndex] = tmp
  }
  shiftUp(currentIndex) {
    if (currentIndex === 0) return
    const parentIndex = this.getParentIndex(currentIndex)
    if (this.heap[parentIndex]?.value > this.heap[currentIndex]?.value) {
      this.swap(parentIndex, currentIndex)
    }
    this.shiftUp(parentIndex)
  }
  shiftDown(currentIndex) {
    const leftIndex = this.getLeftIndex(currentIndex)
    const rightIndex = this.getRightIndex(currentIndex)

    if (this.heap[leftIndex]?.value < this.heap[currentIndex]?.value) {
      this.swap(leftIndex, currentIndex)
      this.shiftDown(leftIndex)
    }
    if (this.heap[rightIndex]?.value < this.heap[currentIndex]?.value) {
      this.swap(rightIndex, currentIndex)
      this.shiftDown(rightIndex)
    }
  }
  // 插入
  insert(value) {
    this.heap.push(value)
    this.shiftUp(this.heap.length - 1)
  }
  // 删除
  pop() {
    this.heap[0] = this.heap.pop()
    this.shiftDown(0)
  }
  // 获取堆大小
  size() {
    return this.heap.length
  }
  // 获取堆顶
  peek() {
    return this.heap[0]
  }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function (nums, k) {
  let map = new Map()

  nums.forEach((num) => {
    map.set(num, map.get(num) ? map.get(num) + 1 : 1)
  })

  let h = new MinHeap()

  map.forEach((value, key) => {
    h.insert({ key, value })
    if (h.size() > k) h.pop()
  })

  return h.heap.map((item) => item.key).sort()
}

console.log(topKFrequent([-1, -1], 2))
