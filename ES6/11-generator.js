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
