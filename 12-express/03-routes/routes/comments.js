const express = require('express');
const router = express.Router();
const {
    getComments,
    getComment,
    postComment,
    deleteComment,
} = require('../controllers/comments');

router.get('/', getComments);
router.post('/', postComment);
router.get('/:commentId', getComment);
router.delete('/:commentId', deleteComment);

module.exports = router;
