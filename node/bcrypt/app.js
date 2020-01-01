const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const Sequelize = require('sequelize')
const PORT = process.env.PORT || 3000

const app = express()

app.set('view engine', 'ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static('public'))

const Op = Sequelize.Op
// go to the terminal and create database example like here bcryptdb
const sequelize = new Sequelize('bcryptdb', 'postgres', 'software', { // connection 
    host: 'localhost',
    port: '5432',
    dialect: 'postgres',

    operatorsAliases:{
        $and: Op.and,
        $or: Op.or,
        $eq: Op.eq,
        $like: Op.like,
        $iLike:Op.iLike
    }
});
//----- 1- creating a table using sequelize:
        // user its the table name if u serach on terminal will be users with s 
const User = sequelize.define('user', {
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    
})
sequelize.sync() // <<< * check for table *


// -----create the route----

app.get('/', (req, res)=>{
    return res.render("login", {message:""})
})


// ---create route login.ejs and if its right get us to home page
app.post('/login', (req, res)=>{
    const username = req.body.username
    const myPlaintextPassword = req.body.password

    User.findOne({
        where: {
            username: username
        }
    })
    .then((user)=>{
        if (!user){
            return res.render('login',{message: 'User not found!'})
        }
        bcrypt.compare(myPlaintextPassword, user.dataValues.password, (err, response)=>{
            if(!response){
                return res.render('login',{message: 'User not found!'})
            }
            return res.render('homepage')
        })
    })
})

app.post('/register', (req, res)=>{
//-----------------------------------------add hash
const saltRound = 10
const myPlaintextPassword = req.body.password
const username = req.body.username

bcrypt.hash(myPlaintextPassword, saltRound, (err,  hash)=>{
    console.log(hash)
    User.create({
        username: req.body.username,
        password: hash //req.body.password
    })
    .then(()=>{
        return res.render('confirmation', {username: req.body.username})
    })
  })
})



app.listen(PORT, ()=>{
    console.log('Bcrypt app server started ...   ')
})