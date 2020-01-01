const get = require('fs');
// readFile diff method.
get.readFile("movies.txt",  "utf-8", function(err, data) {
	if(err){
		console.log("err");

	}else{
		console.log(JASON.parse(data);
		let data2 = JASON.parse(data);
			                                 // stringify
		console.log(JSON.parse(data2[0]));
	}
})



