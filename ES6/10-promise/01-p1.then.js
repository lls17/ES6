var p1 = new Promise(function(resolve, reject){
	if(true){
		resolve(1);
	}else{
		reject(2);
	}
});

// ① p.then(fn1, fn2) 避免了回调地域
p1.then(function(data){
	console.log("成功了 : " + data);
	return data+4; //返回给下一个then
}, function(data){
	console.log("失败了 : " + data);
}).then(function(data){
	
})
