const express = require('express');

const router = express.Router();

const indexPage = require('../controllers/index');
const jwtAuthMW = require('../config/jwtLogin');
const UserCon = require('../controllers/userController');
const adminCon = require('../controllers/index');

router.use('/auth',require('./authRoutes'));

router.get('/',jwtAuthMW.authenticateToken,indexPage.adminPage);

router.get('/allUsers',UserCon.getAllUsers);

router.post('/addUserByAdmin',adminCon.Admincreate);

router.post('/updateUser/:userID',UserCon.updatedUser);

router.post('/deleteUser/:userID',UserCon.DeleteUser);


module.exports = router;
