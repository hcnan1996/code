/*
 * @Description:
 * @Author: hechengnan
 * @Date: 2024-07-17 22:27:59
 * @LastEditTime: 2024-07-17 22:28:09
 * @LastEditors: hechengnan
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */

const swap = (nums, i, j) => {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
};

let partition = (nums, left, right) => {
    const random = nums[Math.floor(Math.random() * (right - left + 1)) + left];
    let i = left,
        j = right;
    while (i <= j) {
        while (nums[i] < random) {
            i++;
        }
        while (nums[j] > random) {
            j--;
        }

        if (i <= j) {
            swap(nums, i, j);
            i++;
            j--;
        }
    }
    return i;
};

let quick = (arr, left, right) => {
    if (left < right) {
        let idx = partition(arr, left, right);
        if (idx - 1 > left) quick(arr, left, idx - 1);
        if (idx < right) quick(arr, idx, right);
    }
};

var sortArray = function (nums) {
    quick(nums, 0, nums.length - 1);
    return nums;
};
