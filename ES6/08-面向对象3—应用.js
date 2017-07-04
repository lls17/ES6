class Queue{
	constructor(content=[]){
		this._queue = [...content];
	}
	shift(){
		return this._queue.shift();
	}
	push(item){
		this._queue.push(item);
		return this._queue.length;
	}
}

var q = new Queue([8,2,3,4]);
console.log(q.shift());
console.log(q.push(6));
console.log(q._queue);
