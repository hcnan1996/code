/*
 * @Description:
 * @Author: hechengnan
 * @Date: 2024-07-16 22:36:10
 * @LastEditTime: 2024-07-16 22:36:19
 * @LastEditors: hechengnan
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var reverseList = function(head) {
//     let prev = null
//     let cur = head
//     let next = null
//     while (cur) {
//         next = cur.next
//         cur.next = prev
//         prev = cur
//         cur = next

//     }
//     return prev
// };

const reverseList = head => {
    let next = null;
    let pre = null;
    cur = head;
    while (cur) {
        next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    return pre;
};
