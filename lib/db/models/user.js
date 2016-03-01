var bookshelf = require('../bookshelf')

var User = bookshelf.Model.extend({
  tableName: 'Users'
})

module.exports = User
