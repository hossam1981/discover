const Malak = require('fs');  

// we use a method  to write on print on another file 
// fs.writeFile(filename, data , call back fn);
Malak.writeFile(" test.txt" ," this is watever" ,function(err){
	if(err){
		console.log(err);
	}else{
		console.log("File was created")
	}
})