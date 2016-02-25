var router = require('express').Router()

router.use('/users', require('./users'))

// post /users/
// get  /users/:id
// del  /users/:id
// put  /users/:id
// get  /users

// post /users/:id/profile
// get  /users/:id/profile
// put  /users/:id/profile
// del  /users/:id/profile

module.exports = router
