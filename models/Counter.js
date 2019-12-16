const mongoose = require("mongoose");

const counterSchema = new mongoose.Schema(
  {
    sequence_value: { type: Number, default: -1 }
  });

module.exports = mongoose.model("Counter", counterSchema);
