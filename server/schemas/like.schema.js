const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema(
  {
    userId: String,
    imgSrc: String,
    artist: String,
    musicSrc: String,
    name: String,
    genre:String
  },
  { timestamps: true }
);

module.exports = likeSchema;
