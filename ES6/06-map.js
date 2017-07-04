/**
 * Map对象
 * 	  和json相似，也是一种  key=>value 形式； Map对象为了和for of循环配合而生的
 * 		① map.set(key, val);
 * 		② map.get(key);
 * 		③ map.delete(key);
 * 
 * 		④ for(var [k,v] of map)
 * 		  for(var [k,v] of map.entries())
 * 		⑤ for(var k of map.keys())
 * 		⑥ for(var v of map.values())
 */

var map = new Map();

map.set("a", "apple");
map.set("b", "banana");
map.set("c", "pear");
map.set("d", "orange");

//console.log(map.get("b")); //banana

//map.delete("c");

console.log(map); //Map { 'a' => 'apple', 'b' => 'banana', 'd' => 'orange' }


//for(var val of map){
//	console.log(val);  //[ 'a', 'apple' ]
//}
//01.遍历全程  key,value  map或map.entries();
//for(var val of map.entries()){
//	console.log(val);  //[ 'a', 'apple' ]
//}

//02.只遍历key
//for(var val of map.keys()){
//	console.log(val);  //a b c d
//}

//03.只遍历value
//for(var val of map.values()){
//	console.log(val);  //apple banane ..
//}


