
var arr = ["aa","n","ccc"];
for(var name in arr){
	console.log(name); // 0 1 2
}
for(var name of arr){
	console.log(name); // aa n ccc
}


var jobj = {a:"aa", b:"bbb", c:"ccc"};
for(var name in jobj){
	console.log(name); // a b c
}
// json的for-of报错！！  json不能使用for-of
for(var name of jobj){
	console.log(name);
}

