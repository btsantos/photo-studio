var router = require('express').Router()

router.get('/', function (req, res) {
  res.send('<h1>Hello World, this is my first API RESTful</h1>')
})
router.use(require('./user'))
router.use(require('./photographer'))

module.exports = router
