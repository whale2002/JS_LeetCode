// 主要操作：插入、删除堆顶、获取堆顶、获取堆大小
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
    if (
      this.heap[parentIndex] &&
      this.heap[parentIndex] > this.heap[currentIndex]
    ) {
      this.swap(parentIndex, currentIndex)
      this.shiftUp(parentIndex)
    }
  }
  shiftDown(currentIndex) {
    const leftIndex = this.getLeftIndex(currentIndex)
    const rightIndex = this.getRightIndex(currentIndex)
    if (
      this.heap[leftIndex] &&
      this.heap[leftIndex] < this.heap[currentIndex]
    ) {
      this.swap(leftIndex, currentIndex)
      this.shiftDown(leftIndex)
    }
    if (
      this.heap[rightIndex] &&
      this.heap[rightIndex] < this.heap[currentIndex]
    ) {
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

const heap = new MinHeap()

heap.insert(3) // [2]
heap.insert(2) // [2, 3]
heap.insert(1) // [1, 3, 2]
heap.pop() // [2, 3]
heap.size() // 2
heap.peek() // 2
