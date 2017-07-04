var p1 = Promise.resolve(2);
var p2 = Promise.reject(4);

Promise.all([p1, p2]).then(function(data){
	console.log("成功了，"+data);
}, function(data){
	console.log("失败了，"+data);
});
