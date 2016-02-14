var express = require('express')
var bodyParser = require('body-parser')
var routes = require('./routes')

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/api', routes)

module.exports = app
