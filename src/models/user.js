var mongoose = require('mongoose')
var Schema = mongoose.Schema

module.exports = function () {
  var UserSchema = new Schema({
    name: String,
    email: {
      type: String,
      unique: true
    },
    age: Number,
    createdOn: {
      type: Date,
      default: Date.now
    },
    lastLogin: Date
  })

  var Users = mongoose.model('users', UserSchema)

  var _register = function (data, callback) {
    var newUser = new Users(data)

    newUser.lastLogin = Date.now()
    // Some more operations on newUser
    newUser.save(function (err, user) {
      if (err) {
        return callback(err)
      }
      callback(null, user)
    })
  }

  return {
    register: _register
  }
}
