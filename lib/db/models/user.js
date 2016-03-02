var bookshelf = require('../bookshelf')
var Profile = require('./profile')

var User = bookshelf.Model.extend({
  tableName: 'Users',
  profile: function () {
    return this.hasOne(Profile)
  }
})

module.exports = User
