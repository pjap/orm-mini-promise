const express = require('express')
const route = express();
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('db/database.db')

route.get('/', function(req,res) {
  res.send('IM ALIVE')
})

route.listen(3000, function() {
  console.log('ONLINE IN PORT 3000!');
})
