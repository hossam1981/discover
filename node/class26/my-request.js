const request = require("request");
//request very samilar to ajaxs
request('http://www.omdbapi.com/?apikey=60f7bdd3&t=titanic', function(err, response, body){
	if(!err && response.statusCode == 200){ //!err means no err //if no err and its succeful console.log
		console.log(body);

		const actor = (JSON.parse(body)["Actors"]);// convert all the string data to astring
		const release= (JSON.parse(body)["Released"]);
		console.log(actor);
		console.log(release);

	}
})
