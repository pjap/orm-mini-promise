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

app.listen(3000, function(req,res) {
  console.log(('USING PORT 3000'));
})
