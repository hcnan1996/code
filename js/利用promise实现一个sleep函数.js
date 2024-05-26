/*
 * @Description:
 * @Author: hechengnan
 * @Date: 2024-05-26 20:23:20
 * @LastEditTime: 2024-05-26 20:23:30
 * @LastEditors: hechengnan
 */
//利用promise实现一个sleep函数

const sleep = times => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, times);
    }).then(() => {
        console.log('11');
    });
};

sleep();
