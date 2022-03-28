/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// 错误解答  死循环
//  const hasCycle = function(head) {
//   while(head) {
//       let p = head.next
//       while(p) {
//           if(p.next === head) return true
//           else p = p.next
//       }
//       head = head.next
//   }

//   return false
// };

// 同一起跑线起跑，快的总要超过慢的
const hasCycle = function (head) {
  let p1 = head
  let p2 = head

  while(p1 && p2 && p2.next) {
    p1 = p1.next
    p2 = p2.next.next

    if(p1 == p2) return true
  }

  return false
}
