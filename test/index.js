var test = require('tape')
var request = require('supertest')
var app = require('../lib/app')

var id_user = 0

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
    .expect(200)
    .end(function (err, res) {
      var user = res.body.user
      t.equal(err, null, 'err should be null')
      t.equal(typeof user, 'object', 'Should be a object JavaScript')
      t.equal(user.id, id_user, 'Should be the same id for this user')
      t.equal(user.username, 'mike', 'User should have a username = mike')
      t.equal(user.email, 'mike@gmail.com', 'User should have a email = mike@gmail.com')
      t.end()
    })
})

test('GET /users/:id with one incorrect id', function (t) {
  id_user = 12345
  request(app)
    .get('/api/users/' + id_user)
    .end(function (err, res) {
      t.notOk(err, 'Should be not an error')
      t.equal(res.statusCode, 404, 'Should have status code 404')
      t.equal(res.body.message, 'The user with id: ' + id_user + ' did not find', 'Should have an error message')
      t.end()
    })
})
