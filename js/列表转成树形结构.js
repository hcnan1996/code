/*
 * @Description:
 * @Author: hechengnan
 * @Date: 2024-03-04 21:11:15
 * @LastEditTime: 2024-03-18 22:58:07
 * @LastEditors: hechengnan
 */
let arr = [
    { id: 1, name: '部门1', pid: 0 },
    { id: 2, name: '部门2', pid: 1 },
    { id: 3, name: '部门3', pid: 1 },
    { id: 4, name: '部门4', pid: 3 },
    { id: 5, name: '部门5', pid: 4 },
    { id: 6, name: '部门6', pid: 0 }
];

const getTree = arr => {
    const res = [];
    let map = {};
    data.forEach(item => {
        map[item.id] = item;
    });

    data.forEach(item => {
        let parent = map[item.pid];
        if (parent) {
            (parent.children || []).push(item);
        } else {
            res.push(item);
        }
    });
    return res;
};

const getTree2 = arr => {
    const res = [];
    const map = {};
    for (const item of arr) {
        map[id] = item;
    }
    for (const item of arr) {
        if (map[item.pid]) {
            (item.children || []).push(item);
        } else {
            res.push(item);
        }
    }

    return res;
};
