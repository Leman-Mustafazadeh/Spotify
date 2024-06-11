const mongoose = require("mongoose");
const songSchema = require("../schemas/song.schema");

const SongModel = mongoose.model("Songs", songSchema);

module.exports = SongModel;