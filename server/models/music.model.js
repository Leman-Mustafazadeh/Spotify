const mongoose = require("mongoose");
const musicSchema = require("../schemas/music.schema")

const MusicModel = mongoose.model("Music", musicSchema);

module.exports = MusicModel;