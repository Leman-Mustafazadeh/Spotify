const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: String,
    email: String,
    password: String,
    isVerified: {
      type: Boolean,
      default: false
    },
    role: {
      type: String,
      enum: ['admin','client','artist'],
    },
  },
  { timestamps: true }
);

module.exports = userSchema;
