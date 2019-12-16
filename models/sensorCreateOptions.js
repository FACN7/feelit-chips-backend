const mongoose = require("mongoose");

const sensorCreateOptions = new mongoose.Schema({
  electrodeType: [{
    label: { type: String },
    value: { type: String },
    image: { type: String }
  }],
  printer: [{
    label: { type: String },
    value: { type: String }
  }],
  inkType: [{
    label: { type: String },
    value: { type: String }
  }],
  concentration: [{
    label: { type: String },
    value: { type: String }
  }]
},
{ timestamps: true }
);

module.exports = mongoose.model("sensorCreateOptions", sensorCreateOptions);
