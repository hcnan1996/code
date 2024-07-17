## CSS 篇
#### 1.盒模型
##### 概念
盒子模型的组成为：`content（元素内容）` + `padding（内边距）` + `border（边框）` + `margin（外边距）`
`CSS`的`盒模型`有两种：`标准盒子模型`和`IE盒子模型`

- 标准盒子模型：盒子实际总宽高=内容的宽高width\height（content）+ border + padding + margin
- IE盒子模型：盒子实际总宽高=内容的宽高width\height（content+border+padding）+ margin
##### 如何设置盒模型

- 可以通过设置`box-sizing`的值来改变盒模型； 
   - `box-sizeing: content-box`为`标准盒子模型`；也是`默认值`；
   - `box-sizeing: border-box`为`IEh盒子模型`；

`box-sizing`的应用场景在于是否想让子元素因为`padding`和`border`溢出
##### 盒模型 margin 负值问题

- `margin-top` 元素自身会向上移动，同时会影响下方的元素会向上移动；
- `margin-botom` 元素自身不会位移，但是会减少自身供`css`读取的高度，从而影响下方的元素会向上移动。
- `margin-left` 元素自身会向左移动，同时会影响其它元素；
- `margin-right` 元素自身不会位移，但是会减少自身供`css`读取的宽度，从而影响右侧的元素会向左移动；
#### 2.BFC & 块级格式化上下文
##### 概念
**块级格式化上下文**，是一个独立的渲染区域，让处于 `BFC` 内部的元素与外部的元素相互隔离，使内外元素的定位不会相互影响。
##### 触发条件

- `position: absolute`/`fixed`：绝对定位
- `display: inline-block` / `table` / `flex`
- `float` 设置除`none`以外的值；（只要设置了浮动，当前元素就创建了`BFC`）
- `ovevflow !== visible` (可为：`hidden`、`auto`、`scroll`)
##### 规则

- 属于同一个 `BFC` 的相邻 `Box` 垂直排列
- 属于同一个 `BFC` 的相邻 `Box` 的 `margin` 会发生`外边距重叠`
- `BFC` 在页面中是独立的容器，外面的元素不会影响里面的元素，反之亦然。
- `BFC` 的区域不会与 `float` 的元素区域重叠
- 计算 `BFC` 的高度时，浮动子元素也参与计算
##### 特性和应用

- 阻止`margin`重叠：**同一个 BFC 下外边距（margin）会发生折叠**
- 清除浮动 ：**清除内部浮动(清除浮动的原理是两个**`div`**都位于同一个**`BFC`**区域之中)**
- 自适应两栏布局：左`float`+右`BFC`，是利用了`BFC` 的区域不会与 `float` 的元素区域重叠的机制
##### 外边距重叠

- 在`CSS`当中，上下相邻的两个盒子的外边距可以结合成一个单独的外边距。 
   - 注意：只有在文档流中的`垂直外边距`才会合并

**外边距重叠结果遵循下列计算规则**：

- 两个相邻的外边距`都是正数`时，折叠结果是它们两者之间较大的值。
- 两个相邻的外边距`都是负数`时，折叠结果是两者绝对值的较大值。
- 两个外边距`一正一负`时，折叠结果是两者的相加的和。
#### 3.Z-index（层叠上下文）
##### 触发条件

- `根层叠上下文(html)`：本身就有层叠上下文
- `position非static`
- `css3`新属性 
   - `flex`
   - `transform`
   - `opacity`
   - `filter`
   - `will-change`
   - `webkit-overflow-scrolling`
##### 层叠等级：层叠上下文在z轴上的排序

- 在同一层叠上下文中，层叠等级才有意义
- `z-index`的优先级最高

