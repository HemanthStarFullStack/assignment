const express = require('express');

const router = express.Router();

const indexPage = require('../controllers/index');
const jwtAuthMW = require('../config/jwtLogin');
const UserCon = require('../controllers/userController');
 
router.get('/auth/sign-In',UserCon.signIn);

router.post('/auth/create-session',UserCon.createSession);

router.post('/auth/create-user',UserCon.create);

router.get('/',jwtAuthMW.authenticateToken,indexPage.adminPage);

module.exports = router;
