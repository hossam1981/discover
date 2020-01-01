const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser') //to read and add value
const Sequelize = require('sequelize')

const app = express() 

const sequelize = new Sequelize('sqz', 'postgres', 'software',{ // connection 
    host: 'localhost',
    port: '5432',
    dialect: 'postgres'
});

//----- 1- creating a table using sequelize

const Shoe = sequelize.define('shoe',
  {
    name: Sequelize.STRING,
    material: Sequelize.STRING,
    size: Sequelize.INTEGER,
    color: Sequelize.STRING,
    qty: Sequelize.INTEGER
  }
);

app.set('view engine', 'ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static('public'))

sequelize.sync() // <<< * check for table *

// add this for the search 
let message = "";
// routes
// Read all records from shoes table
app.get('/', (req, res)=>{
  console.log("to Index")
  Shoe.findAll({ order: ['id']}).then((rows)=>{  // { order: ['id']} this toput in order
  console.log(rows.length)    
  return rows;
 })
   .then((rows) =>{
      return res.render('shoes', {rows, message})   //imp shoe(s) not shoe
                                // add message next to the rows for search 
   })
})
//-- 2))  add record shoes to the table
app.post('/add', (req, res)=>{
  Shoe.create({
    name: req.body.name,
    material: req.body.material,
    size: req.body.size,
    color: req.body.color,
    qty: req.body.qty,

  }).then(row=>{
      return res.redirect('/')
  })
})
//--3)) to edit 
//--4)) to  delete
//---5)) add search
app.get('/search', (req, res)=>{
  let s = req.query.search
  Shoe.findAll({
      where: 
      {
          name:
          {
              $iLike: `${s}`
          }
      }
  })
  .then(rows =>{
      if(rows == ""){
          return res.render('shoes', {rows, message: "Not found"})
      }
      return res.render('shoes', {rows, message})
  })
})
//--6)) to update
app.post('/update', (req, res) =>{
  let id = req.body.id
  shoe.findById(id)
  .then((row) =>row.update({
      name: req.body.name,
      material: req.body.material,
      size: req.body.size,
      color: req.body.color,
      qty: req.body.qty,
  }))
  .then(row =>{
      return res.redirect('/')
  })
})

app.listen(3000, () =>{
    console.log('Magic happens on port 3000...')
})