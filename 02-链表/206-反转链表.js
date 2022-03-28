/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 1 2 3 4 5
// 5 4 3 2 1

// const reverse = (pre, cur) => {
//   if(!cur) return pre
//   let tmp = cur.next
//   cur.next = pre
//   pre = cur
//   return reverse(pre, tmp)
// }

// const reverseList = function (head) {
//   // 递归1
//   return reverse(null, head)

// 双指针  原地反转
// const p1 = head
// const p2 = null

// while(p1) {
//   const tmp = p1
//   p1.next = p2
//   p2 = p1
//   p1 = tmp.next
// }
// return p2

// 空间换时间, 定义一个新链表
// let p = null
// while(head) {
//   let node = new ListNode(head.val)  // 注意这里不能直接指向原节点，应该重新创建一个对象
//   node.next = p
//   p = node
//   head = head.next
// }
// return p
// }

const reverse = (head) => {
  if (!head.next) return head

  let pre = reverse(head.next)
  head.next = pre.next
  pre.next = head

  return head
}

const reverseList = (head) => {
  if (!head) return head

  let newHead = head
  while (newHead.next) {
    newHead = newHead.next
  }

  reverse(head)

  return newHead
}
