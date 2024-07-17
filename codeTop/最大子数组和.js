/*
 * @Description:
 * @Author: hechengnan
 * @Date: 2024-07-17 22:27:31
 * @LastEditTime: 2024-07-17 22:27:40
 * @LastEditors: hechengnan
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let ans = -Infinity;
    let sum = 0;
    for (const item of nums) {
        if (sum < 0) sum = item;
        else {
            sum += item;
        }

        ans = Math.max(ans, sum);
    }
    return ans;
};

const maxSum = nums => {
    let ans = -Infinity;
    let sum = 0;
    for (const item of nums) {
        if (sum < 0) {
            sum = item;
        } else {
            sum += item;
        }
        ans = Math.max(sum, ans);
    }
    return ans;
};
