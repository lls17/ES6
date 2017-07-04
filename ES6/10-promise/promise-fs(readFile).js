const fs = require("fs");

fs.readFile("../index1.html", function(err, data){
	var p1 = new Promise(function(resolve, reject){
		if(err){
			reject(err);
		}else{
			resolve(data);
		}
	});
	
	p1.then(function(data){
		console.log(data.toString());
	}, function(data){
		console.log(data);
	});
});
