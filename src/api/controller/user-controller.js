const user = require('../models/user-model');
const bcrypt = require('bcrypt');
const { createAccessToken } = require('../helpers/tokens');
const loginsecret = process.env.CUSTOMER_ACCESS_SECRET;

const {
  singupDone,
  signupFailed,
  mongodbError,
  emailExist,
  nameNotFound,
  emailNotFound,
  passwordNotFound,
  userLoggedIn,
  invalidCredential,
  invalidUser
} = require('../constants');

exports.signup = (req, res) => {
  const data = req.body;
  const { name, email, password } = data;
  if (!name) {
    return res.status(400).send({ message: nameNotFound });
  }
  if (!email) {
    return res.status(400).send({ message: emailNotFound });
  }
  if (!password) {
    return res.status(400).send({ message: passwordNotFound });
  }

  user
    .findOne({ email })
    .exec()
    .then((result) => {
      if (result) {
        return res.status(400).json({
          message: emailExist
        });
      } else {
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);

        const newuser = new user({ name, email, password: hash });
        newuser.save((err, results) => {
          if (err) {
            return res.status(500).json({
              message: mongodbError
            });
          }
          if (results) {
            return res.status(201).json({
              message: singupDone,
              user: results
            });
          }
          return res.status(400).json({
            message: signupFailed
          });
        });
      }
    })
    .catch((err) => {
      return res.status(500).json({
        message: mongodbError,
        error: err
      });
    });
};

exports.signin = (req, res) => {
  const data = req.body;
  const { email, password } = data;
  if (!email) {
    return res.status(400).send({ message: emailNotFound });
  }
  if (!password) {
    return res.status(400).send({ message: passwordNotFound });
  }
  user
    .findOne({ email }, 'password')
    .exec()
    .then((results) => {
      if (results) {
        const comparepass = bcrypt.compareSync(password, results.password);
        if (comparepass === true) {
          const token = createAccessToken(email, results._id, loginsecret);
          return res.status(200).json({
            message: userLoggedIn,
            userId: results._id,
            token
          });
        }
        return res.status(400).json({
          message: invalidCredential
        });
      }
      return res.status(400).json({
        message: invalidUser
      });
    })
    .catch((err) => {
      return res.status(500).json({
        message: mongodbError,
        error: err
      });
    });
};
