const request = require('request');
const http = require('http');

var myNYCDA;
//
//we getting nycda home page data
request('http://www.nycda.com', function(err, response, body){
	if(err){
		console.log(err);
	} else if (!err && response.statusCode == 200){
	 		myNYCDA = body;
	 	}
	 
})
// we pass the body or data 
http.createServer(function(req,res){
	res.writeHead(200, {'content-Type' :'text/html'});
	res.write(myNYCDA); // write method
	res.end(myNYCDA);


}).listen(8080, function () {
	console.log("server has started...");
})