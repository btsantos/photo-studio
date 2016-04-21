var mongoose = require('mongoose')
var Schema = mongoose.Schema

module.exports = function () {
  var User = mongoose.model('users', new Schema({
    name: String,
    email: {
      type: String,
      unique: true
    },
    createdOn: {
      type: Date,
      default: Date.now
    },
    lastLogin: Date
  }))

  var createUser = function (user, callback) {
    var newUser = new User(user)
    newUser.save(function (err, doc) {
      err ? callback(err) : callback(null, doc)
    })
  }

  return {
    model: User,
    createUser: createUser
  }
}
