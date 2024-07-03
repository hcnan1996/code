/*
 * @Description:
 * @Author: hechengnan
 * @Date: 2024-07-03 21:17:33
 * @LastEditTime: 2024-07-03 21:24:03
 * @LastEditors: hechengnan
 */
async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}
async function async2() {
    console.log('async2');
}
console.log('script start');
setTimeout(function () {
    console.log('setTimeout');
}, 0);
async1();
new Promise(function (resolve) {
    console.log('promise1');
    resolve();
}).then(function () {
    console.log('promise2');
});
console.log('script end');
// script start
// VM539:2 async1 start
// VM539:7 async2
// VM539:15 promise1
// VM539:20 script end
// VM539:4 async1 end
// VM539:18 promise2
// VM539:11 setTimeout
