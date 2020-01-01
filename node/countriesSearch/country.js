const amar = require('fs');
// readFile diff method.
const country = process.argv[2]; //  so we could type on the termial 

amar.readFile("countries.json",  "utf-8", function(err, data){
		let data2 = JSON.parse(data);   // stringify the data
		// console.log(data2);
		// console.log(data2[0].name);   // get the frist country name                                         Afghanistan
		// console.log((data2)[0]);
 for(let i in data2){                   // 
//    if(data2[i]['name']== country){   
	if((data2[i]['name'].toLowerCase()) == country.toLowerCase()){   // to convert from a capitalize to lowercase 
                                          // toLowerCase so its not case      sinsitive anymore and u could    ;type it anyway
	   console.log(data2[i]['name']);
	   console.log(data2[i]['capital']);
	   console.log(data2[i]['region']);
	   console.log(data2[i]['population']);
   }
 }	
})
// at the End type in your Terminal any country $ node country egypt
