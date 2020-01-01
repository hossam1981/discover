const Malak = require('fs');  
const http = require('http')

let data2;  // put it to be globel
// we use a method  to write on print on another file 
// fs.writeFile(filename, data , call back fn);
Malak.readFile("tech-ceo.txt" ,'utf-8', function(err, data){   
    console.log(data);
    data2 = JSON.parse(data);    // from string to object
    console.log(`${data2[1]["name"]} is a ${data2[1]["job"]}`);
})
http.createServer(function (req, res){
    res.writeHead(200,{'Content-Type': 'text/html'});
    
    for (let i = 0; i < data2.length; i++) {  // create a for loop
        
    var image = data2[i]["image"];
    res.write('<img src=' + image +'>');
    // image.style.textAlign = 'center';

    var name = data2[i]["name"];
    res.write('<br><h1>' + data2[i]["name"] + '<h1>');

    var job = data2[i]["name"];
    res.write('<br><h1>' + data2[i]["job"] + '<h1>');

    var born = data2[i]["born"];
    res.write('<br><h1>' + data2[i]["born"] + '<h1>');
    }                                                // end for loop

    res.end();
}).listen(8080, function() {
	console.log("server has started...");
})
