/*
 * @Description:
 * @Author: hechengnan
 * @Date: 2024-03-06 22:48:21
 * @LastEditTime: 2024-03-18 22:52:55
 * @LastEditors: hechengnan
 */
// const myCurrying = (fn, ...args) => {
//     console.log(fn.length, args, fn);
//     if (args.length >= fn.length) {
//         return fn(...args);
//     } else {
//         return (...args2) => myCurrying(fn, ...args, ...args2);
//     }
// };

// const add = (x, y, z) => {
//     return x + y + z;
// };

// const addCurry = myCurrying(add);
// const sum1 = addCurry(1, 2, 3);

const myCurrying = (fn, ...args) => {
    if (fn.length === args.length) {
        return fn(...args);
    } else {
        return (...args2) => myCurrying(fn, ...args, ...args2);
    }
};
const add = (x, y, z) => {
    return x + y + z;
};
myCurrying(add)(1, 2, 3);
myCurrying(add)(1)(2)(3);
