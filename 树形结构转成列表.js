/*
 * @Description:
 * @Author: hechengnan
 * @Date: 2024-03-03 21:11:38
 * @LastEditTime: 2024-03-18 22:51:50
 * @LastEditors: hechengnan
 */
/*
const  data = [
  {
    id: '1',
    name: '父节点1',
    children: [
      {
        id: '1-1',
        name: '子节点1-1',
        children: [
          {
            id: '1-1-1',
            name: '子节点1-1-1'
          },
          {
            id: '1-1-2',
            name: '子节点1-1-2'
          }
        ]
      }
    ]
  },
  {
    id: '2',
    name: '父节点2',
    children: [
      {
        id: '2-1',
        name: '子节点2-1'
      }
    ]
  }
]
*/

const data = [
    {
        id: '1',
        name: '父节点1',
        children: [
            {
                id: '1-1',
                name: '子节点1-1',
                children: [
                    {
                        id: '1-1-1',
                        name: '子节点1-1-1'
                    },
                    {
                        id: '1-1-2',
                        name: '子节点1-1-2'
                    }
                ]
            }
        ]
    },
    {
        id: '2',
        name: '父节点2',
        children: [
            {
                id: '2-1',
                name: '子节点2-1'
            }
        ]
    }
];

// const treeToList = tree => {
//     const res = [];
//     const dfs = tree => {
//         tree.forEach(cur => {
//             res.push(cur);
//             if (cur.children) {
//                 dfs(cur.children);
//                 delete cur.children;
//             }
//         });
//     };

//     dfs(tree);
//     return res;
// };

// console.log(treeToList(data));

// bian pinghua

const treeToList = tree => {
    const res = [];
    const dfs = tree => {
        tree.forEach(item => {
            res.push(item);
            if (item.children) {
                dfs(item.children);
                delete item.children;
            }
        });
    };
    dfs(tree);
    return res;
};
