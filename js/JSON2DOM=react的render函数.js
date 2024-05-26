/*
 * @Description:
 * @Author: hechengnan
 * @Date: 2024-03-03 19:28:15
 * @LastEditTime: 2024-03-03 19:37:54
 * @LastEditors: hechengnan
 */
/*

JSON2DOM = react的render函数

{
  tag: 'DIV',
  attrs:{
  id:'app'
  },
  children: [
    {
      tag: 'SPAN',
      children: [
        { tag: 'A', children: [] }
      ]
    },
    {
      tag: 'SPAN',
      children: [
        { tag: 'A', children: [] },
        { tag: 'A', children: [] }
      ]
    }
  ]
}
把上诉虚拟Dom转化成下方真实Dom
<div id="app">
  <span>
    <a></a>
  </span>
  <span>
    <a></a>
    <a></a>
  </span>
</div>
*/

const render = vnode => {
    // number

    if (typeof vnode === 'number') {
        vnode = String(vnode);
    }

    // String

    if (typeof vnode === 'string') {
        return document.createTextNode(vnode);
    }

    const dom = document.createElement(vnode.tag);

    if (vnode.attrs) {
        Object.keys(vnode.attrs).forEach(s => {
            const val = vnode.attrs[s];
            dom.setAttribute(s, val);
        });
    }

    vnode.children.forEach(v => {
        dom.appendChild(render(v));
    });

    return dom;
};
