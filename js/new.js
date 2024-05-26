/*
 * @Description:
 * @Author: hechengnan
 * @Date: 2024-04-04 14:13:22
 * @LastEditTime: 2024-04-04 14:16:33
 * @LastEditors: hechengnan
 */
function _new() {
    let obj = {};
    const [constructor, ...args] = [...arguments];
    obj.__proto__ = constructor.prototype;
    let res = constructor.apply(obj, args);
    if ((res && typeof res === 'function') || typeof res === 'object') {
        return res;
    }
    return obj;
}
