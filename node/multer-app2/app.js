const express = require('express')
const ejs = require('ejs')
const sharp = require('sharp') // create thumbnials for pic // customize the pic
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

const upload = multer({storage: storage}).single('photo') // photo has to equel to name="photo" in ejs file //  is to upload the pic to  upload folder

 const app = express()
 app.set('view engine', 'ejs')

 app.use(bodyParser.json())
 app.use(bodyParser.urlencoded({extended: false}))
 app.use(express.static('public'))


 // upload route
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
     .toFile('public/thumbnails/' + req.file.filename, function(err) { // toFile means  to store it 
         // output.jpg is 100 pixels wide 100 pix high image
         // containing a scaled and cropped version of input.jpg
         res.send(req.file)
        // return res.render('live-gallery-2', {data}) 
     })
   })
})

app.get("/", (req, res) => {
    fs.readdir('public/thumbnails' , (err,data)=>{ // read the file
        console.log(data)
        return res.render('live-gallery-2', {data}) // render the pic / read the file
    })
  })
  
     app.listen(PORT , ()=>{
        console.log('Server Starting ... ')
     })