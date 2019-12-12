const Chip = require('../models/chip');


exports.create = (req, res) => {

    const chip = new Chip(req.body);
    chip.save((err, result) => {
        if (err) {
            return res.status(400).json({
                error: err
            })
        }
        res.send();
    })
}


