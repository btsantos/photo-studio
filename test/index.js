var test = require('tape')
var request = require('supertest')
var app = require('../lib/app')

var user = {username: 'mike', email: 'mike@gmail.com', password: '12345'}

test('POST /users', function (t) {
  request(app)
    .post('/api/users')
    .send(user)
    .end(function (err, res) {
      t.equal(err, null, 'Error shoudl be null')
      t.equal(res.statusCode, 201, 'Should be to get a 201 code')
      t.end()
    })
})
