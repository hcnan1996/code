/*
 * @Description:
 * @Author: hechengnan
 * @Date: 2024-03-11 22:45:26
 * @LastEditTime: 2024-03-11 22:45:31
 * @LastEditors: hechengnan
 */
var findAnagrams = function (s, p) {
    let need = {};
    let window = {};
    let left = 0;
    let right = 0;
    let valid = 0;
    let res = new Array();

    for (let ch of p) {
        need[ch] = (need[ch] || 0) + 1;
    }
    while (right < s.length) {
        let c1 = s[right];
        right++;
        if (need[c1]) {
            window[c1] = (window[c1] || 0) + 1;
            if (need[c1] == window[c1]) {
                valid++;
            }
        }

        while (right - left >= p.length) {
            if (Object.keys(need).length == valid) {
                res.push(left);
            }
            let c2 = s[left];
            left++;
            if (need[c2]) {
                if (need[c2] == window[c2]) {
                    valid--;
                }
                window[c2]--;
            }
        }
    }
    return res;
};
