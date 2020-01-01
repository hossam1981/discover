const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const {Client} = require('pg')
const dotenv = require('dotenv')
// const dotenv = require('dotenv')

const connectionString = 'postgresql://postgres:software@localhost:5432/article';
// article its the database
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static('public'))
app.set('view engine', 'ejs')

//  add comments..
app.post('/add', (req, res)=>{
    const client = new Client({
        connectionString: connectionString,
    })
    client.connect()
    .then(()=>{
        return client.query(`INSERT INTO comments (username,title, body) values($1, $2, $3)`, [req.body.username,req.body.title, req.body.body])
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
        return res.render('comments', {result})
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


app.listen(3000, () => {
    console.log('Server running on port 3000...')
})