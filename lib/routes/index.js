var router = require('express').Router()

router.use('/api', require('./user'))

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
