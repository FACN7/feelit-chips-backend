const User = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.signUp = (req, res) => {
  const token = req.params.token;
  if (!token) return res.status(401).json({ error: "UnAuthorized!" });
  jwt.verify(token, process.env.SECRET, (err, result) => {
    if (err) {
      return res.status(401).json({ error: "Signin token is invalid or expired. You are not allowed to sign in!" });
    } else {
      const user = new User(req.body);
      user.save((err, result) => {
        if (err) {
          return res.status(400).json({ error: err });
        }
        res.sendStatus(302);
      });
    }
  });
};

exports.getAllusers = (req, res) => {
  User.find()
    .exec((err, usersFromDB) => {
      if (err) {
        return res.status(400).json({
          error: "users not found!"
        });
      }
      const usersList = { users: usersFromDB };
      res.json(usersList);
    });
};

exports.deleteUser = (req, res) => {
  User.deleteOne({ _id: req.params.id }, (err, deletedUser) => {
    if (err) res.status(400).json({ error: err });
    else res.send();
  });
};
