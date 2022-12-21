const express = require('express')
const router = express.Router()
const db = global.db
const jwtAuth = require('../middlewares/jwtAuth.js')

router.post('/login', function(req, res) {
  const sql = `
    select * from framemaster_members
    where id = ? and password = password(?)
  `
  db.query(sql, [req.body.id, req.body.password], function(error, rows) {
    if (error) return db.error(req, res, error)
    console.log('Done members login', rows)
    if (rows.length === 0) {
      res.status(500).send({
        message: 'ID 또는 PASSWORD를 확인하세요.'
      })
    } else {
      jwtAuth.tokenCreate(req, res, {
        member_pk: rows[0].member_pk,
        id: rows[0].id
      })
    }
  })
})

module.exports = router
