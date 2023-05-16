const router = require('express').Router();

const {
    getThoughts,
    createThoughts,
    getSingleThought

} = require('../../controllers/userController')

router.route('/').get(getThoughts).post(createThoughts)