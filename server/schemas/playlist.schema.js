const mongoose = require("mongoose");
const playlistSchema = new mongoose.Schema(
  {
    name: String,
    user:{ type: mongoose.Schema.Types.ObjectId, ref: "user" },
   description:String,
    songs:[],
    img:String
  },
  { timestamps: true, versionKey: false }
);

module.exports = playlistSchema;
