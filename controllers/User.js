const User = require("../models/User");

exports.addUser = (req, res) => {
  const user = new User(req.body);
  user.save((err, result) => {
    if (err) {
      return res.status(400).json({
        error: err
      });
    }
    res.send();
  });
};
