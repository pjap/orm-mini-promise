const express = require('express')
const app = express()
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('db/database.db')
const bodyParser = require('body-parser')

// set view engine
app.set('view engine', 'ejs');

// set body parser json
app.use(bodyParser.urlencoded({ extended : true}))
app.use(bodyParser.json())

// require ROUTES
let index = require('./routes/index.js')
let contacts = require('./routes/supervisor.js')
let addresses = require('./routes/project.js')

app.use('/', index)
app.use('/contacts', contacts)
app.use('/addresses', addresses)

// LOCALHOST PORT TO BE USED
app.listen(3000, function(req,res) {
  console.log(('USING PORT 3000'));
})
