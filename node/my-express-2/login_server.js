const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())                         // router
app.use(bodyParser.urlencoded({extended:false})) 
app.use(express.static('public')) 

app.post('/login',function(req, res){
    res.send(req.body.username)
})

app.get('/', function(req, res){
    res.send(`${req.query.name} ${req.query.age}`)  // query string
    // res.send(req.query)  // output {name:"jone", age :"33"}
})
app.listen(3000, function(){
    console.log('server started on port 3000')
})
//type on the web brawser   http://localhost:3000/login.html
