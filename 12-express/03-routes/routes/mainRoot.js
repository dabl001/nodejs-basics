const express = require('express');
const router = express.Router();
const { getMainRoot } = require('../controllers/mainRoot');

router.get('/', getMainRoot);
module.exports = router;
