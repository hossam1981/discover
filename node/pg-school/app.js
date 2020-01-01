const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const {Client} = require('pg')
const connectionString = 'postgresql://postgres:software@localhost:5432/school';
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static('public'))
app.set('view engine', 'ejs')
// To get all students info
app.get('/', (req, res)=>{
    const client = new Client({
        connectionString: connectionString,
    })
    client.connect()
    .then(()=>{
        return client.query(`SELECT * FROM students`)
    })
    .then((result)=>{
        return res.render('students', {result})
    })
})
//Delete student
app.post('/delete/student/:id', (req, res)=>{
    //student its the table name on my db
    const client = new Client({
        connectionString: connectionString,
    })
    client.connect()
    .then(()=>{
        return client.query(`DELETE FROM students WHERE id=$1`, [req.params.id])
        //id=&1 == [req.params.id] its a query method
    })
    .then((result)=>{
        return res.redirect('/')
    })
})
// to add student or data 
app.post('/add', (req, res)=>{
    const client = new Client({
        connectionString: connectionString,
    })
    client.connect()
    .then(()=>{
        return client.query(`INSERT INTO students (name, email) values($1, $2)`, [req.body.name, req.body.email])
        //id=&1 == [req.params.id] its a query method
    })
    .then((result)=>{
        return res.redirect('/')
    })
})
// edit student form
app.get('/edit/student/:id', (req, res)=>{
    const client = new Client({
        connectionString: connectionString,
    })
    client.connect()
    .then(()=>{
        return client.query(`SELECT * FROM students WHERE id=$1`,[req.params.id])
    })
    .then((result)=>{
        return res.render('edit-students', {result})
    })
})
// update information of student in edite form
app.post('/update', (req, res)=>{
    const client = new Client({
        connectionString: connectionString,
    })
    client.connect()
    .then(()=>{
        return client.query(`UPDATE students SET name=$1, email=$2 WHERE id=$3`, [req.body.name, req.body.email, req.body.id])
        //id=&1 == [req.params.id] its a query method
    })
    .then((result)=>{
        return res.redirect('/')
    })
})

app.listen(8080, ()=>{
    console.log('Server running on port 8080...')
})