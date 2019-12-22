const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      maxlength: 255
    },
    surname: {
      type: String,
      required: true,
      maxlength: 255
    },
    password: {
      type: String,
      required: true,
      maxlength: 255
    },
    email: {
      type: String,
      required: true,
      maxlength: 255
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
