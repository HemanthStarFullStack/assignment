const express = require('express');

const router = express.Router();

const UserCon = require('../controllers/userController');

const jwtAuthMW = require('../config/jwtLogin');

router.get('/sign-In',UserCon.signIn);

router.get('/sign-Up',UserCon.signUp);

router.get('/sign-out',UserCon.signOut);

router.post('/create-session',UserCon.createSession);

router.post('/create-user',UserCon.create);

module.exports = router;