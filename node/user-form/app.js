const express = require('express')  // useing express mudele
const bodyParser = require('body-parser')
const app = express()
const fs = require('fs')

app.use(bodyParser.json()) //read the body info    // router
app.use(bodyParser.urlencoded({extended: false}))  // read url value
app.use(express.static('public')) 

let arr = []
app.post('/register' ,(req, res)=>{
  console.log(req.body)
  res.send(req.body)
  let data = req.body
  arr.push(data)
  let arr2 = JSON.stringify(arr)
// db.txt will get created
  fs.writeFile('db.txt', arr2, (err)=>{   
    console.log("Data added to file")    
  })
})
// get the data and read
app.get('/user-profiles', (req, res)=>{  
    fs.readFile('db.txt', 'utf-8', (err, data)=>{
        res.send(data)
    })
  })

app.listen(3000, ()=>{
  console.log(' server started on port 3000 ')
})