const express = require('express').Route()
const route = express();



route.get('/', function(req,res) {
  res.render('index')
})


module.exports = route
