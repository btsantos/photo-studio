var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.post('/api/users', function (req, res) {
  res.json({})
})

module.exports = app
