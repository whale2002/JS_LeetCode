const RecentCounter = function () {
  this.counter = 0
  this.queue = []
}

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  const left = t - 3000
  this.queue.push(t)

  while(this.queue[0] < left) this.queue.shift()

  return this.queue.length
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * const obj = new RecentCounter()
 * const param_1 = obj.ping(t)
 */
 const obj = new RecentCounter()
 const param_1 = obj.ping(1)
 const param_2 = obj.ping(100)
 const param_3 = obj.ping(3001)
 const param_4 = obj.ping(3002)
