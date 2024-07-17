/*
 * @Description:
 * @Author: hechengnan
 * @Date: 2024-07-17 22:29:24
 * @LastEditTime: 2024-07-17 22:29:32
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    const dunmy = new ListNode();
    let current = dunmy;
    while (list1 && list2) {
        if (list1.val > list2.val) {
            current.next = list2;
            list2 = list2.next;
        } else {
            current.next = list1;
            list1 = list1.next;
        }
        current = current.next;
    }
    if (list2) current.next = list2;
    if (list1) current.next = list1;

    return dunmy.next;
};
