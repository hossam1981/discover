const express = require('express')
const ejs = require('ejs')
const sharp = require('sharp') // create thumbnials for pic // customize the pic
const path = require('path')
const multer = require('multer')
const bodyParser = require('body-parser')
const fs = require('fs')
const PORT = process.env.PORT || 3000


const Sequelize = require('sequelize')  //to create table on our db

const Op = Sequelize.Op  //to prevent sql injection / hacking

const sequelize = new Sequelize('postgres', 'postgres', 'software', { // connection 
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
//----- 1- creating a table using sequelize
const Pic = sequelize.define('pic', {
    username: Sequelize.STRING,
    image:Sequelize.STRING,
    comment:Sequelize.STRING,
})

sequelize.sync() // <<< * check for table *

// storage object definition
const storage = multer.diskStorage({
   destination:'./public/upload',
   filename: (req, file, cb) =>{  // cb call back function
     cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
   }
})
// upload process deinition

const upload = multer({storage: storage}).single('image') // photo has to equel to name="photo" in ejs file //  is to upload the pic to  upload folder

 const app = express()
 app.set('view engine', 'ejs')

 app.use(bodyParser.json())
 app.use(bodyParser.urlencoded({extended: false}))
 app.use(express.static('public'))


 // upload route file 
 app.post('/upload', (req, res)=>{
     upload(req, res,(err)=>{
         if(err){
             console.log(err)
         }
     console.log(req.body)// req.body from body-parser
     console.log(req.file) // req.file from multer
     console.log("File for sharp" + req.file.path)
     sharp(req.file.path)  // sharp to upload to thumbnails
     .resize(100, 100)
     .toFile('public/thumbnails/' + req.file.filename, function(err) { // toFile means to store it the terminal 
         // output.jpg is 100 pixels wide 100 pix high image
         // containing a scaled and cropped version of input.jpg
        //  res.send(req.file)
        // return res.render('live-gallery-2', {data}) 

     }) // create a function to inter the record to sequelize
Pic.create({
    username:req.body.username,
    image :req.file.filename,
    comment : req.body.comment
})
 .then(()=>{
     return res.redirect('/')
    })
  })
})

app.get("/", (req, res) => {// to read from the db
  Pic.findAll().then((rows)=>{
      return rows  // rows is  table db rows
  })
   .then((rows)=>{
    return res.render('livegram', {rows})  // render the pic..send the rows to livegram.ejs file
   })
    

    })
  

     app.listen(PORT , ()=>{
        console.log('Server Starting ... ')
     })