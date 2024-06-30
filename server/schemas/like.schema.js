const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema(
  {
    userId: String,
    artist: String,
    name: String,
    genre:String,
    musicSrc: String,
    imgSrc: String
  },
  { timestamps: true }
);

module.exports = likeSchema;
