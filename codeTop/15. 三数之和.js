/*
 * @Description: 
 * @Author: hechengnan
 * @Date: 2024-07-16 22:38:19
 * @LastEditTime: 2024-07-16 22:38:35
 * @LastEditors: hechengnan
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    // const sortNums = nums.sort((a, b) => a -b)
    // const ans = []
    // for (let i = 0; i < nums.length; i++) {
    //     if (sortNums[i] > 0) return ans
    //     if (i > 0 && nums[i] === nums[i-1]) continue
    //     let left = i + 1
    //     let right = nums.length - 1
    //     while (left < right) {
    //         if (nums[left] + nums[right] + nums[i] > 0) {
    //             right--
    //         } else if (nums[left] + nums[right] + nums[i] < 0) {
    //             left++
    //         } else {
    //             ans.push([nums[i], nums[left], nums[right]])
    //             while(left > 0 && nums[left] === nums[left + 1]) left++
    //             while(right > 0 && nums[right] === nums[right -1] ) right--
    //             left++
    //             right--
    //         }

    //     }
    // }

    // return ans

    nums.sort((a, b) => a - b);
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) return res;
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1,
            right = nums.length - 1;
        while (left < right) {
            const sum = nums[left] + nums[right] + nums[i];
            if (sum > 0) right--;
            else if (sum < 0) left++;
            else {
                res.push([nums[i], nums[left], nums[right]]);
                while (left > 0 && nums[left] === nums[left + 1]) left++;
                while (right > 0 && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            }
        }
    }
    return res;
};
