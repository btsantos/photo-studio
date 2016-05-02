/*
 * Module Depedencies
 * @private
 */
var express = require('express')
var bodyParser = require('body-parser')
var routes = require('./routes')
var config = require('../config')
var mongoose = require('mongoose')

var app = express()

mongoose.connect(config.mongodbUri)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/v1', routes)

/*
 * Module exports.
 * @public
 */
module.exports = app
