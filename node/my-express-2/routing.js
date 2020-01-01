const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const fs = require('fs');

// 1) Accept "music" or "food", returning "Hmmm...I like both music and food".
// app.get(['/music','/food'] , (req, res)=>{
//     res.send('Hmmm...I like both music and food')
// })
// go to your local host http://localhost:3000/music and run it 

//(2) Accept the word "huge" with an arbitrary number of u's and e's, returning "Is this from our president?!".

// app.get('/hu+ge+' , (req, res)=>{  
//     res.send('Is this from our president?!.')
// })
// go to your local host http://localhost:3000/huuuugeeee

// 3) Take "George" and "Washington" as parameters, returning a greeting "Hello, President George Washington".  George Washington should be a variable.


// app.get('/:name', (req, res)=>{
//     res.send(` Hello, President ${req.params.name}`)  // params string
// })
// 4) Takes a name and convert it to UPPERCASE.
// app.get('/:name', (req, res)=>{
//     res.send(`${req.params.name}`.toUpperCase())  
// }) // params string
// 5) Create a html page with input boxes and a radio box, and return all the data via Express/Body-Parser/Node after the submit button has been clicked.
app.use(bodyParser.json()) //read the body info    // router
app.use(bodyParser.urlencoded({extended: false}))  // read url value
app.use(express.static('public'))  // puplic static folder mostly its html/css

let arr = [];
app.post('/login2', (req, res)=>{
    // res.status(200).send(req.body)
    res.send(req.body)
    let data = req.body
    arr.push(data)
    let arr2 = JSON.stringify(arr)
    fs.writeFile('db.txt', arr2, (err)=>{   // db.txt willget created

        console.log("Data added")  
    })
//   fs.readFile('db.txt', arr2, (err) => {
//       let data2 = 
//         for (let i=0; i< data2; i++) {
//             console.log(data2[i]['name']);
//             console.log(data2[i]['address']);
//             console.log(data2[i]['gender']);
//         }
//     })
//app.listen(3000, function(){
app.listen(3000, ()=>{
    console.log('server started on port 3000')
})