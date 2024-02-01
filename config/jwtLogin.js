const jwt = require('jsonwebtoken');
const userModel = require('../models/users');

module.exports.authenticateToken = async(req, res, next) => {

    const token = req.cookies.auth;

    console.log("hello",token);

    if (!token) {
        console.log('inside');
        return res.redirect('/auth/sign-In');
    }

    try {
        const decoded = jwt.verify(token, 'PheobeBuffay');
        const user = await userModel.findById(decoded.userId);

        if (!user) {
            return res.redirect('/auth/sign-In');
        }

        next();
    } catch (error) {
        res.status(401).json({ message: 'Unauthorized' });
    }
};


 
