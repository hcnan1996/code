/*
 * @Description:
 * @Author: hechengnan
 * @Date: 2024-07-17 22:29:50
 * @LastEditTime: 2024-07-17 22:29:57
 * @LastEditors: hechengnan
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.get(target - nums[i]) !== undefined) {
            return [map.get(target - nums[i]), i];
        } else {
            map.set(nums[i], i);
        }
    }
};
