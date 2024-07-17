依照：
[https://juejin.cn/post/7309329004498223156?searchId=202403301507002F01CC0E9813490C8616#heading-11](https://juejin.cn/post/7309329004498223156?searchId=202403301507002F01CC0E9813490C8616#heading-11)

### js 中的类型

基础：number 、 string 、 null 、 bigint 、 boolean、undefined
复杂：[] , object，regexp， map，set

衍生： [] !== [] 的理解

```css
[] == ![] [] == !true // 将空数组这个对象类型转换成布尔值
[] == false // ! 运算符对 true 进行取反
'' == false // 对 [] 进行 ToPrimitive 操作，返回一个空对象
0 == 0 // 将等号两边都转换成数字类型

```

### 闭包

外部函数可以访问其他函数的变量

-   有没有什么必要条件需要满足才能产生闭包
    1. **嵌套函数**：当一个内部函数在其外部函数之外被调用时，它就可以访问外部函数的变量。
    2. **返回函数**：一个函数返回另一个函数，并且返回的这个函数在其定义时的作用域之外被调用。
    3. **异步执行**：例如，在回调函数、Promises、setTimeout 等异步操作中，即使定义它们的原始作用域已经执行完毕，这些函数仍然可以访问原始作用域中的变量
-   如果有一个外部函数内部返回一个内部函数，内部函数引用了外部函数的变量，产生闭包，如果这个外部函数被调用 10 次，会产生多少个闭包呢？
    -   js 闭包 如果有一个外部函数内部返回一个内部函数，内部函数引用了外部函数的变量，产生闭包，如果这个外部函数被调用 10 次，会产生多少个闭包呢？
    -   当一个外部函数内部返回一个内部函数，并且这个内部函数引用了外部函数的变量时，每次调用外部函数确实会产生一个新的闭包。因此，如果外部函数被调用 10 次，会产生 10 个闭包。
-   对其中一个闭包里的变量进行修改之后，会影响其他闭包里的变量吗
    -   不会。每个闭包都是独立的，并且捕获了其创建时外部函数作用域中的变量的副本。如果你修改了一个闭包内部的变量状态，这个修改只会影响那个特定闭包的行为，而不会影响其他闭包里的变量。
-   有没有别的写法能生成闭包

### null 与 undefined

undefined 未被定义过

```css
typeof null === 'object' // true
typeof undefined === 'undefined' // true
```

### APPLY 和 call

改变 this 指向 apply 接受一个数组 call 以逗号分割

```css
function add(a, b) {
return a + b;
}

console.log(add.call(null, 1, 2)); // 3
console.log(add.apply(null, [1, 2])); // 3
```

### require 与 import 的区别

-   require 支持 动态导入，import 不支持，正在提案 (babel 下可支持)
-   require 是 同步 导入，import 属于 异步 导入
-   require 是 值拷贝，导出值变化不会影响导入值；import 指向 内存地址，导入值会随导出值而变化

### 异步加载 JS 的方式有哪些

```css
 var script = document.createElement('script');  // 创建script标签
 script.type = "text/javascript";
 script.src = "A.js";
 document.getElementsByTagName('head')[0].appendChild(script);   // 塞进页面

```

Script async 下载完成后立刻执行，而不是会等到 DOM 加载完成之后再执行，所以还是有可能会造成阻塞。
浏览器解析到 HTML 里的该行 script 标签，发现指定为 defer，会暂缓下载解析执行脚本。而是等到页面加载完毕后，才加载脚本（更精确地说，是在 DOM 树构建完成后，在 window.onload 触发前，加载 defer 的脚本）

### 原型链和原型

原型链：查找对象实例的方法和属性时，先在自身找，找不到则沿着**proto**向上查找，我们把**proto**形成的链条关系称原型链

原型： 每个函数都是都存在 protype new 的时候函数变成构造函数的 沿着**proto**
只到 null 为止 生成原型链

```javascript
function Star(name, age) {
    this.name = name;
    this.age = age;
}
Star.prototype.dance = function () {
    console.log('我在跳舞', this.name);
};
let obj = new Star('张萌', 18);
console.log(obj.__proto__ === Star.prototype); //true
console.log(Star.prototype.constructor === Star); //true
console.log(obj.__proto__.constructor === Star); //true
```

```javascript
class Person {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log('This is printName');
    }
    commonMethods() {
        console.log('我是共享方法');
    }
}

class Student extends Person {
    constructor(name, score) {
        super(name);
        this.score = score;
    }
    printScore() {
        console.log('This is printScore');
    }
}

let stu = new Student('小红');
let person = new Person('小紫');

// Student.__proto__ === Person
// stu.__proto__ === Student.prototype
// Person.prototype.__proto__ === Object.prototype
// Object.prototype.__proto__ === null
// Function.prototype.__proto__  //Object.prototype
// Object.__proto__              //Function.prototype
```

### ajax fetch axios

-   ajax 是一种技术称呼，不是具体的 API 和库
-   fetch 是新的异步请求 API ，可代替 XMLHttpRequest
-   axios 是第三方库

### 箭头函数

-   arguments 参数
-   无法改变 this

```markdown
不适用的场景

-   对象方法
-   对象原型
-   构造函数
-   动态上下文
-   Vue 生命周期和方法
```

### 深拷贝浅拷贝的区别

一、浅拷贝
1、浅拷贝就是创建一个新的对象，这个对象有着原始对象的属性值得精准拷贝
2、如果属性是一个基本数据类型，拷贝就是基本类型的值，如果属性是引用类型，拷贝的就是内存地址,
          所以其中一个对象改变了地址就会影响到另一个对象           二、深拷贝
1、深拷贝就是把一个对象，从内存中完整的拷贝出来，从堆内存中开辟了新区域，用来存新对象，并且修改新对象不会影响原对象

一、浅拷贝   赋值的区别         1.赋值   当我们把一个对象赋值给一个新的变量时，赋的是该对象在栈中的内存地址，而不是堆中的数据。也就是两个对象          指向同一个内存空间，无论哪个对象发生改变，其实都是改变的储存空间的内容，因此两个对象都是联动的。 
2、浅拷贝：重新在堆中创建内存，拷贝前后对象的基本数据类型互不影响，但拷贝前后对象的引用类型因共享一
         块内存，会相互影响。 
3、深拷贝：从堆内存中开辟了一个新的区域存放新对象，对对象中的子对象进行递归拷贝，拷贝前后的两个对象互不影响

### 为什么 typeof 可以判断出 function，但不能判断出 object 的其他类型

typeof 只能检测数据类型，而不能检测从数据类型中派生的其他类型，数组为 object 派生对象，所以依然返回 object
对于函数，typeof 会返回 "function"。这是因为函数在 JavaScript 中是一种基本的数据类型，它们是可调用的，并且有自己的属性和方法。typeof 能够识别函数并返回正确的类型
typeof 判断 引用类型数据，除了 function 以外都会判断成为 object

### import()延迟加载或者按需加载是怎么保证资源完全请求回来之后才执行渲染动作？

### import()返回值是什么类型？

![](https://cdn.nlark.com/yuque/0/2024/png/1730621/1713188510015-c2747bac-b285-4c8b-add3-d1609fef23db.png#averageHue=%23eaeef2&clientId=udef39e64-852e-4&from=paste&id=u5520aad0&originHeight=235&originWidth=1302&originalType=url&ratio=1.25&rotation=0&showTitle=false&status=done&style=none&taskId=ubbfda4a1-f3b8-4205-b860-ed4f6554929&title=)

### onload 和 DOMContentLoaded 的区别

1、当 onload 事件触发时，页面上所有的 DOM，样式表，脚本，图片，flash 都已经加载完成了。
2、当 DOMContentLoaded 事件触发时，仅当 DOM 加载完成，不包括样式表，图片，flash。

-   DOMContentLoaded —— 浏览器已完全加载 HTML，并构建了 DOM 树，但像 <img> 和样式表之类的外部资源可能尚未加载完成。
-   load —— 浏览器不仅加载完成了 HTML，还加载完成了所有外部资源：图片，样式等。

### 什么是雪碧图。雪碧图有什么作用？

碧图通常是指将多个小图标或图像拼接在一起形成一张大图，通过 CSS 背景定位技术实现单次 HTTP 请求加载多个图片资源，从而减少网页加载时间和提升用户体验。 您可以通过视频截雪碧图功能，提取视频帧并按一定规则拼接为雪碧图

### set,Map 的区别

[https://juejin.cn/post/7377635432967192585?searchId=202407022237549BFA00880E0054B873E0](https://juejin.cn/post/7377635432967192585?searchId=202407022237549BFA00880E0054B873E0)
set 集合的数据结构
map 字典
weakMap 弱引用 引用对象作为 key
weakSet 弱引用

### seo

[https://www.cnblogs.com/JQstronger/p/seo.html](https://www.cnblogs.com/JQstronger/p/seo.html)

### 前端中如何解决循环依赖问题?

1.重构代码结构：通过重新组织代码结构，将循环依赖的部分解开，从而避免出现循环依赖。这可能需要对模块之间的依赖关系进行重新设计，使其成为一个单向的依赖关系。 2.使用事件总线：引入一个事件总线或消息传递机制，模块之间不直接依赖对方，而是通过事件进行通信。这样可以避免直接的循环依赖关系。
ModuleA 和 ModuleB 模块分别订阅了名为 someEvent 的事件，并通过事件总线进行通信。在 doSomething 和 doSomethingElse 函数中，我们使用 eventBus.publish 方法向事件总线发布事件，然后事件总线会将事件通知给所有订阅了该事件的模块。
通过使用事件总线，ModuleA 和 ModuleB 模块之间就不再直接相互依赖，而是通过事件进行通信，从而解决了循环依赖的问题。

### async defer

defer
不阻塞浏览器解析 HTML，等解析完 HTML 之后，才会执行 script。
会并行下载 JavaScript 资源。
会按照 HTML 中的相对顺序执行脚本。
会在脚本下载并执行完成之后，才会触发 DOMContentLoaded 事件。
在脚本执行过程中，一定可以获取到 HTML 中已有的元素。
defer 属性对模板脚本无效。
适用于：所有外部脚本（通过 src 引用的 script）。
async
不阻塞浏览器解析 HTML，但是 script 下载完成后，会立即中断浏览器解析 HTML，并执行此 script。
会并行下载 JavaScript 资源。
互相独立，谁先下载完，谁先执行，没有固定的先后顺序，不可控。
由于没有确定的执行时机，所以在脚本里面可能会获取不到 HTML 中已有的元素。
DOMContentLoaded 事件和 script 脚本无相关性，无法确定他们的先后顺序。

### js 的栈和堆

在 JavaScript 中，变量的值可以保存在堆或栈中。基本类型的值（如数字、字符串）通常保存在栈中，而复杂对象（如对象、数组）的引用保存在栈中，而实际的对象数据存储在堆中。这种存储方式称为“栈中保存变量，堆中保存对象”。
