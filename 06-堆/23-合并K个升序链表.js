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
      this.heap[parentIndex].val > this.heap[currentIndex].val
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
      this.heap[leftIndex].val < this.heap[currentIndex].val
    ) {
      this.swap(leftIndex, currentIndex)
      this.shiftDown(leftIndex)
    }
    if (
      this.heap[rightIndex] &&
      this.heap[rightIndex].val < this.heap[currentIndex].val
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
    if(this.size() === 1) return this.heap.shift()
    const top = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.shiftDown(0)
    return top
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
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = function (lists) {
  let heap = new MinHeap()

  lists.forEach((node) => {
    node && heap.insert(node)
  })

  let res = new ListNode() // 返回结果
  let p = res

  while(heap.size()) {
    const tmp = heap.pop()
    p.next = tmp
    p = p.next
    tmp.next && heap.insert(tmp.next)
  }

  return res.next
}
