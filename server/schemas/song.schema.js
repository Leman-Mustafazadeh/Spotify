const mongoose = require("mongoose");

const songSchema = new mongoose.Schema(
  {
    userId: String,
    artist: String,
    name: String,
    genre:String,
    musicSrc: String,
    imgSrc: String,
    color:String,
    photo:String
  },
  { timestamps: true }
);

module.exports = songSchema;
