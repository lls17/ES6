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

//var p = new Person("lls", 17);
//console.log(p); //Person { name: 'lls', age: 17 }

//function Worker(name, age, job){
//	//1.继承属性
//	Person.call(this, name, age);
//	this.job = job;
//}
////2.继承方法
////Worker.prototype = new Person();
//for(var attr in Person.prototype){
//	if(Person.prototype.hasOwnProperty(attr)){
//		Worker.prototype[attr] = Person.prototype[attr];
//	}
//}
////3.改造构造函数指向
//Worker.constructor = Worker;
//Worker.prototype.getJob = function(){
//	return this.job;
//}
//
//var w = new Worker("Song", 33, "Writer");
//console.log(w.getName(), w.getJob()); //Song Writer


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

//var p = new Person("W", 19);
//console.log(p);  //Person { name: 'W', age: 19 }

class Worker extends Person{
	constructor(name, age, job){
		super(name, age);
		this.job = job;
	}
	getJob(){
		return this.job;
	}
}

var w = new Worker("Song", 33, "Writer");
console.log(w.getName(), w.getJob()); 


