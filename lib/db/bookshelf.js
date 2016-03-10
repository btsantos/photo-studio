var dbconfig = require('./knexfile.js')
var knex = require('knex')(dbconfig)

module.exports = require('bookshelf')(knex)

