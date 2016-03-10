var bookshelf = require('../bookshelf')
var User = require('./user')

var Profile = bookshelf.Model.extend({
  tableName: 'Profiles',
  user: function () {
    return this.belongsTo(User)
  }
})

module.exports = Profile
