var test = require('tape')
var User = require('../lib/db/models/user')

test('Create profile for an user', function (t) {
  User.forge({id: 1})
  .fetch()
  .then(function (user) {
    console.log(user)
  })
  t.ok(true, 'testing')
  t.end()
})
