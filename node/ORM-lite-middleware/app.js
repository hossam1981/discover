const express = require('express');
const ejs = require('ejs');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const orm = require('./scripts/ORM.js');
const app = express();

app.set('view engine','ejs');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


var connect = ['middleware','postgres','software'];
orm.initialize(connect);

orm.getAll().then(data=>{
  console.log(data[0].dataValues);
  console.log(data[1].dataValues);
  console.log(data[2].dataValues);
});


orm.findById(1).then(data=>{
  console.log(data.dataValues);
});

app.get('/',(req,res)=>{
  res.send('')
});

app.listen(3000,function(){
  console.log('app is runnig away from you...');
});
