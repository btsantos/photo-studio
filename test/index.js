var test = require('tape')
var request = require('supertest')
var app = require('../lib/app')

var user = {username: 'mike', email: 'mike@gmail.com', password: '12345'}
var id_user

test('POST /users', function (t) {
  request(app)
    .post('/api/users')
    .send(user)
    .end(function (err, res) {
      t.equal(err, null, 'Error shoudl be null')
      t.equal(res.statusCode, 201, 'Should be to get a 201 code')
      id_user = res.body.data.user.id
      t.end()
    })
})

test('GET /users/:id', function (t) {
  request(app)
    .get('/api/users/' + id_user)
    .end(function (err, res) {
      t.equal(err, null, 'err should be null')
      t.equal(res.body.error, false, 'Should be false the attribute error to the response')
      t.equal(res.body.data.user.id, id_user, 'Should be the same id for this user')
      t.equal(res.statusCode, 200, 'Should be sucess the request with status code equal to 200')
      t.end()
    })
})
