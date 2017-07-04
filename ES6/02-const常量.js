/**
 * const常量：一旦声明赋值，就不能改变
 * 		① 必须一声明就赋值，否则报错
 * 		② 不允许重复命名，否则报错
 */

const NAME ="lls";

//如下报错——必须一声明就赋值
//const NAME;
//NAME = "lls";

NAME = "W"; //报错，常量一经声明赋值，就不能再改变

console.log(NAME);
