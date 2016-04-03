var router = require('express').Router()

router.use('/v1', require('./users'))
router.use('/v1', require('./photographers'))

module.exports = router
