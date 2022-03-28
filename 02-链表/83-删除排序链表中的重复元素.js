/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 const deleteDuplicates = function (head) {
  let set = new Set()
  let cur = head, pre = null

  while (cur) {
    if (!set.has(cur.val)) {
      set.add(cur.val)
      pre = cur
      cur = cur.next
    } else {
      // 如果删除的是最后一个节点  需要保存前一个节点
      if(!cur.next) {
        pre.next = null
        break 
      }
      cur.val = cur.next.val
      cur.next = cur.next.next
    }
  }

  return head
}
