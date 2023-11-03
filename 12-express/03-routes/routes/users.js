const express = require('express');
const router = express.Router();
const { getUsers, getUser, postUser } = require('../controllers/users');

router.get('/', getUsers);
router.post('/', postUser);
router.get('/:userId', getUser);

module.exports = router;
