/**
 * 超级字符串， 反单引号  ` `
 * 	 ` abc${变量名}def `
 * 	  以前是  "abc" + 变量名 + "def"
 */

var str = '周五~';
console.log(`今天是${str},天气不错,下${str}见!!`);
