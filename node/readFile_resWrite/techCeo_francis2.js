//Use localhost:3000
//Use localhost:3000/dara
//Use localhost:3000/zuckerberg
//use localhost:3000/hastings
const fs = require('fs');
const http = require('http');
var data2;
fs.readFile('tech-ceo.txt', 'utf-8', function(err, data){
    data2 = JSON.parse(data);
    console.log(data2[1]["name"]);
})
let server = http.createServer(function(req, res){
    if(req.url == '/'){
        res.writeHead(200, {'Content-Type':'text/html'});
        for(i in data2){
            res.write("<img src=" + data2[i]["image"] + ">");
            res.write("<h1>Name: " + data2[i]["name"] + "</h1>");
            res.write("<h1>Born: " + data2[i]["born"] + "</h1>");
            res.write("<hr  style=width: '5px'>")
        }
        res.end();
    }
    if(req.url == '/dara'){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write("<img src=" + data2[0]["image"] + ">");
        res.write("<h1>Name: " + data2[0]["name"] + "</h1>");
        res.write("<h1>Born: " + data2[0]["born"] + "</h1>");
        res.end();
    }
    if(req.url == '/zuckerberg'){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write("<img src=" + data2[1]["image"] + ">");
        res.write("<h1>Name: " + data2[1]["name"] + "</h1>");
        res.write("<h1>Born: " + data2[1]["born"] + "</h1>");
        res.end();
    }
    if(req.url == '/hastings'){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write("<img src=" + data2[2]["image"] + ">");
        res.write("<h1>Name: " + data2[2]["name"] + "</h1>");
        res.write("<h1>Born: " + data2[2]["born"] + "</h1>");
        res.end();
    }
})
server.listen(3000, function(){
    console.log("server started on port 3000...");
})