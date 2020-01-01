// Routing Example
//include express
var express = require('express');
//create an express application
var app = express();
//define a route on `/hello/world`
app.get('/hello/world', function(request, response) {  // /hello/world could be ur data file
    console.log('got request for "/hello/world"');
    response.send('hello there!');
});
app.get('/products', function(request, response) {   
    console.log('got request for "products"');
    response.send('<h1>This is a products page!</h1>!');
});

app.get('/hello/:name', function(request, response) { // type on browser                 //                                                       http://localhost:3000/hello/hossam
    response.send(`<h1>hello, ${request.params.name}</h1>`);
});

//if no routes are matched, return a 404
app.get('*', function(request, response) {
    response.status(404).send('<h1>uh oh! page not found!<h1>');
});
//have the application listen on a specific port
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
})

 
