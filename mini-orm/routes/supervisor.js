const express = require('express')
const route = express.Router()
const Supervisor = require('../models/supervisor')


// READ DATA TABLE FROM MODULE supervisor
route.get('/', function(req,res) {
  Supervisor.findAll()
  .then(supervisor => {
    //res.send(supervisor)
    res.render('supervisor', {data : supervisor , title: 'Halaman Supervisor!'})
  })
  .catch(err => {
    res.send(err)
  })
})

route.get('/delete/:id', function(req,res) {
  Supervisor.create(req)
  .then(supervisor => {
    //res.send(supervisor)
    res.redirect('/')
  })
  .catch(err => {
    res.send(err)
  })
})

route.get('/edit/:id', function (req,res) {
  Supervisor.showEdit(req)
  .then(supervisor => {
    res.render('', {data: supervisor[0], title: 'Halaman Edit Supervisor !!!'})
  })
  .catch(err => {
    res.send(err)
  })
})


route.post('/edit/:id', function(req,res) {
  Supervisor.editSupervisor(req)
  .then(supervisor => {
    res.redirect('/supervisor')
  })
  .catch(err => {
    res.send(err)
  })
})

module.exports = route;
