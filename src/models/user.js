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

  var _getUser = function (user, cb) {
    var query = Users.find(user)

    query.sort('-lastLogin')
    query.select('_id name email')

    query.exec(function (err, user) {
      err ? cb(err) : cb(null, user[0])
    })
  }

  return {
    register: _register,
    getUser: _getUser
  }
}
