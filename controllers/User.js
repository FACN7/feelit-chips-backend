const User = require("../models/User");


exports.addUser = (req, res) => {
  const user = new User(req.body);
  console.log(user);
  user.save((err, result) => {
    console.log("Result", result);
    if (err) {
      return res.status(400).json({
        error: err
      });
    }
    res.send();
  });
};
