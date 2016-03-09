// var test = require('tape')
var request = require('supertest')
var expect = require('chai').expect
var app = require('../lib/app')

describe('this is a test', function () {
  it('Should add two numbers', function (done) {
    request(app)
      .post('/add')
      .send({num1: 10, num2: 20})
      .expect(200)
      .end(function (err, res) {
        expect(err).to.equal(false)
        expect(res.status).to.be.equal(200)
        expect(res.body.error).to.be.equal(false)
        done()
      })
  })
})

// var id_user = 0
// var data = {
//   user: {
//     username: 'mike',
//     email: 'mike@gmail.com',
//     password: '12345'
//   }
// }

// test('POST /users', function (t) {
//   request(app)
//     .post('/api/users')
//     .send(data)
//     .set('Accept', 'application/json')
//     .expect(201)
//     .end(function (err, res) {
//       var user = res.body.user
//       t.equal(err, null, 'Error response should be null')
//       t.equal(typeof user, 'object', 'Should get a object res.user')
//       t.ok(user.hasOwnProperty('id'), 'User should has an id property')
//       t.equal(user.username, data.user.username, 'User should has an username equal to mike')
//       t.equal(user.email, data.user.email, 'User should has an email equal to mike@gmail.com')
//       t.ok(user.hasOwnProperty('profile'), 'Should has a object profile')
//       t.equal(typeof user.profile, 'object', 'Profile should be a object')
//       id_user = user.id
//       t.end()
//     })
// })

// // TODO: To Validate username, email and generate token

// test('GET /users/:id', function (t) {
//   request(app)
//     .get('/api/users/' + id_user)
//     .expect(200)
//     .end(function (err, res) {
//       var user = res.body.user
//       t.equal(user.UserId, id_user, 'Should be the same id for this user')
//       t.equal(err, null, 'err should be null')
//       t.equal(typeof user, 'object', 'Should be a object JavaScript')
//       t.equal(user.UserName, data.user.username, 'User should have a username = mike')
//       t.equal(user.Email, data.user.email, 'User should have a email = mike@gmail.com')
//       t.end()
//     })
// })

// test('GET /users/:id with one resource not found', function (t) {
//   id_user = 12345
//   request(app)
//     .get('/api/users/' + id_user)
//     .end(function (err, res) {
//       t.notOk(err, 'Should be not an error')
//       t.equal(res.statusCode, 404, 'Should have status code 404')
//       t.equal(res.body.message, 'The user with id: ' + id_user + ' did not find', 'Should have an error message')
//       t.end()
//     })
// })
