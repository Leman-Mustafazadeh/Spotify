const mongoose = require("mongoose");

const searchSchema = new mongoose.Schema(
  {
    title:String,
    imgSrc: String,
    color:String
  },
  { timestamps: true }
);

module.exports = searchSchema;