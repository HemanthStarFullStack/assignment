const express = require('express');

const router = express.Router();

const UserCon = require('../controllers/userController');

 

router.get('/sign-Up',UserCon.signUp);

router.post('/create-session',UserCon.createSession);

router.post('/create-user',UserCon.create);

module.exports = router;