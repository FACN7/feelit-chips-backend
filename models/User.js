const mongoose = require("mongoose");
const crypto = require("crypto");
const uuidv1 = require("uuid/v1");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      maxlength: 255,
      validate: {
        validator: (fname) => {
          return /^[A-Z]/.test(fname);
        },
        message: fname => `${fname.value} is not a valid name (first letter should be capital)!`
      }
    },
    surname: {
      type: String,
      required: true,
      maxlength: 255,
      validate: {
        validator: (lname) => {
          return /^[A-Z]/.test(lname);
        },
        message: lname => `${lname.value} is not a valid name (first letter should be capital)!`
      }
    },
    hashed_password: {
      type: String,
      required: true
    },
    salt: String,
    email: {
      type: String,
      unique: true,
      required: true,
      maxlength: 255,
      validate: {
        validator: (email) => {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
        },
        message: email => `${email.value} is not a valid email!`
      }
    },
    isAdmin: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

userSchema.virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = uuidv1();
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function () {
    return this._password;
  });

userSchema.methods = {
  encryptPassword: function (password) {
    if (!password) return "";
    try {
      return crypto.createHmac("sha1", this.salt)
        .update(password)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },
  authenticate: function (text) {
    return this.encryptPassword(text) === this.hashed_password;
  }
};

module.exports = mongoose.model("User", userSchema);
