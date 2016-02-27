/*
 * Module Depedencies
 * @private
 */
var express = require('express')
var bodyParser = require('body-parser')
var routes = require('./routes')

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/', routes)

/*
 * Module exports.
 * @public
 */
module.exports = app
