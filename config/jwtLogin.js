const jwt = require('jsonwebtoken');
const userModel = require('../models/users')

module.exports.authenticateToken = (req, res, next) => {

  const token = req.headers.authorization;

  console.log("here",token);

  if (!token) {

    console.log('inside');
    return res.redirect('/auth/sign-In');
  }

  try {
    const decoded = jwt.verify(token, 'PheobeBuffay');
    const user = userModel.findById(decoded.userId);

    if (!user) {
        return res.redirect('/auth/sign-In');
    }

    req.user = user; // Attach user information to the request object
    next();
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

 