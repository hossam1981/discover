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


//-----------
app.use(cookieParser())

let butter = 0
let almond = 0
let oatmeal = 0

app.get('/', (req, res)=>{
    butter = req.cookies.butter || 0 
    almont = req.cookies.almond || 0
    oatmeal= req.cookies.oatmeal || 0

    return res.render('bakery', {butter, almond, oatmeal})
})

app.post('/butter', (req, res)=>{
    butter++
    res.cookie('butter', butter, {maxage: 900000})
    res.redirect('/')
})
app.post('/almond', (req, res)=>{
    almond++
    res.cookie('almond', almond, {maxage: 900000})
    res.redirect('/')
})
app.post('/oatmeal', (req, res)=>{
    oatmeal++
    res.cookie('oatmeal', oatmeal, {maxage: 900000})
    res.redirect('/')
})
// ----------------clear the Cookies-------------
app.post('/feel-guilty', (req, res)=>{

butter = 0 
almond = 0
oatmeal = 0

res.cookie('butter', butter, {maxAge: 900000})
res.cookie('almond', almond, {maxAge: 900000})
res.cookie('oatmeal', oatmeal, {maxAge: 900000})

res.redirect('/')

})

app.listen(PORT , ()=>{
    console.log('Server Starting ... ')
 })