/*
 * @Description:
 * @Author: hechengnan
 * @Date: 2024-07-03 21:05:51
 * @LastEditTime: 2024-07-03 21:06:07
 * @LastEditors: hechengnan
 */
// 检测当前pkgs是否存在循环依赖
const checkCircularDependency = packages => {
    const map = {};
    const states = {}; // 存放包的状态
    // 初始化图
    packages.forEach(pkg => {
        map[pkg.name] = pkg.dependencies || {};
        states[pkg.name] = 'UNVISITED';
    });
    // 从每个包开始进行 DFS
    for (const pkgName in map) {
        if (states[pkgName] === 'UNVISITED') {
            if (dfs(pkgName, map, states)) {
                return true;
            }
        }
    }
    return false;
};
const dfs = (pkgName, map, states) => {
    states[pkgName] = 'VISITING';
    for (const dep in map[pkgName]) {
        const depState = states[dep];
        if (depState === 'VISITING') {
            return true; // 存在循环依赖
        } else if (depState === 'UNVISITED') {
            if (dfs(dep, map, states)) {
                return true; // 存在循环依赖
            }
        }
    }
    return false; // 不存在循环依赖
};

// 使用方法
const pkgs = [
    {
        name: 'a',
        dependencies: {
            b: '^1.0.0'
        }
    },
    {
        name: 'b',
        dependencies: {
            c: '^1.0.0'
        }
    },
    {
        name: 'c',
        dependencies: {
            a: '^1.0.0'
        }
    }
];
console.log(checkCircularDependency(pkgs));
