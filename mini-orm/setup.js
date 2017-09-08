const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('db/database.db')

db.serialize(function() {
  db.run(`CREATE TABLE IF NOT EXIST project (
          id_project INTEGER PRIMARY KEY AUTOINCREMENT,
          nama VARCHAR(100),
          status VARCHAR(100) )`, function() {
    console.log('TBL PROJECT SUCCESS CREATED');
  })

  db.run(`CREATE TABLE supervisor (
          id_supervisor INTEGER PRIMARY KEY AUTOINCREMENT,
          nama VARCHAR(100),
          email VARCHAR(100) )`, function() {
    console.log('TBL PROJECT SUCCESS CREATED');
  })

})
