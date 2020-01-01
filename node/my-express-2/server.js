const express = require('express')
const app = express()
// app.get('/hello/:name' , function(req, res){
//     res.send(`Hello ${req.params.name}`)
// })
// app.get(['/apple','/ale'] , function(req, res){
//     res.send('Apple or Ale ?')
// })
// app.get('/who+a' , function(req, res){  
//     res.send('I know right ?!')
// })
// app.get('/:fullname', function(req, res){  
//     res.send(`Hello, ${req.params.fullname}!`)
// })
// app.get('/:fullname', function(req, res){ 
//     let word = req.params.fullname
    // let wordReversed = word.split('').reverse().join('');   //reverse  the word
    // let wordUpperCase = word.toUpperCase() //upperCase
    // res.send(wordUpperCase)
    // res.send(wordReversed)  //reverse  the word
// })
app.get('/', function(req, res){
    res.send(`${req.query.name} ${req.query.age}`)  // query string
    // res.send(req.query)  // output {name:"jone", age :"33"}
})
app.listen(3000, function(){
    console.log('server started on port 3000')
})