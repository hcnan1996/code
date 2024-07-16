/*
 * @Description:
 * @Author: hechengnan
 * @Date: 2024-05-26 20:33:00
 * @LastEditTime: 2024-07-08 22:44:23
 * @LastEditors: hechengnan
 */
//手写new
// function myNew(fn, ...args) {
//   if (Object.prototype.toString.call(fn) !== "[object Function]") {
//     throw "Error in params";
//   }
//   //1.定义一个空对象
//   const obj = {};

//   //2.隐式原型指向构造函数的显式原型
//   //   let __proto__ = Object.getPrototypeOf(obj);
//   //   __proto__ = Object.create(fn.prototype);
//   // obj.__proto__ = Object.create(fn.prototype);
//   obj.__proto__ = Object.create(obj, fn.prototype);

//   //3.执行构造函数,this指向空对象
//   let ret = fn.call(obj, ...args);

//   //对返回值做个保护判断
//   return ret instanceof Object ? ret : obj;
// }

//test

function Person(name, age) {
    this.name = name;
    this.age = age;
}

function myNew(fn, ...args) {
    if (Object.prototype.toString.call(fn) !== '[object Function]') {
        throw 'Error in params';
    }
    // let obj = {};
    const obj = Object.create(fn.prototype);
    fn.call(obj, ...args);
    return obj;
    // return fn.call(obj, ...args);
}

function newApply(construct, ...rest) {
    // 步骤一 创建一个空对象
    const newObj = {};
    // 步骤二 新创建的对象上面添加属性 __proto__, 并将该属性链接至构造函数的原型对象
    newObj.__proto__ = construct.prototype;
    // 步骤三 新创建的对象作为 this 的上下文
    const result = construct.apply(newObj, rest);
    // 步骤四 如果执行结果有返回值并且是一个对象，就返回执行的结果，否者返回 this 也就是新创建的对象 newObj
    return typeof result === 'object' ? result : newObj;
}

let person1 = myNew(Person, '张三', 15);
console.log(person1);

let person2 = new Person('李四', 15);
console.log(person2);
