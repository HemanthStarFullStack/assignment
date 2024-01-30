const express = require('express');

const router = express.Router();

const indexPage = require('../controllers/index');
const jwtAuthMW = require('../config/jwtLogin');
const UserCon = require('../controllers/userController');

router.use('/auth',require('./authRoutes'));

router.get('/',jwtAuthMW.authenticateToken,indexPage.adminPage);

router.post('/updateUser/:userID',UserCon.updatedUser);

router.post('/deleteUser/:userID',UserCon.DeleteUser);


module.exports = router;
