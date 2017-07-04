/**
 * 结构赋值
 * 	  模式匹配：——左侧的样子，需要和右侧一样
 * 		① JSON 与顺序无关
 * 		② 结构赋值——默认值
 */

//var [a,b] = [1,2];
//console.log(a);

// ① JSON 与顺序无关
//var [{a,b}] = [{b:1,a:2}];
//console.log(a);

// ② 结构赋值——默认值
var {a=12,b} = {};
console.log(a);
