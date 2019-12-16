const SensorCreateOptions = require("../models/sensorCreateOptions");

exports.createOption = (req, res) => {
  const options = new SensorCreateOptions(req.body);
  options.save((err, result) => {
    if (err) {
      return res.status(400).json({
        error: err
      });
    }
    res.send();
  });
};

exports.getOptions = (req, res) => {
  SensorCreateOptions.find()
    .select("electrodeType printer inkType concentration")
    .exec((err, options) => {
      if (err) {
        return res.status(400).json({
          error: "options not found!"
        });
      }
      res.json(options);
    });
};
