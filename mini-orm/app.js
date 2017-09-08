const express = require('express')
const app = express.Router()
const bodyParser = require('body-parser')

// set view engine
app.set('view engine', 'ejs');

// set body parser json
app.use(bodyParser.urlencoded({ extended : true}))
app.use(bodyParser.json())

// require ROUTES
let index = require('./routes/index.js')
let supervisor= require('./routes/supervisor.js')
let project = require('./routes/project.js')

app.use('/', index)
app.use('/supervisor', supervisor)
app.use('/project', project)


// LOCALHOST PORT TO BE USED
app.listen(3000, function(req,res) {
  console.log(('USING PORT 3000'));
})
