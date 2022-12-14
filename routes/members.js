const express = require('express')
const router = express.Router()

router.post('/login', function(req, res) {
  res.send('123')
})

module.exports = router
