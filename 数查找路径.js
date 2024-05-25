/*
 * @Description:
 * @Author: hechengnan
 * @Date: 2024-03-18 23:06:49
 * @LastEditTime: 2024-03-18 23:13:57
 * @LastEditors: hechengnan
 */
const treeData = [
    {
        id: 1,
        name: 'jj1',
        children: [
            { id: 2, name: 'jj2', children: [{ id: 4, name: 'jj4' }] },
            {
                id: 3,
                name: 'jj3',
                children: [
                    { id: 8, name: 'jj8', children: [{ id: 5, name: 'jj5' }] },
                    { id: 9, name: 'jj9', children: [] },
                    { id: 10, name: 'jj10', children: [] }
                ]
            }
        ]
    }
];
let path = findNum(10, treeData);
console.log('path', path);

const findNum = (target, treeData) => {
    let res = [];
    const dfs = (tree, path) => {
        if (!tree.length) return;
        tree.forEach(item => {
            path.push(item.id);
            if (item.id === target) {
                res = [...path];
            } else {
                dfs(item.children || [], path);
                path.pop();
            }
        });
    };
    dfs(treeData, []);
    return res;
};
