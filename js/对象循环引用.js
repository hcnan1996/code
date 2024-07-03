/*
 * @Description:
 * @Author: hechengnan
 * @Date: 2024-05-26 20:18:50
 * @LastEditTime: 2024-06-30 14:58:59
 * @LastEditors: hechengnan
 */
const isCycleObject = (obj, parent) => {
    const parentArr = parent || [obj];
    for (let i in obj) {
        if (typeof obj[i] === 'object') {
            let flag = false;
            parentArr.forEach(pObj => {
                if (pObj === obj[i]) {
                    flag = true;
                }
            });
            if (flag) return true;
            flag = isCycleObject(obj[i], [...parentArr, obj[i]]);
            if (flag) return true;
        }
    }
    return false;
};
//对象循环引用得判断。
const a = 1;
const b = { a };
const c = { b };
const o = { d: { a: 3 }, c };
o.c.b.aa = a;

// console.log(isCycleObject(o));
// const person = { name: 'kalory', age:18}
// person.onwer = person
// console.log(isCycleObject(person));

const isCycleObject1 = (obj, parent) => {
    // 暂存的数组
    const parentArr = parent || [obj];
    // 遍历
    for (let i in obj) {
        if (typeof obj[i] === 'object') {
            let flag = false;
            parentArr.forEach(s => {
                if (obj[i] === s) {
                    flag = true;
                }
            });
            if (flag) return true;
            flag = isCycleObject1(obj[i], [...parentArr, obj[i]]);
            if (flag) return true;
        }
    }
    return false;
};
