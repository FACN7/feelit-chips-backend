const SensorCreateOptions = require("../models/sensorCreateOptions");

exports.createOptionCollection = (req, res) => {
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

exports.editOption = (req, res) => {
  SensorCreateOptions.findOne().exec((err, options) => {
    if (err || !options) {
      return res.status(400).json({
        error: "options not found"
      });
    }
    switch (req.body.dropdown) {
      case "electrodeType": options.electrodeType = req.body.values;
        break;
      case "printer": options.printer = req.body.values;
        break;
      case "inkType": options.inkType = req.body.values;
        break;
      case "concentration": options.concentration = req.body.values;
        break;
    }
    options.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: err
        });
      }
      res.send();
    });
  });
};

exports.getOptions = (req, res) => {
  SensorCreateOptions.findOne()
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
