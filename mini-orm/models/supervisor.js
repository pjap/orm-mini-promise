const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db/database.db')

class Supervisor {
  constructor(raw) {
    this.attribute1 = raw.attribute1
    this.attribute2 = raw.attribute2
  }

  static findAll() {
    let promise = new Promise(function(resolve,reject) {
      db.all(`SELECT * FROM supervisor`, (er,rows) => {
        if (!err) {
          resolve(rows)
        } else {
          reject(err)
        }
      })
    })
    return promise
  }

  static create(req) {
    let promise = new Promise(function(resolve,reject) {
      db.run(`INSERT INTO supervisor (nama,email) VALUES
        ('${req.body.nama}','${req.body.email}')`,
         (err,rows) => {
           if (!err) {
             resolve(rows)
           }else{
             reject(err)
           }
        })
    })
    return promise
  }

  static destroy(req) {
    let promise = new Promise(function(resolve, reject) {
      db.run(`DELETE FROM supervisor WHERE id = ${req.params.id}`, (err,rows) => {
        if (!err) {
          resolve(rows)
        } else {
          reject(err)
        }
      })
    })
    return promise
}

  static showEdit(req) {
    let promise = new Promise(function(resolve,reject) {
      db.all(`SELECT * FROM supervisor WHERE id = ${req.params.id}`, (err,rows) => {
        if (!err) {
          resolve(rows)
        } else {
          reject(err)
        }
      })
    })
    return promise
  }

  static editSupervisor(req) {
    let promise = new Promise(function(resolve,reject) {
      db.run(`UPDATE supervisor SET name = '${req.body.nama}', email = '${req.body.email}' WHERE id = ${req.params.id}`, (err,rows) => {
        if (!err) {
          resolve(rows)
        } else {
          reject(err)
        }
      })
    })
    return promise
  }

  static findById() {

  }

  static findWhere() {

  }

}
