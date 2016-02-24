var bookshelf = require('../bookshelf')

var User = bookshelf.Model.extend({
  tableName: 'users',
  self: function () {
    return {
      id: this.get('id'),
      username: this.get('username'),
      email: this.get('email')
    }
  }
})

module.exports = User
