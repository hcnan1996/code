/*
 * @Description:
 * @Author: hechengnan
 * @Date: 2024-03-24 15:25:25
 * @LastEditTime: 2024-03-24 15:40:38
 * @LastEditors: hechengnan
 */
const deepClone = (obj, hash = new WeakMap()) => {
    if (obj.constructor === Date) {
        return new Date(obj);
    }

    if (obj.constructor === RegExp) {
        return new RegExp(obj);
    }

    if (hash.has(obj)) {
        return hash.get(obj);
    }

    const allDesc = Object.getOwnPropertyDescriptors(obj);

    let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc);

    //继承原型链
    hash.set(obj, cloneObj);

    for (let key of Reflect.ownKeys(obj)) {
        if (typeof obj[key] === 'object' && obj[key] !== null) cloneObj[key] = deepClone(obj[key], hash);
        else cloneObj[key] = obj[key];
    }
};
