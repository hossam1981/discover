

const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser') //to read and add value
const Sequelize = require('sequelize')

const app = express()

// const connectionString = 'postgresql://postgres:software@localhost:5432/article';
// instead we do below
//sqz its the db here
const sequelize = new Sequelize('sqz', 'postgres', 'software',{
    host: 'localhost',
    port: '5432',
    dialect: 'postgres'
});
//sequelize = Client Pg
// create a table inside our db sqz
const Hat = sequelize.define('hat',
  {
    name: Sequelize.STRING,
    material: Sequelize.STRING,
    height: Sequelize.INTEGER,
    brim: Sequelize.BOOLEAN
  }
);
// // 1st excercise .. to check for table and add record
// 
// sequelize.sync()
// .then(() => Hat.create({
//     name: 'Panama',
//     material: 'leather',
//     height: 12,
//     brim: true
// }))
// find all hats
// u could replace the two (hat) hat[0] below with result and still work
// Hat.findAll().then((hat) =>{
//     console(" love this hat " + hat[0].dataValue.name)
// })
// // find by id 
// Hat.findById(1).then((hat) =>{
//     console.log("Single hat " + hat.dataValues.name)
//     console.log("Single hat height " + hat.dataValues.height)
// })

 // secend excercise .. to get data
//* Using Model.findAll() or Model.findOne(), you can supply conditions to your query to limit the records they return.


//to find all we need the loop
// Hat.findAll({
//     where: {
//         brim: true,
//         // name: 'baseball'  // add this to be spacific without it get u all hats
//     }
// })
// .then(function(rows){
//     for(var i = 0; i < rows.length; i++) {
//         var columnData = rows[i].dataValues;
//         var columnData = rows.dataValues;
//         var name = columnData.name;
//         var brim = columnData.brim;
//         console.log("name of hat " + name)
//         console.log("hat brim is " + brim)// or below
//         console.log("hat brim is " + rows[i].dataValues.brim)
// }}); 

// Hat.findOne({
//     where: {
//         brim: true,
//     }
// })
// .then(function(rows){

//         var columnData = rows.dataValues;
//         var name = columnData.name;
//         var brim = columnData.brim;
//         console.log("name of hat " + name)
//         console.log("hat brim is " + brim)// or below
// })

app.set('view engine', 'ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static('public'))
// routs goes here if we create it

//---1)  to read the table
app.get('/', (req, res)=>{
    console.log("to Index")
    Hat.findAll({ order: ['id']}).then((rows)=>{  // { order: ['id']} this toput in order
    console.log(rows.length)    
    return rows;
   })
     .then((rows) =>{
        return res.render('hats', {rows})
     })
  }) 
//----2)to add  hats recored to table
app.post('/add', (req, res)=>{
    Hat.create({
        name: req.body.name,
        material: req.body.material,
        height: req.body.height,
        brim: req.body.brim

    }).then(row=>{
        return res.redirect('/')
    })
})

//----3) edit hat recored
app.post('/edit/:id', (req, res)=>{
    let id = req.params.id 
    Hat.findById(id)
    .then(row =>{
        return row
    })
    .then(row=>{
        return res.render('edit-hat', {row}) // add the data from row to file edit-hat
    })
})
//----4) updating hat record
app.post('/update', (req, res) =>{
    let id = req.body.id
    Hat.findById(id)
    .then((row) =>row.update({
        name: req.body.name,
        material: req.body.material,
        height: req.body.height,
        brim: req.body.brim
    }))
    .then(row =>{
        return res.redirect('/')
    })
})

//----5) delete hat record
app.post('/delete/:id', (req, res)=>{
    let id = req.params.id
    Hat.findById(id)
    .then(row => row.destroy(row))
    .then(() =>{
        return res.redirect('/')
    })
})

//----6) 
app.listen(3000, () => {
    console.log('Server running on port 3000...')
})