var json = {"name":"lls", "age":17, "color":'yellow'};

// 删除json项
delete json.name;
for(var k in json){
	console.log(k, json[k]);
}

