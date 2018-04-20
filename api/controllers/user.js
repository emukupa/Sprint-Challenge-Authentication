const User = require('../models/userModels');
const bcrypt = require('bcrypt');
const { makeToken } = require('../utils/middlewares');

const createUser = (req, res) => {
  // destructure the username and password
  const { username, password } = req.body;

  // check if username and password provided
  if (req.body.username === undefined || req.body.password === undefined) {
    return res.status(422).json({
      message: 'Please provide a username and password',
    });
  }

  // create user takes in the username and password and saves a user.
  // our pre save hook should kick in here saving this user to the DB with an encrypted password.
  const user = new User({ username, password });

  user
    .save()
    .then(inserted => {
      const token = makeToken(inserted);
      res.status(201).json({ token, inserted });
    })
    .catch(err => {
      res.status(500).json(err);
    });
};

module.exports = {
  createUser,
};
