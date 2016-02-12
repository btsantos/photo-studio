var express = require('express')
var app = express()

var user = [{name: 'mike'}]

app.get('/api/users', function (req, res) {
  res.json(user)
})

module.exports = app
