const fs = require('fs');
const http = require('http');
var data2;
fs.readFile('tech-ceo.txt', 'utf-8', function(err, data){
  data2 = JSON.parse(data);
  console.log(data2[1]["name"]);
})
let server = http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type':'text/html'});
  for(i in data2){
    res.write("<img src=" + data2[i]["image"] + ">");
    res.write("<h1>Name: " + data2[i]["name"] + "</h1>");
    res.write("<h1>Born: " + data2[i]["born"] + "</h1>");
    res.write("<hr style=width: '5px'>")
  }
  res.end();
})
server.listen(3000, function(){
  console.log("server started on port 3000...");
})