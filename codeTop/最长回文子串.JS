/*
 * @Description:
 * @Author: hechengnan
 * @Date: 2024-07-17 22:30:10
 * @LastEditTime: 2024-07-17 22:30:17
 * @LastEditors: hechengnan
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    // let res = ''
    // const dp = new Array(s.length).fill(false).map(v => new Array(s.length).fill(false))
    // for (let i = s.length -1; i >= 0;i--) {
    //     for (let j = i; j < s.length; j++) {
    //        if (s[i] === s[j]) {
    //            // abba
    //          if (j - i < 2) dp[i][j] = true
    //          else if (j -i >= 2) dp[i][j] = dp[i + 1][j - 1]
    //        }
    //        // 当前的
    //        if (dp[i][j] && j - i + 1 > res.length ) {
    //            res = s.substring(i, j + 1)
    //        }
    //     }
    // }
    //  return res;
    // babad - > bad

    let res = '';

    const dp = new Array(s.length).fill(false).map(s => new Array(s.length).fill(false));
    for (let i = s.length - 1; i >= 0; i--) {
        for (let j = i; j < s.length; j++) {
            if (s[i] === s[j]) {
                if (j - i < 2) dp[i][j] = true;
                else if (j - i >= 2) dp[i][j] = dp[i + 1][j - 1];
            }
            if (dp[i][j] && j - i + 1 > res.length) {
                res = s.substring(i, j + 1);
            }
        }
    }
    return res;
};
