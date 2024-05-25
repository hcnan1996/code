/*
 * @Description:
 * @Author: hechengnan
 * @Date: 2024-03-24 15:03:33
 * @LastEditTime: 2024-03-24 16:08:26
 * @LastEditors: hechengnan
 */
function splitNumber(num) {
    if (typeof num !== 'number') return num;
    num += '';
    num.replace(/\d{1,3}(?=(\d{3})+$)/g, function (s) {
        return s + ',';
    });
}

// 驼峰转换

// A -> a_
function toUnderline(str) {
    return str.replace(/([A-Z])/g, '_$1').toLowerCase();
}

// a_ -> A
let newKey = key.replace(/_([a-z])/g, function (match, p1) {
    return p1.toUpperCase();
});

console.log(toUnderline('yiZhiXiaoKeLeYa')); // 输出 'yi_zhi_xiao_ke_le_ya'
console.log(toUnderline('myCode')); // 输出 'my_code'
