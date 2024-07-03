/*
 * @Description:
 * @Author: hechengnan
 * @Date: 2024-07-03 20:47:42
 * @LastEditTime: 2024-07-03 20:58:26
 * @LastEditors: hechengnan
 */
function converter(obj) {
    let newObj = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            let newKey = key.replace(/_([a-z])/g, (match, p1) => {
                return p1.toUpperCase();
            });
            newObj[newKey] = obj[key];
        }
    }
    // for (let key in obj) {
    //     if (obj.hasOwnProperty(key)) {
    //         let newKey = key.replace(/_([a-z])/g, function (match, p1) {
    //             return p1.toUpperCase();
    //         });
    //         newObj[newKey] = obj[key];
    //     }
    // }
    // return newObj;
}
