/*
 * @Description:
 * @Author: hechengnan
 * @Date: 2024-07-17 22:33:19
 * @LastEditTime: 2024-07-17 22:33:28
 * @LastEditors: hechengnan
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    // const queue = []
    // const res = []
    // queue.push(root)
    //  if(root === null) {
    //     return res;
    // }
    // while(queue.length) {
    //     const len = queue.length
    //     const curVal = []
    //     for (let i = 0; i < len ;i++) {
    //         const node = queue.shift()
    //         curVal.push(node.val)
    //         node.left && queue.push(node.left)
    //         node.right && queue.push(node.right)
    //     }
    //   res.push(curVal)
    // }
    // return res
    const res = [];
    const queue = [];
    if (!root) return res;
    queue.push(root);
    while (queue.length) {
        const len = queue.length;
        const curVal = [];
        for (let i = 0; i < len; i++) {
            const node = queue.shift();
            curVal.push(node.val);
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        res.push(curVal);
    }
    return res;
};
