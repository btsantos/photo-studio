var test = require('tape')
var request = require('supertest')
var app = require('../server')

test('Correct user returned', function (t) {
  request(app)
    .get('/api/users')
    .expect(200)
    .end(function (err, res) {
      var userExpect = [{name: 'mike'}]
      t.error(err, 'Should not be a error')
      t.same(res.body, userExpect, 'Should be same')
      t.end()
    })
})
