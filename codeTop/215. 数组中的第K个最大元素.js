/*
 * @Description:
 * @Author: hechengnan
 * @Date: 2024-07-16 22:37:44
 * @LastEditTime: 2024-07-16 22:37:53
 * @LastEditors: hechengnan
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    quick2(nums, 0, nums.length - 1);
    return nums[nums.length - k];
};

let quick = (arr, left, right) => {
    let index;
    if (left < right) {
        // 划分数组
        index = partition(arr, left, right);
        if (left < index - 1) {
            quick(arr, left, index - 1);
        }
        if (index < right) {
            quick(arr, index, right);
        }
    }
};

// 一次***
let partition = (arr, left, right) => {
    // 取中间项为基准
    var datum = arr[left + ((right - left) >> 1)],
        i = left,
        j = right;
    // 开始调整
    while (i <= j) {
        // 左指针右移
        while (arr[i] < datum) {
            i++;
        }

        // 右指针左移
        while (arr[j] > datum) {
            j--;
        }

        // 交换
        if (i <= j) {
            swap(arr, i, j);
            i += 1;
            j -= 1;
        }
    }
    return i;
};

// 交换
let swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

// 三路快排

const quick2 = (arr, left, right) => {
    let index;
    if (left < right) {
        index = partition2(arr, left, right);
        if (left < index - 1) {
            quick2(arr, left, index - 1);
        }
        if (index < right) {
            quick2(arr, index, right);
        }
    }
};

const partition2 = (arr, left, right) => {
    const mid = left + ((right - left) >> 1);
    const midNumber = arr[mid];
    let i = left,
        j = right;

    while (i <= j) {
        while (midNumber > arr[i]) {
            i++;
        }
        while (arr[j] > midNumber) {
            j--;
        }
        if (i <= j) {
            swap(arr, i, j);
            i += 1;
            j -= 1;
        }
    }
    return i;
};