![](https://cdn.nlark.com/yuque/0/2024/webp/1730621/1721226901209-cf468143-23be-49fd-b66a-837026406235.webp#averageHue=%23b6b154&clientId=u308a5ee3-1c3b-4&from=paste&id=u6d756a8b&originHeight=981&originWidth=1280&originalType=url&ratio=1.25&rotation=0&showTitle=false&status=done&style=none&taskId=u95cd0f01-f580-40a5-b3fb-0e640dd06a2&title=)
##### z-index:auto 和 z-index:0 层叠关系
设置为`auto`和`0`后，后出现的覆盖前面的；
#### 4.浮动
##### 浮动会造成什么

- 父元素高度塌陷
- 与浮动元素同级的非浮动元素会填补原有位置
##### 如何清除浮动的影响

- 给父元素设置高度 `height`
- 在浮动元素后面添加` clear:both`的空 `div` 或者`br`标签
- 给父元素添加 `overflow:hidden` 或者 `auto` 样式
- 使用`:after`在父元素末尾加一个点，并添加 `clear: both` 属性；
##### 设置元素浮动后 display 值是多少
自动变成`display:block`;
#### 5.各种居中
##### 水平居中方案

- 行内元素，给其父元素设置`text-align:center`
- 定宽块级元素，该元素设置`margin:0 auto`
- 定宽块级元素，还可以用`绝对定位`设置和`left:50%`;加`margin-left:-1/2`宽度；
- 不定宽块级元素，设置父元素为`flex`布局，子元素设置`margin:0 auto`即可
- 不定宽块级元素，设置父元素为`flex`布局，且设置`justify-content: center`;
- 不定宽块级元素，设置父元素为`position: relative`;子元素`position: absulote;left: 50%;transform: translateX(-50%);`
##### 垂直居中方案

- 若元素是单行文本, 则可设置`line-height`等于`父元素高度`
- 定高块级元素，该元素设置`margin:auto 0`
- 定高块级元素，可以用`绝对定位`+`top:50%`;+`margin-top`
- 不定高块级元素，设置`父元素`为`flex`布局，`子元素`设置`margin: auto 0`即可
- 不定高块级元素，设置`父元素`为`flex`布局，且设置`align-items: center;`
- 不定高会级元素，可以用`绝对定位`和`transform`
- 不定高块级元素，设置`父元素`为`table`布局，子元素`display: table-cell;vertical-align:middle;`
##### 水平垂直居中方案

- 子元素为块级元素，父元素`flex`布局，子元素设置`margin:auto`;
- 子元素未知，父元素`flex`布局，设置`justify-content: center;align-items: center`;
- 子元素用绝对定位，设置上下左右为`0`，`margin:auto`;父元素`position: relative`;
- 子元素已知宽高，绝对定位 `left: 50%;top: 50%;` 再 `margin` 自己的负一半；或者 `transform: translate(-50%,-50%)`;
#### 6.各种布局方案
##### 两栏布局

- 左`float`+ 右`margin`（左设置`固定宽度+向左浮动`，右边设置`margin-left`为左边的固定宽度；）
- 左`fixed`+右`margin`
- 双`float`+ 右`calc`
- 双`inline-block`+右`calc`
- 左`float`+右`BFC`，是利用了`BFC` 的区域不会与 `float` 的元素区域重叠的机制
- `最简单常用`：使用`flex`布局（`左定宽，右flex1`）

![](https://cdn.nlark.com/yuque/0/2024/webp/1730621/1721226900225-80a10e12-cb1e-43f5-a492-f6cd3cb0d7da.webp#averageHue=%232f2e2e&clientId=u308a5ee3-1c3b-4&from=paste&id=u79c75896&originHeight=372&originWidth=654&originalType=url&ratio=1.25&rotation=0&showTitle=false&status=done&style=none&taskId=u94046b10-9b1e-49c2-9137-2740966d209&title=)
##### 三栏布局

- 左右`float`+中`margin`：左右栏定宽并设置浮动，中间一栏设置左右两个方向的`margin`值且不设置宽度；（`中间一栏必须放在最后`）
- 左右`绝对定位`+中`margin`：左右两栏设置绝对定位放左右，中间设置两个方面的`margin`值；
- `圣杯布局`：父元素设置左右`padding`，子元素三栏都通过`float`浮动，通过负值`margin`进行调整
- `双飞翼布局`：对圣杯布局的改进，取消了相对定位（`不了解的话文章有很多`）
- 最简单的`flex`布局，左右设置`flex: 0 1 200px`;中间设置`flex:1;`父元素`flex`。
#### 7.Flex
##### flexbox（弹性盒布局模型）

- 通常被称为`flexbox`，`flex`是`弹性布局`，是`CSS3`的一种布局方式，给子元素提供了空间分布和对齐能力。它由（`Flex Container`容器/`Flex item`项目成员）构成。
- `flex`布局的元素称为`Flex Container`容器，它的所有子元素都是`Flex item`项目成员；
- 容器有两个轴线排列，水平轴和垂直轴，默认为水平轴排列；

该布局模型的目的是提供一种更加高效的方式来对容器中的项目成员进行`布局`、`对齐`和`分配空间`。通常可用于`水平垂直居中`，`两栏`、`三栏布局`等的场景里
##### 容器的 flex 属性

- `flex-direction`属性：有 `row | row-reverse | column | column-reverse` 等取值，决定主轴的方向（即项目成员的排列方向）。 
   - `row`（默认值）：主轴为水平方向，起点在左端。
   - `row-reverse`：主轴为水平方向，起点在右端。
   - `column`：主轴为垂直方向，起点在上沿。
   - `column-reverse`：主轴为垂直方向，起点在下沿。
- `flex-wrap`属性：有 `nowrap | wrap | wrap-reverse` 等取值如果一条轴线排不下，如何换行。 
   - `nowrap`（默认）：不换行。
   - `wrap`：换行，第一行在上方。
   - `wrap-reverse`：换行，第一行在下方。
- `flex-flow`属性：是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。
- `justify-content`属性：定义了项目在主轴上的对齐方式（水平方向）。
- `align-items`属性：定义项目在交叉轴上的对齐方式（垂直方向）。
- `align-content`属性：定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。
##### 项目成员的 flex-grow、flex-shrink、flex-basis 属性作用

- `flex-grow`：项目的放大比例，默认为`0`，即如果存在剩余空间，也`不放大`。 
   - 如果所有项目的`flex-grow`属性相等（`或都为1`），将等分剩余空间，如果有一个为`2`，那么它占据的剩余空间将比其他项目`多`；
- `flex-shrink`：项目的缩小比例，默认为`1`，即如果空间不足，该项目将缩小
- `flex-basis`属性定义了在分配多余空间之前，项目占据的主轴空间（`main size`）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为`auto`，也就是项目的本来大小。
- `flex`属性是`flex-grow`,`flex-shrink` 和 `flex-basis`的简写，默认值为`0 1 auto`。后两个属性可选。该属性有两个`快捷值`：`auto (1 1 auto)` 和 `none (0 0 auto)`。

如果设置 `flex:1`，就等于 `flex: 1 1 0`;设置 `flex:0`；就等于 `flex: 0 0 0`;
##### 子元素均设置 flex 1 宽度是否一样

- `Flex 1` 相当于 `flex: 1 1 0`；项目占的主轴空间为`0`，所以平分；
- **但是**：如果子元素有`padding`属性的话，元素占的地方会被增加；
- 如果子元素有`margin`属性的话，元素的宽度不变，但是`content`内容的宽度变小；
##### **使用时应该注意些什么？**

- 在父级元素设置为`flex`布局后，子元素的`float`、`clear`、`vertical-align`属性都将失效，所以在使用`flex`布局时，不应该先设置完子元素布局后再使用。
#### 8.伪类和伪元素
`css`引入伪类和伪元素概念是为了格式化文档树以外的信息。也就是说，伪类和伪元素都是用来修饰不在文档树中的部分
##### 伪类
`伪类`存在的意义是为了通过选择器找到那些不存在`DOM`树中的信息以及不能被常规`CSS`选择器获取到的信息
##### 伪元素
伪元素用于创建一些不在文档树中的元素，并为其添加样式。
比如说，我们可以通过`:before`来在一个元素前增加一些文本，并为这些文本添加样式。虽然用户可以看到这些文本，但是这些文本实际上不在文档树中。
常见的伪元素有：`::before`，`::after`，`::first-line`，`::first-letter`，`::selection`、`::placeholder`等
##### 区别
因此，伪类与伪元素的区别在于：有没有创建一个文档树之外的元素，`伪元素是::双冒号`
##### CSS3新增伪类

- `p:first-of-type` 选择属于其父元素的首个元素
- `p:last-of-type` 选择属于其父元素的最后元素
- `:enabled :disabled` 表单控件的禁用状态。
- `:checked` 单选框或复选框被选中。
#### 9.position定位

- `absolute`：生成`绝对定位`的元素，相对于 `static` 定位以外的第一个父元素进行定位
- `fixed`：生成`固定定位`的元素，相对于`浏览器窗口`进行定位
- `relative`：生成`相对定位`的元素，相对于其`正常位置`进行定位
- `static` 默认值。没有定位，元素出现在正常的文档流中
- `inherit` 规定从父元素继承 `position` 属性的值
- `sticky` 粘性定位，适用于浏览器滚动到一定高度时，让一部分内容固定；
##### position: fixed什么时候会失效？

- 若是设置了`position: fixed`属性的元素，它的上级元素设置了`transform`任意属性则会导致固定定位属性失效。
- 注意，这个特性表现，目前只在`Chrome`浏览器/`FireFox`浏览器下有。
#### 10.display属性
##### display属性的几个取值

- `block` 转换成块状元素。
- `inline` 转换成行内元素。
- `none` 设置元素不可见，从文档流中移除。
- `inline-block` 元素像行内元素一样显示，但元素的内容像块类型元素一样显示。
- `list-item` 像块类型元素一样显示，并添加样式列表标记。
- `table` 作为块级表格来显示
- `inherit` 表示从父元素继承 `display` 属性的值
##### display:inline-block 为什么会显示间隙
因为原来`HTML`代码中的`回车换行等`被转成一个空白符，在`字体不为0`的情况下，空白符占据一定宽度，所以`inline-block`的元素之间就出现了空隙
##### 如何消除 display:inline-block 的间隙

- 移除空格
- 使用`margin`负值
- 使用`font-size:0`
- `letter-spacing`
- `word-spacing`
#### 11.CSS选择器权重 & 优先级
##### 优先级权重
| **选择器** | **优先级权重** |
| --- | --- |
| id选择器 | 100 |
| 类选择器 | 10 |
| 属性选择器 | 10 |
| 伪类选择器 | 10 |
| 标签选择器 | 1 |
| 伪元素选择器 | 1 |
| 相邻兄弟选择器 | 0 |
| 子选择器 | 0 |
| 后代选择器 | 0 |
| 通配符选择器 | 0 |

##### 注意点

1. `!important`声明的样式优先级最高，如果冲突再进行计算。
2. 如果优先级相同，则选择最后出现的样式。（`后出现的覆盖之前的`）
3. 继承得到的样式的优先级最低。
4. 不同来源下：`内联样式` > `内部样式` > `外部样式` > `浏览器用户自定义样式` > `浏览器默认样式`。
#### 12.隐藏元素的方法
##### CSS属性来隐藏元素的方法

- `visibility: hidden`： 这个属性只是简单的隐藏某个元素，元素继续占用空间，`不可交互`
- `display: none`： 元素会变得不可见，元素从文档流中消失，不再占用文档的空间，`不可交互`
- `opacity: 0`：本质上是将元素的透明度设置为`0`，就看起来隐藏了，但是依然占据空间且`可以交互`
- `position: absolute`： 设置一个很大的 `left负值`定位，使元素定位在可见区域之外
- `transform: scale(0)`： 将一个元素设置为缩放无限小，元素将不可见，元素原来所在的位置将被保留，但`不可交互`；
- `height: 0`： 将元素高度设为 `0`
##### opacity: 0、visibility: hidden、display: none 优劣和适用场景。

- **从结构上看**： 
   - `display:none` 不显示对应的元素，在文档布局中不再分配空间（回流+重绘） ，内容不可见，不可点击
   - `visibility: hidden` 隐藏对应元素，在文档布局中仍保留原来的空间（重绘），内容不可见，不可点击
   - `opacity: 0` 隐藏对应元素，在文档布局中仍保留原来的空间（重绘），内容不可见，可以点击
- **从继承上看**： 
   - `display: none` 和 `opacity: 0` 是非继承属性，子孙节点消失由于元素从渲染树消失造成，通过修改子孙节点属性无法显示。
   - `visibility: hidden` 是继承属性，子孙节点消失由于继承了`hidden`，通过设置`visibility: visible` 可以让子孙节点显式。
##### rgba() 和 opacity 的透明效果比较

- `rgba()`和`opacity`都能实现透明效果，但最大的不同是`opacity`作用于元素，以及元素内的所有内容的透明度，
- 而`rgba()`只作用于元素的颜色或其背景色。（设置`rgba`透明的元素的子元素不会继承透明效果！）
#### 13.动画 & 过渡效果
##### animation

- `css3`的`animation`是css3新增的动画属性，这个`css3`动画的每一帧是通过`@keyframes`来声明的，`keyframes`声明了动画的名称，通过`from`、`to`或者是百分比来定义
##### transform

- `transform`主要用于给元素做变换,主要由以下几种变换,`rotate`(旋转),`scale`(缩放),`skew`(扭曲),`translate`(移动)和`matrix`(矩阵变换).
- `transform`本身是没有过渡效果的,它只是对元素做`大小`、`旋转`、`倾斜`等各种变换,通过和`transition`或者`animation`相结合,可以让这一变换过程具有动画的效果

**transition 和 animation 以及 transform 的区别**

- `transform` 本身没有动画效果，它实现动画需要依赖其余两者
- `Animation`和`transition`大部分属性是相同的，他们都是随时间改变元素的属性值
- `transition` 设置的是 `css` 属性变化时的过渡动画，而 `animation` 动画会自动执行； `transition` 定义的动画触发一次执行一次，想再次执行就需要再次触发；`animation` 可以执行指定次数或者无数次；
- ` transition`定义的动画只有两个状态,开始态和结束态,`animation`可以定义多个动画中间态,且可以控制多个复杂动画的有序执行.
##### 如何优化动画性能

- 尽量减少`js`动画，如需要，使用对性能友好的 `requestAnimationFrame`
- 开启硬件加速
- 使用 `css3` 的 `transform` 代替`left`、`top`减少使用引起页面重排的属性：（该CSS属性可以旋转，缩放，倾斜，或者上传给定的元素。这是通过修改CSS 可视格式模型的坐标空间来实现的。）
- `requestAnimationFrame()` 方法，会把每一帧中的所有DOM操作集中起来，在一次重绘或回流中就完成
- `requestIdleCallback()` 方法，它指定只有当一帧的末尾有空闲时间，才会执行回调函数。
##### **手写动画的最小时间间隔是多久**
多数显示器默认频率是`60Hz`，即`1秒刷新60次`，所以理论上最小间隔为`1/60＊1000ms ＝ 16.7ms`。
##### transform 的 rotate translateX 先后顺序有何不同？
如果先旋转再平移的话，会按照旋转后的坐标系进行平移。哪个在前就先执行。
#### 14.link和@import

- `link`可以放在`html`任意位置，`@import`一定要写在除`@charset`外的其他任何 `CSS` 规则之前，并且`@import`之后的分号必须书写不可省略；（不符合就不会生效且不报错）
- `link`的内容会被并行加载，`html`内的`@import`也会被并行加载，但是`link`内的`import`需要等到页面加载完后才会加载（可能会导致页面跳一下`FOUC`）
- `@import`需要 `IE5` 以上才能使用，`link`作为`html`标签没有兼容问题；
- `link`可以使用 `js` 动态插入，`@import`也可以通过`js`插入，但是比较麻烦；需要新建一个`style`标签，在`style`标签里面再注入`import`指令再`插入`到页面上；
- 导入方式并不会影响`样式权重规则`
- 都会阻塞`页面渲染`，同样支持媒体查询；
#### 15.像素单位
##### px、em、rem、vw、vh

- `px`：绝对单位，页面按精确像素展示。
- `em`：相对单位，`基准点为父节点字体的大小`，如果自身定义了`font-size`按自身来计算（浏览器默认字体是`16px`），整个页面内`1em`不是一个固定的值。
- `rem`：`以根元素的字体大小为基准`。例如`html`的`font-size: 16px`，则子级`1rem = 16px`。
- `vw`和`vh`：都是针对当前浏览器窗口大小而言，`1vw` 就等于可视窗口宽度的百分之一，`1vh` 就等于可视窗口高度的百分之一。
##### 移动端开发为什么需要二倍图
因为逻辑像素（CSS）和 物理像素不相等，苹果有的是320物理像素，有的是640物理像素
#### 16.杂问题
##### 绘制三角形
```
css

 代码解读
复制代码width: 0;
height: 0;
border: 50px solid transparent;
border-bottom-color: blue;
```
![](https://cdn.nlark.com/yuque/0/2024/webp/1730621/1721226900135-364c87f6-49a4-479a-bde4-9515eb969ae3.webp#averageHue=%23fcfcf9&clientId=u308a5ee3-1c3b-4&from=paste&id=u1edbfb61&originHeight=82&originWidth=122&originalType=url&ratio=1.25&rotation=0&showTitle=false&status=done&style=none&taskId=u8f9d218d-5b5d-4354-ab4e-32fb0ed67f0&title=)
##### 绘制扇形
```
css

 代码解读
复制代码border: 50px solid transparent;
width: 0;
heigt: 0;
border-radius: 50px;
border-top-color: blue;
```
![](https://cdn.nlark.com/yuque/0/2024/webp/1730621/1721226900284-7ebcdf74-748f-435e-99f3-ddc830e12d45.webp#averageHue=%23fdfefb&clientId=u308a5ee3-1c3b-4&from=paste&id=ubbb7ecc4&originHeight=72&originWidth=107&originalType=url&ratio=1.25&rotation=0&showTitle=false&status=done&style=none&taskId=u7cfe87a0-386a-4818-b182-04a54af7278&title=)
##### 如何实现小于12px的字体效果
我们用`css`设置字体大小为`12px`及以下时，显示都是一样大小，都是默认`12px`。
`transform:scale()`这个属性只可以缩放可以定义宽高的元素
而行内元素是没有宽高的，所以对于行内元素设置小于`12px`，我们可以加上一个`display:inline-block`;
```
css

 代码解读
复制代码transform: scale(0.7);
```
##### 元素竖向的百分比设定是相对于容器的高度吗

- 当按百分比设定一个元素的宽度时，它是相对于父容器的宽度计算的
- 但是，对于一些表示竖向距离的属性，例如 `padding-top` , `padding-bottom` , `margin-top` , `margin-bottom` 等，当按百分比设定它们时，依据的也是父容器的宽度，而不是高度。
##### 文本超出显示省略号
```
css

 代码解读
复制代码overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
```
##### line-height 三种赋值方式有何区别？（带单位、纯数字、百分比）

- `带单位`：`px` 是固定值，而 `em` 会参考父元素 `font-size` 值计算自身的行高
- `纯数字`：会把比例传递给后代。例如，父级行高为 `1.5`，子元素字体为 `18px`，则子元素行高为 `1.5 * 18 = 27px`
- `百分比`：将计算后的值传递给后代
##### CSS 中的`background-image` 属性可以和 `background-color` 属性一起生效么？
目前来看可以生效，且`background-image`在`background-color`上。
##### background-size: cover和contain 区别

- `cover`：缩放背景图片以完全`覆盖`背景区，可能背景图片部分看不见。
- `contain`：缩放背景图片以完全`装入`背景区，可能背景区部分空白。



