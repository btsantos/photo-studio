var test = require('tape')
var request = require('supertest')
var app = require('../lib/app')

var user = {username: 'mike', email: 'mike@gmail.com', password: '12345'}
var id_user
var id_incorrent = 32093244380

test('POST /users', function (t) {
  request(app)
    .post('/api/users')
    .send(user)
    .end(function (err, res) {
      t.equal(err, null, 'Error shoudl be null')
      t.equal(res.statusCode, 201, 'Should be to get a 201 code')
      t.end()
      id_user = res.body.data.user.id
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

test('GET /users/:id with one incorrect id', function (t) {
  request(app)
    .get('/api/users/' + id_incorrent)
    .end(function (err, res) {
      t.notOk(err, 'Should be not an error')
      t.equal(res.body.error, true, 'Should be the attribute error true')
      t.equal(res.body.data.status, 404, 'Should have status code 404')
      t.equal(res.body.data.message, 'The user with id: ' + id_incorrent + ' did not find', 'Should have a message about the error')
      t.end()
    })
})
