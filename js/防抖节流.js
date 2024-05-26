/*
 * @Description:
 * @Author: hechengnan
 * @Date: 2024-03-19 21:37:00
 * @LastEditTime: 2024-03-19 21:46:26
 * @LastEditors: hechengnan
 */
const debounce = (fn, delay) => {
    let timer = null;
    return function () {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            timer = null;
            fn.apply(this, arguments);
        }, delay);
    };
};

const throttle = (fn, delay) => {
    let timer = null;
    return function () {
        if (timer) return;
        timer = setTimeout(() => {
            timer = null;
            fn.apply(this, arguments);
        }, delay);
    };
};
