const express = require('express');
const router = express.Router();

const mainRootRouter = require('./mainRoot');
const commentsRouter = require('./comments');
const usersRouter = require('./users');

router.use('/', mainRootRouter);
router.use('/users', usersRouter);
router.use('/comments', commentsRouter);

module.exports = router;
