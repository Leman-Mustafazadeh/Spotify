const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    gender:String,
    password:String,
    likeSongs:[],
    playlist:[],
    isAdmin:Boolean
  },
  { timestamps: true }
);

module.exports = userSchema;