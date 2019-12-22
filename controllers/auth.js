const jwt = require("jsonwebtoken");
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
  if (res.locals.jwtPayload && !res.locals.jwtPayload.admin) {
    return res.status(401).json({
      error: "Access denied! Admin Only!"
    });
  } else next();
};
