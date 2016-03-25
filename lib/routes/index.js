var router = require('express').Router()

router.use('/v1', require('./users'))
router.use('/v1', require('./employees'))

module.exports = router
