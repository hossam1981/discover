const express = require('express') // useing express mudele
const bodyParser = require('hbs')

const app = express()
app.set('view engine', 'hbs')

app.get('/home-with-data', function(req, res){ // http://localhost:3000/home-with-data
    res.render('grocery-list', {
        groceries:[
        'bananas',
        'milk',
        'lettuce'
       ]
    }) 
}) 

app.listen(3000, () => {
    console.log(' server started on port 3000 ')
})