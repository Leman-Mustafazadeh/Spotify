const mongoose = require("mongoose");
const musicSchema = new mongoose.Schema(
  {
    songName: String,
    title:String,
    imgSrc:String
  },
  { timestamps: true, versionKey: false }
);

module.exports = musicSchema;