const express = require('express')
const ejs = require('ejs')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000


const app = express()
app.set('view engine', 'ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static('public'))

// ----------create the Cookies------get-res.cookies----
// app.get('/login',(req, res)=>{
//     return res.render('login', {username: ""})
// })

app.post('/login',( req, res)=>{
    let username = req.body.username
           res.cookie('username', username, {maxAge: 90000})
    return res.redirect('/login')           // to get same page
})
//---------read the Cookies----------get--req.cookies---
app.use(cookieParser())
app.get('/login',(req, res)=>{
    return res.render('login', {username: req.cookies.username})
})

app.listen(PORT , ()=>{
    console.log('Server Starting ... ')
 })