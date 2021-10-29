/*
 *@Description: const let var 的区别
 *@author: 卢少川 
 *@Date: 2021-10-21 15:01:38
 */
// 1. var存在变量提升（声明）var在全局作用域中声明，有一种行为会挂载在window对象上
// 2.const let 无法重复声明，const 用于声明常量，其值一旦被设定不能再被修改，否则会报错。但是const是禁止修改绑定，修改对象中的值不会报错
// 3.const let，会生成块级作用域，存在TDZ，尝试访问TDZ中的值会报错
// let 声明在循环内部的行为是标准中专门定义的（ECMAScript 规范第 13.7.4.7 节） 简单的来说，就是在 for (let i = 0; i < 3; i++) 中，即圆括号之内建立一个隐藏的作用域，然后每次迭代循环时都创建一个新变量，并以之前迭代中同名变量的值将其初始化

for (let i = 0; i < 3; i++) {
  let i = 'abc';
  console.log(i);
}
// abc
// abc
// abc

var funcs = [];
for (let i = 0; i < 3; i++) {
  funcs[i] = function () {
    console.log(i);
  };
}
funcs[0](); // 0
// 就相当于：
// 伪代码
(let i = 0) {
  funcs[0] = function () {
    console.log(i)
  };
}

(let i = 1) {
  funcs[1] = function () {
    console.log(i)
  };
}

(let i = 2) {
  funcs[2] = function () {
    console.log(i)
  };
};


