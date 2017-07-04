/**
 * Generator 是个函数，遍历器，状态机
 * 
 *   ① 函数名字前面有 *
 *   ② 函数内部使用 yield语句
 * 
 * 		遍历器：  for-of只能遍历有遍历器的对象
 * 			返回是个对象，有next()方法，方法返回value和done
 * */

function* show(){
	yield "apple";
	yield "banana";
	yield "pear";
//	return "orange";
}

var res = show();
console.log(res.next()); //{ value: 'apple', done: false }
console.log(res.next()); //{ value: 'banana', done: false }
console.log(res.next()); //{ value: 'pear', done: false }
console.log(res.next()); //{ value: 'undefined', done: true }
//console.log(res.next()); //{ value: 'orange', done: true }

//给对象加遍历器
