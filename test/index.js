var test = require('tape')
var request = require('supertest')
var app = require('../lib/app')

test('POST /users', function (t) {
  request(app)
    .post('/api/users')
    .send({username: 'mike', email: 'mike@gmail.com', password: '12345'})
    .end(function (err, res) {
      t.equal(err, null, 'Error shoudl be null')
      t.equal(res.body.length, 1, 'Should be just one object')
      t.equal(res.body[0]._id.length, 24, 'Should have one Id of 24')
      t.equal(res.statusCode, 201, 'Should be to get a 201 code')
      t.end()
    })
})
