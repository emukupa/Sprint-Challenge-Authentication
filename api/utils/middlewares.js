const jwt = require('jsonwebtoken');

const User = require('../models/userModels');
const { mysecret } = require('../../config');

const authenticate = (req, res, next) => {
  // You won't need to change anything in this file here.
  const token = req.get('Authorization');
  if (token) {
    jwt.verify(token, mysecret, (err, decoded) => {
      if (err) return res.status(422).json(err);
      req.decoded = decoded;
      next();
    });
  } else {
    return res.status(403).json({
      error: 'No token provided, must be set on the Authorization Header',
    });
  }
};

// Add in the make token function
const makeToken = user => {
  // sub: subject (id) who the token is about
  // iat: issued at time
  const timestamp = new Date().getTime();
  const payload = {
    sub: user._id,
    iat: timestamp,
    username: user.username,
  };
  const options = { expiresIn: '4h' };

  return jwt.sign(payload, mysecret, options);
};

module.exports = {
  authenticate,
  makeToken,
};
