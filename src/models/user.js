var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema({
  username: String,
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

module.exports = mongoose.model('users', UserSchema)
