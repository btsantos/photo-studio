var test = require('tape')
var request = require('supertest')
var app = require('../lib/app')

test('POST /users', function (t) {
  request(app)
    .post('/api/users')
    .send({username: 'mike', email: 'mike@gmail.com', password: '12345'})
    .end(function (err, res) {
      t.notOk(err, 'Should not a error')
      t.equal(res.statusCode, 201, 'Should be to get 201 code')
      t.end()
    })
})
