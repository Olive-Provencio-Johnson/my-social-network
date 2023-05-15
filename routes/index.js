const router = require('express').Router()
const apiRoutes = requrie('./api')

router.use('/api', apiRoutes)

module.exports = router