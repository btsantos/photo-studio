var dbconfig = require('./knexfile.js').development
var knex = require('knex')(dbconfig)

module.exports = require('bookshelf')(knex)

