/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const deleteNode = function (head, val) {
  let p = head //头结点

  while (p) {
    if (p.val === val && p.next) {
      p.val = p.next.val
      p.next = p.next.next
    } else if (p.val === val && !p.next) {
      //最后一个
      // p = null 不生效
      let p2 = head
      while (p2) {
        if (p2.next == p) p2.next = null
        p2 = p2.next
      }
      break
    }

    p = p.next
  }

  return head //返回头结点
}
