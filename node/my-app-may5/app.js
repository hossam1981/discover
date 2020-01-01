// using heroku server
const PORT = process.env.PORT || 3000 // either heroku port or local 3000

const express = require('express') // useing express mudele
const bodyParser = require('ejs')
const app = express()
app.set('view engine', 'ejs')

app.get('/home-with-data', function(req, res){ // http://localhost:3000/home-with-data
    res.render('login') 
}) 

app.listen(PORT , ()=>{
    console.log('Server Starting ... ')
 })    