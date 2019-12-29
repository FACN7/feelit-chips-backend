const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();

exports.isAuth = (req, res, next) => {
  if (!req.cookies.jwt) {
    return res.status(401).json({
      error: "Access denied"
    });
  }
  jwt.verify(req.cookies.jwt, process.env.SECRET, (err, jwtPayload) => {
    if (err) {
      return res.status(401).json({
        error: "failed to verify!"
      });
    } else {
      res.locals.jwtPayload = jwtPayload;
      next();
    }
  });
};

exports.isAdmin = (req, res, next) => {
  if (!res.locals.jwtPayload || !res.locals.jwtPayload.isAdmin) {
    return res.status(401).json({
      error: "Access denied! Admin Only!"
    });
  } else next();
};

exports.authCheck = (req, res) => {
  const { jwtPayload } = res.locals;
  res.json({
    employee: jwtPayload.employee,
    admin: jwtPayload.isAdmin
  });
};

exports.logIn = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(401).json({ error: "User does not exist!" });
    }
    if (!user.authenticate(password)) {
      return res.status(401).json({ error: "Wrong password!" });
    }
    const isAdmin = user.isAdmin;
    const employee = `${user.firstName} ${user.surname}`;
    const token = jwt.sign({ employee, isAdmin }, process.env.SECRET);
    const twoHoursFromNow = Math.floor(Date.now() / 1000) + (120 * 60);
    res.cookie("jwt", token, { expire: twoHoursFromNow });
    res.sendStatus(302);
  });
};

exports.signOut = (req, res) => {
  res.clearCookie("jwt");
  res.sendStatus(302);
};
