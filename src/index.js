/*
 * Module Depedencies
 * @private
 */
var express = require('express')
var bodyParser = require('body-parser')
var routes = require('./routes')
var app = express()

// This middleware will be executed on every request
function logRequests (req, res, next) {
  // console.log('[' + req.method + '] ' + req.url)
  next()
}

app.use(logRequests)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/v1', routes)

/*
 * Module exports.
 * @public
 */
module.exports = app
