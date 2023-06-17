const router = require('express').Router();

const {
    getThoughts,
    createThought,
    getSingleThought, 
    updateThought,
    deleteSingleThought, 
    updateReaction,

} = require('../../controllers/thoughtsController')

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought);

// /api/thoughts/delete/:thoughtId
router.route('/delete/:thoughtId').delete(deleteSingleThought);

// /api/thoughts/:thoughtId
router.route('/reactions/:thoughtId').put(updateThought);

// /api/thoughts/:thoughtId/reactions
router.route('/reactions/:thoughtId').put(updateReaction);


module.exports = router