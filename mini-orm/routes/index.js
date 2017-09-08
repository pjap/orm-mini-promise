const express = require('express')
const route = express()

route.get('/', function(req,res){
  res.render('index')
})

module.exports = route;
