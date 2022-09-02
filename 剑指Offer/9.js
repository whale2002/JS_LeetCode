// 两个栈模拟队列
var CQueue = function () {
  this.stack1 = []
  this.stack2 = []
}

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.stack1.push(value)
}

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  if (!this.stack2.length) {
    while (this.stack1.length) {
      this.stack2.push(this.stack1.pop())
    }
  }

  if (this.stack2.length === 0) return -1
  else {
    const res = this.stack2.pop()
    return res
  }
}

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */

var obj = new CQueue()
obj.appendTail(2)
var param_2 = obj.deleteHead()
console.log(param_2)
