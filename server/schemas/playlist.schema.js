const mongoose = require("mongoose");
const playlistSchema = new mongoose.Schema(
  {
    name: String,
    textarea:String,
    img:String
  },
  { timestamps: true, versionKey: false }
);

module.exports = playlistSchema;
