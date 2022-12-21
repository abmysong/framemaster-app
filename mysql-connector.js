const mysql = require('mysql')

const db = mysql.createPool({
  host: 'localhost',
  user: 'lusoella@localhost',
  password: '',
  database: 'test'
})

db.query('select 123 as abc', null, function (error, rows) {
  console.error(error)
  console.log(rows)
  // process.exit()
})

db.error = function (req, res, error) {
  console.error('Start: SQL error')
  console.error(error.sql)
  console.error('End: SQL error')
  // error.sql = undefined
  res.status(500).send(error)
  return false
}

module.exports = db
