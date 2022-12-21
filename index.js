const express = require('express')
const app = express()
const port = 3100
global.db = require('./mysql-connector.js')

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

// req.body를 못찾을 경우
app.use(express.json())

app.get('/', function(req, res) {
  res.send('123')
})

app.use('/api/v1/members', require('./routes/members.js'))

app.listen(port, function() {
  console.log('start')
})
