var test = require('tape')
var request = require('supertest')
var app = require('../server')

test('POST /users', function (t) {
  request(app)
    .post('/api/users')
    .send({username: 'mike', email: 'mike@gmail.com'})
    .expect(200)
    .end(function (err, res) {
      t.notOk(err, 'Should not a error')
      t.equal(res.statusCode, 200, 'Should be to get 200 code')
      t.end()
    })
})
