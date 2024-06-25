const mongoose = require("mongoose");
const likeSchema = require("../schemas/like.schema");

const LikeModel = mongoose.model("LikeSongs", likeSchema);

module.exports = LikeModel;