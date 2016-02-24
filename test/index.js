var test = require('tape')
var request = require('supertest')
var app = require('../lib/app')

var id_user
var id_incorrect = 32093244380

test('POST /users', function (t) {
  var data = {
    user: {
      username: 'mike',
      email: 'mike@gmail.com',
      password: '12345'
    }
  }
  request(app)
    .post('/api/users')
    .set('Accept', 'application/json')
    .send(data)
    .expect(201)
    .end(function (err, res) {
      var user = res.body.user
      t.equal(err, null, 'err response should be null')
      t.equal(typeof user, 'object', 'Should get a object res.user')
      t.ok(user.hasOwnProperty('id'), 'User should has an id property')
      t.equal(user.username, 'mike', 'User should has an username equal to mike')
      t.equal(user.email, 'mike@gmail.com', 'User should has an email equal to mike@gmail.com')
      t.equal(user.password, '12345', 'User should has a password equal to 12345')
      id_user = res.body.user.id
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

test('GET /users/:id with one incorrect id', function (t) {
  request(app)
    .get('/api/users/' + id_incorrect)
    .end(function (err, res) {
      t.notOk(err, 'Should be not an error')
      t.equal(res.body.error, true, 'Should be the attribute error true')
      t.equal(res.body.data.status, 404, 'Should have status code 404')
      t.equal(res.body.data.message, 'The user with id: ' + id_incorrect + ' did not find', 'Should have a message about the error')
      t.end()
    })
})
