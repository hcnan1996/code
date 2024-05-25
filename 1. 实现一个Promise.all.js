/*
 * @Description:
 * @Author: hechengnan
 * @Date: 2024-03-03 18:37:08
 * @LastEditTime: 2024-03-03 18:46:47
 * @LastEditors: hechengnan
 */
Promise._all = function (promiseList) {
    return new Promise((rs, rj) => {
        if (promiseList === null || typeof promiseList[Symbol.iterator] !== 'function') {
            throw new TypeError(`${promises} is not a iterable`);
        }
        promiseList = [...promiseList];
        if (promiseList.length === 0) rs([]);
        let count = 0;
        let vals = [];
        promiseList.forEach(async (s, index) => {
            const newItem = Promise.resolve(s);
            try {
                const res = await newItem;
                vals[index] = res;
                if (++count === promiseList.length) {
                    resolve(vals);
                }
            } catch (err) {
                this.reject(err);
            }
        });
    });
};
