'use strict';

// ================================================================
// get all the tools we need
// ================================================================


const ejs = require('ejs')
const bodyParser = require('body-parser')
const {Client} = require('pg')
const dotenv = require('dotenv')

const connectionString = 'postgresql://postgres:software@localhost:5432/article';




// =================================end comments code========================
var express = require('express');
var routes = require('./routes/index.js');
var port = process.env.PORT || 3000;

var app = express();

// ================================================================
// setup our express application
// ================================================================

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


app.use('/public', express.static(process.cwd() + '/public'));
app.set('view engine', 'ejs');

// ================================================================
// the comments code
// ================================================================
//  add comments..
app.post('/add', (req, res)=>{
    const client = new Client({
        connectionString: connectionString,
    })
    client.connect()
    .then(()=>{
        return client.query(`INSERT INTO comments (username, title, body) values($1, $2, $3)`, [req.body.username, req.body.title, req.body.body])
        //id=&1 == [req.params.id] its a query method
    })
    .then((result)=>{
        return res.redirect('/')
    })
})
//  get info..
app.get('/', (req, res)=>{
    const client = new Client({
        connectionString: connectionString,
    })
    client.connect()
    .then(()=>{
        return client.query(`SELECT * FROM comments`)
        // comments its the table we create in article db
    })
    .then((result)=>{
        return res.render('pages/index', {result}) // 'index' its the file name
        //render my html or ejs
    })
})

//to delete
app.post('/delete/comments/:id', (req, res)=>{
    const client = new Client({
        connectionString: connectionString,
    })
    client.connect()
    .then(()=>{
        return client.query(`DELETE FROM comments WHERE id=$1`, [req.params.id])
        //id=&1 == [req.params.id] its a query method
    })
    .then((result)=>{
        return res.redirect('/')
    })
})




// ================================================================
// setup routes
// ================================================================
routes(app);

// ================================================================
// start our server
// ================================================================
app.listen(port, function() {
    console.log('Server listening on port ' + port + '...');
});