/*
 * @Description:
 * @Author: hechengnan
 * @Date: 2024-10-09 20:53:13
 * @LastEditTime: 2024-10-09 21:08:16
 * @LastEditors: hechengnan
 */

arr.reduce((a, b) => a.filter(c => b.includes(c)));

arr.reduce((a, b) => {
    return a.filter(s => b.includes(s));
});
