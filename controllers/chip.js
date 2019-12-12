const Chip = require("../models/chip");

exports.createChip = (req, res) => {
  const chip = new Chip(req.body);
  chip.save((err, result) => {
    if (err) {
      return res.status(400).json({
        error: err
      });
    }
    res.send();
  });
};

exports.getChipsList = (req, res) => {
  Chip.find()
    .select("_id serialNumber electrodeType printer inkType concentration electrodeBatchDate")
    .exec((err, chips) => {
      if (err) {
        return res.status(400).json({
          error: "chips not found!"
        });
      }
      const chipsList = { chips };
      res.json(chipsList);
    });
};
