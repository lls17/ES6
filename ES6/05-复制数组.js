var arr = [3, "ab", 9, 11];

var arr2 = [];

//方法一、循环遍历每一项复制
//for(var i=0; i<arr.length; i++){
//	arr2[i] = arr[i];
//}

//方法二、Array.from(arr)
//arr2 = Array.from(arr);

//方法三、三个点...
arr2 = [...arr];

console.log(arr2);

function show(...args){
	args.push(5);
	console.log(args);
}
show(1,2,3,4);

