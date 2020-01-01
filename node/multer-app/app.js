const express = require('express')
const ejs = require('ejs')
const sharp = require('sharp') // create thumbnials for pic
const path = require('path')
const multer = require('multer')
const bodyParser = require('body-parser')
const fs = require('fs')
const PORT = process.env.PORT || 3000

// storage object definition
const storage = multer.diskStorage({
   destination:'./public/upload',
   filename: (req, file, cb) =>{  // cb call back function
     cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
   }
})
// upload process deinition

const upload = multer({storage: storage}).single('photo')

 const app = express()
 app.set('view engine', 'ejs')
 app.use(bodyParser.json())
 app.use(bodyParser.urlencoded({extended: false}))
 app.use(express.static('public'))

 app.get("/", (req, res) => {
    fs.readdir('public/thumbnails' , (err,data)=>{ // read the file
        console.log(data)
        return res.render('live-gallery-2', {data}) // render the pic 
    })
})



 //upload route
 app.post('/upload', (req, res)=>{
     upload(req, res,(err)=>{
         if(err){
             console.log(err)
         }
     
     console.log(req.body)// req.body from body-parser
     console.log(req.file) // req.file from multer
     console.log("File for sharp" + req.file.path)
     sharp(req.file.path)
     .resize(100, 100)
     .toFile('public/thumbnails/' + req.file.filename, function(err) {
         // output.jpg is 100 pixels wide 100 pix high image
         // containing a scaled and cropped version of input.jpg
         res.send(req.file)
     })
    })
})


     app.listen(PORT , ()=>{
        console.log('Server Starting ... ')
     })