//  thats core modules
const request = require("request");
const http = require('http');// 
var movieData;
//request very samilar to ajaxs
request('http://www.omdbapi.com/?apikey=60f7bdd3&t=titanic', function(err, response, body){
    if(!err && response.statusCode == 200){ //!err means no err //if no err and its succeful console.log
        
	// console.log(err);
	// } else if (!err && response.statusCode == 200){
// this part copy from my-request.js file but
		// console.log(body);
		// const actor = (JSON.parse(body)["Actors"]);// convert all the string data to astring
		// const release= (JSON.parse(body)["Released"]);
		// console.log(actor);
		// console.log(release);
         movieData = JSON.parse(body);
	}
})
http.createServer(function (req, res){
	res.writeHead(200,{'content-type': 'text/html'});

    var poster = movieData["Poster"];
    res.write('<img src=' + poster +'>');
    // poster.style.textAlign = 'center';

    var title = movieData["Title"];
    res.write('<br><h1>' + movieData["Title"] + '<h1>');

    var actors = movieData["Actors"];
    res.write('<br><h1>' + movieData["Actors"] + '</h1>');

    var year = movieData["Year"];
    res.write('<br><h1>' + movieData["Year"] + '<h1>')

    res.end();
}).listen(8080, function() {
	console.log("server has started...");
})

