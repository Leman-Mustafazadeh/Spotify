const mongoose = require("mongoose");

const songSchema = new mongoose.Schema(
  {
    userId: String,
    imgSrc: String,
    artist:String,
    title:String,
    song: String,
  },
  { timestamps: true }
);

module.exports = songSchema;