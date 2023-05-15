const router = require('express').Router()
const userRoutes = requrie('./userRoutes')
const thoughtRoutes = requrie('./thoughtRoutes')

router.use('/users', userRoutes.get)
router.use('/thoughts', thoughtRoutes)


module.exports = router