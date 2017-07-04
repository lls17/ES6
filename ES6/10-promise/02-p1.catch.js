var p1 = new Promise(function(resolve, reject){
	resolve("成功啦！！");
});

p1.then(function(data){
	console.log(data);
	throw "异常 报错！";
}).catch(function(err){
	console.log(err);
});
