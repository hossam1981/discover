// creating a web local a web server on ur computet
// a core module http or fs
const http = require('http')

//http 80 port https 443 port
// if u a devolper use 3000 8000 8080 ports
http.createServer(function(req, res){
	res.end('<h1> Hello Node, you are running a server man </h1>');

}).listen(8080, function(){
	console.log("server Start...");

})
// type ..node server >> the name of the file on ur terminal