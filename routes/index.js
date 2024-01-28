const express = require('express');

const router = express.Router();

const indexPage = require('../controllers/index');

router.get('/',indexPage.adminPage);

module.exports = router;
