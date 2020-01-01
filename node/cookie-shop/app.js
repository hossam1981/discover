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

app.use(cookieParser())

let shoes = 0
let bags = 0
let pants = 0
let tshirts = 0
let date = ""

app.get('/', (req, res)=>{
    shoes = req.cookies.shoes || 0 
    bags = req.cookies.bags || 0
    pants = req.cookies.pants || 0
    tshirts = req.cookies.shirt || 0
    date = req.cookies.date || ""
    username = req.cookies.username 

    return res.render('shop', {shoes, bags, pants, shirt, date, username})
})

app.post('/order',( req, res)=>{
    shoes = req.body.shoes 
    bags = req.body.bags 
    pants = req.body.pants 
    tshirts = req.body.shirt 
    date = req.body.date 
    username = req.body.username
    let d = new Date().toDateString()
    date = d
    res.cookie('shoes', shoes, {maxAge: 900000})// maxAge set expiration the cookie
    res.cookie('bags'), bags, {maxAge: 900000}
    res.cookie('pants', pants,{maxAge: 900000})
    res.cookie('tshirts' ,tshirts, {maxAge: 900000})
    res.cookie('date', date, {maxAge: 900000})
    res.cookie('username', username, {maxAge: 900000})
    
    return res.render('checkout', {shoes, bags, pants, shirt, date, username})
})


app.listen(PORT , ()=>{
    console.log('Server Starting ... ')
 })