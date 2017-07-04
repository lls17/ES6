//之前的写法
//function Person(name, age){
//	this.name = name;
//	this.age = age;
//}
//Person.prototype.getName = function(){
//	return this.name;
//}
//Person.prototype.getAge = function(){
//	return this.age;
//}
//
//var p = new Person("lls", 17);
//console.log(p); //Person { name: 'lls', age: 17 }

//---------现在的写法----------
class Person{
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
	//getName : function(){}
	getName(){
		return this.name;
	}
	getAge(){
		return this.age;
	}
}

var p = new Person("W", 19);
console.log(p);  //Person { name: 'W', age: 19 }


