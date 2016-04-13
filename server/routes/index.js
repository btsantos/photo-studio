var router = require('express').Router()

router.get('/', function (req, res) {
  res.send('home')
})

router.use(require('./users'))
router.use(require('./photographers'))

module.exports = router
