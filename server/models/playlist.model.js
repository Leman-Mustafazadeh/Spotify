const mongoose = require("mongoose");
const playlistSchema = require('../schemas/playlist.schema');

const PlaylistModel = mongoose.model("playlist", playlistSchema);

module.exports = PlaylistModel;