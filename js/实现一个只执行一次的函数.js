/*
 * @Description:
 * @Author: hechengnan
 * @Date: 2024-05-26 20:22:39
 * @LastEditTime: 2024-05-26 20:22:55
 * @LastEditors: hechengnan
 */
//其实本质就是闭包
const once = fn => {
    let tag = true;
    return () => {
        if (tag) {
            fn();
            tag = false;
        } else {
            return;
        }
    };
};

const print = () => {
    console.log('aaa');
};

onceFn = once(print);
onceFn();
onceFn();
onceFn();
//实现一个只执行一次函数
