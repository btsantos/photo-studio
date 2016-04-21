var mongoose = require('mongoose')
var Schema = mongoose.Schema

module.exports = function () {
  var UserSchema = new Schema({
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
  })

  var Users = mongoose.model('users', UserSchema)

  var _register = function (data, callback) {
    var user = new Users(data)

    user.save(function (err, doc) {
      if (err) {
        return callback(err)
      }
      callback(null, doc)
    })
  }

  return {
    register: _register
  }
}
