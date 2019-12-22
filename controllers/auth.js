
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.isAuth = (req, res, next) => {
  if (!req.cookies.jwt) {
    return res.status(401).json({
      error: "Access denied"
    });
  }
  return jwt.verify(req.cookies.jwt, process.env.SECRET, (err) => {
    if (err) {
      return res.status(401).json({
        error: "failed to verify!"
      });
    } else next();
  });
};

exports.isAdmin = (req, res, next) => {
  jwt.verify(req.cookies.jwt, process.env.SECRET, (err, jwtPaload) => {
    if (err) {
      return res.status(401).json({
        error: "failed to verify!"
      });
    }
    if (jwtPaload.admin === false) {
      return res.status(401).json({
        error: "Access denied! Admin Only!"
      });
    }
    next();
  });
};
