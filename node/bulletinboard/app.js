const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const {Client} = require('pg')
const dotenv = require('dotenv')
// dotenv.load();
// const db_user = process.env.DB_USER;
// const db_pass = process.env.DB_USER;
// const database = process.env.DATABASE;
// const localhost = process.env.LOCALHOST
// const db_name = process.env.DB_NAME

// const connectionString = `${database}${db_user}:${db_pass}${localhost}${db_name}`;
const connectionString = 'postgresql://postgres:software@localhost:5432/bulletinboard';
// bulletinboard its the database
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static('public'))
app.set('view engine', 'ejs')

//  add message 
app.post('/add', (req, res)=>{
    const client = new Client({
        connectionString: connectionString,
    })
    client.connect()
    .then(()=>{
        return client.query(`INSERT INTO messages (title, body) values($1, $2)`, [req.body.title, req.body.body])
        //id=&1 == [req.params.id] its a query method
    })
    .then((result)=>{
        return res.redirect('/')
    })
})
//  get   info
app.get('/', (req, res)=>{
    const client = new Client({
        connectionString: connectionString,
    })
    client.connect()
    .then(()=>{
        return client.query(`SELECT * FROM messages`)
        // messages its the table we create in bulletinboard db
    })
    .then((result)=>{
        return res.render('messages', {result})
        //render my html or ejs
    })
})

//to delete
app.post('/delete/messages/:id', (req, res)=>{
    const client = new Client({
        connectionString: connectionString,
    })
    client.connect()
    .then(()=>{
        return client.query(`DELETE FROM messages WHERE id=$1`, [req.params.id])
        //id=&1 == [req.params.id] its a query method
    })
    .then((result)=>{
        return res.redirect('/')
    })
})

app.listen(3000, () => {
    console.log('Server running on port 3000...')
})